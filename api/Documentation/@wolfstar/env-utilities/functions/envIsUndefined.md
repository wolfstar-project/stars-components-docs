[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/env-utilities](../index.md) / envIsUndefined

# Function: envIsUndefined()

> **envIsUndefined**(`key`): `boolean`

Defined in: [packages/env-utilities/src/lib/utils.ts:88](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/env-utilities/src/lib/utils.ts#L88)

Checks if the value of the specified environment variable is undefined.

## Parameters

### key

keyof [`Env`](../interfaces/Env.md)

The name of the environment variable.

## Returns

`boolean`

Whether the value of the specified environment variable is:

- `undefined`
- An empty string (`""`)
