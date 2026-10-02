# API Reference components and generator

## Goal

Make the API Reference tab read like discord.js.org, discord-api-types.dev and sapphirejs.dev: symbol pages with kind and modifier badges,
highlighted and linked signatures, per-member cards with parameter and return tables, and a grouped, filterable symbol list per package.

Today `documentation/api/**` is plain `typedoc-plugin-markdown` output (371 pages, `hidden: true`) with no generator in this repo.

## Decisions

- **Data source:** the aggregated TypeDoc JSON published by `wolfstar-project/docs` (`docs` branch, `stars-components/main.json` and
  `plugins/main.json`). A generator in this repo renders MDX from it.
- **Page shape:** hybrid. Every member keeps a real markdown heading (so Mintlify's table of contents, anchors and search keep working).
  Presentation inside a member uses small JSX components fed with pre-resolved props.
- **Scope:** exactly the 17 packages in the current API navigation. `logger` and `http-framework-i18n` are not in the JSON, so their
  existing pages stay untouched and the gap is reported.
- **Paths:** output goes to the existing `documentation/api/<package>/<kind-dir>/<Name>.mdx` paths so links and redirects keep working.
- **Navigation:** pages stay `hidden: true`, reachable from each package index. `docs.json` is not changed.

## Components (`snippets/api-reference.jsx`)

Styled by `.ws-api-*` classes in `style.css` using the existing `--ws-*` tokens, in light and dark.

| Component          | Purpose                                                                                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ApiKind`          | Colored kind chip: Class, Interface, Function, Type, Enum, Variable, Namespace.                                                                                 |
| `ApiBadge`         | Modifier chips: `abstract`, `static`, `readonly`, `optional`, `protected`, `deprecated`, `since`.                                                               |
| `ApiSignature`     | Highlighted signature block with linked types and a copy button. Types are a token array (`text` or `link` with a resolved href); the browser resolves nothing. |
| `ApiHierarchy`     | Link chips for Extends, Implements, Extended by, Implemented by.                                                                                                |
| `ApiMember`        | Member card: badges, signature, description, parameters table, returns, throws, examples, see-also, inherited-from, source link. Overloads render as tabs.      |
| `ApiEnumMembers`   | Table of enum member name, value and description.                                                                                                               |
| `ApiSymbolList`    | Package index grouped by kind, with a client-side filter box and one-line summaries.                                                                            |
| `ApiPackageHeader` | Package name, version and a link to the guide page; reuses `InstallPackage`.                                                                                    |

Mintlify snippet constraints apply: self-contained JSX, no npm imports, hooks available without import (as in `snippets/install-package.jsx`).

## Generator (`scripts/generate-api.mjs`)

1. Fetch the two JSONs into a gitignored `data/` directory (cached between runs).
2. Read an allowlist config of the 17 packages.
3. For each package, render an index page (`ApiPackageHeader` + `ApiSymbolList`) and one page per exported symbol, using the components above.
4. Resolve every type reference to an internal API URL, or to MDN or Node.js docs for built-ins; unresolved references render as plain text.
5. Inject hand-written notes (for example the `MockServerResponse` Node `Writable` note) from `scripts/api-notes.json`, so regeneration does not lose them.
6. Format output with `oxfmt` so `pnpm lint` stays clean.
7. Report packages in the nav but absent from the JSON, and leave their pages unchanged.

A `generate:api` script is added to `package.json`. The generator is deterministic: the same JSON produces byte-identical output.

## Out of scope

- A nested per-package sidebar tree in `docs.json` (371 entries).
- Rewriting or removing the VitePress-era `scripts/fetch-docs-data.mjs`.
- Generating pages for packages outside the current navigation.

## Verification

There are no tests in this repo. Verify with:

- `mint validate` (strict build, broken links and config).
- `pnpm lint` (`oxlint` and `oxfmt --check`).
- `mint dev` preview of a class, an interface, an enum, an overloaded function and a package index, in light and dark.
- A diff review confirming no package outside the allowlist changed and every previously linked page path still exists.

Commits and PR titles use Conventional Commits with scope `api`.
