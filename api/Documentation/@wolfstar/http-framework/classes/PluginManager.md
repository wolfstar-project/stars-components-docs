[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / PluginManager

# Class: PluginManager

Defined in: [packages/http-framework/src/lib/plugins/PluginManager.ts:23](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/PluginManager.ts#L23)

## Constructors

### Constructor

> **new PluginManager**(): `PluginManager`

#### Returns

`PluginManager`

## Properties

### registry

> `readonly` **registry**: `Set`\<[`HttpFrameworkPluginHookEntry`](../interfaces/HttpFrameworkPluginHookEntry.md)\<[`HttpFrameworkPluginAsyncHook`](../interfaces/HttpFrameworkPluginAsyncHook.md) \| [`HttpFrameworkPluginHook`](../interfaces/HttpFrameworkPluginHook.md)\>\>

Defined in: [packages/http-framework/src/lib/plugins/PluginManager.ts:24](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/PluginManager.ts#L24)

## Methods

### registerHook()

#### Call Signature

> **registerHook**(`hook`, `type`, `name?`): `this`

Defined in: [packages/http-framework/src/lib/plugins/PluginManager.ts:26](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/PluginManager.ts#L26)

##### Parameters

###### hook

[`HttpFrameworkPluginHook`](../interfaces/HttpFrameworkPluginHook.md)

###### type

[`SyncPluginHooks`](../type-aliases/SyncPluginHooks.md)

###### name?

`string`

##### Returns

`this`

#### Call Signature

> **registerHook**(`hook`, `type`, `name?`): `this`

Defined in: [packages/http-framework/src/lib/plugins/PluginManager.ts:27](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/PluginManager.ts#L27)

##### Parameters

###### hook

[`HttpFrameworkPluginAsyncHook`](../interfaces/HttpFrameworkPluginAsyncHook.md)

###### type

[`AsyncPluginHooks`](../type-aliases/AsyncPluginHooks.md)

###### name?

`string`

##### Returns

`this`

---

### registerPostInitializationHook()

> **registerPostInitializationHook**(`hook`, `name?`): `PluginManager`

Defined in: [packages/http-framework/src/lib/plugins/PluginManager.ts:42](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/PluginManager.ts#L42)

#### Parameters

##### hook

[`HttpFrameworkPluginHook`](../interfaces/HttpFrameworkPluginHook.md)

##### name?

`string`

#### Returns

`PluginManager`

---

### registerPostListenHook()

> **registerPostListenHook**(`hook`, `name?`): `PluginManager`

Defined in: [packages/http-framework/src/lib/plugins/PluginManager.ts:50](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/PluginManager.ts#L50)

#### Parameters

##### hook

[`HttpFrameworkPluginAsyncHook`](../interfaces/HttpFrameworkPluginAsyncHook.md)

##### name?

`string`

#### Returns

`PluginManager`

---

### registerPreGenericsInitializationHook()

> **registerPreGenericsInitializationHook**(`hook`, `name?`): `PluginManager`

Defined in: [packages/http-framework/src/lib/plugins/PluginManager.ts:34](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/PluginManager.ts#L34)

#### Parameters

##### hook

[`HttpFrameworkPluginHook`](../interfaces/HttpFrameworkPluginHook.md)

##### name?

`string`

#### Returns

`PluginManager`

---

### registerPreInitializationHook()

> **registerPreInitializationHook**(`hook`, `name?`): `PluginManager`

Defined in: [packages/http-framework/src/lib/plugins/PluginManager.ts:38](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/PluginManager.ts#L38)

#### Parameters

##### hook

[`HttpFrameworkPluginHook`](../interfaces/HttpFrameworkPluginHook.md)

##### name?

`string`

#### Returns

`PluginManager`

---

### registerPreLoadHook()

> **registerPreLoadHook**(`hook`, `name?`): `PluginManager`

Defined in: [packages/http-framework/src/lib/plugins/PluginManager.ts:46](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/PluginManager.ts#L46)

#### Parameters

##### hook

[`HttpFrameworkPluginAsyncHook`](../interfaces/HttpFrameworkPluginAsyncHook.md)

##### name?

`string`

#### Returns

`PluginManager`

---

### use()

> **use**(`plugin`): `PluginManager`

Defined in: [packages/http-framework/src/lib/plugins/PluginManager.ts:54](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/PluginManager.ts#L54)

#### Parameters

##### plugin

_typeof_ [`Plugin`](Plugin.md)

#### Returns

`PluginManager`

---

### values()

#### Call Signature

> **values**(): `Generator`\<[`HttpFrameworkPluginHookEntry`](../interfaces/HttpFrameworkPluginHookEntry.md)\<[`HttpFrameworkPluginAsyncHook`](../interfaces/HttpFrameworkPluginAsyncHook.md) \| [`HttpFrameworkPluginHook`](../interfaces/HttpFrameworkPluginHook.md)\>, `void`, `unknown`\>

Defined in: [packages/http-framework/src/lib/plugins/PluginManager.ts:70](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/PluginManager.ts#L70)

##### Returns

`Generator`\<[`HttpFrameworkPluginHookEntry`](../interfaces/HttpFrameworkPluginHookEntry.md)\<[`HttpFrameworkPluginAsyncHook`](../interfaces/HttpFrameworkPluginAsyncHook.md) \| [`HttpFrameworkPluginHook`](../interfaces/HttpFrameworkPluginHook.md)\>, `void`, `unknown`\>

#### Call Signature

> **values**(`hook`): `Generator`\<[`HttpFrameworkPluginHookEntry`](../interfaces/HttpFrameworkPluginHookEntry.md)\<[`HttpFrameworkPluginHook`](../interfaces/HttpFrameworkPluginHook.md)\>, `void`, `unknown`\>

Defined in: [packages/http-framework/src/lib/plugins/PluginManager.ts:71](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/PluginManager.ts#L71)

##### Parameters

###### hook

[`SyncPluginHooks`](../type-aliases/SyncPluginHooks.md)

##### Returns

`Generator`\<[`HttpFrameworkPluginHookEntry`](../interfaces/HttpFrameworkPluginHookEntry.md)\<[`HttpFrameworkPluginHook`](../interfaces/HttpFrameworkPluginHook.md)\>, `void`, `unknown`\>

#### Call Signature

> **values**(`hook`): `Generator`\<[`HttpFrameworkPluginHookEntry`](../interfaces/HttpFrameworkPluginHookEntry.md)\<[`HttpFrameworkPluginAsyncHook`](../interfaces/HttpFrameworkPluginAsyncHook.md)\>, `void`, `unknown`\>

Defined in: [packages/http-framework/src/lib/plugins/PluginManager.ts:72](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/plugins/PluginManager.ts#L72)

##### Parameters

###### hook

[`AsyncPluginHooks`](../type-aliases/AsyncPluginHooks.md)

##### Returns

`Generator`\<[`HttpFrameworkPluginHookEntry`](../interfaces/HttpFrameworkPluginHookEntry.md)\<[`HttpFrameworkPluginAsyncHook`](../interfaces/HttpFrameworkPluginAsyncHook.md)\>, `void`, `unknown`\>
