[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / mysql2Integration

# Variable: mysql2Integration

> `const` **mysql2Integration**: () => `Integration` & `object`

Defined in: node_modules/.pnpm/@sentry+node@10.71.0_@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/mysql2/index.d.ts:19

Adds Sentry tracing instrumentation for the [mysql2](https://www.npmjs.com/package/mysql2) library.

For more information, see the [`mysql2Integration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/mysql2/).

## Returns

`Integration` & `object`

## Example

```javascript
const Sentry = require('@sentry/node');

Sentry.init({
	integrations: [Sentry.mysqlIntegration()]
});
```
