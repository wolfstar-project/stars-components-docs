import { createSlugger } from './util.mjs';

export const KIND = {
	Module: 2,
	Namespace: 4,
	Enum: 8,
	EnumMember: 16,
	Variable: 32,
	Function: 64,
	Class: 128,
	Interface: 256,
	Constructor: 512,
	Property: 1024,
	Method: 2048,
	CallSignature: 4096,
	ConstructorSignature: 16384,
	Parameter: 32768,
	Accessor: 262144,
	TypeAlias: 2097152,
	Reference: 4194304
};

export const SYMBOL_KINDS = {
	[KIND.Namespace]: { dir: 'namespaces', ui: 'namespace', title: 'Namespace' },
	[KIND.Enum]: { dir: 'enumerations', ui: 'enum', title: 'Enumeration' },
	[KIND.Variable]: { dir: 'variables', ui: 'variable', title: 'Variable' },
	[KIND.Function]: { dir: 'functions', ui: 'function', title: 'Function' },
	[KIND.Class]: { dir: 'classes', ui: 'class', title: 'Class' },
	[KIND.Interface]: { dir: 'interfaces', ui: 'interface', title: 'Interface' },
	[KIND.TypeAlias]: { dir: 'type-aliases', ui: 'type-alias', title: 'Type Alias' }
};

const MEMBER_HOSTS = new Set([KIND.Class, KIND.Interface]);
const MEMBER_KINDS = new Set([KIND.Constructor, KIND.Property, KIND.Method, KIND.Accessor]);

const API_ROOT = '/documentation/api';

export const isExternal = (refl) => Boolean(refl.flags?.isExternal);

export function signaturesOf(refl) {
	if (refl.signatures) return refl.signatures;
	return [];
}

export function accessorSignatures(refl) {
	return [refl.getSignature, refl.setSignature].flat().filter(Boolean);
}

export function memberHeading(refl) {
	if (refl.kind === KIND.Constructor) return 'Constructor';
	if (refl.kind === KIND.Method) return `${refl.name}()`;
	if (refl.kind === KIND.Property && refl.flags?.isOptional) return `${refl.name}?`;
	return refl.name;
}

/** Walk any JSON node, calling `visit` for every reflection (objects that have a numeric id and a variant). */
function walkReflections(node, visit) {
	if (Array.isArray(node)) {
		for (const item of node) walkReflections(item, visit);
		return;
	}
	if (!node || typeof node !== 'object') return;
	if (typeof node.id === 'number' && node.variant) visit(node);
	for (const value of Object.values(node)) walkReflections(value, visit);
}

export function buildModel({ json, config, versions = {} }) {
	const model = {
		config,
		byId: new Map(),
		byQualified: new Map(),
		anchors: new Map(),
		symbolIdMap: json.symbolIdMap ?? {},
		packages: [],
		missing: []
	};

	for (const slug of config.packages) {
		const mod = json.children.find((child) => child.name === `@wolfstar/${slug}`);
		if (!mod) {
			model.missing.push(slug);
			continue;
		}
		const pkg = {
			name: mod.name,
			slug,
			mod,
			version: versions[slug],
			url: `${API_ROOT}/${slug}`,
			dir: slug,
			symbols: []
		};
		collectSymbols(model, pkg, mod, pkg.dir, pkg.url, []);
		model.packages.push(pkg);
	}

	for (const pkg of model.packages) {
		for (const symbol of pkg.symbols) {
			symbol.layout = layoutSymbol(model, symbol);
		}
	}

	return model;
}

function collectSymbols(model, pkg, parent, dir, url, nsPath) {
	for (const refl of parent.children ?? []) {
		const info = SYMBOL_KINDS[refl.kind];
		if (!info || isExternal(refl)) continue;
		const isNamespace = refl.kind === KIND.Namespace;
		const symbol = {
			refl,
			pkg,
			info,
			nsPath,
			qualified: [...nsPath, refl.name].join('.'),
			file: isNamespace ? `${dir}/namespaces/${refl.name}/index.mdx` : `${dir}/${info.dir}/${refl.name}.mdx`,
			url: isNamespace ? `${url}/namespaces/${refl.name}` : `${url}/${info.dir}/${refl.name}`,
			parent: parent === pkg.mod ? null : parent
		};
		pkg.symbols.push(symbol);
		model.byQualified.set(`${pkg.name}::${symbol.qualified}`, symbol);
		registerSymbol(model, symbol);
		if (isNamespace) collectSymbols(model, pkg, refl, `${dir}/namespaces/${refl.name}`, symbol.url, [...nsPath, refl.name]);
	}
}

function registerSymbol(model, symbol) {
	const { refl } = symbol;
	model.byId.set(refl.id, { refl, symbol, owner: null });
	const hostsMembers = MEMBER_HOSTS.has(refl.kind) || refl.kind === KIND.Enum;
	for (const [key, value] of Object.entries(refl)) {
		if (key === 'children' && (hostsMembers || refl.kind === KIND.Namespace)) continue;
		walkReflections(value, (node) => {
			if (!model.byId.has(node.id)) model.byId.set(node.id, { refl: node, symbol, owner: null });
		});
	}
	if (!hostsMembers) return;
	for (const member of refl.children ?? []) {
		model.byId.set(member.id, { refl: member, symbol, owner: member });
		walkReflections(member, (node) => {
			if (node !== member && !model.byId.has(node.id)) model.byId.set(node.id, { refl: node, symbol, owner: member });
		});
	}
}

