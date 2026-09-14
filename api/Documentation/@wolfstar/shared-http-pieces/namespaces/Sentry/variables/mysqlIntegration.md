[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / mysqlIntegration

# Variable: mysqlIntegration

> `const` **mysqlIntegration**: () => `Integration` & `object`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/mysql/index.d.ts:19

Adds Sentry tracing instrumentation for the [mysql](https://www.npmjs.com/package/mysql) library.

For more information, see the [`mysqlIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/mysql/).

## Returns

`Integration` & `object`

## Example

```javascript
const Sentry = require('@sentry/node');

Sentry.init({
	integrations: [Sentry.mysqlIntegration()]
});
```
