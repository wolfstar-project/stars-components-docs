---
title: Getting started
description: Create and run a Discord bot with the WolfStar HTTP Framework.
---

# Getting started

The fastest way to start is the `@wolfstar/create-http-framework` CLI. It creates the entry point, an example command,
environment files, TypeScript or JavaScript configuration, and your preferred quality tools.

## Requirements

- Node.js 20 or newer
- A [Discord application](https://discord.com/developers/applications) with its token and public key
- A public HTTPS endpoint that Discord can use as the application's interactions endpoint

## Create a project

::: code-group

```bash [pnpm]
pnpm create @wolfstar/http-framework my-discord-bot
```

```bash [npm]
npm create @wolfstar/http-framework@latest my-discord-bot
```

```bash [yarn]
yarn create @wolfstar/http-framework my-discord-bot
```

```bash [bun]
bun create @wolfstar/http-framework my-discord-bot
```

:::

The interactive wizard lets you select:

- TypeScript or JavaScript
- `tsdown`, TypeScript 6, or the TypeScript 7 release candidate for TypeScript builds
- Oxlint, ESLint, or no linter
- Oxfmt, Prettier, or no formatter
- Optional i18n support
- HTTP port and package manager

For automation, provide every choice without prompts:

```bash
pnpm create @wolfstar/http-framework my-discord-bot \
  --no-interactive \
  --language ts \
  --build tsdown \
  --lint oxlint \
  --format oxfmt \
  --port 3000 \
  --no-i18n
```

## Configure credentials

Open the generated `.env` file and provide the credentials from the Discord developer portal:

```dotenv
DISCORD_TOKEN=your_application_token
DISCORD_PUBLIC_KEY=your_application_public_key
```

Never commit this file or expose either value in logs.

## Understand the generated app

The generated entry point creates a client, loads commands from `src/commands`, and starts the HTTP server:

```typescript
import { Client } from '@wolfstar/http-framework';

const client = new Client();

await client.load();
await client.listen({ port: 3000 });
```

`client.load()` accepts no arguments here: it auto-detects the `commands` directory next to your entry file, so
there's no manual path resolution to write. `discordToken` and `discordPublicKey` are picked up from the
`DISCORD_TOKEN` and `DISCORD_PUBLIC_KEY` environment variables the same way, so you don't need to pass them to `new
Client()` either. This is the same pattern used in production bots such as
[`wolfstar-project/staryl`](https://github.com/wolfstar-project/staryl/blob/main/src/main.ts) and
[`wolfstar-project/ring`](https://github.com/wolfstar-project/ring/blob/main/src/main.ts):

```typescript
const client = new Client({
	api: {
		listenOptions: {
			host: envParseString('API_ADDRESS'),
			port: envParseInteger('API_PORT')
		}
	}
});
await client.load();
```

If your commands don't live in a `commands` directory next to the entry file, pass `baseUserDirectory` explicitly.
It's the _root_ directory — `client.load()` appends the store name (`commands`, `interaction-handlers`, ...) to it
for you, so don't include `commands` in the path yourself. For example, if your build puts everything under a `bot/`
subdirectory next to the entry file (`bot/commands`, `bot/interaction-handlers`, ...):

```typescript
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

await client.load({
	baseUserDirectory: join(dirname(fileURLToPath(import.meta.url)), 'bot')
});
```

## Next steps

1. Follow [Build a command](/guide/commands) to understand decorators and interactions.
2. Configure your public URL as the Discord application's interactions endpoint.
3. Add [interaction tests](/guide/testing) before expanding the command set.
4. Browse the [`@wolfstar/http-framework` package guide](/packages/http-framework) and [API reference](/api/).
5. Explore the runnable samples in the repository [`examples/`](https://github.com/wolfstar-project/stars-components/tree/main/examples) folder.
