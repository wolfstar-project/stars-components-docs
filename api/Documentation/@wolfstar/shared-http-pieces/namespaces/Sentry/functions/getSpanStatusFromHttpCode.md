[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / getSpanStatusFromHttpCode

# Function: getSpanStatusFromHttpCode()

> **getSpanStatusFromHttpCode**(`httpStatus`): `SpanStatus`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/spanstatus.d.ts:12

Converts a HTTP status code into a sentry status with a message.

## Parameters

### httpStatus

`number`

The HTTP response status code.

## Returns

`SpanStatus`

The span status or internal_error.
