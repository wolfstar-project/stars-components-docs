#!/usr/bin/env node
// Turns the raw `typedoc-plugin-markdown` output in content/api/ into something Fumadocs can
// serve directly. `typedoc-vitepress-theme` used to do the VitePress-flavoured half of this
// (frontmatter, sidebar JSON); Fumadocs wants different shapes, so we do it here instead:
//
//   0. Relocate submodule pages that typedoc-plugin-markdown's router mis-places outside their
//      package folder (see `relocateOrphanModules`).
//   1. Add YAML frontmatter (`title`, optional `description`) derived from the page's `# ...`
//      heading, then drop that heading from the body — Fumadocs' `DocsPage` already renders the
//      title from frontmatter, so leaving it in would duplicate it.
//   2. Rewrite relative `*.md` links to extensionless, absolute site URLs (`/api/...`). Relative
//      hrefs cannot be used as-is: a folder's `index.md` is served at `/api/<folder>` (no trailing
//      slash), so the browser would resolve `interfaces/Env` against `/api/` instead of
//      `/api/<folder>/`. Absolute URLs sidestep the whole problem.
//   3. Strip the leading breadcrumb line if one slipped through (`hideBreadcrumbs` should already
//      have suppressed it).
//   4. Emit a `meta.json` per directory so Fumadocs renders a readable, ordered, collapsed tree.
//   5. Replace any unresolved `theme_*` i18n keys with their English labels.
//
// The script is idempotent: re-running it on already-processed output is a no-op.
import { existsSync } from 'node:fs';
import { readdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { basename, dirname, join, posix, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const contentDir = join(root, 'content');
const apiDir = join(contentDir, 'api');

// Fumadocs `loader({ baseUrl: '/' })` over the `content/` directory, so `content/api/a/b.md`
// is served at `/api/a/b` and `content/api/a/index.md` at `/api/a`.
const baseUrl = '/';

// The two merged typedoc projects, in the order they should appear, with display titles. The
// directory names come from the `name` we force onto each `main.json` in fetch-docs-data.mjs.
const sectionTitles = {
	'stars-components': 'Stars Components',
	plugins: 'Plugins'
};

// Reflection-kind directories emitted by typedoc-plugin-markdown, in the order we want them.
const kindTitles = {
	classes: 'Classes',
	interfaces: 'Interfaces',
	functions: 'Functions',
	'type-aliases': 'Type Aliases',
	variables: 'Variables',
	enumerations: 'Enumerations',
	namespaces: 'Namespaces'
};
const kindOrder = Object.keys(kindTitles);

// English labels for the i18n keys typedoc / typedoc-plugin-markdown occasionally fail to resolve
// when rendering a merged, pre-serialised project (observed: a literal `## theme_extends`).
const themeLabels = {
	theme_default_type: 'Default type',
	theme_default_value: 'Default value',
	theme_defined_in: 'Defined in',
	theme_description: 'Description',
	theme_event: 'Event',
	theme_extended_by: 'Extended by',
	theme_extends: 'Extends',
	theme_globals: 'Globals',
	theme_hierarchy: 'Hierarchy',
	theme_hierarchy_summary: 'Hierarchy Summary',
	theme_implementation_of: 'Implementation of',
	theme_implemented_by: 'Implemented by',
	theme_implements: 'Implements',
	theme_index: 'Index',
	theme_indexable: 'Indexable',
	theme_inherited_from: 'Inherited from',
	theme_member: 'Member',
	theme_member_plural: 'Members',
	theme_modifier: 'Modifier',
	theme_name: 'Name',
	theme_overrides: 'Overrides',
	theme_package: 'Package',
	theme_packages: 'Packages',
	theme_re_exports: 'Re-exports',
	theme_renames_and_re_exports: 'Renames and re-exports',
	theme_returns: 'Returns',
	theme_type: 'Type',
	theme_type_declaration: 'Type Declaration',
	theme_union_members: 'Union Members',
	theme_value: 'Value',
	theme_version: 'Version'
};
const themeKeyPattern = new RegExp(`\\b(${Object.keys(themeLabels).join('|')})\\b`, 'g');

const frontmatterPattern = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const linkPattern = /(\]\()([^()\s]+)(\))/g;
const externalPattern = /^(?:[a-z][a-z0-9+.-]*:|\/\/|\/|#)/i;

/** Recursively list every `.md` file under `dir`, absolute paths. */
async function collectMdFiles(dir, out = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) await collectMdFiles(full, out);
		else if (entry.isFile() && entry.name.endsWith('.md')) out.push(full);
	}
	return out;
}

