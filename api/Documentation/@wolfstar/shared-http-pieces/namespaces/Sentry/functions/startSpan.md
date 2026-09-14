[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / startSpan

# Function: startSpan()

> **startSpan**\<`T`\>(`options`, `callback`): `T`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/trace.d.ts:17

Wraps a function with a transaction/span and finishes the span after the function is done.
The created span is the active span and will be used as parent by other spans created inside the function
and can be accessed via `Sentry.getActiveSpan()`, as long as the function is executed while the scope is active.

If you want to create a span that is not set as active, use [startInactiveSpan](startInactiveSpan.md).

You'll always get a span passed to the callback,
it may just be a non-recording span if the span is not sampled or if tracing is disabled.

## Type Parameters

### T

`T`

## Parameters

### options

`StartSpanOptions`

### callback

(`span`) => `T`

## Returns

`T`
