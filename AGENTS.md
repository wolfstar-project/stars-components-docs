# AGENTS.md

Project conventions for `stars-components-docs` — the wolfstar-project documentation site (VitePress).

## Stack

- **Language:** TypeScript (`~5.8.3`), Node `>=20`.
- **Package manager:** `pnpm@11.5.0` (corepack-pinned). Single package, not a monorepo — no `pnpm-workspace.yaml`
  packages beyond `.` itself (kept only for the `overrides`/`allowBuilds` fields).
- **Site generator:** VitePress 2 (alpha) + Vue 3.
- **API reference:** TypeDoc, `entryPointStrategy: "merge"` over pre-generated JSON (see below), rendered via
  `typedoc-plugin-markdown` + `typedoc-vitepress-theme`.
- **Lint:** `oxlint`.
- **Format:** `oxfmt`.
- **Deploy:** Netlify (`netlify.toml`), build command `pnpm build`, publish `.vitepress/dist`.

## Where the content comes from

This repo does **not** vendor any package source (no git submodules). Everything package-related is fetched at
build/dev time by `scripts/fetch-docs-data.mjs` (see its `predev`/`prebuild`/`pretypecheck` hooks in
`package.json`) from two sibling repos:

- **wolfstar-project/docs** (`docs` branch) — aggregated `typedoc --json` output, one file per project
  (`stars-components/main.json`, `plugins/main.json`), published by those repos' own CI
  (`reusable-documentation.yml`). Fetched into `data/docs/<project>/main.json` and merged by `typedoc.json`.
- **wolfstar-project/stars-components** and **wolfstar-project/plugins** (raw `main` branch files only) —
  each package's `package.json` (for the live version shown on package cards,
  `.vitepress/data/packages.ts`) and `README.md` (included into `packages/*.md` via
  VitePress `<!--@include:-->`).

`data/` and `api/` are gitignored, generated fresh on every `dev`/`build`/`typecheck`.

## Quality gates (in order)

1. `pnpm lint`
2. `pnpm typecheck`
3. `pnpm build`

There are no tests, no changesets, and no `packages/*` to publish here — `release.yml` and
`renovate-changeset.yml` from the sibling repos do not apply to this one.

## Conventions

- Commits: Conventional Commits (`@commitlint/config-conventional`); `cz-conventional-changelog` via commitizen.
- Guide pages live under `guide/`; hand-written package landing pages live under `packages/`; generated API
  reference lands under `api/` (never edit by hand).

## Notes for agents

- If a `pnpm build`/`typecheck` run fails with a fetch 404 against `raw.githubusercontent.com/wolfstar-project/docs/...`,
  that means the upstream project hasn't published that JSON yet (e.g. its `documentation.yml` CI hasn't run since
  a fresh `wolfstar-project/docs` repo was created) — this is not a bug in this repo.
- Package list, categories, and descriptions in `.vitepress/data/packages.ts` are hand-maintained; only the
  `version` field is fetched live. Add a new package there (and a matching entry in
  `scripts/fetch-docs-data.mjs`'s `packageManifests`) when a new package ships upstream.
