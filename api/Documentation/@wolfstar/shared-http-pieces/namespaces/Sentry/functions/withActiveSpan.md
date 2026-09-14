[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / withActiveSpan

# Function: withActiveSpan()

> **withActiveSpan**\<`T`\>(`span`, `callback`): `T`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/trace.d.ts:67

Forks the current scope and sets the provided span as active span in the context of the provided callback. Can be
passed `null` to start an entirely new span tree.

## Type Parameters

### T

`T`

## Parameters

### span

[`Span`](../interfaces/Span.md) \| `null`

Spans started in the context of the provided callback will be children of this span. If `null` is passed,
spans started within the callback will not be attached to a parent span.

### callback

(`scope`) => `T`

Execution context in which the provided span will be active. Is passed the newly forked scope.

## Returns

`T`

the value returned from the provided callback function.
