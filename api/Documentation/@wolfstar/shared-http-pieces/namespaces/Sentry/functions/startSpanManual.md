[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / startSpanManual

# Function: startSpanManual()

> **startSpanManual**\<`T`\>(`options`, `callback`): `T`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/trace.d.ts:28

Similar to `Sentry.startSpan`. Wraps a function with a transaction/span, but does not finish the span
after the function is done automatically. Use `span.end()` to end the span.

The created span is the active span and will be used as parent by other spans created inside the function
and can be accessed via `Sentry.getActiveSpan()`, as long as the function is executed while the scope is active.

You'll always get a span passed to the callback,
it may just be a non-recording span if the span is not sampled or if tracing is disabled.

## Type Parameters

### T

`T`

## Parameters

### options

`StartSpanOptions`

### callback

(`span`, `finish`) => `T`

## Returns

`T`
