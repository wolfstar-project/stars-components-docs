[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / nodeRuntimeMetricsIntegration

# Variable: nodeRuntimeMetricsIntegration

> `const` **nodeRuntimeMetricsIntegration**: (`options?`) => `Integration` & `object`

Defined in: node*modules/.pnpm/@sentry+node-core@10.71.0*@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/integrations/nodeRuntimeMetrics.d.ts:63

Automatically collects Node.js runtime metrics and emits them to Sentry.

## Parameters

### options?

[`NodeRuntimeMetricsOptions`](../interfaces/NodeRuntimeMetricsOptions.md)

## Returns

`Integration` & `object`

## Example

```ts
Sentry.init({
	integrations: [Sentry.nodeRuntimeMetricsIntegration()]
});
```