/**
 * `typedoc-plugin-markdown`'s module router mis-places nested submodules for packages that have
 * subpath exports (observed: the plugins' `<pkg>/index` and `<pkg>/register` entry points, which
 * come from separate `src/index.ts` / `src/register.ts` typedoc entry points upstream). Instead of
 * nesting them under their parent package folder, they land one level too high, as a sibling of
 * the section directories: `content/api/@scope/<pkg>/index/` instead of
 * `content/api/<section>/@scope/<pkg>/index/`.
 *
 * Every markdown file typedoc wrote already has its cross-references baked in as relative paths
 * computed from the (wrong) original layout, so moving files alone would silently break every link
 * pointing at — or out of — a relocated subtree. Fix this in two passes: first build an old-path ->
 * new-path map for every file that needs to move, rewrite every `.md` link across the whole tree
 * that resolves into that map, then perform the actual moves.
 */
async function relocateOrphanModules() {
	const topLevel = await readdir(apiDir, { withFileTypes: true }).catch(() => []);
	const renameMap = new Map();

	async function mapDir(oldDir, newDir) {
		for (const entry of await readdir(oldDir, { withFileTypes: true })) {
			const oldPath = join(oldDir, entry.name);
			const newPath = join(newDir, entry.name);
			if (entry.isDirectory()) await mapDir(oldPath, newPath);
			else renameMap.set(oldPath, newPath);
		}
	}

	for (const scopeEntry of topLevel) {
		if (!scopeEntry.isDirectory() || !scopeEntry.name.startsWith('@')) continue;
		const orphanScopeDir = join(apiDir, scopeEntry.name);
		for (const pkgEntry of await readdir(orphanScopeDir, { withFileTypes: true })) {
			if (!pkgEntry.isDirectory()) continue;
			const orphanPkgDir = join(orphanScopeDir, pkgEntry.name);
			const section = topLevel.find(
				(entry) => entry.isDirectory() && entry.name in sectionTitles && existsSync(join(apiDir, entry.name, scopeEntry.name, pkgEntry.name))
			);
			if (!section) {
				console.warn(`postprocess-api: no home found for orphaned module content/api/${scopeEntry.name}/${pkgEntry.name}, leaving as-is.`);
				continue;
			}
			await mapDir(orphanPkgDir, join(apiDir, section.name, scopeEntry.name, pkgEntry.name));
		}
	}
	if (renameMap.size === 0) return;

	// Pass 1: rewrite every affected link, in every file, using the *current* (pre-move) tree layout
	// to resolve targets and the *future* (post-move) layout to compute each file's own new directory.
	for (const file of await collectMdFiles(apiDir)) {
		const original = await readFile(file, 'utf8');
		const ownNewDir = dirname(renameMap.get(file) ?? file);
		let changed = false;
		const updated = original.replace(linkPattern, (match, open, target, close) => {
			if (externalPattern.test(target)) return match;
			const [pathPart, hash] = splitHash(target);
			if (!pathPart || !/\.md$/i.test(pathPart)) return match;
			const absoluteTarget = resolve(dirname(file), decodeURI(pathPart));
			const newAbsoluteTarget = renameMap.get(absoluteTarget);
			if (!newAbsoluteTarget) return match;
			const rel = relative(ownNewDir, newAbsoluteTarget).split(sep).join('/');
			changed = true;
			return `${open}${encodeURI(rel.startsWith('.') ? rel : `./${rel}`)}${hash}${close}`;
		});
		if (changed) await writeFile(file, updated);
	}

	// Pass 2: move the files themselves.
	for (const [oldPath, newPath] of renameMap) {
		await mkdir(dirname(newPath), { recursive: true });
		await rename(oldPath, newPath);
	}
	for (const scopeEntry of topLevel) {
		if (scopeEntry.isDirectory() && scopeEntry.name.startsWith('@')) await rm(join(apiDir, scopeEntry.name), { recursive: true, force: true });
	}
}

