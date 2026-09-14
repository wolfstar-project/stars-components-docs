[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / instrumentStateGraphCompile

# Function: instrumentStateGraphCompile()

> **instrumentStateGraphCompile**(`originalCompile`, `options`): (...`args`) => `CompiledGraph`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/langgraph/index.d.ts:23

Instruments StateGraph's compile method to create spans for agent creation and invocation

Wraps the compile() method to:

- Create a `gen_ai.create_agent` span when compile() is called
- Automatically wrap the invoke() method on the returned compiled graph with a `gen_ai.invoke_agent` span

## Parameters

### originalCompile

(...`args`) => `CompiledGraph`

### options

`LangGraphOptions`

## Returns

(...`args`) => `CompiledGraph`
