[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / instrumentGoogleGenAIClient

# Function: instrumentGoogleGenAIClient()

> **instrumentGoogleGenAIClient**\<`T`\>(`client`, `options?`): `T`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/google-genai/index.d.ts:46

Instrument a Google GenAI client with Sentry tracing
Can be used across Node.js, Cloudflare Workers, and Vercel Edge

## Type Parameters

### T

`T` _extends_ `object`

The type of the client that extends client object

## Parameters

### client

`T`

The Google GenAI client to instrument

### options?

`GoogleGenAIOptions`

Optional configuration for recording inputs and outputs

## Returns

`T`

The instrumented client with the same type as the input

## Example

```typescript
import { GoogleGenAI } from '@google/genai';
import { instrumentGoogleGenAIClient } from '@sentry/core';

const genAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY });
const instrumentedClient = instrumentGoogleGenAIClient(genAI);

// Now both chats.create and sendMessage will be instrumented
const chat = instrumentedClient.chats.create({ model: 'gemini-1.5-pro' });
const response = await chat.sendMessage({ message: 'Hello' });
```