/** Recursively collect every directory under `dir`, `dir` itself first. */
async function collectTree(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = [];
	const dirs = [];
	for (const entry of entries) {
		if (entry.name.startsWith('.')) continue;
		if (entry.isDirectory()) dirs.push(entry.name);
		else if (entry.isFile() && entry.name.endsWith('.md')) files.push(entry.name);
	}
	const node = { dir, files: files.sort(), dirs: dirs.sort(), children: [] };
	for (const child of node.dirs) node.children.push(await collectTree(join(dir, child)));
	return node;
}

/** Strip inline markdown so a heading can be reused as a plain-text frontmatter value. */
function toPlainText(value) {
	return value
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/`+/g, '')
		.replace(/\\([\\`*_{}[\]()#+\-.!<>|~])/g, '$1')
		.replace(/\*\*([^*]+)\*\*/g, '$1')
		.replace(/(^|[^*])\*([^*]+)\*/g, '$1$2')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&amp;/g, '&')
		.replace(/\s+/g, ' ')
		.trim();
}

/**
 * YAML double-quoted scalars accept exactly the JSON string escapes, so `JSON.stringify` is a
 * safe (and total) quoter for titles containing `<`, `>`, `:`, `|`, `#` or backticks.
 */
function toYamlString(value) {
	return JSON.stringify(value);
}

/** Convert a target relative to `fromFile` into an absolute, extensionless site URL. */
function toSiteUrl(fromFile, target) {
	const [pathPart, hash = ''] = splitHash(target);
	if (!pathPart) return target;
	const absolute = resolve(dirname(fromFile), decodeURI(pathPart));
	const rel = relative(contentDir, absolute).split(sep).join('/');
	if (rel.startsWith('../')) return target;
	let url = posix.join(baseUrl, rel).replace(/\.md$/i, '');
	if (url.endsWith('/index')) url = url.slice(0, -'/index'.length);
	if (url === '/index') url = '/';
	return `${encodeURI(url)}${hash}`;
}

function splitHash(target) {
	const index = target.indexOf('#');
	if (index === -1) return [target, ''];
	return [target.slice(0, index), target.slice(index)];
}

/** Rewrite every relative `.md` link in `body` to an absolute site URL. */
function rewriteLinks(body, file) {
	return body.replace(linkPattern, (match, open, target, close) => {
		if (externalPattern.test(target)) return match;
		const [pathPart] = splitHash(target);
		if (pathPart && !/\.md$/i.test(pathPart)) return match;
		return `${open}${toSiteUrl(file, target)}${close}`;
	});
}

