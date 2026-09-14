[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / wrapMcpServerWithSentry

# Function: wrapMcpServerWithSentry()

> **wrapMcpServerWithSentry**\<`S`\>(`mcpServerInstance`, `options?`): `S`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/integrations/mcp-server/index.d.ts:41

Wraps an MCP Server instance with Sentry instrumentation.

Compatible with versions `^1.9.0` of the `@modelcontextprotocol/sdk` package (legacy `tool`/`resource`/`prompt` API)
and `@modelcontextprotocol/server` version 2.x (`registerTool`/`registerResource`/`registerPrompt` API).
Automatically instruments transport methods and handler functions for comprehensive monitoring.

Both call orderings are supported: wrapping before or after registering tools, resources,
and prompts. Sentry patches the registration methods for future handlers and retroactively
wraps any already-registered ones. Wrapping at construction time is recommended by
convention (consistent with other SDK integrations), but is not required.

## Type Parameters

### S

`S` _extends_ `object`

## Parameters

### mcpServerInstance

`S`

MCP server instance to instrument

### options?

`McpServerWrapperOptions`

Optional configuration for recording inputs and outputs

## Returns

`S`

Instrumented server instance (same reference)

## Example

```typescript
import * as Sentry from '@sentry/core';
import { McpServer } from '@modelcontextprotocol/server';
import { NodeStreamableHTTPServerTransport } from '@modelcontextprotocol/node';

// Wrap first, then register tools — this is the correct order
const server = Sentry.wrapMcpServerWithSentry(new McpServer({ name: 'my-server', version: '1.0.0' }));

server.registerTool('my-tool', schema, handler);

// Explicitly control input/output capture
const server = Sentry.wrapMcpServerWithSentry(new McpServer({ name: 'my-server', version: '1.0.0' }), { recordInputs: true, recordOutputs: false });

const transport = new NodeStreamableHTTPServerTransport();
await server.connect(transport);
```
