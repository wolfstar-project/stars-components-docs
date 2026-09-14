[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / addEventProcessor

# Function: addEventProcessor()

> **addEventProcessor**(`callback`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/exports.d.ts:181

Add an event processor.
This will be added to the current isolation scope, ensuring any event that is processed in the current execution
context will have the processor applied.

## Parameters

### callback

`EventProcessor`

## Returns

`void`
