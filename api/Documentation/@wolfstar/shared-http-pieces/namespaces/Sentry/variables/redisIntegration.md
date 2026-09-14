[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / redisIntegration

# Variable: redisIntegration

> `const` **redisIntegration**: (`options?`) => `Integration` & `object`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/redis/index.d.ts:25

Adds Sentry tracing instrumentation for the [redis](https://www.npmjs.com/package/redis) and
[ioredis](https://www.npmjs.com/package/ioredis) libraries.

For more information, see the [`redisIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/redis/).

## Parameters

### options?

`RedisOptions`

## Returns

`Integration` & `object`

## Example

```javascript
const Sentry = require('@sentry/node');

Sentry.init({
	integrations: [Sentry.redisIntegration()]
});
```
