[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / captureEvent

# Function: captureEvent()

> **captureEvent**(`event`, `hint?`): `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/exports.d.ts:35

Captures a manually created event and sends it to Sentry.

## Parameters

### event

[`Event`](../interfaces/Event.md)

The event to send to Sentry.

### hint?

[`EventHint`](../interfaces/EventHint.md)

Optional additional data to attach to the Sentry event.

## Returns

`string`

the id of the captured event.
