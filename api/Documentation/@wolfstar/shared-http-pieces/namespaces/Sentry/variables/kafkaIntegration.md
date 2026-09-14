[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / kafkaIntegration

# Variable: kafkaIntegration

> `const` **kafkaIntegration**: () => `Integration` & `object`

Defined in: node_modules/.pnpm/@sentry+node@10.71.0_@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/kafka/index.d.ts:18

Adds Sentry tracing instrumentation for the [kafkajs](https://www.npmjs.com/package/kafkajs) library.

For more information, see the [`kafkaIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/kafka/).

## Returns

`Integration` & `object`

## Example

```javascript
const Sentry = require('@sentry/node');

Sentry.init(\{
 integrations: [Sentry.kafkaIntegration()],
\});
```
