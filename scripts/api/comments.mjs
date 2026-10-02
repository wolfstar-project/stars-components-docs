import { externalUrl, urlOfId, urlOfQualified } from './model.mjs';
import { escapeProse } from './util.mjs';

function linkTarget(model, target) {
	if (typeof target === 'number') return urlOfId(model, target);
	if (typeof target === 'string') return target;
	if (target && typeof target === 'object') {
		return urlOfQualified(model, target.packageName, target.qualifiedName) ?? externalUrl(model, target.packageName, target.qualifiedName);
	}
	return null;
}

/** Convert TypeDoc comment parts to MDX-safe markdown. */
export function partsToMarkdown(model, parts = []) {
	let out = '';
	for (const part of parts) {
		if (part.kind === 'text') out += escapeProse(part.text);
		else if (part.kind === 'code') out += part.text;
		else if (part.kind === 'inline-tag') {
			const href = linkTarget(model, part.target);
			const label = part.text.trim();
			if (part.tag === '@linkcode') out += href ? `[\`${label}\`](${href})` : `\`${label}\``;
			else if (part.tag === '@linkplain') out += href ? `[${escapeProse(label)}](${href})` : escapeProse(label);
			else out += href ? `[${escapeProse(label)}](${href})` : `\`${label}\``;
		}
	}
	return out.trim();
}

const withCodeFence = (markdown) => (markdown.includes('```') ? markdown : `\`\`\`ts\n${markdown}\n\`\`\``);

/** Normalize a TypeDoc comment into the pieces the page renderer needs. */
export function readComment(model, comment) {
	const info = {
		summary: '',
		remarks: [],
		notes: [],
		examples: [],
		see: [],
		throws: [],
		raw: [],
		returns: '',
		defaultValue: '',
		since: '',
		deprecated: null,
		params: new Map()
	};
	if (!comment) return info;
	info.summary = partsToMarkdown(model, comment.summary);
	for (const tag of comment.blockTags ?? []) {
		const markdown = partsToMarkdown(model, tag.content);
		switch (tag.tag) {
			case '@remarks':
			case '@remark':
				if (markdown) info.remarks.push(markdown);
				break;
			case '@summary':
				if (!info.summary) info.summary = markdown;
				else if (markdown) info.remarks.push(markdown);
				break;
			case '@note':
				if (markdown) info.notes.push(markdown);
				break;
			case '@example':
				if (markdown) info.examples.push(withCodeFence(markdown));
				break;
			case '@see':
			case '@seealso':
				if (markdown) info.see.push(markdown);
				break;
			case '@throws':
				if (markdown) info.throws.push(markdown);
				break;
			case '@raw':
				if (markdown) info.raw.push(markdown);
				break;
			case '@returns':
				info.returns = markdown;
				break;
			case '@default':
			case '@defaultValue':
				info.defaultValue = markdown;
				break;
			case '@since':
				info.since = markdown.replaceAll(/\s+/g, ' ');
				break;
			case '@deprecated':
				info.deprecated = markdown;
				break;
			case '@param':
				if (tag.name) info.params.set(tag.name, markdown);
				break;
			default:
		}
	}
	return info;
}

/** First non-empty comment of a reflection: its own, then its first signature's. */
export function commentOf(refl) {
	if (refl.comment) return refl.comment;
	const signature = refl.signatures?.[0] ?? refl.getSignature ?? refl.setSignature;
	return signature?.comment;
}
