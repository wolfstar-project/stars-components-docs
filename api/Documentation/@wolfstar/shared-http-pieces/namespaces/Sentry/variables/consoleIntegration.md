[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / consoleIntegration

# Variable: consoleIntegration

> `const` **consoleIntegration**: (`options?`) => `Integration` & `object`

Defined in: node_modules/.pnpm/@sentry+node-core@10.71.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/integrations/console.d.ts:19

Node-specific console integration that captures breadcrumbs and handles
the AWS Lambda runtime replacing console methods after our patch.

In Lambda, console methods are patched via `Object.defineProperty` so that
external replacements (by the Lambda runtime) are absorbed as the delegate
while our wrapper stays in place. Outside Lambda, this delegates entirely
to the core `consoleIntegration` which uses the simpler `fill`-based patch.

## Parameters

### options?

`Partial`\<`ConsoleIntegrationOptions`\>

## Returns

`Integration` & `object`
