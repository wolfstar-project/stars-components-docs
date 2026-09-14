[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework-i18n](../index.md) / getLocalizedData

# Function: getLocalizedData()

> **getLocalizedData**(`key`): [`LocalizedData`](../interfaces/LocalizedData.md)

Defined in: [packages/http-framework-i18n/src/lib/utils.ts:86](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-i18n/src/lib/utils.ts#L86)

Gets the value and the localizations from a language key.

## Parameters

### key

[`TypedT`](../type-aliases/TypedT.md)

The key to get the localizations from.

## Returns

[`LocalizedData`](../interfaces/LocalizedData.md)

The retrieved data.

## Remarks

This should be called **strictly** after loading the locales.
