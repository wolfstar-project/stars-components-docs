[@wolfstar/website](../../../../../../../../index.md) / [Documentation](../../../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../../../index.md) / [Sentry](../../../index.md) / [metrics](../index.md) / gauge

# Function: gauge()

> **gauge**(`name`, `value`, `options?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/metrics/public-api.d.ts:81

## Parameters

### name

`string`

The name of the gauge metric.

### value

`number`

The current value of the gauge.

### options?

[`MetricOptions`](../interfaces/MetricOptions.md)

Options for capturing the metric.

## Returns

`void`

## Examples

```
Sentry.metrics.gauge('memory.usage', 1024, {
  unit: 'megabyte',
  attributes: {
    process: 'web-server',
    region: 'us-east-1'
  }
});
```

**Without unit**

```
Sentry.metrics.gauge('active.connections', 42, {
  attributes: {
    server: 'api-1',
    protocol: 'websocket'
  }
});
```
