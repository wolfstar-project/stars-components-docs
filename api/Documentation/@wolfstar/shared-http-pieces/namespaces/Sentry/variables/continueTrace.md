[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / continueTrace

# Variable: continueTrace

> `const` **continueTrace**: \<`V`\>(`options`, `callback`) => `V`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/trace.d.ts:54

Continue a trace from `sentry-trace` and `baggage` values.
These values can be obtained from incoming request headers, or in the browser from `<meta name="sentry-trace">`
and `<meta name="baggage">` HTML tags.

Spans started with `startSpan`, `startSpanManual` and `startInactiveSpan`, within the callback will automatically
be attached to the incoming trace.

## Type Parameters

### V

`V`

## Parameters

### options

#### baggage

`Parameters`\<_typeof_ `propagationContextFromHeaders`\>\[`1`\]

#### sentryTrace

`Parameters`\<_typeof_ `propagationContextFromHeaders`\>\[`0`\]

### callback

() => `V`

## Returns

`V`
