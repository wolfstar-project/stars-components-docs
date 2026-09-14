[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / createProxy

# Function: createProxy()

> **createProxy**\<`T`\>(`target`, `handler`): `T`

Defined in: [packages/http-framework/src/lib/decorators/utils.ts:43](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/decorators/utils.ts#L43)

Creates a new proxy to efficiently add properties to a class without creating subclasses.

## Type Parameters

### T

`T` _extends_ `object`

## Parameters

### target

`T`

The constructor of the class to modify.

### handler

`Omit`\<`ProxyHandler`\<`T`\>, `"get"`\>

The handler function to modify the constructor behavior for the target.

## Returns

`T`

The proxy.
