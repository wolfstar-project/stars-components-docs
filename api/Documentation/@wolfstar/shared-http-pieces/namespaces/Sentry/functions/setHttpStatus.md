[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / setHttpStatus

# Function: setHttpStatus()

> **setHttpStatus**(`span`, `httpStatus`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/spanstatus.d.ts:17

Sets the Http status attributes on the current span based on the http code.
Additionally, the span's status is updated, depending on the http code.

## Parameters

### span

[`Span`](../interfaces/Span.md)

### httpStatus

`number`

## Returns

`void`
