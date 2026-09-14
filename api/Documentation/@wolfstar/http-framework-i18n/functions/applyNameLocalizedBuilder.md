[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework-i18n](../index.md) / applyNameLocalizedBuilder

# Function: applyNameLocalizedBuilder()

> **applyNameLocalizedBuilder**\<`T`\>(`builder`, `key`): `T`

Defined in: [packages/http-framework-i18n/src/lib/utils.ts:102](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-i18n/src/lib/utils.ts#L102)

Applies the localized names on the builder, calling `setName` and `setNameLocalizations`.

## Type Parameters

### T

`T` _extends_ [`BuilderWithName`](../interfaces/BuilderWithName.md)

## Parameters

### builder

`T`

The builder to apply the localizations to.

### key

[`TypedT`](../type-aliases/TypedT.md)

The key to get the localizations from.

## Returns

`T`

The updated builder.
