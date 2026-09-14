[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / withStreamedSpan

# Function: withStreamedSpan()

> **withStreamedSpan**(`callback`): (`span`) => `SpanJSON` & `object` & `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/spans/beforeSendSpan.d.ts:24

A wrapper to use the new span format in your `beforeSendSpan` callback.

When using `traceLifecycle: 'stream'`, wrap your callback with this function
to receive and return StreamedSpanJSON instead of the standard SpanJSON.

## Parameters

### callback

(`span`) => `StreamedSpanJSON`

The callback function that receives and returns a StreamedSpanJSON.

## Returns

(`span`) => `SpanJSON` & `object` & `object`

A callback that is compatible with the `beforeSendSpan` option when using `traceLifecycle: 'stream'`.

## Example

```ts
Sentry.init({
	traceLifecycle: 'stream',
	beforeSendSpan: withStreamedSpan((span) => {
		// span is of type StreamedSpanJSON
		return span;
	})
});
```
