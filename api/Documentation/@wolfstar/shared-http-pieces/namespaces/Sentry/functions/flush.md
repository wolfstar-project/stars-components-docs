[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / flush

# Function: flush()

> **flush**(`timeout?`): `Promise`\<`boolean`\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/exports.d.ts:160

Call `flush()` on the current client, if there is one. See Client.flush.

## Parameters

### timeout?

`number`

Maximum time in ms the client should wait to flush its event queue. Omitting this parameter will cause
the client to wait until all events are sent before resolving the promise.

## Returns

`Promise`\<`boolean`\>

A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
doesn't (or if there's no client defined).
