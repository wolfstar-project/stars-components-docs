[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / ListenerLoaderStrategy

# Class: ListenerLoaderStrategy

Defined in: [packages/http-framework/src/lib/structures/ListenerLoaderStrategy.ts:13](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/ListenerLoaderStrategy.ts#L13)

Represents a strategy for loading and unloading listeners.

## Since

2.1.0

## theme_extends

- `LoaderStrategy`\<[`Listener`](Listener.md)\>

## Constructors

### Constructor

> **new ListenerLoaderStrategy**(): `ListenerLoaderStrategy`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:844

#### Returns

`ListenerLoaderStrategy`

#### Inherited from

`LoaderStrategy<Listener>.constructor`

## Properties

### clientUsesESModules

> **clientUsesESModules**: `boolean`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:841

#### Inherited from

`LoaderStrategy.clientUsesESModules`

---

### supportedExtensions

> **supportedExtensions**: `string`[]

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:842

#### Inherited from

`LoaderStrategy.supportedExtensions`

## Methods

### filter()

> **filter**(`path`): `FilterResult`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:845

Retrieves the name and the extension of the specified file path.

#### Parameters

##### path

`string`

The path of the file to be processed.

#### Returns

`FilterResult`

A ModuleData on success, otherwise `null` to stop the store from processing the path.

#### Example

```typescript
// ts-node support
class MyStrategy extends LoaderStrategy {
	filter(path) {
		const extension = extname(path);
		if (!['.js', '.ts'].includes(extension)) return null;
		const name = basename(path, extension);
		return { extension, name };
	}
}
```

#### Inherited from

`LoaderStrategy.filter`

---

### load()

> **load**(`store`, `file`): `ILoaderResult`\<[`Listener`](Listener.md)\<[`Options`](../namespaces/Listener/interfaces/Options.md)\>\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:847

The load hook, use this to override the loader.

#### Parameters

##### store

[`Store`](Store.md)\<[`Listener`](Listener.md)\<[`Options`](../namespaces/Listener/interfaces/Options.md)\>\>

##### file

`HydratedModuleData`

#### Returns

`ILoaderResult`\<[`Listener`](Listener.md)\<[`Options`](../namespaces/Listener/interfaces/Options.md)\>\>

#### Example

```typescript
class MyStrategy extends LoaderStrategy {
	load(store, file) {
		// ...
	}
}
```

#### Inherited from

`LoaderStrategy.load`

---

### onError()

> **onError**(`error`, `path`): `void`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:852

#### Parameters

##### error

`Error`

The error that was thrown.

##### path

`string`

The path of the file that caused the error to be thrown.

#### Returns

`void`

#### Inherited from

`LoaderStrategy.onError`

---

### onLoad()

> **onLoad**(`_store`, `piece`): `void`

Defined in: [packages/http-framework/src/lib/structures/ListenerLoaderStrategy.ts:22](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/ListenerLoaderStrategy.ts#L22)

Called when a listener is loaded.

#### Parameters

##### \_store

[`ListenerStore`](ListenerStore.md)

##### piece

[`Listener`](Listener.md)

The listener being loaded.

#### Returns

`void`

The loaded listener.

#### Since

2.1.0

#### Overrides

`LoaderStrategy.onLoad`

---

### onLoadAll()

> **onLoadAll**(`store`): `unknown`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:849

Called after all pieces have been loaded.

#### Parameters

##### store

[`Store`](Store.md)\<[`Listener`](Listener.md)\<[`Options`](../namespaces/Listener/interfaces/Options.md)\>\>

The store that loaded all pieces.

#### Returns

`unknown`

#### Inherited from

`LoaderStrategy.onLoadAll`

---

### onUnload()

> **onUnload**(`_store`, `piece`): `void`

Defined in: [packages/http-framework/src/lib/structures/ListenerLoaderStrategy.ts:40](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/ListenerLoaderStrategy.ts#L40)

Called when a listener is unloaded.

#### Parameters

##### \_store

[`ListenerStore`](ListenerStore.md)

##### piece

[`Listener`](Listener.md)

The listener being unloaded.

#### Returns

`void`

The unloaded listener.

#### Since

2.1.0

#### Overrides

`LoaderStrategy.onUnload`

---

### onUnloadAll()

> **onUnloadAll**(`store`): `unknown`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:851

Called after all pieces have been unloaded.

#### Parameters

##### store

[`Store`](Store.md)\<[`Listener`](Listener.md)\<[`Options`](../namespaces/Listener/interfaces/Options.md)\>\>

The store that unloaded all pieces.

#### Returns

`unknown`

#### Inherited from

`LoaderStrategy.onUnloadAll`

---

### preload()

> **preload**(`file`): `AsyncPreloadResult`\<[`Listener`](Listener.md)\<[`Options`](../namespaces/Listener/interfaces/Options.md)\>\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:846

The pre-load hook, use this to override the loader.

#### Parameters

##### file

`ModuleData`

#### Returns

`AsyncPreloadResult`\<[`Listener`](Listener.md)\<[`Options`](../namespaces/Listener/interfaces/Options.md)\>\>

#### Examples

```typescript
// CommonJS support:
class MyStrategy extends LoaderStrategy {
	preload(path) {
		return require(path);
	}
}
```

```typescript
// ESM support:
class MyStrategy extends LoaderStrategy {
	preload(file) {
		return import(file.path);
	}
}
```

#### Inherited from

`LoaderStrategy.preload`

---

### walk()

> **walk**(`store`, `path`, `logger?`): `AsyncIterableIterator`\<`string`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:853

Walks the specified path and returns an async iterator of all the files' paths.

#### Parameters

##### store

[`Store`](Store.md)\<[`Listener`](Listener.md)\<[`Options`](../namespaces/Listener/interfaces/Options.md)\>\>

The store that is walking the path.

##### path

`string`

The path to recursively walk.

##### logger?

`StoreLogger` \| `null`

The logger to use when walking the path, if any.

#### Returns

`AsyncIterableIterator`\<`string`\>

#### Inherited from

`LoaderStrategy.walk`
