[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / mongooseIntegration

# Variable: mongooseIntegration

> `const` **mongooseIntegration**: () => `Integration` & `object`

Defined in: node_modules/.pnpm/@sentry+node@10.71.0_@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/mongoose/index.d.ts:19

Adds Sentry tracing instrumentation for the [mongoose](https://www.npmjs.com/package/mongoose) library.

For more information, see the [`mongooseIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/mongoose/).

## Returns

`Integration` & `object`

## Example

```javascript
const Sentry = require('@sentry/node');

Sentry.init({
	integrations: [Sentry.mongooseIntegration()]
});
```
