[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework-i18n](../index.md) / resolveKey

# Function: resolveKey()

## Call Signature

> **resolveKey**\<`TReturn`\>(`interaction`, `key`, `options?`): `TReturn`

Defined in: [packages/http-framework-i18n/src/lib/utils.ts:56](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-i18n/src/lib/utils.ts#L56)

### Type Parameters

#### TReturn

`TReturn`

### Parameters

#### interaction

[`Interaction`](../type-aliases/Interaction.md)

#### key

[`TypedT`](../type-aliases/TypedT.md)\<`TReturn`\>

#### options?

`string` \| [`TOptionsBase`](../interfaces/TOptionsBase.md)

### Returns

`TReturn`

## Call Signature

> **resolveKey**\<`TReturn`\>(`interaction`, `key`, `defaultValue`, `options?`): `TReturn`

Defined in: [packages/http-framework-i18n/src/lib/utils.ts:57](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-i18n/src/lib/utils.ts#L57)

### Type Parameters

#### TReturn

`TReturn`

### Parameters

#### interaction

[`Interaction`](../type-aliases/Interaction.md)

#### key

[`TypedT`](../type-aliases/TypedT.md)\<`TReturn`\>

#### defaultValue

`TReturn`

#### options?

`string` \| [`TOptionsBase`](../interfaces/TOptionsBase.md)

### Returns

`TReturn`

## Call Signature

> **resolveKey**\<`TArgs`, `TReturn`\>(`interaction`, `key`, `options?`): `TReturn`

Defined in: [packages/http-framework-i18n/src/lib/utils.ts:58](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-i18n/src/lib/utils.ts#L58)

### Type Parameters

#### TArgs

`TArgs` _extends_ `object`

#### TReturn

`TReturn`

### Parameters

#### interaction

[`Interaction`](../type-aliases/Interaction.md)

#### key

[`TypedFT`](../type-aliases/TypedFT.md)\<`TArgs`, `TReturn`\>

#### options?

[`TOptions`](../type-aliases/TOptions.md)\<`TArgs`\>

### Returns

`TReturn`

## Call Signature

> **resolveKey**\<`TArgs`, `TReturn`\>(`interaction`, `key`, `defaultValue`, `options?`): `TReturn`

Defined in: [packages/http-framework-i18n/src/lib/utils.ts:63](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-i18n/src/lib/utils.ts#L63)

### Type Parameters

#### TArgs

`TArgs` _extends_ `object`

#### TReturn

`TReturn`

### Parameters

#### interaction

[`Interaction`](../type-aliases/Interaction.md)

#### key

[`TypedFT`](../type-aliases/TypedFT.md)\<`TArgs`, `TReturn`\>

#### defaultValue

`TReturn`

#### options?

[`TOptions`](../type-aliases/TOptions.md)\<`TArgs`\>

### Returns

`TReturn`
