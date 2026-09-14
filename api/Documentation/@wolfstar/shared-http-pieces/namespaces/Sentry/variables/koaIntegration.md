[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / koaIntegration

# Variable: koaIntegration

> `const` **koaIntegration**: (`options?`) => `Integration` & `object`

Defined in: node_modules/.pnpm/@sentry+node@10.71.0_@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/koa/index.d.ts:43

Adds Sentry tracing instrumentation for [Koa](https://koajs.com/).

If you also want to capture errors, you need to call `setupKoaErrorHandler(app)` after you set up your Koa server.

For more information, see the [koa documentation](https://docs.sentry.io/platforms/javascript/guides/koa/).

## Parameters

### options?

`KoaOptions`

Configuration options for the Koa integration.

## Returns

`Integration` & `object`

## Examples

```javascript
const Sentry = require('@sentry/node');

Sentry.init({
	integrations: [Sentry.koaIntegration()]
});
```

```javascript
// To ignore middleware spans
const Sentry = require('@sentry/node');

Sentry.init({
	integrations: [
		Sentry.koaIntegration({
			ignoreLayersType: ['middleware']
		})
	]
});
```
