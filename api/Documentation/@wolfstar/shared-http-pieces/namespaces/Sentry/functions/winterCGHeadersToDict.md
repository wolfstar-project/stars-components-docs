[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / winterCGHeadersToDict

# Function: winterCGHeadersToDict()

> **winterCGHeadersToDict**(`winterCGHeaders`): `Record`\<`string`, `string`\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/utils/request.d.ts:24

Transforms a `Headers` object that implements the `Web Fetch API` (https://developer.mozilla.org/en-US/docs/Web/API/Headers) into a simple key-value dict.
The header keys will be lower case: e.g. A "Content-Type" header will be stored as "content-type".

## Parameters

### winterCGHeaders

`WebFetchHeaders`

## Returns

`Record`\<`string`, `string`\>
