[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / knexIntegration

# Variable: knexIntegration

> `const` **knexIntegration**: () => `Integration` & `object`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/knex/index.d.ts:19

Knex integration

Capture tracing data for [Knex](https://knexjs.org/).

## Returns

`Integration` & `object`

## Example

```javascript
import * as Sentry from '@sentry/node';

Sentry.init({
	integrations: [Sentry.knexIntegration()]
});
```