/** Whether an inherited member comes from a package we do not document. */
function inheritsFromExternal(model, member) {
	const from = member.inheritedFrom;
	if (!from && !member.flags?.isInherited) return false;
	if (!from) return true;
	return !(typeof from.target === 'number' && model.byId.has(from.target));
}

export function keepMember(model, member) {
	if (isExternal(member)) return false;
	if (!model.config.includeExternalInherited && inheritsFromExternal(model, member)) return false;
	return true;
}

/** Heading layout of a symbol page, computed up front so cross references know their anchors. */
function layoutSymbol(model, symbol) {
	const { refl } = symbol;
	const slugger = createSlugger();
	const layout = { groups: [], enumMembers: [] };

	if (refl.kind === KIND.Enum) {
		const taken = createSlugger();
		for (const member of refl.children ?? []) {
			const anchor = `member-${taken(member.name)}`;
			model.anchors.set(member.id, anchor);
			layout.enumMembers.push({ refl: member, anchor });
		}
		return layout;
	}

	if (!MEMBER_HOSTS.has(refl.kind)) return layout;

	const byId = new Map((refl.children ?? []).map((child) => [child.id, child]));
	const grouped = new Set();
	const sources = (refl.groups ?? []).map((group) => ({
		title: group.title,
		children: (group.children ?? []).map((id) => byId.get(id)).filter(Boolean)
	}));
	for (const group of sources) for (const child of group.children) grouped.add(child.id);
	const rest = (refl.children ?? []).filter((child) => !grouped.has(child.id) && MEMBER_KINDS.has(child.kind));
	if (rest.length > 0) sources.push({ title: 'Other', children: rest });

	for (const group of sources) {
		const members = group.children.filter((child) => MEMBER_KINDS.has(child.kind) && keepMember(model, child));
		if (members.length === 0) continue;
		slugger(group.title);
		const entries = members.map((member) => {
			const heading = memberHeading(member);
			const anchor = slugger(heading);
			model.anchors.set(member.id, anchor);
			return { refl: member, heading, anchor };
		});
		layout.groups.push({ title: group.title, members: entries });
	}
	return layout;
}

export function urlOfId(model, id) {
	const entry = model.byId.get(id);
	if (!entry) return null;
	const anchor = entry.owner ? model.anchors.get(entry.owner.id) : undefined;
	if (entry.refl === entry.symbol.refl || !anchor) {
		if (entry.symbol.refl.kind === KIND.Enum && model.anchors.has(entry.refl.id))
			return `${entry.symbol.url}#${model.anchors.get(entry.refl.id)}`;
		return entry.symbol.url;
	}
	return `${entry.symbol.url}#${anchor}`;
}

export function urlOfQualified(model, packageName, qualifiedName) {
	const symbol = model.byQualified.get(`${packageName}::${qualifiedName}`);
	return symbol ? symbol.url : null;
}

const JS_GLOBALS = new Set(
	`Array ArrayBuffer AsyncGenerator AsyncGeneratorFunction AsyncIterator BigInt BigInt64Array BigUint64Array Boolean DataView Date Error EvalError Float32Array Float64Array Function Generator GeneratorFunction Int16Array Int32Array Int8Array Iterator Map Number Object Promise Proxy RangeError ReferenceError RegExp Set String Symbol SyntaxError TypeError URIError Uint16Array Uint32Array Uint8Array Uint8ClampedArray WeakMap WeakRef WeakSet`.split(
		' '
	)
);
const DOM_GLOBALS = new Set(
	`AbortController AbortSignal Blob Event EventTarget File FormData Headers Request Response URL URLSearchParams ReadableStream WritableStream TextDecoder TextEncoder`.split(
		' '
	)
);
const UTILITY_TYPES = new Set(
	`Awaited Partial Required Readonly Record Pick Omit Exclude Extract NonNullable Parameters ConstructorParameters ReturnType InstanceType ThisParameterType OmitThisParameter ThisType`.split(
		' '
	)
);

export function externalUrl(model, packageName, qualifiedName) {
	if (!qualifiedName) return null;
	const configured = model.config.externalLinks?.[`${packageName}::${qualifiedName}`];
	if (configured) return configured;
	if (packageName === 'typescript') {
		if (JS_GLOBALS.has(qualifiedName)) return `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/${qualifiedName}`;
		if (DOM_GLOBALS.has(qualifiedName)) return `https://developer.mozilla.org/en-US/docs/Web/API/${qualifiedName}`;
		if (qualifiedName === 'RequestInit') return 'https://developer.mozilla.org/en-US/docs/Web/API/RequestInit';
		if (qualifiedName === 'PromiseLike' || qualifiedName === 'PromiseSettledResult') {
			return 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise';
		}
		if (UTILITY_TYPES.has(qualifiedName))
			return `https://www.typescriptlang.org/docs/handbook/utility-types.html#${qualifiedName.toLowerCase()}type`;
		return null;
	}
	if (packageName === 'discord-api-types' && /^[A-Za-z0-9_]+$/.test(qualifiedName)) {
		return `https://discord-api-types.dev/api/discord-api-types-v10#${qualifiedName}`;
	}
	return null;
}
