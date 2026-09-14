[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / hapiIntegration

# Variable: hapiIntegration

> `const` **hapiIntegration**: () => `Integration` & `object`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/hapi/index.d.ts:22

Adds Sentry tracing instrumentation for [Hapi](https://hapi.dev/).

If you also want to capture errors, you need to call `setupHapiErrorHandler(server)` after you set up your server.

For more information, see the [hapi documentation](https://docs.sentry.io/platforms/javascript/guides/hapi/).

## Returns

`Integration` & `object`

## Example

```javascript
const Sentry = require('@sentry/node');

Sentry.init({
	integrations: [Sentry.hapiIntegration()]
});
```
