---
title: Migration Guide
description: Upgrade paths between Stars Components versions and package replacements.
outline: deep
---

# Migration Guide

This page collects the upgrade paths between Stars Components packages and their versions. Every section is
self-contained — read the one matching the move you are making.

- [`@wolfstar/http-framework` v3 → v4](#v4) <Badge type="warning" text="unreleased" />
- [`@wolfstar/http-framework-i18n` → `@wolfstar/plugin-i18next`](#i18next)

## Migrating from v3 to v4 {#v4}

::: danger Work in progress — v4 is not released
`@wolfstar/http-framework@3.3.0` is the current stable release; there is no `4.0.0` on npm yet. This section is a
living document, written as the changes destined for v4 land on `main` — starting with
[stars-components#158](https://github.com/wolfstar-project/stars-components/pull/158) — so the upgrade is already
documented by the time the major is tagged. Everything below can still change before the release.
:::

### Changes Tracked So Far

| Landed in                                                             | Change                                                                 | Breaking today                      |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------- |
| [#158](https://github.com/wolfstar-project/stars-components/pull/158) | `stars` CLI, typed `stars.config.*`, auto imports, `stars dev` tooling | No — additive, ships in a 3.x minor |

::: tip Why migrate before the major
The pieces below are published as **minor** releases on the 3.x line, so you can adopt them today without waiting for
v4. v4 is where they become _the_ way a framework project is developed: hand-wired `watch` / `watch:start` /
`tsc-watch` scripts stop being what the scaffold and the documentation describe. Moving now turns the major into a
version bump instead of a rewrite.
:::

### Adding the `stars` CLI

The developer workflow moves into a separate package, `@wolfstar/cli`, which ships the `stars` binary. The framework
itself keeps owning the configuration — the same split Nuxt has between `nuxt`/`defineNuxtConfig` and `nuxi`.

::: code-group

```bash [pnpm]
pnpm add -D @wolfstar/cli
```

```bash [npm]
npm install --save-dev @wolfstar/cli
```

```bash [yarn]
yarn add --dev @wolfstar/cli
```

```bash [bun]
bun add --dev @wolfstar/cli
```

:::

::: warning Node requirement
`@wolfstar/http-framework` still supports Node.js 20 or newer. `@wolfstar/cli` requires **Node.js 22 or newer**,
inherited from [Ink](https://github.com/vadimdemedes/ink), which renders the interactive `stars dev` UI. It is a
`devDependency`, so it constrains the development environment, not the deployed bot.
:::

### Creating `stars.config.ts`

Add a `stars.config.{ts,mts,cts,js,mjs,cjs}` file at the project root. `defineConfig` comes from the framework's new
`config` subpath, not from the CLI:

```typescript
// stars.config.ts
import { defineConfig } from '@wolfstar/http-framework/config';

export default defineConfig({
	entry: 'src/main.ts',
	build: { tool: 'tsdown' }
});
```

Every option has a default: `entry` falls back to the first of `src/main.ts`, `src/main.js`, `src/index.ts`,
`src/index.js` that exists, and `build.tool` defaults to `auto` (detected from the project). A minimal project can
export `defineConfig({})`.

`@wolfstar/http-framework/config` is side-effect free — importing it, or a `stars.config.ts` that imports it, never
starts the bot. Invalid options raise a `ConfigError` carrying a stable `code`, the offending option `path`, the
`file` it came from, and an actionable `hint`; `stars` exits with code `2` on those.

The resolved configuration is readable from any tool, without depending on the CLI:

```typescript
import { loadStarsConfig } from '@wolfstar/http-framework/config';

const config = await loadStarsConfig({ cwd: process.cwd() });
console.log(config.entry, config.build.output);
```

### Replacing the `package.json` Scripts

The per-language, per-build-tool script wiring collapses into two commands that read `stars.config.*`:

```diff
 {
 	"scripts": {
-		"build": "tsdown",
-		"dev": "pnpm run build --onSuccess \"pnpm run start\"",
-		"watch": "pnpm run build --watch",
-		"watch:start": "pnpm run build --watch --onSuccess \"pnpm run start\"",
+		"build": "stars build",
+		"dev": "stars dev",
 		"start": "node dist/main.js",
-		"generate:i18n": "i18next-type-generator ./src/locales/en-US/ ./src/@types/i18next.d.ts"
+		"generate:i18n": "stars codegen"
 	}
 }
```

TypeScript projects built with `tsc` drop `tsc-watch` from their `devDependencies` — `stars dev` runs `tsc -b --watch`
itself. JavaScript projects drop `node --watch src/main.js` and keep no `build` script at all (`build.tool: 'none'`).

`start` is unchanged: production still runs the built entry point directly, `stars` is a development-only tool.

### The New Framework Subpaths

v3 exposed a single entry point. The package now has three export subpaths:

| Subpath                                 | What it exports                                                    |
| --------------------------------------- | ------------------------------------------------------------------ |
| `@wolfstar/http-framework`              | Unchanged — `Client`, pieces, container, everything you use today  |
| `@wolfstar/http-framework/config`       | `defineConfig`, `loadStarsConfig`, `ConfigError`, the config types |
| `@wolfstar/http-framework/auto-imports` | `autoImports()`, the `tsdown` plugin backing auto imports          |

No existing import changes: the root subpath keeps the same specifier and the same exports.

### `stars` Commands

| Command                   | What it replaces                                                          |
| ------------------------- | ------------------------------------------------------------------------- |
| `stars dev`               | `watch` / `watch:start` / `tsc-watch` / `node --watch` wiring             |
| `stars build`             | Calling `tsdown` or `tsc -b` directly                                     |
| `stars info [--json]`     | Nothing — prints the resolved configuration, auto imports and environment |
| `stars codegen [--check]` | A hand-written `i18next-type-generator` invocation                        |
| `stars prepare [--check]` | Nothing — generates the auto imports declaration file                     |
| `stars commands`          | Ad-hoc scripts deleting stale application commands from Discord           |

`--config <file>` points at a configuration file and `--cwd <dir>` changes the working directory; both work on every
command. `stars --help` and `stars --version` never load the configuration machinery, so they stay fast.

`stars dev` builds, starts the bot, and restarts it after every successful build. Failed builds keep the previous
process alive and wait for the next change. On a terminal it renders an interactive UI (lifecycle, uptime, restart
reason, build state, URL, health, filtered logs, `r` restart, `c` clear, `f`/`e` filters, `h` help, `q` quit); it falls
back to plain prefixed lines with `--no-tui`, `STARS_TUI=plain`, in CI, or when stdout is not a TTY. Both modes honour
`NO_COLOR` and stop the bot cleanly on `SIGINT`/`SIGTERM`.

::: warning `hmr` and `stars dev` overlap
The bot runs as a child `node` process with `STARS_DEV=1` in its environment, and `stars dev` restarts the whole
process on every build. Leave the framework's own `hmr` client option **disabled** while using `stars dev`.
:::

`stars commands` covers the gap the registry cannot: renamed or deleted commands stay deployed on Discord until
something removes them.

```bash
stars commands list                 # global commands
stars commands list --guild 1234    # a guild's commands
stars commands clean                # checklist wizard, then a confirmation
stars commands clean --name ping    # delete one, asking first
```

It reads `DISCORD_TOKEN` and `DISCORD_APPLICATION_ID` (or `APPLICATION_ID`) from the environment or the project's
`.env`, the same place the bot reads them from. Outside a terminal, `clean` refuses to run without `--yes` or `--name`.

### Dev Loop Options <Badge type="tip" text="optional" />

Three `dev` options round out the loop, all off by default except the log file:

```typescript
export default defineConfig({
	entry: 'src/main.ts',
	build: { tool: 'tsdown' },
	dev: {
		// A type checker next to the bot, reported on the UI's `tsc` channel. Never blocks a build.
		typecheck: { checker: 'golar' },
		// A cloudflared quick tunnel so Discord can reach the interactions endpoint.
		tunnel: true,
		// Where the session's logs are mirrored; `false` disables it.
		logFile: '.stars/dev.log'
	}
});
```

- **`dev.typecheck`** brings back the type safety a `tsdown` build skips. `checker` is `tsc` (watch mode), `golar`
  (`golar tsc`, watch mode), `tsz` (no watch mode, so re-run after every build), or `auto` — the default, `golar` when
  the project depends on it and `tsc` otherwise. Type errors are reported without blocking builds or restarts.
- **`dev.tunnel`** exposes the interactions endpoint publicly: `true` opens a `cloudflared` quick tunnel (a new
  hostname on every run), a string is an https URL you already serve and the CLI only probes.
  `dev.tunnel.updateEndpoint` writes that URL to the Discord application's `interactions_endpoint_url` — opt-in,
  because it edits a live application.
- **`dev.logFile`** (default `.stars/dev.log`) mirrors the session's logs to disk, so a run can be read back once the
  terminal UI is gone.

`dev.url` needs no configuration: it is detected from `HTTP_PORT` (environment variable, `.env.local`/`.env`, or
`dev.env`) or `3000`, the way Vite's and Nuxt's dev servers do, and `localhost` is swapped for `127.0.0.1` when that is
what is actually reachable. Set it explicitly only to override, e.g. `dev: { url: 'http://192.168.1.5:3000' }`.

### Auto Imports <Badge type="tip" text="optional" />

Nuxt-style auto imports make the framework's exports and the project's own modules usable without an `import`
statement. They are injected at build time by the `autoImports()` rolldown plugin, so they **require the `tsdown`
build tool** — `tsc` and `none` have no transform step to hook into. They are on by default with `tsdown`, and
`imports: false` turns them off.

```typescript
export default defineConfig({
	entry: 'src/main.ts',
	build: { tool: 'tsdown' },
	imports: {
		dirs: ['src/lib/**', 'src/utils/**'],
		presets: ['@wolfstar/http-framework', '@wolfstar/env-utilities'],
		exclude: [],
		dts: '.stars/imports.d.ts'
	}
});
```

`Client`, `Message`, `Plugin` and `Store` are never auto-imported, even when a preset exports them: the names are
generic enough that project code likely declares its own. Import them explicitly, as today.

Run `stars prepare` to generate `.stars/imports.d.ts`, include it in the project's `tsconfig.json`, and check it in CI
with `stars prepare --check`.

### Ignoring `.stars/`

The CLI writes into a `.stars/` directory at the project root — the dev log and the auto imports declaration file.
Add it to `.gitignore`:

```gitignore
.stars/
```

### Checklist

- [ ] `@wolfstar/cli` added as a `devDependency`, development environment on Node.js 22 or newer
- [ ] `stars.config.ts` created with `defineConfig` from `@wolfstar/http-framework/config`
- [ ] `dev` / `build` scripts replaced with `stars dev` / `stars build`
- [ ] `watch`, `watch:start` and the `tsc-watch` dependency removed
- [ ] `generate:i18n` replaced with `stars codegen`, verified with `stars codegen --check`
- [ ] The framework's `hmr` client option disabled while developing with `stars dev`
- [ ] `.stars/` added to `.gitignore`
- [ ] `stars info` output reviewed — it prints the configuration exactly as the commands resolve it
- [ ] Optional: `dev.typecheck`, `dev.tunnel`, auto imports (`stars prepare`) enabled

## Migrating to `@wolfstar/plugin-i18next` {#i18next}

[`@wolfstar/http-framework-i18n`](/packages/http-framework-i18n) is **deprecated**. Its successor is
[`@wolfstar/plugin-i18next`](/packages/plugin-i18next), an official plugin for
[`@wolfstar/http-framework`](/packages/http-framework) that lives in the
[`wolfstar-project/plugins`](https://github.com/wolfstar-project/plugins/tree/main/packages/plugin-i18next)
repository. No further releases are planned for the old package.

::: warning Prerequisites
`@wolfstar/plugin-i18next` requires `@wolfstar/http-framework@^3.1.0` and pulls in `i18next@^25.8.18`.
:::

The plugin keeps the same typed-key philosophy (`T` / `FT`, `resolveKey`, `applyLocalizedBuilder`) but replaces the
manual `load()` + `init()` bootstrap with the framework's plugin lifecycle, and moves the loaded state onto
`container.i18n`.

### Overview of the Changes

| Area                   | `@wolfstar/http-framework-i18n`                 | `@wolfstar/plugin-i18next`                                      |
| ---------------------- | ----------------------------------------------- | --------------------------------------------------------------- |
| Bootstrap              | Manual `await load(...)` then `await init(...)` | `import '@wolfstar/plugin-i18next/register'` + `i18n` options   |
| State                  | Module-level sets (`loadedLocales`, …)          | `container.i18n` (`InternationalizationHandler`)                |
| Locales directory      | Any path passed to `load()`                     | `i18n.defaultLanguageDirectory`, defaults to `<root>/languages` |
| Formatters             | `addFormatters(...)`                            | `i18n.formatters` client option                                 |
| Language resolution    | Interaction payload only                        | Interaction payload **or** `i18n.fetchLanguage`                 |
| Hot reload             | Not available                                   | `i18n.hmr.enabled`                                              |
| `i18next`              | `^22.5.1`                                       | `^25.8.18`                                                      |
| Relationship to client | Standalone module                               | Framework plugin, requires `@wolfstar/http-framework@^3.1.0`    |

### Swapping the Dependency

::: code-group

```bash [pnpm]
pnpm remove @wolfstar/http-framework-i18n
pnpm add @wolfstar/plugin-i18next
```

```bash [npm]
npm uninstall @wolfstar/http-framework-i18n
npm install @wolfstar/plugin-i18next
```

```bash [yarn]
yarn remove @wolfstar/http-framework-i18n
yarn add @wolfstar/plugin-i18next
```

```bash [bun]
bun remove @wolfstar/http-framework-i18n
bun add @wolfstar/plugin-i18next
```

:::

`@wolfstar/http-framework` is a peer dependency of the plugin, so keep it in your `dependencies`.

### Bootstrap Moved to the Plugin Lifecycle

The old package required you to load the locales and initialize `i18next` yourself, before registering commands:

```typescript
// Before
import { addFormatters, init, load } from '@wolfstar/http-framework-i18n';
import { Client } from '@wolfstar/http-framework';

await load(new URL('locales', import.meta.url));

addFormatters(
	{ name: 'uppercase', format: (value) => value.toUpperCase() }, //
	{ name: 'lowercase', format: (value) => value.toLowerCase() }
);

await init();

const client = new Client();
await client.load();
```

The plugin does all of that for you. Import the side-effecting `register` entrypoint **before** the client is created,
and move the configuration into the `i18n` client option:

```typescript
// After
import '@wolfstar/plugin-i18next/register';
import { Client } from '@wolfstar/http-framework';

const client = new Client({
	i18n: {
		// Optional, defaults to `<root>/languages`:
		defaultLanguageDirectory: new URL('languages', import.meta.url).pathname,
		defaultName: 'en-US',
		formatters: [
			{ name: 'uppercase', format: (value) => value.toUpperCase() }, //
			{ name: 'lowercase', format: (value) => value.toLowerCase() }
		]
	}
});
await client.load();
```

::: tip
The plugin registers a `preLoad` hook that awaits `container.i18n.init()` **before** the stores load, so command
builders can still be localized at registration time — the ordering the manual `await init()` used to guarantee.
:::

### Locales Directory Renamed to `languages`

The old package took whatever path you passed to `load()`; the plugin defaults to `<root>/languages`. Either rename the
directory or keep your own path via `defaultLanguageDirectory`.

The layout itself is unchanged: one directory per language, every nested `.json` file is a namespace.

```text
languages/
├── en-US/
│   ├── default.json
│   └── commands/
│       └── ping.json
└── es-ES/
    ├── default.json
    └── commands/
        └── ping.json
```

### Module Specifier Renamed

`T`, `FT`, `resolveKey`, `resolveUserKey`, `getSupportedLanguageName`, `getSupportedUserLanguageName`,
`getSupportedLanguageT`, `getSupportedUserLanguageT`, `supportedLanguages`, `isSupportedDiscordLocale`,
`getLocalizedData`, `applyNameLocalizedBuilder`, `applyDescriptionLocalizedBuilder`, `applyLocalizedBuilder` and
`createSelectMenuChoiceName` keep the same names and signatures. For most files the migration is a single
find-and-replace of the module specifier:

```diff
-import { FT, T, resolveKey } from '@wolfstar/http-framework-i18n';
+import { FT, T, resolveKey } from '@wolfstar/plugin-i18next';
```

### Removed APIs

| Removed                        | Replacement                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------- |
| `load(directory)`              | `i18n.defaultLanguageDirectory` client option                                |
| `init(options)`                | Handled by the plugin's `preLoad` hook; raw options go to `i18n.i18next`     |
| `addFormatters(...formatters)` | `i18n.formatters` client option                                              |
| `getT(locale)`                 | `container.i18n.getT(locale)`                                                |
| `loadedLocales`                | `container.i18n.languages` (a `Map<string, TFunction>`)                      |
| `loadedNamespaces`             | `container.i18n.namespaces`                                                  |
| `loadedPaths`                  | Derived from `i18n.defaultLanguageDirectory`; extra paths via `i18n.backend` |
| `loadedFormatters`             | `container.i18n.options.formatters`                                          |
| `Formatter`                    | `I18nextFormatter`                                                           |

```diff
-import { getT, loadedLocales } from '@wolfstar/http-framework-i18n';
+import { container } from '@wolfstar/http-framework';

-const t = getT('en-US');
-const isLoaded = loadedLocales.has('es-ES');
+const t = container.i18n.getT('en-US');
+const isLoaded = container.i18n.languages.has('es-ES');
```

### New APIs

| Added                   | What it does                                                                 |
| ----------------------- | ---------------------------------------------------------------------------- |
| `fetchLanguage(target)` | Resolves the language through `container.i18n.fetchLanguage`, with fallbacks |
| `fetchT(target)`        | `getT` over the result of `fetchLanguage`                                    |
| `fetchKey(target, key)` | Asynchronous `resolveKey` honouring the `fetchLanguage` hook                 |
| `createLocalizedChoice` | Localized `APIApplicationCommandOptionChoice` for `setChoices`               |
| `container.i18n`        | The `InternationalizationHandler` instance                                   |

### Per-Guild Languages <Badge type="tip" text="optional" />

The old package could only read the locales Discord puts on the interaction payload. If you store a language per guild,
you can now plug a resolver in and use the asynchronous `fetch*` helpers.

The resolver can be declared up-front as part of the `i18n` client option:

```typescript
import '@wolfstar/plugin-i18next/register';
import { Client } from '@wolfstar/http-framework';

const client = new Client({
	i18n: {
		fetchLanguage: async (context) => {
			if (!context.guildId) return null;
			const guild = await database.getGuild(context.guildId);
			return guild?.language ?? null;
		}
	}
});
await client.load();
```

Or assigned later on the handler, which is handy when the resolver depends on something only available after the client
is created (a database connection, for example):

```typescript
import { container } from '@wolfstar/http-framework';

container.i18n.fetchLanguage = async (context) => {
	if (!context.guildId) return null;
	const guild = await database.getGuild(context.guildId);
	return guild?.language ?? null;
};
```

Both forms feed the same hook — the client option is applied to the handler on creation, and a later assignment
overwrites it. Either way the asynchronous helpers pick it up:

```typescript
import { fetchKey, fetchT } from '@wolfstar/plugin-i18next';

const t = await fetchT(interaction);
const content = await fetchKey(interaction, 'commands/ping:success');
```

`resolveKey` and `resolveUserKey` stay synchronous and keep reading the interaction payload only, so existing call sites
do not change behaviour.

### Hot Module Replacement <Badge type="tip" text="optional" />

```typescript
const client = new Client({
	i18n: {
		hmr: { enabled: true }
	}
});
```

When enabled, the languages directory is watched with chokidar and `container.i18n.reloadResources()` runs on every
change or deletion.

### Upgrading `i18next` from 22 to 25

The plugin depends on `i18next@^25`. If your project pins `i18next` itself, bump it and review the
[i18next migration notes](https://www.i18next.com/misc/migration-guide). In practice the typed-key helpers absorb most
of the surface, but note that `TFunction` is now generic over namespace and key prefix, so explicitly annotated
`TFunction` variables may need their type arguments updated.

### Checklist

- [ ] `@wolfstar/http-framework-i18n` removed from `package.json`
- [ ] `@wolfstar/plugin-i18next` added, `@wolfstar/http-framework` on `^3.1.0` or newer
- [ ] `import '@wolfstar/plugin-i18next/register'` is the **first** import of the entry point
- [ ] `load()` / `init()` / `addFormatters()` calls removed, options moved to `new Client({ i18n })`
- [ ] Locales directory named `languages`, or `defaultLanguageDirectory` set
- [ ] Module specifiers updated across the codebase
- [ ] `getT` / `loadedLocales` call sites moved to `container.i18n`
