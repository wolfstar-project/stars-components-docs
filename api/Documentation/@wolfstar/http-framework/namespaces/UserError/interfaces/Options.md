[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/http-framework](../../../index.md) / [UserError](../index.md) / Options

# Interface: Options

Defined in: [packages/http-framework/src/lib/errors/UserError.ts:52](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/UserError.ts#L52)

The options for [UserError](../../../classes/UserError.md).

## Since

3.2.0

## Properties

### context?

> `optional` **context?**: `unknown`

Defined in: [packages/http-framework/src/lib/errors/UserError.ts:70](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/UserError.ts#L70)

The extra context to provide more information about this error.

#### Since

3.2.0

#### Default

```ts
null;
```

---

### identifier

> **identifier**: `string`

Defined in: [packages/http-framework/src/lib/errors/UserError.ts:57](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/UserError.ts#L57)

The identifier for this error.

#### Since

3.2.0

---

### message?

> `optional` **message?**: `string`

Defined in: [packages/http-framework/src/lib/errors/UserError.ts:63](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/UserError.ts#L63)

The message to be passed to the Error constructor.

#### Since

3.2.0
