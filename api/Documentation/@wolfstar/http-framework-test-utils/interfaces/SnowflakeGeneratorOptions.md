[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework-test-utils](../index.md) / SnowflakeGeneratorOptions

# Interface: SnowflakeGeneratorOptions

Defined in: [packages/http-framework-test-utils/src/snowflake.ts:3](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/snowflake.ts#L3)

## Properties

### increment?

> `optional` **increment?**: `number`

Defined in: [packages/http-framework-test-utils/src/snowflake.ts:11](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/snowflake.ts#L11)

Starting increment. Must fit in 12 bits.

---

### processId?

> `optional` **processId?**: `number`

Defined in: [packages/http-framework-test-utils/src/snowflake.ts:9](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/snowflake.ts#L9)

Discord internal process id bits. Must fit in 5 bits.

---

### timestamp?

> `optional` **timestamp?**: `number` \| `Date`

Defined in: [packages/http-framework-test-utils/src/snowflake.ts:5](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/snowflake.ts#L5)

Millisecond timestamp to encode. Defaults to a stable 2024 timestamp so tests are deterministic.

---

### workerId?

> `optional` **workerId?**: `number`

Defined in: [packages/http-framework-test-utils/src/snowflake.ts:7](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/snowflake.ts#L7)

Discord internal worker id bits. Must fit in 5 bits.
