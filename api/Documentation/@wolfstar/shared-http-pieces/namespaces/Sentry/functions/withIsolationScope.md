[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / withIsolationScope

# Function: withIsolationScope()

## Call Signature

> **withIsolationScope**\<`T`\>(`callback`): `T`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/currentScopes.d.ts:58

Attempts to fork the current isolation scope and the current scope based on the current async context strategy. If no
async context strategy is set, the isolation scope and the current scope will not be forked (this is currently the
case, for example, in the browser).

Usage of this function in environments without async context strategy is discouraged and may lead to unexpected behaviour.

This function is intended for Sentry SDK and SDK integration development. It is not recommended to be used in "normal"
applications directly because it comes with pitfalls. Use at your own risk!

### Type Parameters

#### T

`T`

### Parameters

#### callback

(`isolationScope`) => `T`

### Returns

`T`

## Call Signature

> **withIsolationScope**\<`T`\>(`isolationScope`, `callback`): `T`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/currentScopes.d.ts:71

Set the provided isolation scope as active in the given callback. If no
async context strategy is set, the isolation scope and the current scope will not be forked (this is currently the
case, for example, in the browser).

Usage of this function in environments without async context strategy is discouraged and may lead to unexpected behaviour.

This function is intended for Sentry SDK and SDK integration development. It is not recommended to be used in "normal"
applications directly because it comes with pitfalls. Use at your own risk!

If you pass in `undefined` as a scope, it will fork a new isolation scope, the same as if no scope is passed.

### Type Parameters

#### T

`T`

### Parameters

#### isolationScope

[`Scope`](../classes/Scope.md) \| `undefined`

#### callback

(`isolationScope`) => `T`

### Returns

`T`
