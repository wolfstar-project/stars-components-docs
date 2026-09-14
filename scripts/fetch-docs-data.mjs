#!/usr/bin/env node
// Fetches the things this site needs from other repos, replacing the git submodules the old
// in-monorepo docs/ package relied on:
//   1. Aggregated TypeDoc `--json` output from wolfstar-project/docs (`docs` branch). Both
//      projects ship `"name": "Documentation"`, which would collide under
//      `entryPointStrategy: "merge"`, so the name is rewritten to the project slug on write
//      (see `docsProjects` below) to give typedoc two distinct top-level sections.
//   2. Just the `package.json` manifests needed for live version numbers on the package
//      cards, without vendoring full source trees.
//   3. Just each package's README.md, included into content/packages/*.md via Fumadocs'
//      `<include>` directive. Fumadocs has no line-offset syntax (unlike VitePress'
//      `<!--@include: file.md{16,}-->`), so the badge header is trimmed here, at fetch time:
//      each README is written out already starting at `readmeStartLine`.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dataDir = join(root, 'data');

// `project` is both the path segment on the `docs` branch and the name forced onto the merged
// typedoc project, so the output lands in `content/api/<project>/` instead of two clashing
// `content/api/Documentation/` trees.
const docsProjects = ['stars-components', 'plugins'];

// Number of the first README line to keep (1-based), replicating the VitePress
// `<!--@include: ...{N,}-->` offsets the packages/*.md pages used to carry.
const defaultReadmeStartLine = 16;
const readmeStartLine = {
	'shared-http-pieces': 17,
	'http-framework-i18n': 3,
	'plugin-api': 3,
	'plugin-i18next': 3,
	'plugin-subcommands-advanced': 3
};

const packageManifests = [
	...[
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
			const doc = JSON.parse(await fetchText(url));
			doc.name = project;
			const outDir = join(dataDir, 'docs', project);
			await mkdir(outDir, { recursive: true });
			await writeFile(join(outDir, 'main.json'), JSON.stringify(doc));
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
			const readme = await fetchText(url);
			const startLine = readmeStartLine[name] ?? defaultReadmeStartLine;
			const body = readme
				.split('\n')
				.slice(startLine - 1)
				.join('\n');
			const outDir = join(dataDir, 'readmes', name);
			await mkdir(outDir, { recursive: true });
			await writeFile(join(outDir, 'README.md'), body);
		})
	);
}

await Promise.all([fetchDocsJson(), fetchPackageVersions(), fetchReadmes()]);
