[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / nativeNodeFetchIntegration

# Variable: nativeNodeFetchIntegration

> `const` **nativeNodeFetchIntegration**: (`options?`) => `Integration` & `object`

Defined in: node_modules/.pnpm/@sentry+node@10.71.0_@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/node-fetch.d.ts:6

Instrument outgoing fetch requests made through the native node `fetch` API.
This emits (depending on the integration options) spans and breadcrumbs, as well as injecting trace propagation headers into the request.

## Parameters

### options?

`NodeFetchOptions`

## Returns

`Integration` & `object`
