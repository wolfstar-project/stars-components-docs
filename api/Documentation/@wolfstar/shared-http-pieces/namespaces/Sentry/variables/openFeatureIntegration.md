[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / openFeatureIntegration

# Variable: openFeatureIntegration

> `const` **openFeatureIntegration**: (`_options?`) => `Integration` & `object`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/featureFlagShims/openFeature.d.ts:5

This is a shim for the OpenFeature integration.
We need this in order to not throw runtime errors when accidentally importing this on the server through a meta framework like Next.js.

## Parameters

### \_options?

`unknown`

## Returns

`Integration` & `object`
