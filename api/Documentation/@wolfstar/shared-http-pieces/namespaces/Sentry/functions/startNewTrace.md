[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / startNewTrace

# Function: startNewTrace()

> **startNewTrace**\<`T`\>(`callback`): `T`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/trace.d.ts:88

Starts a new trace for the duration of the provided callback. Spans started within the
callback will be part of the new trace instead of a potentially previously started trace.

Important: Only use this function if you want to override the default trace lifetime and
propagation mechanism of the SDK for the duration and scope of the provided callback.
The newly created trace will also be the root of a new distributed trace, for example if
you make http requests within the callback.
This function might be useful if the operation you want to instrument should not be part
of a potentially ongoing trace.

Default behavior:

- Server-side: A new trace is started for each incoming request.
- Browser: A new trace is started for each page our route. Navigating to a new route
  or page will automatically create a new trace.

## Type Parameters

### T

`T`

## Parameters

### callback

() => `T`

## Returns

`T`
