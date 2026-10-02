import { commentOf, partsToMarkdown, readComment } from './comments.mjs';
import { KIND, accessorSignatures } from './model.mjs';
import { compact, signatureTokens, tokensToText, typeParametersTokens, typeTokens } from './types.mjs';
import { attributes, escapeHeading, firstSentence, stripMarkdown, yamlString } from './util.mjs';

const SNIPPET = '/snippets/api-reference.jsx';
const SNIPPET_COMPONENTS = new Set([
	'ApiHeader',
	'ApiPackageHeader',
	'ApiHierarchy',
	'ApiSignature',
	'ApiMember',
	'ApiParams',
	'ApiParam',
	'ApiEnumMembers',
	'ApiSymbolList'
]);

const el = (ctx, name, props = {}, children = '') => {
	ctx.used.add(name);
	const attrs = attributes(props);
	const body = children.trim();
	return body ? `<${name}${attrs}>\n\n${body}\n\n</${name}>` : `<${name}${attrs} />`;
};

const note = (ctx, tag, markdown) => `<${tag}>\n\n${markdown.trim()}\n\n</${tag}>`;

const joinBlocks = (blocks) => blocks.filter(Boolean).join('\n\n');

function sourceOf(...candidates) {
	for (const candidate of candidates) {
		const source = candidate?.sources?.[0];
		if (source?.url) return { url: source.url, label: `${source.fileName}:${source.line}` };
	}
	return undefined;
}

function badgesFor(refl, info, extra = []) {
	const flags = refl.flags ?? {};
	const badges = [];
	if (flags.isStatic) badges.push('static');
	if (flags.isAbstract) badges.push('abstract');
	if (flags.isProtected) badges.push('protected');
	if (flags.isReadonly) badges.push('readonly');
	if (flags.isOptional) badges.push('optional');
	badges.push(...extra);
	if (info.deprecated !== null) badges.push('deprecated');
	if (info.since) badges.push(`since ${info.since}`);
	return badges;
}

function deprecatedBlock(ctx, info) {
	if (info.deprecated === null) return '';
	return note(ctx, 'Warning', info.deprecated ? `**Deprecated.** ${info.deprecated}` : '**Deprecated.**');
}

function examplesBlock(info) {
	if (info.examples.length === 0) return '';
	return info.examples.map((example, index) => `**Example${info.examples.length > 1 ? ` ${index + 1}` : ''}**\n\n${example}`).join('\n\n');
}

function seeBlock(info) {
	if (info.see.length === 0) return '';
	return `**See also**\n\n${info.see.map((entry) => `- ${entry.replaceAll('\n', ' ')}`).join('\n')}`;
}

function defaultBlock(info) {
	if (!info.defaultValue) return '';
	return info.defaultValue.includes('\n') ? `**Default**\n\n${info.defaultValue}` : `**Default:** ${info.defaultValue}`;
}

function typeParametersBlock(ctx, typeParameters) {
	if (!typeParameters?.length) return '';
	const rows = typeParameters.map((parameter) => {
		const info = readComment(ctx.model, parameter.comment);
		return el(
			ctx,
			'ApiParam',
			{
				name: parameter.name,
				type: parameter.type ? compact(['extends ', ...typeTokens(ctx.model, parameter.type)]) : undefined,
				defaultValue: parameter.default ? tokensToText(typeTokens(ctx.model, parameter.default)) : undefined
			},
			info.summary
		);
	});
	return el(ctx, 'ApiParams', { title: 'Type Parameters' }, rows.join('\n\n'));
}

function parametersBlock(ctx, signature, info) {
	if (!signature.parameters?.length) return '';
	const rows = signature.parameters.map((parameter) => {
		const description = partsToMarkdown(ctx.model, parameter.comment?.summary) || info.params.get(parameter.name) || '';
		const hasDefault = parameter.defaultValue !== undefined;
		return el(
			ctx,
			'ApiParam',
			{
				name: parameter.name,
				type: compact(typeTokens(ctx.model, parameter.type)),
				optional: Boolean(parameter.flags?.isOptional) && !hasDefault,
				rest: Boolean(parameter.flags?.isRest),
				defaultValue: hasDefault ? String(parameter.defaultValue) : undefined
			},
			description
		);
	});
	return el(ctx, 'ApiParams', { title: 'Parameters' }, rows.join('\n\n'));
}

function returnsBlock(ctx, signature, info) {
	if (!signature.type) return '';
	const isVoid = signature.type.type === 'intrinsic' && signature.type.name === 'void';
	if (isVoid && !info.returns) return '';
	return el(ctx, 'ApiParams', { title: 'Returns' }, el(ctx, 'ApiParam', { type: compact(typeTokens(ctx.model, signature.type)) }, info.returns));
}

