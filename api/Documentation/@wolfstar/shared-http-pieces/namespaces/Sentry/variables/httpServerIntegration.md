[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / httpServerIntegration

# Variable: httpServerIntegration

> `const` **httpServerIntegration**: (`options?`) => `Integration` & `object`

Defined in: node*modules/.pnpm/@sentry+node-core@10.71.0*@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/integrations/http/httpServerIntegration.d.ts:63

This integration handles request isolation, trace continuation and other core Sentry functionality around incoming http requests
handled via the node `http` module.

This version uses OpenTelemetry for context propagation and span management.

## Parameters

### options?

`HttpServerIntegrationOptions`

## Returns

`Integration` & `object`

## See

../../light/integrations/httpServerIntegration.ts for the lightweight version without OpenTelemetry