/** Heuristically pick the first prose sentence of a page for the `description` frontmatter. */
function extractDescription(body) {
	let inFence = false;
	for (const raw of body.split('\n')) {
		const line = raw.trim();
		if (/^(```|~~~)/.test(line)) {
			inFence = !inFence;
			continue;
		}
		if (inFence || !line) continue;
		if (/^(#|>|\||[-*+]\s|\d+\.\s|\*\*\*|---|===)/.test(line)) continue;
		if (/^(Defined in|Extends|Extended by|Implements|Implemented by|Inherited from|Overrides|Source)\b/i.test(line)) continue;
		const text = toPlainText(line);
		if (!text || text.length < 12) continue;
		const sentence = text.split(/(?<=\.)\s/)[0];
		return sentence.length > 180 ? `${sentence.slice(0, 177).trimEnd()}...` : sentence;
	}
	return null;
}

/** Drop the breadcrumb trail typedoc-plugin-markdown puts on the first line of every page. */
function stripBreadcrumb(body) {
	const lines = body.split('\n');
	const first = lines.findIndex((line) => line.trim() !== '');
	if (first === -1) return body;
	const line = lines[first].trim();
	const looksLikeBreadcrumb = line.includes(' / ') && /^(\*\*)?\[/.test(line) && !line.startsWith('#');
	if (!looksLikeBreadcrumb) return body;
	lines.splice(first, 1);
	return lines.join('\n');
}

/** Drop a leading `***` horizontal rule left behind by the page header/breadcrumb. */
function stripLeadingRule(body) {
	return body.replace(/^\s*(\*\*\*|---)\s*\n/, '');
}

async function processFile(file) {
	const original = await readFile(file, 'utf8');
	let body = original.replace(/\r\n/g, '\n');

	// Idempotency: peel off any frontmatter we wrote on a previous run, remembering its title so
	// pages whose `# ...` heading we already removed keep it.
	let previousTitle = null;
	const existing = frontmatterPattern.exec(body);
	if (existing) {
		const match = /^title:\s*(.*)$/m.exec(existing[1]);
		if (match) {
			try {
				previousTitle = JSON.parse(match[1].trim());
			} catch {
				previousTitle = match[1].trim().replace(/^['"]|['"]$/g, '');
			}
		}
		body = body.slice(existing[0].length);
	}

	body = body.replace(themeKeyPattern, (key) => themeLabels[key]);
	body = stripBreadcrumb(body);
	body = stripLeadingRule(body);

	// Pull the page title out of the first `# ...` heading and remove that heading from the body.
	let title = previousTitle;
	const heading = /^#[ \t]+(.+)$/m.exec(body);
	if (heading) {
		title = toPlainText(heading[1]);
		body = `${body.slice(0, heading.index)}${body.slice(heading.index + heading[0].length)}`;
	}
	if (!title) title = basename(file, '.md');

	body = stripLeadingRule(body.replace(/^\n+/, ''));
	body = rewriteLinks(body, file);
	body = `${body.trimEnd()}\n`;

	const description = extractDescription(body);
	const frontmatter = [`title: ${toYamlString(title)}`];
	if (description) frontmatter.push(`description: ${toYamlString(description)}`);

	const next = `---\n${frontmatter.join('\n')}\n---\n\n${body}`;
	if (next !== original) await writeFile(file, next);
	return title;
}

/** Human-readable label for a directory, preferring the title of its own `index.md`. */
function directoryTitle(node, titles) {
	const name = basename(node.dir);
	if (node.dir === apiDir) return 'API reference';
	if (sectionTitles[name] && dirname(node.dir) === apiDir) return sectionTitles[name];
	const own = titles.get(join(node.dir, 'index.md'));
	if (own) return own;
	if (kindTitles[name]) return kindTitles[name];
	return name;
}

/** `pages` order: the folder's own index, then kind folders, then everything else. */
function directoryPages(node) {
	const pages = [];
	if (node.files.includes('index.md')) pages.push('index');
	for (const kind of kindOrder) {
		if (node.dirs.includes(kind)) pages.push(kind);
	}
	if (node.dir === apiDir) {
		for (const section of Object.keys(sectionTitles)) {
			if (node.dirs.includes(section)) pages.push(section);
		}
	}
	for (const dir of node.dirs) {
		if (!pages.includes(dir)) pages.push(dir);
	}
	for (const file of node.files) {
		const name = basename(file, '.md');
		if (name !== 'index') pages.push(name);
	}
	return pages;
}

async function writeMeta(node, titles) {
	const meta = {
		title: directoryTitle(node, titles),
		pages: directoryPages(node),
		defaultOpen: false,
		collapsible: true
	};
	const file = join(node.dir, 'meta.json');
	const next = `${JSON.stringify(meta, null, '\t')}\n`;
	const previous = await readFile(file, 'utf8').catch(() => null);
	if (previous !== next) await writeFile(file, next);
	return 1;
}

function flatten(node, out = []) {
	out.push(node);
	for (const child of node.children) flatten(child, out);
	return out;
}

async function main() {
	await relocateOrphanModules();

	const tree = await collectTree(apiDir).catch(() => null);
	if (!tree) {
		console.error(`postprocess-api: ${relative(root, apiDir)} does not exist — run typedoc first.`);
		process.exitCode = 1;
		return;
	}

	const nodes = flatten(tree);
	const titles = new Map();
	let fileCount = 0;
	for (const node of nodes) {
		for (const name of node.files) {
			const file = join(node.dir, name);
			titles.set(file, await processFile(file));
			fileCount += 1;
		}
	}

	let metaCount = 0;
	for (const node of nodes) metaCount += await writeMeta(node, titles);

	console.log(`postprocess-api: processed ${fileCount} markdown files, wrote ${metaCount} meta.json files.`);
}

await main();
