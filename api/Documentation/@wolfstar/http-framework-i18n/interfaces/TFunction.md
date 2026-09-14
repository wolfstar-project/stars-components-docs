[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework-i18n](../index.md) / TFunction

# Interface: TFunction()\<N, TKPrefix, ActualNS\>

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:881

## Type Parameters

### N

`N` _extends_ `Namespace` = `DefaultNamespace`

### TKPrefix

`TKPrefix` = `undefined`

### ActualNS

`ActualNS` _extends_ `Namespace` = `N` _extends_ `null` ? `DefaultNamespace` : `N`

## Call Signature

> **TFunction**\<`TKeys`, `TDefaultResult`, `TInterpolationMap`\>(`key`): `TFuncReturn`\<`N`, `TKeys`, `TDefaultResult`, `TKPrefix`\>

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:887

### Type Parameters

#### TKeys

`TKeys` _extends_ `unknown`

#### TDefaultResult

`TDefaultResult` _extends_ `DefaultTFuncReturn` = `string`

#### TInterpolationMap

`TInterpolationMap` _extends_ `object` = `StringMap`

### Parameters

#### key

`TKeys` \| `TKeys`[]

### Returns

`TFuncReturn`\<`N`, `TKeys`, `TDefaultResult`, `TKPrefix`\>

## Call Signature

> **TFunction**\<`TKeys`, `TDefaultResult`, `TInterpolationMap`, `PassedNS`\>(`key`): `TFuncReturn`\<`PassedNS`, `TKeys`, `TDefaultResult`, `TKPrefix`\>

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:894

### Type Parameters

#### TKeys

`TKeys` _extends_ `string`

#### TDefaultResult

`TDefaultResult` _extends_ `DefaultTFuncReturn` = `string`

#### TInterpolationMap

`TInterpolationMap` _extends_ `object` = `StringMap`

#### PassedNS

`PassedNS` _extends_ `Namespace`\<`string`\> = `N` _extends_ `string` ? `N` : `N` _extends_ `unknown` ? `"translation"` : `N`

### Parameters

#### key

`TKeys` \| `TKeys`[]

### Returns

`TFuncReturn`\<`PassedNS`, `TKeys`, `TDefaultResult`, `TKPrefix`\>

## Call Signature

> **TFunction**\<`TKeys`, `TDefaultResult`, `TInterpolationMap`, `PassedNS`\>(`key`, `options`): `TFunctionDetailedResult`\<`TFuncReturn`\<`ActualNS`, `TKeys`, `TDefaultResult`, `TKPrefix`, `object`\>\>

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:904

### Type Parameters

#### TKeys

`TKeys` _extends_ `string`

#### TDefaultResult

`TDefaultResult` _extends_ `DefaultTFuncReturnWithObject` = `object`

#### TInterpolationMap

`TInterpolationMap` _extends_ `object` = `StringMap`

#### PassedNS

`PassedNS` _extends_ `Namespace`\<`string`\> = `N` _extends_ `string` ? `N` : `N` _extends_ `null` ? `"translation"` : `N`

### Parameters

#### key

`TKeys` \| `TKeys`[]

#### options

[`TOptionsBase`](TOptionsBase.md) & `TInterpolationMap` & `object`

### Returns

`TFunctionDetailedResult`\<`TFuncReturn`\<`ActualNS`, `TKeys`, `TDefaultResult`, `TKPrefix`, `object`\>\>

## Call Signature

> **TFunction**\<`TKeys`, `TDefaultResult`, `TInterpolationMap`, `PassedNS`\>(`key`, `options`): `TFuncReturn`\<`PassedNS`, `TKeys`, `TDefaultResult`, `TKPrefix`\>

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:919

### Type Parameters

#### TKeys

`TKeys` _extends_ `string`

#### TDefaultResult

`TDefaultResult` _extends_ `DefaultTFuncReturnWithObject` = `object`

#### TInterpolationMap

`TInterpolationMap` _extends_ `object` = `StringMap`

#### PassedNS

`PassedNS` _extends_ `Namespace`\<`string`\> = `N` _extends_ `string` ? `N` : `N` _extends_ `null` ? `"translation"` : `N`

### Parameters

#### key

`TKeys` \| `TKeys`[]

#### options

[`TOptionsBase`](TOptionsBase.md) & `TInterpolationMap` & `object`

### Returns

`TFuncReturn`\<`PassedNS`, `TKeys`, `TDefaultResult`, `TKPrefix`\>

## Call Signature

> **TFunction**\<`TKeys`, `TDefaultResult`, `TInterpolationMap`, `PassedNS`\>(`key`, `options`): `TFuncReturn`\<`PassedNS`, `TKeys`, `TDefaultResult`, `TKPrefix`\>

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:930

### Type Parameters

#### TKeys

`TKeys` _extends_ `string`

#### TDefaultResult

`TDefaultResult` _extends_ `DefaultTFuncReturn` = `string`

