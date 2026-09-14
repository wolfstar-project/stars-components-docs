[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/reddit-helpers](../index.md) / getRequest

# Function: getRequest()

> **getRequest**\<`T`\>(`path`): `Promise`\<`FetchResult`\<`T`\>\>

Defined in: [packages/reddit-helpers/src/lib/reddit.ts:89](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/reddit-helpers/src/lib/reddit.ts#L89)

A tiny wrapper around Json(safeFetch) that implements [fetchBearer](fetchBearer.md) to set the proper headers
and adds the [BaseUrl](../variables/BaseUrl.md) for the base path.

## Type Parameters

### T

`T` _extends_ `object`

## Parameters

### path

`string`

The Reddit Path to fetch

## Returns

`Promise`\<`FetchResult`\<`T`\>\>

The response to the request
