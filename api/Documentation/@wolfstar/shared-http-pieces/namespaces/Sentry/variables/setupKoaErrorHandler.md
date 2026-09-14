[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / setupKoaErrorHandler

# Variable: setupKoaErrorHandler

> `const` **setupKoaErrorHandler**: (`app`) => `void`

Defined in: node_modules/.pnpm/@sentry+node@10.71.0_@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/koa/index.d.ts:68

Add an Koa error handler to capture errors to Sentry.

The error handler must be before any other middleware and after all controllers.

## Parameters

### app

The Express instances

#### use

(`arg0`) => `void`

## Returns

`void`

## Example

```javascript
const Sentry = require('@sentry/node');
const Koa = require('koa');

const app = new Koa();

Sentry.setupKoaErrorHandler(app);

// Add your routes, etc.

app.listen(3000);
```
