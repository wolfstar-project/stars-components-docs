[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/http-framework](../../../index.md) / [PreconditionError](../index.md) / Options

# Interface: Options

Defined in: [packages/http-framework/src/lib/errors/PreconditionError.ts:42](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/PreconditionError.ts#L42)

The options for [PreconditionError](../../../classes/PreconditionError.md).

## Since

3.2.0

## theme_extends

- `Omit`\<[`Options`](../../UserError/interfaces/Options.md), `"identifier"`\>

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

#### Inherited from

[`Options`](../../UserError/interfaces/Options.md).[`context`](../../UserError/interfaces/Options.md#context)

---

### identifier?

> `optional` **identifier?**: `string`

Defined in: [packages/http-framework/src/lib/errors/PreconditionError.ts:54](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/PreconditionError.ts#L54)

The identifier.

#### Since

3.2.0

#### Default

```ts
precondition;
```

---

### message?

> `optional` **message?**: `string`

Defined in: [packages/http-framework/src/lib/errors/UserError.ts:63](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/UserError.ts#L63)

The message to be passed to the Error constructor.

#### Since

3.2.0

#### Inherited from

[`Options`](../../UserError/interfaces/Options.md).[`message`](../../UserError/interfaces/Options.md#message)

---

### precondition

> **precondition**: `string`

Defined in: [packages/http-framework/src/lib/errors/PreconditionError.ts:47](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/PreconditionError.ts#L47)

The name of the precondition that caused the error.

#### Since

3.2.0
