[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / captureMessage

# Function: captureMessage()

> **captureMessage**(`message`, `captureContext?`): `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/exports.d.ts:27

Captures a message event and sends it to Sentry.

## Parameters

### message

`string`

The message to send to Sentry.

### captureContext?

[`CaptureContext`](../type-aliases/CaptureContext.md) \| [`SeverityLevel`](../type-aliases/SeverityLevel.md)

Define the level of the message or pass in additional data to attach to the message.

## Returns

`string`

the id of the captured message.