#### TInterpolationMap

`TInterpolationMap` _extends_ `object` = `StringMap`

#### PassedNS

`PassedNS` _extends_ `Namespace`\<`string`\> = `N` _extends_ `string` ? `N` : `N` _extends_ `null` ? `"translation"` : `N`

### Parameters

#### key

`TKeys` \| `TKeys`[]

#### options

[`TOptionsBase`](TOptionsBase.md) & `TInterpolationMap` & `object`

### Returns

`TFuncReturn`\<`PassedNS`, `TKeys`, `TDefaultResult`, `TKPrefix`\>

## Call Signature

> **TFunction**\<`TKeys`, `TDefaultResult`, `TInterpolationMap`\>(`key`, `options`): `TFunctionDetailedResult`\<`TFuncReturn`\<`ActualNS`, `TKeys`, `TDefaultResult`, `TKPrefix`, `object`\>\>

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:941

### Type Parameters

#### TKeys

`TKeys` _extends_ `unknown`

#### TDefaultResult

`TDefaultResult` _extends_ `DefaultTFuncReturnWithObject` = `object`

#### TInterpolationMap

`TInterpolationMap` _extends_ `object` = `StringMap`

### Parameters

#### key

`TKeys` \| `TKeys`[]

#### options

[`TOptionsBase`](TOptionsBase.md) & `TInterpolationMap` & `object`

### Returns

`TFunctionDetailedResult`\<`TFuncReturn`\<`ActualNS`, `TKeys`, `TDefaultResult`, `TKPrefix`, `object`\>\>

## Call Signature

> **TFunction**\<`TKeys`, `TDefaultResult`, `TInterpolationMap`\>(`key`, `options`): `TFunctionDetailedResult`\<`TFuncReturn`\<`ActualNS`, `TKeys`, `TDefaultResult`, `TKPrefix`, `object`\>\>

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:951

### Type Parameters

#### TKeys

`TKeys` _extends_ `unknown`

#### TDefaultResult

`TDefaultResult` _extends_ `DefaultTFuncReturn` = `string`

#### TInterpolationMap

`TInterpolationMap` _extends_ `object` = `StringMap`

### Parameters

#### key

`TKeys` \| `TKeys`[]

#### options

[`TOptionsBase`](TOptionsBase.md) & `TInterpolationMap` & `object`

### Returns

`TFunctionDetailedResult`\<`TFuncReturn`\<`ActualNS`, `TKeys`, `TDefaultResult`, `TKPrefix`, `object`\>\>

## Call Signature

> **TFunction**\<`TKeys`, `TDefaultResult`, `TInterpolationMap`\>(`key`, `options`): `TFuncReturn`\<`ActualNS`, `TKeys`, `TDefaultResult`, `TKPrefix`\>

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:961

### Type Parameters

#### TKeys

`TKeys` _extends_ `unknown`

#### TDefaultResult

`TDefaultResult` _extends_ `DefaultTFuncReturnWithObject` = `object`

#### TInterpolationMap

`TInterpolationMap` _extends_ `object` = `StringMap`

### Parameters

#### key

`TKeys` \| `TKeys`[]

#### options

[`TOptionsBase`](TOptionsBase.md) & `TInterpolationMap` & `object`

### Returns

`TFuncReturn`\<`ActualNS`, `TKeys`, `TDefaultResult`, `TKPrefix`\>

## Call Signature

> **TFunction**\<`TKeys`, `TDefaultResult`, `TInterpolationMap`, `PassedNS`, `PassedOpt`, `UsedNS`\>(`key`, `options`): `TFuncReturn`\<`UsedNS`, `TKeys`, `TDefaultResult`, `TKPrefix`\>

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:971

### Type Parameters

#### TKeys

`TKeys` _extends_ `string`

#### TDefaultResult

`TDefaultResult` _extends_ `DefaultTFuncReturn` = `string`

#### TInterpolationMap

`TInterpolationMap` _extends_ `object` = `StringMap`

#### PassedNS

`PassedNS` _extends_ `Namespace`\<`string`\> = `N` _extends_ `string` ? `N` : `N` _extends_ `null` ? `"translation"` : `N`

#### PassedOpt

`PassedOpt` _extends_ [`TOptionsBase`](TOptionsBase.md) & `object` = [`TOptions`](../type-aliases/TOptions.md)\<`TInterpolationMap`\>

#### UsedNS

`UsedNS` _extends_ `Namespace`\<`string`\> = `Pick`\<`PassedOpt`, `"ns"`\> _extends_ `object` ? `PassedNS` : `ActualNS` \| `"translation"`

### Parameters

#### key

`TKeys` \| `TKeys`[]

#### options

`PassedOpt`

### Returns

`TFuncReturn`\<`UsedNS`, `TKeys`, `TDefaultResult`, `TKPrefix`\>

## Call Signature

