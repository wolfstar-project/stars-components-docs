#!/usr/bin/env node
// Fetches the things this site needs from other repos, replacing the git submodules the old
// in-monorepo docs/ package relied on:
//   1. Aggregated TypeDoc `--json` output from wolfstar-project/docs (`docs` branch).
//   2. Just the `package.json` manifests needed for live version numbers on the package
//      cards (see .vitepress/data/packages.ts), without vendoring full source trees.
//   3. Just each package's README.md, included into packages/*.md via `<!--@include:-->`.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dataDir = join(root, 'data');

const docsProjects = ['stars-components', 'plugins'];

const packageManifests = [
	...[
		'cli',
		'create-http-framework',
		'env-utilities',
		'http-framework',
		'http-framework-i18n',
		'http-framework-test-utils',
		'i18next-backend',
		'influx-utilities',
		'logger',
		'reddit-helpers',
		'safe-fetch',
		'shared-http-pieces',
		'shared-influx-pieces',
		'start-banner',
		'twitch-helpers',
		'weather-helpers'
	].map((name) => ({ name, repo: 'wolfstar-project/stars-components' })),
	...['plugin-api', 'plugin-i18next', 'plugin-subcommands-advanced'].map((name) => ({ name, repo: 'wolfstar-project/plugins' }))
];
const packageNames = new Set(packageManifests.map(({ name }) => name));

async function fetchText(url) {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
	}
	return response.text();
}

async function fetchDocsJson() {
	await mkdir(join(dataDir, 'docs'), { recursive: true });
	await Promise.all(
		docsProjects.map(async (project) => {
			const url = `https://raw.githubusercontent.com/wolfstar-project/docs/docs/${project}/main.json`;
			const json = await fetchText(url);
			const outDir = join(dataDir, 'docs', project);
			await mkdir(outDir, { recursive: true });
			await writeFile(join(outDir, 'main.json'), json);
		})
	);
}

async function fetchPackageVersions() {
	const versions = {};
	await Promise.all(
		packageManifests.map(async ({ name, repo }) => {
			const url = `https://raw.githubusercontent.com/${repo}/main/packages/${name}/package.json`;
			const manifest = JSON.parse(await fetchText(url));
			versions[name] = manifest.version;
		})
	);
	await mkdir(dataDir, { recursive: true });
	await writeFile(join(dataDir, 'packages.generated.json'), `${JSON.stringify(versions, null, '\t')}\n`);
}

async function fetchReadmes() {
	await mkdir(join(dataDir, 'readmes'), { recursive: true });
	await Promise.all(
		packageManifests.map(async ({ name, repo }) => {
			const url = `https://raw.githubusercontent.com/${repo}/main/packages/${name}/README.md`;
			const readme = normalizePackageReadmeLinks(await fetchText(url));
			const outDir = join(dataDir, 'readmes', name);
			await mkdir(outDir, { recursive: true });
			await writeFile(join(outDir, 'README.md'), readme);
		})
	);
}

function normalizePackageReadmeLinks(readme) {
	return readme.replaceAll(/\]\(\.\.\/([^/)#]+)([^)]*)\)/g, (link, packageName, suffix) =>
		packageNames.has(packageName) ? `](/packages/${packageName}${suffix})` : link
	);
}

await Promise.all([fetchDocsJson(), fetchPackageVersions(), fetchReadmes()]);
