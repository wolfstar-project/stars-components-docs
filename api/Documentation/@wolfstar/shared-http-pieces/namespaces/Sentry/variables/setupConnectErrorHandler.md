[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / setupConnectErrorHandler

# Variable: setupConnectErrorHandler

> `const` **setupConnectErrorHandler**: (`app`) => `void`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/connect/index.d.ts:46

Add a Connect middleware to capture errors to Sentry.

## Parameters

### app

`ConnectApp`

The Connect app to attach the error handler to

## Returns

`void`

## Example

```javascript
const Sentry = require('@sentry/node');
const connect = require('connect');

const app = connect();

Sentry.setupConnectErrorHandler(app);

// Add you connect routes here

app.listen(3000);
```
