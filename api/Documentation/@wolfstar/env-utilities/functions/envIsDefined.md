[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/env-utilities](../index.md) / envIsDefined

# Function: envIsDefined()

> **envIsDefined**(...`keys`): `boolean`

Defined in: [packages/env-utilities/src/lib/utils.ts:111](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/env-utilities/src/lib/utils.ts#L111)

Checks if any of the specified environment variables is defined.

## Parameters

### keys

...readonly keyof [`Env`](../interfaces/Env.md)[]

## Returns

`boolean`

Whether the value of any of the specified environment variables is a non-empty string
