[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / CaptureContext

# Type Alias: CaptureContext

> **CaptureContext** = [`Scope`](../classes/Scope.md) \| `Partial`\<`ScopeContext`\> \| ((`scope`) => [`Scope`](../classes/Scope.md))

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:22

A context to be used for capturing an event.
This can either be a Scope, or a partial ScopeContext,
or a callback that receives the current scope and returns a new scope to use.
