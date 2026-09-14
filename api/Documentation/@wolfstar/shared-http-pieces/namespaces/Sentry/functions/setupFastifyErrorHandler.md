[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / setupFastifyErrorHandler

# Function: setupFastifyErrorHandler()

> **setupFastifyErrorHandler**(`fastify`, `options?`): `void`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/fastify/index.d.ts:118

Add an Fastify error handler to capture errors to Sentry.

## Parameters

### fastify

`FastifyMinimal`

The Fastify instance to which to add the error handler

### options?

`Partial`\<`FastifyHandlerOptions`\>

Configuration options for the handler

## Returns

`void`

## Example

```javascript
const Sentry = require('@sentry/node');
const Fastify = require('fastify');

const app = Fastify();

Sentry.setupFastifyErrorHandler(app);

// Add your routes, etc.

app.listen({ port: 3000 });
```
