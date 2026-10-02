import { externalUrl, urlOfId, urlOfQualified } from './model.mjs';

/**
 * Types become token arrays: a string is literal text, a `[text, href]` pair is a link.
 * The snippet components (snippets/api-reference.jsx) render the same shape.
 */

const INDENT = '  ';
const WRAP_AT = 90;

export function compact(tokens) {
	const out = [];
	for (const token of tokens) {
		if (token === '' || (Array.isArray(token) && token[0] === '')) continue;
		if (typeof token === 'string' && typeof out.at(-1) === 'string') out[out.length - 1] += token;
		else out.push(token);
	}
	return out;
}

export const tokensToText = (tokens) => tokens.map((token) => (typeof token === 'string' ? token : token[0])).join('');

function join(items, separator) {
	const out = [];
	items.forEach((item, index) => {
		if (index > 0) out.push(separator);
		out.push(...item);
	});
	return out;
}

const isFunctionType = (type) => type.type === 'reflection' && type.declaration.signatures && !type.declaration.children?.length;

function wrapped(model, type, depth, needsParens) {
	const tokens = typeTokens(model, type, depth);
	return needsParens(type) ? ['(', ...tokens, ')'] : tokens;
}

const lowPrecedence = (type) => ['union', 'intersection', 'conditional', 'inferred'].includes(type.type) || isFunctionType(type);

function referenceTokens(model, type) {
	const label = type.name;
	let href = null;
	if (!type.refersToTypeParameter) {
		if (typeof type.target === 'number') {
			href = urlOfId(model, type.target);
			if (!href) {
				const symbol = model.symbolIdMap[type.target];
				if (symbol) {
					href =
						urlOfQualified(model, symbol.packageName, symbol.qualifiedName) ??
						externalUrl(model, symbol.packageName, symbol.qualifiedName);
				}
			}
		} else if (type.target && typeof type.target === 'object') {
			href =
				urlOfQualified(model, type.target.packageName, type.target.qualifiedName) ??
				externalUrl(model, type.target.packageName, type.target.qualifiedName);
		} else {
			href = externalUrl(model, type.package, type.name);
		}
	}
	const tokens = href ? [[label, href]] : [label];
	if (type.typeArguments?.length) {
		tokens.push(
			'<',
			...join(
				type.typeArguments.map((argument) => typeTokens(model, argument, 0)),
				', '
			),
			'>'
		);
	}
	return tokens;
}

function literalText(value) {
	if (value === null) return 'null';
	if (typeof value === 'string') return JSON.stringify(value);
	if (typeof value === 'object') return `${value.negative ? '-' : ''}${value.value}n`;
	return String(value);
}

function propertyTokens(model, child, depth) {
	const prefix = [child.flags?.isReadonly ? 'readonly ' : '', child.name, child.flags?.isOptional ? '?' : ''].join('');
	if (child.getSignature || child.setSignature) {
		const getter = child.getSignature;
		const type = getter ? getter.type : child.setSignature.parameters?.[0]?.type;
		return [prefix, ': ', ...(type ? typeTokens(model, type, depth) : ['unknown'])];
	}
	if (child.signatures && !child.type) {
		return [child.name, child.flags?.isOptional ? '?' : '', ...signatureTokens(model, child.signatures[0], { depth, style: 'method' })];
	}
	return [prefix, ': ', ...(child.type ? typeTokens(model, child.type, depth) : ['unknown'])];
}

function objectTokens(model, declaration, depth) {
	const members = [];
	for (const child of declaration.children ?? []) members.push(propertyTokens(model, child, depth + 1));
	for (const index of declaration.indexSignatures ?? (declaration.indexSignature ? [declaration.indexSignature] : [])) {
		const parameter = index.parameters?.[0];
		members.push([
			`[${parameter?.name ?? 'key'}: `,
			...(parameter?.type ? typeTokens(model, parameter.type, depth + 1) : ['string']),
			']: ',
			...(index.type ? typeTokens(model, index.type, depth + 1) : ['unknown'])
		]);
	}
	if (members.length === 0) return ['{}'];
	const inline = ['{ ', ...join(members, '; '), ' }'];
	if (members.length === 1 && tokensToText(inline).length <= WRAP_AT && !tokensToText(inline).includes('\n')) return inline;
	const pad = INDENT.repeat(depth + 1);
	const out = ['{\n'];
	for (const member of members) out.push(pad, ...member, ';\n');
	out.push(INDENT.repeat(depth), '}');
	return out;
}

function reflectionTokens(model, type, depth) {
	const declaration = type.declaration;
	if (isFunctionType(type)) {
		if (declaration.signatures.length === 1) return signatureTokens(model, declaration.signatures[0], { depth, style: 'arrow' });
		return [
			'{ ',
			...join(
				declaration.signatures.map((signature) => signatureTokens(model, signature, { depth, style: 'call' })),
				'; '
			),
			' }'
		];
	}
	return objectTokens(model, declaration, depth);
}

