[@wolfstar/website](../../../../../../../../index.md) / [Documentation](../../../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../../../index.md) / [Sentry](../../../index.md) / [metrics](../index.md) / MetricOptions

# Interface: MetricOptions

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/metrics/public-api.d.ts:6

Options for capturing a metric.

## Properties

### attributes?

> `optional` **attributes?**: `Record`\<`string`, `unknown`\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/metrics/public-api.d.ts:14

Arbitrary structured data that stores information about the metric.

---

### scope?

> `optional` **scope?**: [`Scope`](../../../classes/Scope.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/metrics/public-api.d.ts:18

The scope to capture the metric with.

---

### unit?

> `optional` **unit?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/metrics/public-api.d.ts:10

The unit of the metric value.
