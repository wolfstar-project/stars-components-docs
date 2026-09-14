[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / vercelAIIntegration

# Variable: vercelAIIntegration

> `const` **vercelAIIntegration**: (`options?`) => `Integration` & `object`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/integrations/tracing/vercelai/index.d.ts:41

Adds Sentry tracing instrumentation for the [ai](https://www.npmjs.com/package/ai) library.

For more information, see the [`ai` documentation](https://sdk.vercel.ai/docs/ai-sdk-core/telemetry).

## Parameters

### options?

`VercelAiOptions`

## Returns

`Integration` & `object`

## Example

```javascript
const Sentry = require('@sentry/node');

Sentry.init({
	integrations: [Sentry.vercelAIIntegration()]
});
```

This integration adds tracing support to all `ai` function calls.
You need to opt-in to collecting spans for a specific call,
you can do so by setting `experimental_telemetry.isEnabled` to `true` in the first argument of the function call.

```javascript
const result = await generateText({
	model: openai('gpt-4-turbo'),
	experimental_telemetry: { isEnabled: true }
});
```

If you want to collect inputs and outputs for a specific call, you must specifically opt-in to each
function call by setting `experimental_telemetry.recordInputs` and `experimental_telemetry.recordOutputs`
to `true`.

```javascript
const result = await generateText(\{
 model: openai('gpt-4-turbo'),
 experimental_telemetry: \{ isEnabled: true, recordInputs: true, recordOutputs: true \},
\});
```
