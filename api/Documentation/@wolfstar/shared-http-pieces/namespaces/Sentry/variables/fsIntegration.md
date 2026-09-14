[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / fsIntegration

# Variable: fsIntegration

> `const` **fsIntegration**: (`options?`) => `Integration` & `object`

Defined in: node_modules/.pnpm/@sentry+node@10.71.0_@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/fs/index.d.ts:11

This integration will create spans for `fs` API operations, like reading and writing files.

**WARNING:** This integration may add significant overhead to your application. Especially in scenarios with a lot of
file I/O, like for example when running a framework dev server, including this integration can massively slow down
your application.

## Parameters

### options?

`FsInstrumentationConfig`

Configuration for this integration.

## Returns

`Integration` & `object`
