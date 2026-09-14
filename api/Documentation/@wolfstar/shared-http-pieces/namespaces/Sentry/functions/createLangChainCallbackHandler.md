[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / createLangChainCallbackHandler

# Function: createLangChainCallbackHandler()

> **createLangChainCallbackHandler**(`options?`): `LangChainCallbackHandler`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/langchain/index.d.ts:8

Creates a Sentry callback handler for LangChain
Returns a plain object that LangChain will call via duck-typing

This is a stateful handler that tracks spans across multiple LangChain executions.

## Parameters

### options?

`LangChainOptions`

## Returns

`LangChainCallbackHandler`
