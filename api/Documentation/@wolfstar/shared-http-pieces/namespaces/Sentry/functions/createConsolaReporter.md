[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / createConsolaReporter

# Function: createConsolaReporter()

> **createConsolaReporter**(`options?`): `ConsolaReporter`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/integrations/consola.d.ts:180

Creates a new Sentry reporter for Consola that forwards logs to Sentry.

**Note: This integration supports Consola v3.x only.** The reporter interface and log object structure
may differ in other versions of Consola.

## Parameters

### options?

`ConsolaReporterOptions`

Configuration options for the reporter.

## Returns

`ConsolaReporter`

A Consola reporter that can be added to consola instances.

## Example

```ts
import * as Sentry from '@sentry/node';
import { consola } from 'consola';

Sentry.init({
	dsn: '__DSN__'
});

const sentryReporter = Sentry.createConsolaReporter({
	// Optional: filter levels to capture
	levels: ['error', 'warn', 'info']
});

consola.addReporter(sentryReporter);

// Now consola logs will be captured by Sentry
consola.info('This will be sent to Sentry');
consola.error('This error will also be sent to Sentry');
```
