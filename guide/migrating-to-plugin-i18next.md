---
title: 'Migrating to @wolfstar/plugin-i18next'
description: Move from the deprecated @wolfstar/http-framework-i18n package to the @wolfstar/plugin-i18next plugin.
---

# Migrating to `@wolfstar/plugin-i18next`

[`@wolfstar/http-framework-i18n`](/packages/http-framework-i18n) is **deprecated**. Its successor is
[`@wolfstar/plugin-i18next`](/packages/plugin-i18next), an official plugin for
[`@wolfstar/http-framework`](/packages/http-framework) that lives in the
[`wolfstar-project/plugins`](https://github.com/wolfstar-project/plugins/tree/main/packages/plugin-i18next)
repository. No further releases are planned for the old package.

The new plugin keeps the same typed-key philosophy (`T` / `FT`, `resolveKey`, `applyLocalizedBuilder`) but replaces the
manual `load()` + `init()` bootstrap with the framework's plugin lifecycle, and moves the loaded state onto
`container.i18n`.

## What changes

| Area                   | `@wolfstar/http-framework-i18n`                 | `@wolfstar/plugin-i18next`                                      |
| ---------------------- | ----------------------------------------------- | --------------------------------------------------------------- |
| Bootstrap              | Manual `await load(...)` then `await init(...)` | `import '@wolfstar/plugin-i18next/register'` + `i18n` options   |
| State                  | Module-level sets (`loadedLocales`, …)          | `container.i18n` (`InternationalizationHandler`)                |
| Locales directory      | Any path passed to `load()`                     | `i18n.defaultLanguageDirectory`, defaults to `<root>/languages` |
| Formatters             | `addFormatters(...)`                            | `i18n.formatters` client option                                 |
| Language resolution    | Interaction payload only                        | Interaction payload **or** `container.i18n.fetchLanguage`       |
| Hot reload             | Not available                                   | `i18n.hmr.enabled`                                              |
| `i18next`              | `^22.5.1`                                       | `^25.8.18`                                                      |
| Relationship to client | Standalone module                               | Framework plugin, requires `@wolfstar/http-framework@^3.1.0`    |

## 1. Swap the dependency

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

## 2. Replace the bootstrap

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

The plugin registers a `preLoad` hook that awaits `container.i18n.init()` **before** the stores load, so command
builders can still be localized at registration time — the ordering the manual `await init()` used to guarantee.

## 3. Rename the locales directory

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

## 4. Update the imports

`T`, `FT`, `resolveKey`, `resolveUserKey`, `getSupportedLanguageName`, `getSupportedUserLanguageName`,
`getSupportedLanguageT`, `getSupportedUserLanguageT`, `supportedLanguages`, `isSupportedDiscordLocale`,
`getLocalizedData`, `applyNameLocalizedBuilder`, `applyDescriptionLocalizedBuilder`, `applyLocalizedBuilder` and
`createSelectMenuChoiceName` keep the same names and signatures. For most files the migration is a single
find-and-replace of the module specifier:

```diff
-import { FT, T, resolveKey } from '@wolfstar/http-framework-i18n';
+import { FT, T, resolveKey } from '@wolfstar/plugin-i18next';
```

### Removed exports

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

### New exports

| Added                   | What it does                                                                 |
| ----------------------- | ---------------------------------------------------------------------------- |
| `fetchLanguage(target)` | Resolves the language through `container.i18n.fetchLanguage`, with fallbacks |
| `fetchT(target)`        | `getT` over the result of `fetchLanguage`                                    |
| `fetchKey(target, key)` | Asynchronous `resolveKey` honouring the `fetchLanguage` hook                 |
| `createLocalizedChoice` | Localized `APIApplicationCommandOptionChoice` for `setChoices`               |
| `container.i18n`        | The `InternationalizationHandler` instance                                   |

## 5. Optional — per-guild languages

The old package could only read the locales Discord puts on the interaction payload. If you store a language per guild,
you can now plug a resolver in and use the asynchronous `fetch*` helpers:

```typescript
import { container } from '@wolfstar/http-framework';
import { fetchKey, fetchT } from '@wolfstar/plugin-i18next';

container.i18n.fetchLanguage = async (context) => {
	if (!context.guildId) return null;
	const guild = await database.getGuild(context.guildId);
	return guild?.language ?? null;
};

const t = await fetchT(interaction);
const content = await fetchKey(interaction, 'commands/ping:success');
```

`resolveKey` and `resolveUserKey` stay synchronous and keep reading the interaction payload only, so existing call sites
do not change behaviour.

## 6. Optional — hot module replacement

```typescript
const client = new Client({
	i18n: {
		hmr: { enabled: true }
	}
});
```

When enabled, the languages directory is watched with chokidar and `container.i18n.reloadResources()` runs on every
change or deletion.

## i18next 22 → 25

The plugin depends on `i18next@^25`. If your project pins `i18next` itself, bump it and review the
[i18next migration notes](https://www.i18next.com/misc/migration-guide). In practice the typed-key helpers absorb most
of the surface, but note that `TFunction` is now generic over namespace and key prefix, so explicitly annotated
`TFunction` variables may need their type arguments updated.

## Checklist

- [ ] `@wolfstar/http-framework-i18n` removed from `package.json`
- [ ] `@wolfstar/plugin-i18next` added, `@wolfstar/http-framework` on `^3.1.0` or newer
- [ ] `import '@wolfstar/plugin-i18next/register'` is the **first** import of the entry point
- [ ] `load()` / `init()` / `addFormatters()` calls removed, options moved to `new Client({ i18n })`
- [ ] Locales directory named `languages`, or `defaultLanguageDirectory` set
- [ ] Module specifiers updated across the codebase
- [ ] `getT` / `loadedLocales` call sites moved to `container.i18n`