function throwsBlock(ctx, info) {
	if (info.throws.length === 0) return '';
	return el(ctx, 'ApiParams', { title: 'Throws' }, info.throws.map((entry) => el(ctx, 'ApiParam', {}, entry)).join('\n\n'));
}

function propertiesBlock(ctx, declaration, title = 'Properties') {
	const children = (declaration.children ?? []).filter((child) => !child.flags?.isExternal);
	if (children.length === 0) return '';
	const rows = children.map((child) => {
		const info = readComment(ctx.model, commentOf(child));
		const tokens = child.type
			? typeTokens(ctx.model, child.type)
			: child.signatures
				? signatureTokens(ctx.model, child.signatures[0], { style: 'arrow' })
				: ['unknown'];
		const description = joinBlocks([deprecatedBlock(ctx, info), info.summary, ...info.remarks, defaultBlock(info)]);
		return el(
			ctx,
			'ApiParam',
			{
				name: child.name,
				type: compact(tokens),
				optional: Boolean(child.flags?.isOptional)
			},
			description
		);
	});
	return el(ctx, 'ApiParams', { title }, rows.join('\n\n'));
}

/** Blocks shared by every page that documents one callable signature. */
function signatureDetails(ctx, signature, { returns = true } = {}) {
	const info = readComment(ctx.model, signature.comment);
	return joinBlocks([
		deprecatedBlock(ctx, info),
		info.summary,
		...info.remarks,
		...info.notes.map((entry) => note(ctx, 'Note', entry)),
		typeParametersBlock(ctx, signature.typeParameters),
		parametersBlock(ctx, signature, info),
		returns ? returnsBlock(ctx, signature, info) : '',
		throwsBlock(ctx, info),
		...info.raw.map((entry) => `**Raw:** ${entry}`),
		examplesBlock(info),
		seeBlock(info)
	]);
}

function overloads(ctx, signatures, buildTokens, options) {
	if (signatures.length === 1) {
		const signature = signatures[0];
		return joinBlocks([el(ctx, 'ApiSignature', { tokens: compact(buildTokens(signature)) }), signatureDetails(ctx, signature, options)]);
	}
	const tabs = signatures.map((signature, index) =>
		[
			`<Tab title="Overload ${index + 1}">`,
			joinBlocks([el(ctx, 'ApiSignature', { tokens: compact(buildTokens(signature)) }), signatureDetails(ctx, signature, options)]),
			'</Tab>'
		].join('\n\n')
	);
	return `<Tabs>\n\n${tabs.join('\n\n')}\n\n</Tabs>`;
}

function modifierPrefix(refl) {
	const flags = refl.flags ?? {};
	return [flags.isStatic ? 'static ' : '', flags.isAbstract ? 'abstract ' : '', flags.isProtected ? 'protected ' : ''].join('');
}

function renderMember(ctx, entry, symbol) {
	const { model } = ctx;
	const member = entry.refl;
	const heading = `### ${escapeHeading(entry.heading)}`;
	const common = {
		source: sourceOf(member, member.signatures?.[0], member.getSignature, member.setSignature),
		inheritedFrom: member.inheritedFrom ? compact(typeTokens(model, member.inheritedFrom)) : undefined
	};

	if (member.kind === KIND.Constructor || member.kind === KIND.Method) {
		const signatures = member.signatures ?? [];
		const info = readComment(model, signatures[0]?.comment);
		const isConstructor = member.kind === KIND.Constructor;
		const build = (signature) =>
			signatureTokens(model, signature, {
				style: isConstructor ? 'constructor' : 'declaration',
				name: isConstructor ? symbol.refl.name : member.name,
				prefix: modifierPrefix(member)
			});
		const body = overloads(ctx, signatures, build, { returns: !isConstructor });
		return `${heading}\n\n${el(ctx, 'ApiMember', { kind: isConstructor ? 'constructor' : 'method', badges: badgesFor(member, info), ...common }, body)}`;
	}

	if (member.kind === KIND.Accessor) {
		const signatures = accessorSignatures(member);
		const info = readComment(model, signatures[0]?.comment ?? member.comment);
		const prefix = modifierPrefix(member);
		const tokens = [];
		for (const signature of signatures) {
			const isGetter = signature === member.getSignature;
			if (tokens.length > 0) tokens.push('\n');
			tokens.push(prefix, isGetter ? 'get ' : 'set ', ...signatureTokens(model, signature, { name: member.name }));
		}
		const body = joinBlocks([
			deprecatedBlock(ctx, info),
			info.summary,
			...info.remarks,
			...info.notes.map((text) => note(ctx, 'Note', text)),
			defaultBlock(info),
			examplesBlock(info),
			seeBlock(info)
		]);
		return `${heading}\n\n${el(ctx, 'ApiMember', { kind: 'accessor', badges: badgesFor(member, info), signature: compact(tokens), ...common }, body)}`;
	}

	const info = readComment(model, member.comment);
	const tokens = [
		modifierPrefix(member),
		member.flags?.isReadonly ? 'readonly ' : '',
		member.name,
		member.flags?.isOptional ? '?' : '',
		': ',
		...typeTokens(model, member.type)
	];
	const body = joinBlocks([
		deprecatedBlock(ctx, info),
		info.summary,
		...info.remarks,
		...info.notes.map((text) => note(ctx, 'Note', text)),
		defaultBlock(info),
		examplesBlock(info),
		seeBlock(info)
	]);
	return `${heading}\n\n${el(ctx, 'ApiMember', { kind: 'property', badges: badgesFor(member, info), signature: compact(tokens), ...common }, body)}`;
}

