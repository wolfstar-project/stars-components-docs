[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / withScope

# Function: withScope()

## Call Signature

> **withScope**\<`T`\>(`callback`): `T`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/currentScopes.d.ts:43

Creates a new scope with and executes the given operation within.
The scope is automatically removed once the operation
finishes or throws.

### Type Parameters

#### T

`T`

### Parameters

#### callback

(`scope`) => `T`

### Returns

`T`

## Call Signature

> **withScope**\<`T`\>(`scope`, `callback`): `T`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/currentScopes.d.ts:47

Set the given scope as the active scope in the callback.

### Type Parameters

#### T

`T`

### Parameters

#### scope

[`Scope`](../classes/Scope.md) \| `undefined`

#### callback

(`scope`) => `T`

### Returns

`T`
