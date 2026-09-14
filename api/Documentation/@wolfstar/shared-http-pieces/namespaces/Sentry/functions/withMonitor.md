[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / withMonitor

# Function: withMonitor()

> **withMonitor**\<`T`\>(`monitorSlug`, `callback`, `upsertMonitorConfig?`): `T`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/exports.d.ts:151

Wraps a callback with a cron monitor check in. The check in will be sent to Sentry when the callback finishes.

## Type Parameters

### T

`T`

## Parameters

### monitorSlug

`string`

The distinct slug of the monitor.

### callback

() => `T`

Callback to be monitored

### upsertMonitorConfig?

`MonitorConfig`

An optional object that describes a monitor config. Use this if you want
to create a monitor automatically when sending a check in.

## Returns

`T`