> **TFunction**\<`TKeys`, `TDefaultResult`, `TInterpolationMap`\>(`key`, `defaultValue`, `options?`): `TFuncReturn`\<`ActualNS`, `TKeys`, `TDefaultResult`, `TKPrefix`\>

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:994

### Type Parameters

#### TKeys

`TKeys` _extends_ `unknown`

#### TDefaultResult

`TDefaultResult` _extends_ `DefaultTFuncReturn` = `string`

#### TInterpolationMap

`TInterpolationMap` _extends_ `object` = `StringMap`

### Parameters

#### key

`TKeys` \| `TKeys`[]

#### defaultValue

`string`

#### options?

`string` \| [`TOptions`](../type-aliases/TOptions.md)\<`TInterpolationMap`\>

### Returns

`TFuncReturn`\<`ActualNS`, `TKeys`, `TDefaultResult`, `TKPrefix`\>

## Call Signature

> **TFunction**\<`TDefaultResult`, `TInterpolationMap`\>(`key`, `defaultValue`, `options?`): `TFuncReturn`\<`ActualNS`, `string`, `TDefaultResult`, `TKPrefix`\>

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:1003

### Type Parameters

#### TDefaultResult

`TDefaultResult` _extends_ `DefaultTFuncReturn` = `string`

#### TInterpolationMap

`TInterpolationMap` _extends_ `object` = `StringMap`

### Parameters

#### key

`string` \| `string`[]

#### defaultValue

`string`

#### options?

`string` \| [`TOptions`](../type-aliases/TOptions.md)\<`TInterpolationMap`\>

### Returns

`TFuncReturn`\<`ActualNS`, `string`, `TDefaultResult`, `TKPrefix`\>

## Call Signature

> **TFunction**\<`TDefaultResult`, `TInterpolationMap`\>(`key`, `options`): `TFuncReturn`\<`ActualNS`, `string`, `TDefaultResult`, `TKPrefix`\>

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:1013

### Type Parameters

#### TDefaultResult

`TDefaultResult` _extends_ `DefaultTFuncReturn` = `string`

#### TInterpolationMap

`TInterpolationMap` _extends_ `object` = `StringMap`

### Parameters

#### key

`string` \| `string`[]

#### options

[`TOptionsBase`](TOptionsBase.md) & `TInterpolationMap` & `object`

### Returns

`TFuncReturn`\<`ActualNS`, `string`, `TDefaultResult`, `TKPrefix`\>

## Call Signature

> **TFunction**\<`TReturn`\>(`key`, `options?`): `TReturn`

Defined in: [packages/http-framework-i18n/src/index.ts:15](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-i18n/src/index.ts#L15)

### Type Parameters

#### TReturn

`TReturn`

### Parameters

#### key

[`TypedT`](../type-aliases/TypedT.md)\<`TReturn`\>

#### options?

`string` \| [`TOptionsBase`](TOptionsBase.md)

### Returns

`TReturn`

## Call Signature

> **TFunction**\<`TReturn`\>(`key`, `defaultValue`, `options?`): `TReturn`

Defined in: [packages/http-framework-i18n/src/index.ts:16](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-i18n/src/index.ts#L16)

### Type Parameters

#### TReturn

`TReturn`

### Parameters

#### key

[`TypedT`](../type-aliases/TypedT.md)\<`TReturn`\>

#### defaultValue

`TReturn`

#### options?

`string` \| [`TOptionsBase`](TOptionsBase.md)

### Returns

`TReturn`

## Call Signature

> **TFunction**\<`TArgs`, `TReturn`\>(`key`, `options?`): `TReturn`

Defined in: [packages/http-framework-i18n/src/index.ts:17](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-i18n/src/index.ts#L17)

### Type Parameters

#### TArgs

`TArgs` _extends_ `object`

#### TReturn

`TReturn`

### Parameters

#### key

[`TypedFT`](../type-aliases/TypedFT.md)\<`TArgs`, `TReturn`\>

#### options?

[`TOptions`](../type-aliases/TOptions.md)\<`TArgs`\>

### Returns

`TReturn`

## Call Signature

> **TFunction**\<`TArgs`, `TReturn`\>(`key`, `defaultValue`, `options?`): `TReturn`

Defined in: [packages/http-framework-i18n/src/index.ts:18](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-i18n/src/index.ts#L18)

### Type Parameters

#### TArgs

`TArgs` _extends_ `object`

#### TReturn

`TReturn`

### Parameters

#### key

[`TypedFT`](../type-aliases/TypedFT.md)\<`TArgs`, `TReturn`\>

#### defaultValue

`TReturn`

#### options?

[`TOptions`](../type-aliases/TOptions.md)\<`TArgs`\>

### Returns

`TReturn`

## Properties

### lng

> **lng**: `string`

Defined in: [packages/http-framework-i18n/src/index.ts:12](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-i18n/src/index.ts#L12)

---

### ns?

> `optional` **ns?**: `string`

Defined in: [packages/http-framework-i18n/src/index.ts:13](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-i18n/src/index.ts#L13)
