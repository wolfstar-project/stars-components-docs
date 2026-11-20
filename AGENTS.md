# AGENTS.md

Project conventions for `stars-components-docs` — the wolfstar-project documentation site, hosted on Mintlify.

## Stack

- **Site generator:** [Mintlify](https://mintlify.com) (`docs.json`, MDX pages, custom landing page in `index.mdx` styled by `style.css`).
- **Package manager:** `pnpm@11.5.0` (corepack-pinned), Node `>=20`. Used only for lint/format tooling and git hooks; the site itself has no build script here.
- **Lint:** `oxlint`. **Format:** `oxfmt` (JSON and Markdown).
- **Deploy:** Mintlify GitHub app builds and deploys from `main`. No Netlify, no local build step.

## Layout

The hand-written docs follow the [Nuxt docs](https://github.com/nuxt/nuxt/tree/main/docs) layout.

- `docs.json`: theme, colors, navigation, redirects. A page is not visible until it is listed here.
- `getting-started/`: introduction, installation, features, commands, environment, testing.
- `directory-structure/`: one page per file or directory of a Stars project (`src/` pages in `directory-structure/src/`).
- `guide/concepts/`, `guide/going-further/`: hand-written guides (architecture, plugins, gateway, caching, sharding).
- `community/`: contributing.
- `migration/`: upgrade guides, one page per major version or plugin.
- `api/commands/`: one page per `stars` CLI command. `api/errors/`: CLI and configuration error reference.
- `documentation/packages/`: one landing page per package.
- `documentation/api/`: generated API reference, one folder per package. Never edit by hand.
- `documentation/changelog/`: weekly changelog.
- `logo/`, `favicon.svg`, `style.css`: brand assets and styles.

This repo does not vendor package source. Packages live in [stars-components](https://github.com/wolfstar-project/stars-components) and [plugins](https://github.com/wolfstar-project/plugins).

## Quality gates

Same as CI (`.github/workflows/ci.yml`):

1. `mint validate` — strict build, fails on broken config or links.
2. `pnpm lint` — `oxlint . && oxfmt --check .`.

CI does not run `mint format`. On the current tree it rewrites hundreds of generated API pages, so its diff is not a failure. Formatting is enforced by `oxfmt`.

Preview locally with `mint dev` (install with `npm install --global mint`).

## Conventions

- Commits and PR titles: Conventional Commits (`@commitlint/config-conventional`; `cz-conventional-changelog` via commitizen). Allowed PR scopes: `guide`, `packages`, `api`, `changelog`, `errors`, `config`, `deps`, `ci`.
- Prose is checked with Vale (`.vale.ini`, MDX parsed as Markdown).
- There are no tests, no changesets, and nothing to publish here.
