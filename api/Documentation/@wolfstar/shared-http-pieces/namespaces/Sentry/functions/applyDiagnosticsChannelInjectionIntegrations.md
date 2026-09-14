[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / applyDiagnosticsChannelInjectionIntegrations

# Function: applyDiagnosticsChannelInjectionIntegrations()

> **applyDiagnosticsChannelInjectionIntegrations**(`integrations`, `options`): `Integration`[]

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/sdk/index.d.ts:27

When the app opted into diagnostics-channel injection (via
`experimentalUseDiagnosticsChannelInjection()`) AND span recording is enabled, drop the OTel
integrations that have a channel-based replacement and append the FULL channel-integration set,
so the two never both instrument the same library. Otherwise returns `integrations` unchanged.

`_init` applies the same swap to `defaultIntegrations`, but SDKs that seed their integrations
through the user `integrations` option instead (e.g. the `@sentry/aws-serverless` Lambda layer
entry) never hit that path, so they call this directly from their own `getDefaultIntegrations`.

Note the asymmetry: appended channel integrations are not limited to ones whose OTel counterpart
was in `integrations`. For `@sentry/node` that makes no difference (the incoming list carries the
whole OTel performance set), but a caller with a narrower list (e.g. `@sentry/aws-serverless`)
gains channel coverage for libraries it never shipped OTel integrations for. Channel integrations
produce nothing but spans, so this is gated on span recording. Exported so SDKs that build their
own default-integration set can apply the same logic instead of duplicating it.

## Parameters

### integrations

`Integration`[]

### options

`CoreOptions`

## Returns

`Integration`[]
