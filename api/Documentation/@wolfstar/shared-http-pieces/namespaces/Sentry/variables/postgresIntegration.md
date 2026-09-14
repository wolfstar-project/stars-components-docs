[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / postgresIntegration

# Variable: postgresIntegration

> `const` **postgresIntegration**: (`options?`) => `Integration` & `object`

Defined in: node_modules/.pnpm/@sentry+node@10.71.0_@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/postgres/index.d.ts:22

Adds Sentry tracing instrumentation for the [pg](https://www.npmjs.com/package/pg) library.

For more information, see the [`postgresIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/postgres/).

## Parameters

### options?

`PostgresIntegrationOptions`

## Returns

`Integration` & `object`

## Example

```javascript
const Sentry = require('@sentry/node');

Sentry.init({
	integrations: [Sentry.postgresIntegration()]
});
```
