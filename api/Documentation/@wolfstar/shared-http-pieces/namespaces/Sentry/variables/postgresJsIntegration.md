[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / postgresJsIntegration

# Variable: postgresJsIntegration

> `const` **postgresJsIntegration**: (`options?`) => `Integration` & `object`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/postgresjs.d.ts:99

Adds Sentry tracing instrumentation for the [postgres](https://www.npmjs.com/package/postgres) library.

For more information, see the [`postgresIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/postgres/).

## Parameters

### options?

`PostgresJsInstrumentationConfig`

## Returns

`Integration` & `object`

## Example

```javascript
const Sentry = require('@sentry/node');

Sentry.init({
	integrations: [Sentry.postgresJsIntegration()]
});
```
