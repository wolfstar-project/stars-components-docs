# Stars Components docs

Documentation site for [Stars Components](https://github.com/wolfstar-project/stars-components) and the
[plugins](https://github.com/wolfstar-project/plugins) built on it, hosted on [Mintlify](https://mintlify.com).

Package source lives in those repos. This repo only holds the documentation content and site configuration.

## Repository layout

| Path                       | Content                                                                                         |
| -------------------------- | ----------------------------------------------------------------------------------------------- |
| `docs.json`                | Mintlify site config: theme, colors, navigation tabs and groups                                 |
| `index.mdx`                | Custom landing page (styled by `style.css`)                                                     |
| `documentation/guide/`     | Hand-written guides: features, architecture, commands, environment, plugins, testing, migration |
| `documentation/packages/`  | One landing page per package                                                                    |
| `documentation/api/`       | Generated API reference, one folder per package. Do not edit by hand                            |
| `documentation/errors/`    | CLI and configuration error reference                                                           |
| `documentation/changelog/` | Weekly changelog                                                                                |
| `logo/`, `favicon.svg`     | Brand assets                                                                                    |

A new page is only visible once it is listed in the `navigation` section of `docs.json`.

## Local development

Install the [Mintlify CLI](https://www.npmjs.com/package/mint), then run it from the repo root:

```bash
npm install --global mint
mint dev
```

The preview is served at `http://localhost:3000` and reloads on every change.

## Checks

CI runs the same checks on every pull request:

```bash
mint format     # must leave no diff
mint validate   # strict build, fails on broken config or links
pnpm install
pnpm lint       # oxlint + oxfmt for JSON and Markdown files
```

Commit messages and pull request titles follow [Conventional Commits](https://www.conventionalcommits.org). See
[CONTRIBUTING.md](.github/CONTRIBUTING.md) for the full workflow.

## Deployment

Mintlify builds and deploys from `main` through its GitHub app. There is no separate build or publish step here.

## Links

- [Discord community](https://join.wolfstar.rocks)
- [Security policy](.github/SECURITY.md)
- [License](LICENSE)
