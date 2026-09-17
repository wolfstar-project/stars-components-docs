---
title: Architecture
description: Understand how Stars Components packages fit together.
---

# Architecture

Stars Components is a monorepo of focused packages. You can use infrastructure helpers independently, while the framework
packages form an optional stack for HTTP-only Discord bots.

## Package Layers

```text
Application
├─ @wolfstar/shared-http-pieces
├─ @wolfstar/shared-influx-pieces
└─ your commands and listeners
          │
Framework │
├─ @wolfstar/http-framework
├─ @wolfstar/plugin-i18next
├─ @wolfstar/i18next-backend
└─ @wolfstar/http-framework-test-utils
          │
Utilities │
├─ @wolfstar/env-utilities
├─ @wolfstar/influx-utilities
├─ @wolfstar/logger
├─ @wolfstar/safe-fetch
└─ @wolfstar/start-banner
          │
Services  │
├─ @wolfstar/reddit-helpers
├─ @wolfstar/twitch-helpers
└─ @wolfstar/weather-helpers
```

## Core Framework

`@wolfstar/http-framework` owns the HTTP server, Discord request verification, interaction routing, piece stores, and
application-command registry. Commands and listeners remain regular classes so they can be discovered, reloaded, and
tested independently.

The surrounding packages add optional capabilities:

| Package                               | Responsibility                                           |
| ------------------------------------- | -------------------------------------------------------- |
| `@wolfstar/create-http-framework`     | Creates a complete starter project                       |
| `@wolfstar/plugin-i18next`            | Resolves translations for users and guilds               |
| `@wolfstar/i18next-backend`           | Loads and merges locale files                            |
| `@wolfstar/http-framework-test-utils` | Dispatches interaction fixtures without a network server |

::: warning
`@wolfstar/http-framework-i18n` is deprecated in favour of `@wolfstar/plugin-i18next`. See the
[migration guide](/guide/migration).
:::

`@wolfstar/plugin-i18next`, along with the other optional framework extensions, is released independently from its
own [`wolfstar-project/plugins`](https://github.com/wolfstar-project/plugins) repository — see the
[Plugins guide](/guide/plugins).

## Shared Pieces

Shared pieces are opinionated application modules. Importing their `/register` entry point loads commands or listeners
into the framework:

```typescript
import '@wolfstar/shared-http-pieces/register';
import '@wolfstar/shared-influx-pieces/register';
```

Because these imports have side effects, configure environment variables and shared clients first. See each package page
for the required setup.

## Utility Packages

Infrastructure and platform helpers do not require the HTTP Framework unless their package page says otherwise. This
makes it safe to adopt `@wolfstar/safe-fetch`, `@wolfstar/logger`, or a service helper in an existing Node.js application.

## Public API Source

Every package exposes its supported API through `src/index.ts` and explicit `package.json` export maps. The
[API reference](/api/) is generated from those entry points during every documentation build, so private implementation
files do not become accidental public contracts.
