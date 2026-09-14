[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / experimentalUseDiagnosticsChannelInjection

# Function: experimentalUseDiagnosticsChannelInjection()

> **experimentalUseDiagnosticsChannelInjection**(`options?`): `void`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/sdk/experimentalUseDiagnosticsChannelInjection.d.ts:36

**`Experimental`**

EXPERIMENTAL: opt into diagnostics-channel-based auto-instrumentation.

Call this BEFORE `Sentry.init()`:

```ts
import * as Sentry from '@sentry/node';

Sentry.experimentalUseDiagnosticsChannelInjection();
Sentry.init({
	dsn: '__DSN__'
	// other settings...
});
```

When this has been called AND span recording is enabled, `Sentry.init()`
uses the diagnostics-channel-injection-based integrations instead of the
OpenTelemetry ones, and installs the module hooks that inject the channels
(so libraries imported after `init()` publish the channel events).

This is a standalone function rather than an `init()` option so that a
bundler drops all of it (and its transitive deps) when this function isn't
called. `init()` reads the loader registered below.

An app that DOES call it gets the orchestrion code bundled as intended.

In an unbundled (server-side runtime) app this eagerly loads only the small
subscriber/channel modules; the heavy code-transform dependencies stay lazy
inside `register()` and load only when injection actually runs.

May change or be removed in any release.

## Parameters

### options?

`RegisterDiagnosticsChannelInjectionOptions`

## Returns

`void`
