[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / startInactiveSpan

# Function: startInactiveSpan()

> **startInactiveSpan**(`options`): [`Span`](../interfaces/Span.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/trace.d.ts:38

Creates a span. This span is not set as active, so will not get automatic instrumentation spans
as children or be able to be accessed via `Sentry.getActiveSpan()`.

If you want to create a span that is set as active, use [startSpan](startSpan.md).

This function will always return a span,
it may just be a non-recording span if the span is not sampled or if tracing is disabled.

## Parameters

### options

`StartSpanOptions`

## Returns

[`Span`](../interfaces/Span.md)
