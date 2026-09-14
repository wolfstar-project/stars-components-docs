[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / setMeasurement

# Function: setMeasurement()

> **setMeasurement**(`name`, `value`, `unit`, `activeSpan?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/measurement.d.ts:7

Adds a measurement to the active transaction on the current global scope. You can optionally pass in a different span
as the 4th parameter.

## Parameters

### name

`string`

### value

`number`

### unit

`MeasurementUnit`

### activeSpan?

[`Span`](../interfaces/Span.md)

## Returns

`void`
