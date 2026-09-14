[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / langGraphIntegration

# Variable: langGraphIntegration

> `const` **langGraphIntegration**: (`options?`) => `Integration` & `object`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/langgraph/index.d.ts:74

Adds Sentry tracing instrumentation for LangGraph.

This integration is enabled by default.

When configured, this integration automatically instruments LangGraph StateGraph and compiled graph instances
to capture telemetry data following OpenTelemetry Semantic Conventions for Generative AI.

## Parameters

### options?

`LangGraphOptions`

## Returns

`Integration` & `object`

## Examples

```javascript
import * as Sentry from '@sentry/node';

Sentry.init({
	integrations: [Sentry.langGraphIntegration()]
});
```

## Options

- `recordInputs`: Whether to record prompt messages (default: follows `dataCollection.genAI.inputs`, or the deprecated `sendDefaultPii` option)
- `recordOutputs`: Whether to record response text (default: follows `dataCollection.genAI.outputs`, or the deprecated `sendDefaultPii` option)

### Default Behavior

By default, the integration will:

- Record inputs and outputs based on `dataCollection.genAI` in your Sentry client options
  (or the deprecated `sendDefaultPii` option, for backwards compatibility)
- Integration-level `recordInputs`/`recordOutputs` options take precedence over global config

```javascript
// Always record inputs and outputs regardless of global dataCollection config
Sentry.init({
	integrations: [
		Sentry.langGraphIntegration({
			recordInputs: true,
			recordOutputs: true
		})
	]
});

// Never record inputs/outputs regardless of global dataCollection config
Sentry.init({
	dataCollection: { genAI: { inputs: true, outputs: true } },
	integrations: [
		Sentry.langGraphIntegration({
			recordInputs: false,
			recordOutputs: false
		})
	]
});
```

## Captured Operations

The integration captures the following LangGraph operations:

- **Agent Creation** (`StateGraph.compile()`) - Creates a `gen_ai.create_agent` span
- **Agent Invocation** (`CompiledGraph.invoke()`) - Creates a `gen_ai.invoke_agent` span

## Captured Data

When `recordInputs` and `recordOutputs` are enabled, the integration captures:

- Input messages from the graph state
- Output messages and LLM responses
- Tool calls made during agent execution
- Agent and graph names
- Available tools configured in the graph
