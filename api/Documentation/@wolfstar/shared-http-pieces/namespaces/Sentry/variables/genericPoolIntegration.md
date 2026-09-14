[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / genericPoolIntegration

# Variable: genericPoolIntegration

> `const` **genericPoolIntegration**: () => `Integration` & `object`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/genericPool/index.d.ts:19

Adds Sentry tracing instrumentation for the [generic-pool](https://www.npmjs.com/package/generic-pool) library.

For more information, see the [`genericPoolIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/genericpool/).

## Returns

`Integration` & `object`

## Example

```javascript
const Sentry = require('@sentry/node');

Sentry.init({
	integrations: [Sentry.genericPoolIntegration()]
});
```
