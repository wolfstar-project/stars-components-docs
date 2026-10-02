#!/usr/bin/env node
// Generates documentation/api/<package>/** from the TypeDoc JSON published by wolfstar-project/docs.
// Usage: pnpm generate:api [--refresh] [--no-format]
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildModel } from './api/model.mjs';
import { renderPackageIndex, renderSymbolPage } from './api/render.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = join(root, 'data');
const apiDir = join(root, 'documentation', 'api');
const args = new Set(process.argv.slice(2));

const readJson = async (path) => JSON.parse(await readFile(path, 'utf8'));

async function cached(name, url, { json }) {
	const file = join(dataDir, name);
	if (!args.has('--refresh') && existsSync(file)) return json ? readJson(file) : readFile(file, 'utf8');
	const response = await fetch(url);
	if (!response.ok) throw new Error(`GET ${url} failed: ${response.status}`);
	const text = await response.text();
	await mkdir(dataDir, { recursive: true });
	await writeFile(file, text);
	return json ? JSON.parse(text) : text;
}

async function loadVersions(config) {
	const versions = {};
	for (const slug of config.packages) {
		try {
			const manifest = await cached(
				`${slug}.package.json`,
				`https://raw.githubusercontent.com/${config.repo}/main/packages/${slug}/package.json`,
				{ json: true }
			);
			versions[slug] = manifest.version;
		} catch (error) {
			console.warn(`! no version for ${slug}: ${error.message}`);
		}
	}
	return versions;
}

async function existingDescription(slug) {
	const file = join(apiDir, slug, 'index.mdx');
	if (!existsSync(file)) return undefined;
	const match = (await readFile(file, 'utf8')).replaceAll('\r\n', '\n').match(/^description:\s*'((?:[^']|'')*)'\s*$/m);
	return match?.[1].replaceAll("''", "'");
}

async function walk(dir) {
	if (!existsSync(dir)) return [];
	const out = [];
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const path = join(dir, entry.name);
		if (entry.isDirectory()) out.push(...(await walk(path)));
		else if (entry.name.endsWith('.mdx')) out.push(path);
	}
	return out;
}

const config = await readJson(join(root, 'scripts', 'api-config.json'));
const notes = await readJson(join(root, 'scripts', 'api-notes.json'));
const json = await cached('stars-components.json', config.source, { json: true });
const versions = await loadVersions(config);
const model = buildModel({ json, config, versions });

const pages = new Map();
for (const pkg of model.packages) {
	const guide = join(root, 'documentation', 'packages', `${pkg.slug}.mdx`);
	const description = (await existingDescription(pkg.slug)) ?? `API reference for ${pkg.name}.`;
	pages.set(
		join(apiDir, pkg.dir, 'index.mdx'),
		renderPackageIndex(model, pkg, {
			description,
			guideHref: existsSync(guide) ? `/documentation/packages/${pkg.slug}` : undefined,
			sourceHref: `https://github.com/${config.repo}/tree/main/packages/${pkg.slug}`
		})
	);
	for (const symbol of pkg.symbols) pages.set(join(apiDir, symbol.file), renderSymbolPage(model, symbol, notes));
}

const lowered = new Map();
const collisions = [];
for (const path of pages.keys()) {
	const key = path.toLowerCase();
	if (lowered.has(key)) collisions.push([lowered.get(key), path]);
	else lowered.set(key, path);
}
if (collisions.length > 0) {
	console.error('Case-insensitive file name collisions (would overwrite each other on Windows/macOS):');
	for (const [a, b] of collisions) console.error(`  ${relative(root, a)}  <->  ${relative(root, b)}`);
	process.exit(1);
}

for (const [path, content] of pages) {
	await mkdir(dirname(path), { recursive: true });
	await writeFile(path, content);
}

if (!args.has('--no-format')) {
	const targets = model.packages.map((pkg) => join('documentation', 'api', pkg.dir));
	const result = spawnSync(`pnpm exec oxfmt --write ${targets.join(' ')}`, { cwd: root, stdio: 'inherit', shell: true });
	if (result.status !== 0) process.exit(result.status ?? 1);
}

const stale = [];
for (const pkg of model.packages) {
	for (const file of await walk(join(apiDir, pkg.dir))) if (!pages.has(file)) stale.push(relative(root, file));
}

console.log(`Generated ${pages.size} pages for ${model.packages.length} packages.`);
if (model.missing.length > 0) console.warn(`Packages missing from the TypeDoc JSON: ${model.missing.join(', ')}`);
if (stale.length > 0) {
	console.warn(`${stale.length} existing page(s) were not regenerated (no matching symbol):`);
	for (const file of stale) console.warn(`  ${file}`);
}
