# website

The wolfstar-project documentation site (VitePress), formerly the `docs/` package inside
[stars-components](https://github.com/wolfstar-project/stars-components). Split out into its own repo the same
way [sapphiredev/website](https://github.com/sapphiredev/website) is separate from `sapphiredev/framework` etc.

## How the API reference is built

Source repos (`stars-components`, `plugins`) each run `typedoc --json` in CI and publish the result to
[wolfstar-project/docs](https://github.com/wolfstar-project/docs) (`docs` branch), one file per project/ref.
This site never touches those repos' source directly — no git submodules. Instead, `scripts/fetch-docs-data.mjs`:

- downloads each project's aggregated `main.json` into `data/docs/<project>/main.json`, which `typedoc.json`
  merges (`entryPointStrategy: "merge"`) into a single API reference, and
- downloads just the `package.json` manifests needed for live version numbers on the package cards, into
  `data/packages.generated.json`.

That script runs automatically before `dev`, `build`, and `typecheck` (`predev`/`prebuild`/`pretypecheck`).

## Scripts

- `pnpm dev` — fetch data, generate the API reference, start VitePress dev server.
- `pnpm build` — fetch data, generate the API reference, build the static site.
- `pnpm typecheck` — type-check `.vitepress/`.
