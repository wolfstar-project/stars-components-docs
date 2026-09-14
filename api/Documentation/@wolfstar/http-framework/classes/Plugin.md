[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / Plugin

# Abstract Class: Plugin

Defined in: [packages/http-framework/src/lib/plugins/Plugin.ts:11](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/Plugin.ts#L11)

The base class for all plugins. Plugins hook into the [Client](Client.md)'s lifecycle by defining static
methods keyed by the plugin symbols. Use [PluginManager.use](PluginManager.md#use) (via `Client.use`) to register a plugin.

## Since

2.4.0

## Constructors

### Constructor

> **new Plugin**(): `Plugin`

#### Returns

`Plugin`

## Properties

### \[postInitialization\]?

> `static` `optional` **\[postInitialization\]?**: (`this`, `options`) => `void`

Defined in: [packages/http-framework/src/lib/plugins/Plugin.ts:14](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/Plugin.ts#L14)

#### Parameters

##### this

[`Client`](Client.md)

##### options

[`ClientOptions`](../interfaces/ClientOptions.md)

#### Returns

`void`

---

### \[postListen\]?

> `static` `optional` **\[postListen\]?**: (`this`, `options`) => `Awaitable`\<`void`\>

Defined in: [packages/http-framework/src/lib/plugins/Plugin.ts:16](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/Plugin.ts#L16)

#### Parameters

##### this

[`Client`](Client.md)

##### options

[`ClientOptions`](../interfaces/ClientOptions.md)

#### Returns

`Awaitable`\<`void`\>

---

### \[preGenericsInitialization\]?

> `static` `optional` **\[preGenericsInitialization\]?**: (`this`, `options`) => `void`

Defined in: [packages/http-framework/src/lib/plugins/Plugin.ts:12](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/Plugin.ts#L12)

#### Parameters

##### this

[`Client`](Client.md)

##### options

[`ClientOptions`](../interfaces/ClientOptions.md)

#### Returns

`void`

---

### \[preInitialization\]?

> `static` `optional` **\[preInitialization\]?**: (`this`, `options`) => `void`

Defined in: [packages/http-framework/src/lib/plugins/Plugin.ts:13](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/Plugin.ts#L13)

#### Parameters

##### this

[`Client`](Client.md)

##### options

[`ClientOptions`](../interfaces/ClientOptions.md)

#### Returns

`void`

---

### \[preLoad\]?

> `static` `optional` **\[preLoad\]?**: (`this`, `options`) => `Awaitable`\<`void`\>

Defined in: [packages/http-framework/src/lib/plugins/Plugin.ts:15](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/Plugin.ts#L15)

#### Parameters

##### this

[`Client`](Client.md)

##### options

[`ClientOptions`](../interfaces/ClientOptions.md)

#### Returns

`Awaitable`\<`void`\>
