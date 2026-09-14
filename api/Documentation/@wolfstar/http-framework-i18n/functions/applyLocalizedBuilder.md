[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework-i18n](../index.md) / applyLocalizedBuilder

# Function: applyLocalizedBuilder()

> **applyLocalizedBuilder**\<`T`\>(`builder`, ...`params`): `T`

Defined in: [packages/http-framework-i18n/src/lib/utils.ts:127](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-i18n/src/lib/utils.ts#L127)

Applies the localized names and descriptions on the builder, calling [applyNameLocalizedBuilder](applyNameLocalizedBuilder.md) and
[applyDescriptionLocalizedBuilder](applyDescriptionLocalizedBuilder.md).

## Type Parameters

### T

`T` _extends_ [`BuilderWithNameAndDescription`](../type-aliases/BuilderWithNameAndDescription.md)

## Parameters

### builder

`T`

The builder to apply the localizations to.

### params

\[`` `commands/${string}:${string}` ``\] \| \[[`TypedT`](../type-aliases/TypedT.md), [`TypedT`](../type-aliases/TypedT.md)\]

The root key or the key for the name and description keys.

## Returns

`T`

The updated builder.

## Remarks

If only 2 parameters were passed, `name` will be defined as `${root}Name` and `description` as
`${root}Description`, being `root` the second parameter in the function, after `builder`.
