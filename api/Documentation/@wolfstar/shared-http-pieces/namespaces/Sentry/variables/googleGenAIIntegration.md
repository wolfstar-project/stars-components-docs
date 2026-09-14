[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / googleGenAIIntegration

# Variable: googleGenAIIntegration

> `const` **googleGenAIIntegration**: (`options?`) => `Integration` & `object`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/google-genai/index.d.ts:59

Adds Sentry tracing instrumentation for the Google Generative AI SDK.

This integration is enabled by default.

When configured, this integration automatically instruments Google GenAI SDK client instances
to capture telemetry data following OpenTelemetry Semantic Conventions for Generative AI.

## Parameters

### options?

`GoogleGenAIOptions`

## Returns

`Integration` & `object`

## Examples

```javascript
import * as Sentry from '@sentry/node';

Sentry.init({
	integrations: [Sentry.googleGenAiIntegration()]
});
```

## Options

- `recordInputs`: Whether to record prompt messages (default: follows `dataCollection.genAI.inputs`)
- `recordOutputs`: Whether to record response text (default: follows `dataCollection.genAI.outputs`)

### Default Behavior

By default, the integration will:

- Record inputs and outputs based on `dataCollection.genAI` in your Sentry client options
  (or the deprecated `sendDefaultPii` option, for backwards compatibility)
- Integration-level `recordInputs`/`recordOutputs` options take precedence over global config

```javascript
// Always record inputs and outputs regardless of global dataCollection config
Sentry.init({
	integrations: [
		Sentry.googleGenAiIntegration({
			recordInputs: true,
			recordOutputs: true
		})
	]
});

// Never record inputs/outputs regardless of global dataCollection config
Sentry.init({
	dataCollection: { genAI: { inputs: true, outputs: true } },
	integrations: [
		Sentry.googleGenAiIntegration({
			recordInputs: false,
			recordOutputs: false
		})
	]
});
```
