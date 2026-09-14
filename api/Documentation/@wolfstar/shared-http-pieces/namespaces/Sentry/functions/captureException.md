[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / captureException

# Function: captureException()

> **captureException**(`exception`, `hint?`): `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/exports.d.ts:19

Captures an exception event and sends it to Sentry.

## Parameters

### exception

`unknown`

The exception to capture.

### hint?

[`ExclusiveEventHintOrCaptureContext`](../type-aliases/ExclusiveEventHintOrCaptureContext.md)

Optional additional data to attach to the Sentry event.

## Returns

`string`

the id of the captured Sentry event.
