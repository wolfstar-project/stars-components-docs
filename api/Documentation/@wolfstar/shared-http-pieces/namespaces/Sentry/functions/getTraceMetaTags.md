[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / getTraceMetaTags

# Function: getTraceMetaTags()

> **getTraceMetaTags**(`traceData?`): `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/utils/meta.d.ts:23

Returns a string of meta tags that represent the current trace data.

You can use this to propagate a trace from your server-side rendered Html to the browser.
This function returns up to two meta tags, `sentry-trace` and `baggage`, depending on the
current trace data state.

## Parameters

### traceData?

`SerializedTraceData`

## Returns

`string`

## Example

Usage example:

```js
function renderHtml() {
	return `
    <head>
      ${getTraceMetaTags()}
    </head>
  `;
}
```
