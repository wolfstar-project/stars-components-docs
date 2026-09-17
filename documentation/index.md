---
title: 'Introduction'
description: 'Welcome to your project'
---

Stars Components is a set of focused TypeScript packages powering the Star Network — build the HTTP-first Discord bot stack behind WolfStar, Staryl, and Ring, or adopt one package on its own.

<CardGroup cols={2}>
  <Card title="Get Started" icon="rocket" href="/quickstart">
    Create and run your first HTTP-first Discord bot.
  </Card>

  <Card title="Features" icon="stars" href="/guide/features">
    See the full picture of what Stars Components covers.
  </Card>

  <Card title="Why Stars Components?" icon="circle-question" href="/guide/why">
    The reasoning behind an HTTP-only approach.
  </Card>

  <Card title="View on GitHub" icon="github" href="https://github.com/wolfstar-project/stars-components">
    Browse the source and open issues.
  </Card>
</CardGroup>

<Tip>
  **Recommended path**

Create a project with `pnpm create @wolfstar/http-framework my-bot`, then continue with the [getting started guide](/quickstart).
</Tip>

## One workspace, focused packages

Stars Components contains the shared building blocks used across the Star Network. Start with the scaffolding CLI for a
new bot, or add only the utility your project needs.

<CardGroup cols={2}>
  <Card title="HTTP-First Discord Bots" icon="bolt" href="/packages/http-framework">
    Handle Discord interactions without a gateway connection and register commands through typed decorators.
  </Card>

  <Card title="Composable Packages" icon="puzzle-piece" href="/guide/architecture">
    Adopt one focused utility or combine the framework, i18n, shared pieces, and metrics as a complete stack.
  </Card>

  <Card title="Interaction Testing" icon="flask" href="/guide/testing">
    Exercise commands with typed fixtures, a local test harness, and dedicated Vitest matchers.
  </Card>

  <Card title="Internationalization" icon="earth-americas" href="/packages/http-framework-i18n">
    Load locale resources from disk and resolve typed translations for users and guilds.
  </Card>

  <Card title="Safer Infrastructure" icon="shield" href="/packages/env-utilities">
    Parse environment variables, wrap fetch in Result values, and reuse structured logging utilities.
  </Card>

  <Card title="Searchable API" icon="book-open" href="/api/index">
    Browse an API reference generated directly from every public TypeScript export.
  </Card>
</CardGroup>
