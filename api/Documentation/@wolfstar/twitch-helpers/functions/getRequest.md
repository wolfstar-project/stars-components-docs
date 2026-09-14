[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/twitch-helpers](../index.md) / getRequest

# Function: getRequest()

> **getRequest**\<`T`\>(`path`): `Promise`\<`FetchResult`\<`T`\>\>

Defined in: [twitch.ts:185](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/twitch-helpers/src/lib/twitch.ts#L185)

A tiny wrapper around Json(safeFetch) that implements [fetchBearer](fetchBearer.md) to set the proper headers
and adds the [BaseUrlHelix](../variables/BaseUrlHelix.md) for the base path.

## Type Parameters

### T

`T` _extends_ `object`

## Parameters

### path

`string`

The Twitch Path to fetch

## Returns

`Promise`\<`FetchResult`\<`T`\>\>

The response to the request
