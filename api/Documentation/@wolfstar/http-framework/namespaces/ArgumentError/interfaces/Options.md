[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/http-framework](../../../index.md) / [ArgumentError](../index.md) / Options

# Interface: Options\<T\>

Defined in: [packages/http-framework/src/lib/errors/ArgumentError.ts:56](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/ArgumentError.ts#L56)

The options for [ArgumentError](../../../classes/ArgumentError.md).

## Since

3.2.0

## theme_extends

- `Omit`\<[`Options`](../../UserError/interfaces/Options.md), `"identifier"`\>

## Type Parameters

### T

`T`

## Properties

### argument

> **argument**: `string`

Defined in: [packages/http-framework/src/lib/errors/ArgumentError.ts:61](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/ArgumentError.ts#L61)

The name of the option that caused the error.

#### Since

3.2.0

---

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

Defined in: [packages/http-framework/src/lib/errors/ArgumentError.ts:81](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/ArgumentError.ts#L81)

The identifier.

#### Since

3.2.0

#### Default

```ts
argument;
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

### parameter

> **parameter**: `T`

Defined in: [packages/http-framework/src/lib/errors/ArgumentError.ts:74](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/ArgumentError.ts#L74)

The value that failed to be resolved.

#### Since

3.2.0

---

### type?

> `optional` **type?**: `ApplicationCommandOptionType` \| `null`

Defined in: [packages/http-framework/src/lib/errors/ArgumentError.ts:68](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/ArgumentError.ts#L68)

The type of the option that caused the error.

#### Since

3.2.0

#### Default

```ts
null;
```
