[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / fastifyIntegration

# Variable: fastifyIntegration

> `const` **fastifyIntegration**: (`options?`) => `Integration` & `object`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/fastify/index.d.ts:95

Adds Sentry tracing instrumentation for [Fastify](https://fastify.dev/).

If you also want to capture errors, you need to call `setupFastifyErrorHandler(app)` after you set up your Fastify server.

For more information, see the [fastify documentation](https://docs.sentry.io/platforms/javascript/guides/fastify/).

## Parameters

### options?

`Partial`\<`FastifyIntegrationOptions`\>

## Returns

`Integration` & `object`

## Example

```javascript
const Sentry = require('@sentry/node');

Sentry.init({
	integrations: [Sentry.fastifyIntegration()]
});
```