function declarationTokens(ctx, symbol) {
	const { model } = ctx;
	const { refl } = symbol;
	const typeParameters = typeParametersTokens(model, refl.typeParameters);
	const list = (types) => {
		const out = [];
		types.forEach((type, index) => out.push(...(index > 0 ? [', '] : []), ...typeTokens(model, type)));
		return out;
	};
	const tokens = [refl.flags?.isAbstract ? 'abstract ' : '', refl.kind === KIND.Class ? 'class ' : 'interface ', refl.name, ...typeParameters];
	if (refl.extendedTypes?.length) tokens.push(' extends ', ...list(refl.extendedTypes));
	if (refl.implementedTypes?.length) tokens.push(' implements ', ...list(refl.implementedTypes));
	return compact(tokens);
}

function hierarchyBlock(ctx, refl) {
	const toList = (types) => (types ?? []).map((type) => compact(typeTokens(ctx.model, type)));
	const props = {
		extends: toList(refl.extendedTypes),
		implements: toList(refl.implementedTypes),
		extendedBy: toList(refl.extendedBy),
		implementedBy: toList(refl.implementedBy)
	};
	if (Object.values(props).every((list) => list.length === 0)) return '';
	return el(ctx, 'ApiHierarchy', props);
}

function reflectionDetails(ctx, type) {
	if (type?.type !== 'reflection') return '';
	const declaration = type.declaration;
	if (declaration.signatures?.length) {
		const signature = declaration.signatures[0];
		const info = readComment(ctx.model, signature.comment);
		return joinBlocks([parametersBlock(ctx, signature, info), returnsBlock(ctx, signature, info)]);
	}
	return propertiesBlock(ctx, declaration);
}

function enumBlock(ctx, symbol) {
	const members = symbol.layout.enumMembers.map(({ refl: member, anchor }) => {
		const info = readComment(ctx.model, member.comment);
		return {
			name: member.name,
			value: member.type ? tokensToText(typeTokens(ctx.model, member.type)) : '',
			id: anchor,
			deprecated: info.deprecated !== null || undefined,
			description: stripMarkdown([info.summary, ...info.remarks].filter(Boolean).join(' '))
		};
	});
	return el(ctx, 'ApiEnumMembers', { members });
}

function symbolListBlock(ctx, symbols) {
	const rows = symbols.map((child) => {
		const info = readComment(ctx.model, commentOf(child.refl));
		return {
			name: child.refl.name,
			kind: child.info.ui,
			href: child.url,
			summary: firstSentence(info.summary, 140) || undefined,
			deprecated: info.deprecated !== null || undefined
		};
	});
	return el(ctx, 'ApiSymbolList', { symbols: rows });
}

function finalize(ctx, frontmatter, body) {
	const names = [...ctx.used].filter((name) => SNIPPET_COMPONENTS.has(name)).sort();
	const imports = names.length ? `import { ${names.join(', ')} } from '${SNIPPET}';\n` : '';
	const extraImports = ctx.extraImports.join('\n');
	const head = [
		'---',
		...Object.entries(frontmatter).map(([key, value]) => `${key}: ${typeof value === 'string' ? yamlString(value) : String(value)}`),
		'---'
	].join('\n');
	return `${head}\n\n${[imports.trim(), extraImports].filter(Boolean).join('\n')}\n\n${body.trim()}\n`;
}

