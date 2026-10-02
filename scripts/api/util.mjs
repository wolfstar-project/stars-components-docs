const IDENTIFIER = /^[A-Za-z_$][\w$]*$/;

/** Serialize a value as a JS expression (single-quoted strings), for MDX attribute values. */
export function serialize(value) {
	if (value === null || typeof value === 'number' || typeof value === 'boolean') return String(value);
	if (typeof value === 'string') {
		const escaped = value
			.replaceAll('\\', '\\\\')
			.replaceAll("'", "\\'")
			.replaceAll('\n', '\\n')
			.replaceAll('\r', '\\r')
			.replaceAll(' ', '\\u2028')
			.replaceAll(' ', '\\u2029');
		return `'${escaped}'`;
	}
	if (Array.isArray(value)) return `[${value.map(serialize).join(', ')}]`;
	const entries = Object.entries(value).filter(([, entry]) => entry !== undefined);
	if (entries.length === 0) return '{}';
	return `{ ${entries.map(([key, entry]) => `${IDENTIFIER.test(key) ? key : serialize(key)}: ${serialize(entry)}`).join(', ')} }`;
}

/** Render a props object as JSX attributes, skipping empty values. */
export function attributes(props) {
	const parts = [];
	for (const [key, value] of Object.entries(props)) {
		if (value === undefined || value === null || value === false) continue;
		if (Array.isArray(value) && value.length === 0) continue;
		if (value === true) parts.push(key);
		else if (typeof value === 'string' && /^[^"'{}<>\n\\&]*$/.test(value)) parts.push(`${key}="${value}"`);
		else parts.push(`${key}={${serialize(value)}}`);
	}
	return parts.length ? ` ${parts.join(' ')}` : '';
}

/** github-slugger compatible heading slug. */
export function slug(text) {
	return text
		.toLowerCase()
		.replaceAll(/[^\p{L}\p{M}\p{N}\p{Pc}\- ]/gu, '')
		.replaceAll(' ', '-');
}

export function createSlugger(seed = []) {
	const seen = new Map();
	const next = (text) => {
		const base = slug(text);
		const count = seen.get(base) ?? 0;
		seen.set(base, count + 1);
		return count === 0 ? base : `${base}-${count}`;
	};
	for (const text of seed) next(text);
	return next;
}

/** Escape characters MDX would otherwise parse as JSX or expressions in prose. */
export function escapeProse(text) {
	return text.replaceAll('{', '\\{').replaceAll('}', '\\}').replaceAll('<', '\\<');
}

/** Escape a string for use as heading text. */
export function escapeHeading(text) {
	return text.replaceAll(/[\\`*_[\]<>{}|#]/g, (char) => `\\${char}`);
}

export function yamlString(text) {
	return `'${text.replaceAll("'", "''")}'`;
}

/** Remove the markdown the generator itself emits, leaving plain text. */
export function stripMarkdown(markdown) {
	return markdown
		.replaceAll(/```[\s\S]*?```/g, ' ')
		.replaceAll(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replaceAll(/[`*_]/g, '')
		.replaceAll(/\\([\\{}<>[\]|#])/g, '$1')
		.replaceAll(/\s+/g, ' ')
		.trim();
}

export function firstSentence(markdown, max = 160) {
	const text = stripMarkdown(markdown);
	if (!text) return '';
	const match = text.match(/^.*?[.!?](?=\s|$)/);
	const sentence = match ? match[0] : text;
	if (sentence.length <= max) return sentence;
	return `${sentence.slice(0, max - 1).trimEnd()}…`;
}
