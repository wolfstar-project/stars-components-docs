[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / bindScopeToEmitter

# Function: bindScopeToEmitter()

> **bindScopeToEmitter**\<`T`\>(`emitter`, `scope?`): `T`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/bindScopeToEmitter.d.ts:19

Binds a scope to the given event emitter, so that any listener added to it runs with that scope
(and therefore the active span) active — even if the listener fires later, in a different async
context.

By default the currently active scope is bound, captured at the time this function is called.
Pass an explicit `scope` to bind a different one.

This is useful when instrumenting APIs that hand back an event emitter (e.g. a streamed database
query) whose `'data'` / `'error'` / `'end'` listeners would otherwise lose the trace context.

Works with both Node.js `EventEmitter`s (`on`, `addListener`, ...) and DOM `EventTarget`s
(`addEventListener`). Objects exposing none of these methods are returned untouched.

The isolation scope is intentionally not captured — it is carried along by the active async
context. This mirrors the event-emitter behavior of OpenTelemetry's `ContextManager.bind`.

## Type Parameters

### T

`T` _extends_ `object`

## Parameters

### emitter

`T`

### scope?

[`Scope`](../classes/Scope.md)

## Returns

`T`
