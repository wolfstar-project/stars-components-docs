[@wolfstar/website](../../../../../../../../index.md) / [Documentation](../../../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../../../index.md) / [Sentry](../../../index.md) / [metrics](../index.md) / distribution

# Function: distribution()

> **distribution**(`name`, `value`, `options?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/metrics/public-api.d.ts:112

## Parameters

### name

`string`

The name of the distribution metric.

### value

`number`

The value to record in the distribution.

### options?

[`MetricOptions`](../interfaces/MetricOptions.md)

Options for capturing the metric.

## Returns

`void`

## Examples

```
Sentry.metrics.distribution('task.duration', 500, {
  unit: 'millisecond',
  attributes: {
    task: 'data-processing',
    priority: 'high'
  }
});
```

**Without unit**

```
Sentry.metrics.distribution('batch.size', 100, {
  attributes: {
    processor: 'batch-1',
    type: 'async'
  }
});
```
