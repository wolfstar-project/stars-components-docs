[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / consoleLoggingIntegration

# Variable: consoleLoggingIntegration

> `const` **consoleLoggingIntegration**: (`options?`) => `Integration` & `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/logs/console-integration.d.ts:24

**`Experimental`**

Captures calls to the `console` API as logs in Sentry.

This feature is experimental and may be changed or removed in future versions.

By default the integration instruments `console.debug`, `console.info`, `console.warn`, `console.error`,
`console.log`, `console.trace`, and `console.assert`. You can use the `levels` option to customize which
levels are captured.

## Parameters

### options?

`Partial`\<`CaptureConsoleOptions`\>

## Returns

`Integration` & `object`

## Example

```ts
import * as Sentry from '@sentry/browser';

Sentry.init({
	integrations: [Sentry.consoleLoggingIntegration({ levels: ['error', 'warn'] })]
});
```
