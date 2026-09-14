[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / captureCheckIn

# Function: captureCheckIn()

> **captureCheckIn**(`checkIn`, `upsertMonitorConfig?`): `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/exports.d.ts:142

Create a cron monitor check in and send it to Sentry.

## Parameters

### checkIn

`CheckIn`

An object that describes a check in.

### upsertMonitorConfig?

`MonitorConfig`

An optional object that describes a monitor config. Use this if you want
to create a monitor automatically when sending a check in.

## Returns

`string`
