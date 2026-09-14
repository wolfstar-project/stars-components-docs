[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / lruMemoizerIntegration

# Variable: lruMemoizerIntegration

> `const` **lruMemoizerIntegration**: () => `Integration` & `object`

Defined in: node_modules/.pnpm/@sentry+node@10.71.0_@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/lrumemoizer/index.d.ts:18

Adds Sentry tracing instrumentation for the [lru-memoizer](https://www.npmjs.com/package/lru-memoizer) library.

For more information, see the [`lruMemoizerIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/lrumemoizer/).

## Returns

`Integration` & `object`

## Example

```javascript
const Sentry = require('@sentry/node');

Sentry.init(\{
 integrations: [Sentry.lruMemoizerIntegration()],
\});
```
