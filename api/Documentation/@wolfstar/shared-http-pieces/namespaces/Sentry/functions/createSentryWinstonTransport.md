[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / createSentryWinstonTransport

# Function: createSentryWinstonTransport()

> **createSentryWinstonTransport**\<`TransportStreamInstance`\>(`TransportClass`, `sentryWinstonOptions?`): (`options?`) => `TransportStreamInstance`

Defined in: node_modules/.pnpm/@sentry+node-core@10.71.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/integrations/winston.d.ts:53

Creates a new Sentry Winston transport that fowards logs to Sentry.

Supports Winston 3.x.x.

## Type Parameters

### TransportStreamInstance

`TransportStreamInstance` _extends_ `object`

## Parameters

### TransportClass

(`options?`) => `TransportStreamInstance`

The Winston transport class to extend.

### sentryWinstonOptions?

`WinstonTransportOptions`

## Returns

The extended transport class.

(`options?`) => `TransportStreamInstance`

## Example

```ts
const winston = require('winston');
const Transport = require('winston-transport');

const SentryWinstonTransport = Sentry.createSentryWinstonTransport(Transport);

const logger = winston.createLogger({
	transports: [new SentryWinstonTransport()]
});
```
