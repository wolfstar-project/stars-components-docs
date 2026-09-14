[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / graphqlIntegration

# Variable: graphqlIntegration

> `const` **graphqlIntegration**: (`options?`) => `Integration` & `object`

Defined in: node_modules/.pnpm/@sentry+node@10.71.0_@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/graphql/index.d.ts:46

Adds Sentry tracing instrumentation for the [graphql](https://www.npmjs.com/package/graphql) library.

For more information, see the [`graphqlIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/graphql/).

## Parameters

### options?

`GraphqlOptions`

Configuration options for the GraphQL integration.

## Returns

`Integration` & `object`

## Example

```javascript
const Sentry = require('@sentry/node');

Sentry.init(\{
 integrations: [Sentry.graphqlIntegration()],
\});
```
