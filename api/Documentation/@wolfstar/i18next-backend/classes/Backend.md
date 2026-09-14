[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/i18next-backend](../index.md) / Backend

# Class: Backend\<T\>

Defined in: [index.ts:6](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/i18next-backend/src/index.ts#L6)

## Type Parameters

### T

`T` = `object`

## Implements

- `BackendModule`\<[`Options`](../namespaces/Backend/type-aliases/Options.md)\<`T`\>\>

## Constructors

### Constructor

> **new Backend**\<`T`\>(): `Backend`\<`T`\>

#### Returns

`Backend`\<`T`\>

## Properties

### type

> `readonly` **type**: `"backend"` = `'backend'`

Defined in: [index.ts:7](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/i18next-backend/src/index.ts#L7)

#### Implementation of

`BackendModule.type`

---

### type

> `readonly` `static` **type**: `"backend"` = `'backend'`

Defined in: [index.ts:52](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/i18next-backend/src/index.ts#L52)

## Methods

### init()

> **init**(`_`, `backendOptions`, `i18nextOptions`): `void`

Defined in: [index.ts:11](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/i18next-backend/src/index.ts#L11)

#### Parameters

##### \_

`Services`

##### backendOptions

[`Options`](../namespaces/Backend/type-aliases/Options.md)\<`T`\>

##### i18nextOptions

`InitOptions`

#### Returns

`void`

#### Implementation of

`BackendModule.init`

---

### read()

> **read**(`language`, `namespace`, `callback`): `void`

Defined in: [index.ts:16](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/i18next-backend/src/index.ts#L16)

#### Parameters

##### language

`string`

##### namespace

`string`

##### callback

`ReadCallback`

#### Returns

`void`

#### Implementation of

`BackendModule.read`