export function typeTokens(model, type, depth = 0) {
	if (!type) return ['unknown'];
	switch (type.type) {
		case 'intrinsic':
		case 'unknown':
			return [type.name];
		case 'literal':
			return [literalText(type.value)];
		case 'reference':
			return referenceTokens(model, type);
		case 'array':
			return [...wrapped(model, type.elementType, depth, (inner) => lowPrecedence(inner) || inner.type === 'typeOperator'), '[]'];
		case 'union':
			return join(
				type.types.map((inner) => wrapped(model, inner, depth, (candidate) => candidate.type === 'conditional' || isFunctionType(candidate))),
				' | '
			);
		case 'intersection':
			return join(
				type.types.map((inner) =>
					wrapped(model, inner, depth, (candidate) => ['union', 'conditional'].includes(candidate.type) || isFunctionType(candidate))
				),
				' & '
			);
		case 'reflection':
			return reflectionTokens(model, type, depth);
		case 'typeOperator':
			return [`${type.operator} `, ...wrapped(model, type.target, depth, lowPrecedence)];
		case 'indexedAccess':
			return [...wrapped(model, type.objectType, depth, lowPrecedence), '[', ...typeTokens(model, type.indexType, depth), ']'];
		case 'conditional':
			return [
				...wrapped(model, type.checkType, depth, (inner) => inner.type === 'conditional' || isFunctionType(inner)),
				' extends ',
				...wrapped(model, type.extendsType, depth, (inner) => inner.type === 'conditional' || isFunctionType(inner)),
				' ? ',
				...typeTokens(model, type.trueType, depth),
				' : ',
				...typeTokens(model, type.falseType, depth)
			];
		case 'mapped': {
			const readonly = type.readonlyModifier
				? `${type.readonlyModifier === '-' ? '-' : type.readonlyModifier === '+' ? '+' : ''}readonly `
				: '';
			const optional = type.optionalModifier ? `${type.optionalModifier === '-' ? '-' : type.optionalModifier === '+' ? '+' : ''}?` : '';
			return [
				`{ ${readonly}[${type.parameter} in `,
				...typeTokens(model, type.parameterType, depth),
				...(type.nameType ? [' as ', ...typeTokens(model, type.nameType, depth)] : []),
				']',
				optional,
				': ',
				...typeTokens(model, type.templateType, depth),
				' }'
			];
		}
		case 'tuple':
			return [
				'[',
				...join(
					(type.elements ?? []).map((element) => typeTokens(model, element, depth)),
					', '
				),
				']'
			];
		case 'namedTupleMember':
			return [`${type.name}${type.isOptional ? '?' : ''}: `, ...typeTokens(model, type.element, depth)];
		case 'rest':
			return ['...', ...typeTokens(model, type.elementType, depth)];
		case 'optional':
			return [...typeTokens(model, type.elementType, depth), '?'];
		case 'templateLiteral': {
			const out = ['`', type.head];
			for (const [inner, text] of type.tail) out.push('${', ...typeTokens(model, inner, depth), '}', text);
			out.push('`');
			return out;
		}
		case 'query':
			return ['typeof ', ...typeTokens(model, type.queryType, depth)];
		case 'predicate':
			return [type.asserts ? 'asserts ' : '', type.name, ...(type.targetType ? [' is ', ...typeTokens(model, type.targetType, depth)] : [])];
		case 'inferred':
			return [`infer ${type.name}`];
		default:
			return [type.name ?? 'unknown'];
	}
}

export function typeParametersTokens(model, typeParameters, depth = 0) {
	if (!typeParameters?.length) return [];
	const items = typeParameters.map((parameter) => [
		parameter.flags?.isConst ? 'const ' : '',
		parameter.name,
		...(parameter.type ? [' extends ', ...typeTokens(model, parameter.type, depth)] : []),
		...(parameter.default ? [' = ', ...typeTokens(model, parameter.default, depth)] : [])
	]);
	return ['<', ...join(items, ', '), '>'];
}

function parameterTokens(model, parameter, depth) {
	const hasDefault = parameter.defaultValue !== undefined;
	return [
		parameter.flags?.isRest ? '...' : '',
		parameter.name,
		parameter.flags?.isOptional && !hasDefault ? '?' : '',
		': ',
		...typeTokens(model, parameter.type, depth),
		hasDefault ? ` = ${parameter.defaultValue}` : ''
	];
}

/**
 * Signature tokens. `style`: `declaration` (`name(params): R`), `arrow` (`(params) => R`), `call` (`(params): R`),
 * `method` (`(params): R` after a property name), `constructor` (`new Name(params): R`).
 */
export function signatureTokens(model, signature, { depth = 0, style = 'declaration', name, prefix = '' } = {}) {
	const parameters = (signature.parameters ?? []).map((parameter) => parameterTokens(model, parameter, depth + 1));
	const typeParameters = typeParametersTokens(model, signature.typeParameters, depth);
	const returnType = signature.type ? typeTokens(model, signature.type, depth) : ['void'];
	const lead = style === 'constructor' ? ['new ', name ?? signature.name] : style === 'declaration' ? [name ?? signature.name] : [];
	const separator = style === 'arrow' ? ' => ' : ': ';

	const single = [prefix, ...lead, ...typeParameters, '(', ...join(parameters, ', '), ')'];
	const inlineText = tokensToText([...single, separator, ...returnType]);
	if (parameters.length > 1 && (inlineText.length > WRAP_AT || inlineText.includes('\n'))) {
		const pad = INDENT.repeat(depth + 1);
		const out = [prefix, ...lead, ...typeParameters, '(\n'];
		parameters.forEach((parameter, index) => out.push(pad, ...parameter, index < parameters.length - 1 ? ',\n' : '\n'));
		out.push(INDENT.repeat(depth), ')', separator, ...returnType);
		return out;
	}
	return [...single, separator, ...returnType];
}
