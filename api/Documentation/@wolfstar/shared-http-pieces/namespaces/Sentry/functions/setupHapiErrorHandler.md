[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / setupHapiErrorHandler

# Function: setupHapiErrorHandler()

> **setupHapiErrorHandler**(`server`): `Promise`\<`void`\>

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/hapi/index.d.ts:51

Add a Hapi plugin to capture errors to Sentry.

## Parameters

### server

`Server`

The Hapi server to attach the error handler to

## Returns

`Promise`\<`void`\>

## Example

```javascript
const Sentry = require('@sentry/node');
const Hapi = require('@hapi/hapi');

const init = async () => {
	const server = Hapi.server();

	// all your routes here

	await Sentry.setupHapiErrorHandler(server);

	await server.start();
};
```
