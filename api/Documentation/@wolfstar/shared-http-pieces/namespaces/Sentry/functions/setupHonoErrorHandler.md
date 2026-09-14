[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / setupHonoErrorHandler

# ~~Function: setupHonoErrorHandler()~~

> **setupHonoErrorHandler**(`app`, `options?`): `void`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/hono/index.d.ts:56

Add a Hono error handler to capture errors to Sentry.

## Parameters

### app

The Hono instances

#### use

`MiddlewareHandlerInterface`

### options?

`Partial`\<`HonoHandlerOptions`\>

Configuration options for the handler

## Returns

`void`

## Deprecated

Use the `@sentry/hono` package instead. The `sentry()` middleware from `@sentry/hono/node` handles
error capturing automatically without needing this function or `honoIntegration`.

## Example

```javascript
const Sentry = require('@sentry/node');
const { Hono } = require('hono');

const app = new Hono();

Sentry.setupHonoErrorHandler(app);

// Add your routes, etc.
```
