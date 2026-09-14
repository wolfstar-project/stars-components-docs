[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / httpIntegration

# Variable: httpIntegration

> `const` **httpIntegration**: (`options?`) => `Integration` & `object`

Defined in: node_modules/.pnpm/@sentry+node@10.71.0_@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/http.d.ts:127

The http integration instruments Node's internal http and https modules.
It creates breadcrumbs and spans for outgoing HTTP requests which will be attached to the currently active span.

## Parameters

### options?

`HttpOptions`

## Returns

`Integration` & `object`
