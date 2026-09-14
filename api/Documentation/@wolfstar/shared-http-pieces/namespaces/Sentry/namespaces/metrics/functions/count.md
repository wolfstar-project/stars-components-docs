[@wolfstar/website](../../../../../../../../index.md) / [Documentation](../../../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../../../index.md) / [Sentry](../../../index.md) / [metrics](../index.md) / count

# Function: count()

> **count**(`name`, `value?`, `options?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/metrics/public-api.d.ts:50

## Parameters

### name

`string`

The name of the counter metric.

### value?

`number`

The value to increment by (defaults to 1).

### options?

[`MetricOptions`](../interfaces/MetricOptions.md)

Options for capturing the metric.

## Returns

`void`

## Examples

```
Sentry.metrics.count('api.requests', 1, {
  attributes: {
    endpoint: '/api/users',
    method: 'GET',
    status: 200
  }
});
```

**With custom value**

```
Sentry.metrics.count('items.processed', 5, {
  attributes: {
    processor: 'batch-processor',
    queue: 'high-priority'
  }
});
```
