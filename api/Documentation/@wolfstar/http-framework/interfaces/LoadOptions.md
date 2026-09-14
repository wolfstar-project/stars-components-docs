[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / LoadOptions

# Interface: LoadOptions

Defined in: [packages/http-framework/src/lib/Client.ts:265](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L265)

## Properties

### baseUserDirectory?

> `optional` **baseUserDirectory?**: `string` \| `null`

Defined in: [packages/http-framework/src/lib/Client.ts:271](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L271)

The base user directory, if set to `null`, the library will not call [StoreRegistry.registerPath](../classes/StoreRegistry.md#registerpath),
meaning that you will need to manually set each folder for each store. Please read the aforementioned method's
documentation for more information.
