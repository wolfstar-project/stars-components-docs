[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / startSession

# Function: startSession()

> **startSession**(`context?`): [`Session`](../interfaces/Session.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/exports.d.ts:189

Start a session on the current isolation scope.

## Parameters

### context?

`Partial`\<[`Session`](../interfaces/Session.md)\>

(optional) additional properties to be applied to the returned session object

## Returns

[`Session`](../interfaces/Session.md)

the new active session
