[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / instrumentStateGraph

# Function: instrumentStateGraph()

> **instrumentStateGraph**\<`T`\>(`stateGraph`, `options?`): `T`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/langgraph/index.d.ts:57

Directly instruments a StateGraph instance to add tracing spans

This function can be used to manually instrument LangGraph StateGraph instances
in environments where automatic instrumentation is not available or desired.

## Type Parameters

### T

`T` _extends_ `object`

## Parameters

### stateGraph

`T`

The StateGraph instance to instrument

### options?

`LangGraphOptions`

Optional configuration for recording inputs/outputs

## Returns

`T`

## Example

```typescript
import { instrumentStateGraph } from '@sentry/cloudflare';
import { StateGraph } from '@langchain/langgraph';

const graph = new StateGraph(MessagesAnnotation).addNode('agent', mockLlm).addEdge(START, 'agent').addEdge('agent', END);

instrumentStateGraph(graph, { recordInputs: true, recordOutputs: true });
const compiled = graph.compile({ name: 'my_agent' });
```
