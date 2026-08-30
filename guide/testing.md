---
title: Testing Interactions
description: Test HTTP Framework commands with Vitest fixtures and custom matchers.
---

# Testing Interactions

`@wolfstar/http-framework-test-utils` dispatches Discord interaction payloads through a testable client. Tests exercise the
real router and command classes without opening a port or calling Discord.

## Install

```bash
pnpm add --save-dev @wolfstar/http-framework-test-utils vitest
```

## Register Matchers

Add the package's optional Vitest entry point to your setup file:

```typescript
// vitest.setup.ts
import { httpFrameworkMatchers } from '@wolfstar/http-framework-test-utils/vitest';
import { expect } from 'vitest';

expect.extend(httpFrameworkMatchers);
```

## Create a Harness

```typescript
import { ChatInputApplicationCommandInteractionData, createTestHarness } from '@wolfstar/http-framework-test-utils';
import { describe, expect, it } from 'vitest';

describe('ping command', () => {
	it('replies with Pong', async () => {
		const { client, runner } = createTestHarness();
		await client.load();

		const result = await runner.run({
			...ChatInputApplicationCommandInteractionData,
			data: {
				id: '0',
				name: 'ping',
				type: 1,
				options: []
			}
		});

		expect(result).toHaveStatus(200);
		expect(result.json()).toMatchObject({
			type: 4,
			data: { content: 'Pong!' }
		});
	});
});
```

## Choose the Right Assertion

| Matcher                           | Use it for                                    |
| --------------------------------- | --------------------------------------------- |
| `toHaveStatus(code)`              | HTTP response status                          |
| `toHaveBody(body)`                | Exact serialized body                         |
| `toHaveJsonBody(value)`           | Strict deep equality for the parsed JSON body |
| `result.json()` + `toMatchObject` | A partial JSON assertion                      |

`toHaveJsonBody` compares every nested key. Prefer `toMatchObject` when the interaction response contains unrelated
metadata.

## Available Fixtures

The package provides fixtures for chat-input, user, and message commands; autocomplete; buttons; every select-menu
variant; and modal submissions. Base user, guild member, message, and interaction data are also exported for composing
custom payloads.

Read the [package guide](/packages/http-framework-test-utils) for helper utilities and the
[generated API reference](/api/) for fixture types.
