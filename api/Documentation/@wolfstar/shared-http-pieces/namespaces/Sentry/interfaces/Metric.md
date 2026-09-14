[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / Metric

# Interface: Metric

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/metric.d.ts:3

## Properties

### attributes?

> `optional` **attributes?**: `Record`\<`string`, `unknown`\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/metric.d.ts:23

Arbitrary structured data that stores information about the metric.

---

### name

> **name**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/metric.d.ts:7

The name of the metric.

---

### type

> **type**: `MetricType`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/metric.d.ts:15

The type of metric.

---

### unit?

> `optional` **unit?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/metric.d.ts:19

The unit of the metric value.

---

### value

> **value**: `number`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/metric.d.ts:11

The value of the metric.
