[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/env-utilities](../index.md) / EnvString

# Type Alias: EnvString

> **EnvString** = \{ \[K in EnvAny\]: Env\[K\] extends BooleanString \| IntegerString \| NumberString ? never : K \}\[[`EnvAny`](EnvAny.md)\]

Defined in: [packages/env-utilities/src/lib/types.ts:7](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/env-utilities/src/lib/types.ts#L7)
