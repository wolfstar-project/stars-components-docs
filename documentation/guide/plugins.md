---
title: Plugins
description: Optional @wolfstar/http-framework extensions maintained in the wolfstar-project/plugins repository.
---

# Plugins

Plugins are opt-in extensions for [`@wolfstar/http-framework`](/packages/http-framework). They live outside this
repository, in [`wolfstar-project/plugins`](https://github.com/wolfstar-project/plugins), and release on their own
schedule — adding one never bumps the core framework, and the framework has no required dependency on any of them.

::: tip Prerequisites
Every plugin requires `@wolfstar/http-framework@^3.1.0` or newer as a peer dependency.
:::

## Available Plugins

| Plugin                                                                           | What it does                                                |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`@wolfstar/plugin-i18next`](/packages/plugin-i18next)                           | i18next-powered internationalization for interactions       |
| [`@wolfstar/plugin-api`](/packages/plugin-api)                                   | Standalone REST API server alongside interaction handling   |
| [`@wolfstar/plugin-subcommands-advanced`](/packages/plugin-subcommands-advanced) | Modularizes slash subcommands into separate command classes |

Browse the [source on GitHub](https://github.com/wolfstar-project/plugins/tree/main/packages) or the generated
[API reference](/api/) for the full surface of each one.

## Installing a Plugin

::: code-group

```bash [pnpm]
pnpm add @wolfstar/plugin-i18next
```

```bash [npm]
npm install @wolfstar/plugin-i18next
```

```bash [yarn]
yarn add @wolfstar/plugin-i18next
```

```bash [bun]
bun add @wolfstar/plugin-i18next
```

:::

Most plugins register through a side-effecting `/register` entry point, imported **before** the client is created,
with configuration passed as a client option:

```typescript
import '@wolfstar/plugin-i18next/register';
import { Client } from '@wolfstar/http-framework';

const client = new Client({
	i18n: {
		defaultLanguageDirectory: new URL('languages', import.meta.url).pathname
	}
});
await client.load();
```

Check each plugin's package page for its exact registration entry point and options — see
[`@wolfstar/plugin-i18next`](/packages/plugin-i18next), [`@wolfstar/plugin-api`](/packages/plugin-api), and
[`@wolfstar/plugin-subcommands-advanced`](/packages/plugin-subcommands-advanced).

## Coming from `@wolfstar/http-framework-i18n`?

That package is deprecated in favor of `@wolfstar/plugin-i18next`. Follow the [migration guide](/guide/migration).

## Writing Your Own Plugin

Plugins are regular `@wolfstar/http-framework` consumers — there is no separate plugin API to learn beyond the
client's lifecycle hooks (`preLoad`, and the piece stores). Read an existing plugin's source, such as
[`plugin-i18next`](https://github.com/wolfstar-project/plugins/tree/main/packages/plugin-i18next), as a template, and
open a pull request against [`wolfstar-project/plugins`](https://github.com/wolfstar-project/plugins) to have it
added to this list.
