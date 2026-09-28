# AGENTS.md

Project conventions for `stars-components-docs` — the wolfstar-project documentation site, hosted on Mintlify.

## Stack

- **Site generator:** [Mintlify](https://mintlify.com) (`docs.json`, MDX pages, custom landing page in `index.mdx` styled by `style.css`).
- **Package manager:** `pnpm@11.5.0` (corepack-pinned), Node `>=20`. Used only for lint/format tooling and git hooks; the site itself
  has no build script here.
- **Lint:** `oxlint`. **Format:** `oxfmt` (JSON and Markdown).
- **Deploy:** Mintlify GitHub app builds and deploys from `main`. No Netlify, no local build step.

## Layout

- `docs.json` — theme, colors, navigation. A page is not visible until it is listed here.
- `documentation/guide/` — hand-written guides.
- `documentation/packages/` — one landing page per package.
- `documentation/api/` — generated API reference, one folder per package. Never edit by hand.
- `documentation/errors/`, `documentation/changelog/` — error reference and weekly changelog.
- `logo/`, `favicon.svg`, `style.css` — brand assets and styles.

This repo does not vendor package source. Packages live in
[stars-components](https://github.com/wolfstar-project/stars-components) and
[plugins](https://github.com/wolfstar-project/plugins).

## Quality gates

Same as CI (`.github/workflows/ci.yml`):

1. `mint format` — must leave no diff.
2. `mint validate` — strict build, fails on broken config or links.
3. `pnpm lint` — `oxlint . && oxfmt --check .`.

Preview locally with `mint dev` (install with `npm install --global mint`).

## Conventions

- Commits and PR titles: Conventional Commits (`@commitlint/config-conventional`; `cz-conventional-changelog` via commitizen). Allowed
  PR scopes: `guide`, `packages`, `api`, `changelog`, `errors`, `config`, `deps`, `ci`.
- Prose is checked with Vale (`.vale.ini`, MDX parsed as Markdown).
- There are no tests, no changesets, and nothing to publish here.
