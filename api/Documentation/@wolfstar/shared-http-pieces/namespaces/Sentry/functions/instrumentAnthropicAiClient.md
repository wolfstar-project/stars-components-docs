[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / instrumentAnthropicAiClient

# Function: instrumentAnthropicAiClient()

> **instrumentAnthropicAiClient**\<`T`\>(`anthropicAiClient`, `options?`): `T`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/anthropic-ai/index.d.ts:25

Instrument an Anthropic AI client with Sentry tracing
Can be used across Node.js, Cloudflare Workers, and Vercel Edge

## Type Parameters

### T

`T` _extends_ `object`

The type of the client that extends object

## Parameters

### anthropicAiClient

`T`

### options?

`AnthropicAiOptions`

Optional configuration for recording inputs and outputs

## Returns

`T`

The instrumented client with the same type as the input
