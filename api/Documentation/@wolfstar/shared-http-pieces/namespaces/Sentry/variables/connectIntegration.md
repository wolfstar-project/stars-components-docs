[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / connectIntegration

# Variable: connectIntegration

> `const` **connectIntegration**: () => `Integration` & `object`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/connect/index.d.ts:24

Adds Sentry tracing instrumentation for [Connect](https://github.com/senchalabs/connect/).

If you also want to capture errors, you need to call `setupConnectErrorHandler(app)` after you initialize your connect app.

For more information, see the [connect documentation](https://docs.sentry.io/platforms/javascript/guides/connect/).

## Returns

`Integration` & `object`

## Example

```javascript
const Sentry = require('@sentry/node');

Sentry.init({
	integrations: [Sentry.connectIntegration()]
});
```
