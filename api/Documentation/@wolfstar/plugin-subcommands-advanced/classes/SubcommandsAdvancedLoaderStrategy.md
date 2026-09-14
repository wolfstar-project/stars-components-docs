[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-subcommands-advanced](../index.md) / SubcommandsAdvancedLoaderStrategy

# Class: SubcommandsAdvancedLoaderStrategy

Defined in: [packages/plugin-subcommands-advanced/src/lib/utils/strategy.ts:11](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-subcommands-advanced/src/lib/utils/strategy.ts#L11)

Loader strategy that wires modular subcommands onto parent commands before
chat-input mappings are published to CommandStore.router.

[CommandStore.loadAll](../../plugin-api/classes/MiddlewareStore.md#loadall) constructs every piece first (children populate the
registries), then inserts them — [onLoad](#onload) therefore sees a complete registry.

## theme_extends

- `CommandLoaderStrategy`

## Constructors

### Constructor

> **new SubcommandsAdvancedLoaderStrategy**(): `SubcommandsAdvancedLoaderStrategy`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:844

#### Returns

`SubcommandsAdvancedLoaderStrategy`

#### Inherited from

`CommandLoaderStrategy.constructor`

## Properties

### clientUsesESModules

> **clientUsesESModules**: `boolean`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:841

#### Inherited from

`CommandLoaderStrategy.clientUsesESModules`

---

### supportedExtensions

> **supportedExtensions**: `string`[]

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:842

#### Inherited from

`CommandLoaderStrategy.supportedExtensions`

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

`CommandLoaderStrategy.filter`

---

### load()

> **load**(`store`, `file`): `ILoaderResult`\<`Command`\<[`PieceOptions`](../../http-framework/interfaces/PieceOptions.md)\>\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:847

The load hook, use this to override the loader.

#### Parameters

##### store

[`Store`](../../http-framework/classes/Store.md)\<`Command`\<[`PieceOptions`](../../http-framework/interfaces/PieceOptions.md)\>\>

##### file

`HydratedModuleData`

#### Returns

`ILoaderResult`\<`Command`\<[`PieceOptions`](../../http-framework/interfaces/PieceOptions.md)\>\>

#### Example

```typescript
class MyStrategy extends LoaderStrategy {
	load(store, file) {
		// ...
	}
}
```

#### Inherited from

`CommandLoaderStrategy.load`

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

`CommandLoaderStrategy.onError`

---

### onLoad()

> **onLoad**(`store`, `piece`): `Command`\<[`PieceOptions`](../../http-framework/interfaces/PieceOptions.md)\>

Defined in: [packages/plugin-subcommands-advanced/src/lib/utils/strategy.ts:12](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-subcommands-advanced/src/lib/utils/strategy.ts#L12)

Called when a command is loaded.

#### Parameters

##### store

`CommandStore`

The command store.

##### piece

`Command`

The command being loaded.

#### Returns

`Command`\<[`PieceOptions`](../../http-framework/interfaces/PieceOptions.md)\>

The loaded command.

#### Since

2.0.0

#### Overrides

`CommandLoaderStrategy.onLoad`

---

### onLoadAll()

> **onLoadAll**(`store`): `unknown`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:849

Called after all pieces have been loaded.

#### Parameters

##### store

[`Store`](../../http-framework/classes/Store.md)\<`Command`\<[`PieceOptions`](../../http-framework/interfaces/PieceOptions.md)\>\>

The store that loaded all pieces.

#### Returns

`unknown`

#### Inherited from

`CommandLoaderStrategy.onLoadAll`

---

### onUnload()

> **onUnload**(`store`, `piece`): `Command`\<[`PieceOptions`](../../http-framework/interfaces/PieceOptions.md)\>

Defined in: node_modules/.pnpm/@wolfstar+http-framework@3.1.2/node_modules/@wolfstar/http-framework/dist/esm/index.d.ts:2380

Called when a command is unloaded.

#### Parameters

##### store

`CommandStore`

The command store.

##### piece

`Command`

The command being unloaded.

#### Returns

`Command`\<[`PieceOptions`](../../http-framework/interfaces/PieceOptions.md)\>

The unloaded command.

#### Since

2.0.0

#### Inherited from

`CommandLoaderStrategy.onUnload`

---

### onUnloadAll()

> **onUnloadAll**(`store`): `unknown`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:851

Called after all pieces have been unloaded.

#### Parameters

##### store

[`Store`](../../http-framework/classes/Store.md)\<`Command`\<[`PieceOptions`](../../http-framework/interfaces/PieceOptions.md)\>\>

The store that unloaded all pieces.

#### Returns

`unknown`

#### Inherited from

`CommandLoaderStrategy.onUnloadAll`

---

### preload()

> **preload**(`file`): `AsyncPreloadResult`\<`Command`\<[`PieceOptions`](../../http-framework/interfaces/PieceOptions.md)\>\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:846

The pre-load hook, use this to override the loader.

#### Parameters

##### file

`ModuleData`

#### Returns

`AsyncPreloadResult`\<`Command`\<[`PieceOptions`](../../http-framework/interfaces/PieceOptions.md)\>\>

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

`CommandLoaderStrategy.preload`

---

### walk()

> **walk**(`store`, `path`, `logger?`): `AsyncIterableIterator`\<`string`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:853

Walks the specified path and returns an async iterator of all the files' paths.

#### Parameters

##### store

[`Store`](../../http-framework/classes/Store.md)\<`Command`\<[`PieceOptions`](../../http-framework/interfaces/PieceOptions.md)\>\>

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

`CommandLoaderStrategy.walk`