const createContext = (model, symbol) => ({ model, symbol, used: new Set(), extraImports: [] });

function descriptionFor(symbol, info) {
	const summary = firstSentence(info.summary, 150);
	if (summary) return `${summary} (${symbol.pkg.name})`.slice(0, 200);
	return `API reference for ${symbol.refl.name}, ${/^[aeiou]/i.test(symbol.info.ui) ? 'an' : 'a'} ${symbol.info.title.toLowerCase()} exported by ${symbol.pkg.name}.`;
}

export function renderSymbolPage(model, symbol, notes = {}) {
	const ctx = createContext(model, symbol);
	const { refl } = symbol;
	const isFunction = refl.kind === KIND.Function;
	const comment = isFunction ? refl.signatures?.[0]?.comment : refl.comment;
	const info = readComment(model, comment);
	const header = {
		kind: symbol.info.ui,
		badges: badgesFor(refl, info),
		source: sourceOf(refl, refl.signatures?.[0]),
		packageName: symbol.pkg.name,
		packageHref: symbol.pkg.url
	};
	const handNote = notes[symbol.file.replace(/\.mdx$/, '')];
	const intro = joinBlocks([
		el(ctx, 'ApiHeader', header),
		isFunction ? '' : deprecatedBlock(ctx, info),
		isFunction ? '' : info.summary,
		handNote ? note(ctx, 'Note', handNote) : ''
	]);
	const afterIntro = (blocks) =>
		joinBlocks([...blocks, ...info.remarks, ...info.notes.map((text) => note(ctx, 'Note', text)), examplesBlock(info), seeBlock(info)]);

	const blocks = [intro];
	switch (refl.kind) {
		case KIND.Class:
		case KIND.Interface: {
			blocks.push(el(ctx, 'ApiSignature', { tokens: declarationTokens(ctx, symbol) }));
			blocks.push(hierarchyBlock(ctx, refl));
			blocks.push(afterIntro([typeParametersBlock(ctx, refl.typeParameters)]));
			for (const group of symbol.layout.groups) {
				blocks.push(`## ${escapeHeading(group.title)}`);
				for (const entry of group.members) blocks.push(renderMember(ctx, entry, symbol));
			}
			break;
		}
		case KIND.Enum:
			blocks.push(afterIntro([enumBlock(ctx, symbol)]));
			break;
		case KIND.Function: {
			blocks.push(
				joinBlocks([deprecatedBlock(ctx, info), info.summary]),
				overloads(ctx, refl.signatures ?? [], (signature) => signatureTokens(model, signature, { name: refl.name }), {})
			);
			break;
		}
		case KIND.Variable: {
			const tokens = ['const ', refl.name, ': ', ...typeTokens(model, refl.type)];
			blocks.push(el(ctx, 'ApiSignature', { tokens: compact(tokens) }));
			blocks.push(afterIntro([defaultBlock(info), reflectionDetails(ctx, refl.type)]));
			break;
		}
		case KIND.TypeAlias: {
			const tokens = ['type ', refl.name, ...typeParametersTokens(model, refl.typeParameters), ' = ', ...typeTokens(model, refl.type)];
			blocks.push(el(ctx, 'ApiSignature', { tokens: compact(tokens) }));
			blocks.push(afterIntro([typeParametersBlock(ctx, refl.typeParameters), reflectionDetails(ctx, refl.type)]));
			break;
		}
		case KIND.Namespace: {
			const children = symbol.pkg.symbols.filter((candidate) => candidate.parent === refl);
			blocks.push(afterIntro([symbolListBlock(ctx, children)]));
			break;
		}
		default:
	}

	const title = `${symbol.info.title}: ${refl.name}${isFunction ? '()' : ''}`;
	const frontmatter = {
		title: info.deprecated !== null ? `~~${title}~~` : title,
		description: descriptionFor(symbol, info),
		hidden: true
	};
	return finalize(ctx, frontmatter, joinBlocks(blocks));
}

export function renderPackageIndex(model, pkg, { description, guideHref, sourceHref }) {
	const ctx = createContext(model, null);
	ctx.extraImports.push(`import { InstallPackage } from '/snippets/install-package.jsx';`);
	const top = pkg.symbols.filter((symbol) => symbol.parent === null);
	const body = joinBlocks([
		el(ctx, 'ApiPackageHeader', { name: pkg.name, version: pkg.version, guideHref, sourceHref }),
		`<InstallPackage packages="${pkg.name}" />`,
		symbolListBlock(ctx, top)
	]);
	return finalize(ctx, { title: pkg.name, description }, body);
}
