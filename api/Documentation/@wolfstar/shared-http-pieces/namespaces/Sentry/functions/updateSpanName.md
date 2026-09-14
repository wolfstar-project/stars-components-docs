[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / updateSpanName

# Function: updateSpanName()

> **updateSpanName**(`span`, `name`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/utils/spanUtils.d.ts:140

Updates the name of the given span and ensures that the span name is not
overwritten by the Sentry SDK.

Use this function instead of `span.updateName()` if you want to make sure that
your name is kept. For some spans, for example root `http.server` spans the
Sentry SDK would otherwise overwrite the span name with a high-quality name
it infers when the span ends.

Use this function in server code or when your span is started on the server
and on the client (browser). If you only update a span name on the client,
you can also use `span.updateName()` the SDK does not overwrite the name.

## Parameters

### span

[`Span`](../interfaces/Span.md)

The span to update the name of.

### name

`string`

The name to set on the span.

## Returns

`void`
