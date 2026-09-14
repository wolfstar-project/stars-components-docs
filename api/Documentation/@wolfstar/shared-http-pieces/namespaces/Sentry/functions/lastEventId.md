[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / lastEventId

# Function: lastEventId()

> **lastEventId**(): `string` \| `undefined`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/exports.d.ts:134

The last error event id of the isolation scope.

Warning: This function really returns the last recorded error event id on the current
isolation scope. If you call this function after handling a certain error and another error
is captured in between, the last one is returned instead of the one you might expect.
Also, ids of events that were never sent to Sentry (for example because
they were dropped by sampling or `beforeSend`) could be returned.

## Returns

`string` \| `undefined`

The last event id of the isolation scope.
