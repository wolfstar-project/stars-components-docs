[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / preloadOpenTelemetry

# Function: preloadOpenTelemetry()

> **preloadOpenTelemetry**(`options?`): `void`

Defined in: node_modules/.pnpm/@sentry+node@10.71.0_@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/sdk/initOtel.d.ts:21

Preload OpenTelemetry for Node.
This can be used to preload instrumentation early, but set up Sentry later.
By preloading the OTEL instrumentation wrapping still happens early enough that everything works.

## Parameters

### options?

`NodePreloadOptions`

## Returns

`void`
