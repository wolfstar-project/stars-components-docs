[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / honoIntegration

# ~~Variable: honoIntegration~~

> `const` **honoIntegration**: () => `Integration` & `object`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/hono/index.d.ts:25

Adds Sentry tracing instrumentation for [Hono](https://hono.dev/).

If you also want to capture errors, you need to call `setupHonoErrorHandler(app)` after you set up your Hono server.

For more information, see the [hono documentation](https://docs.sentry.io/platforms/javascript/guides/hono/).

## Returns

`Integration` & `object`

## Deprecated

Use the `@sentry/hono` package instead. The `sentry()` middleware from `@sentry/hono/node` handles
tracing and error capturing automatically without needing this integration or `setupHonoErrorHandler`.

## Example

```javascript
const Sentry = require('@sentry/node');

Sentry.init({
	integrations: [Sentry.honoIntegration()]
});
```
