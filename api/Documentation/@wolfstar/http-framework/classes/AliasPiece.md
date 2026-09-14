[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / AliasPiece

# Class: AliasPiece\<Options, StoreName\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:873

The piece to be stored in [AliasStore](AliasStore.md) instances.

## theme_extends

- [`Piece`](Piece.md)\<`Options`, `StoreName`\>

## Type Parameters

### Options

`Options` _extends_ [`AliasPieceOptions`](../interfaces/AliasPieceOptions.md) = [`AliasPieceOptions`](../interfaces/AliasPieceOptions.md)

### StoreName

`StoreName` _extends_ `StoreRegistryKey` = `StoreRegistryKey`

## Constructors

### Constructor

> **new AliasPiece**\<`Options`, `StoreName`\>(`context`, `options?`): `AliasPiece`\<`Options`, `StoreName`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:878

#### Parameters

##### context

[`LoaderContext`](../namespaces/AliasPiece/type-aliases/LoaderContext.md)\<`StoreName`\>

##### options?

[`AliasPieceOptions`](../interfaces/AliasPieceOptions.md)

#### Returns

`AliasPiece`\<`Options`, `StoreName`\>

#### Overrides

[`Piece`](Piece.md).[`constructor`](Piece.md#constructor)

## Properties

### aliases

> **aliases**: readonly `string`[]

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:877

The aliases for the piece.

---

### enabled

> **enabled**: `boolean`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:234

Whether or not the piece is enabled.

#### Inherited from

[`Piece`](Piece.md).[`enabled`](Piece.md#enabled)

---

### location

> `readonly` **location**: `PieceLocation`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:226

The location metadata for the piece's file.

#### Inherited from

[`Piece`](Piece.md).[`location`](Piece.md#location)

---

### name

> `readonly` **name**: `string`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:230

The name of the piece.

#### Inherited from

[`Piece`](Piece.md).[`name`](Piece.md#name)

---

### options

> `readonly` **options**: `Options`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:238

The raw options passed to this [Piece](Piece.md)

#### Inherited from

[`Piece`](Piece.md).[`options`](Piece.md#options-1)

---

### store

> `readonly` **store**: [`StoreRegistryEntries`](../interfaces/StoreRegistryEntries.md)\[`StoreName`\]

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:222

The store that contains the piece.

#### Inherited from

[`Piece`](Piece.md).[`store`](Piece.md#store)

## Accessors

### container

#### Get Signature

> **get** **container**(): `Container`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:244

A reference to the Container object for ease of use.

##### See

container

##### Returns

`Container`

#### Inherited from

[`Piece`](Piece.md).[`container`](Piece.md#container)

## Methods

### onLoad()

> **onLoad**(): `unknown`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:249

Per-piece listener that is called when the piece is loaded into the store.
Useful to set-up asynchronous initialization tasks.

#### Returns

`unknown`

#### Inherited from

[`Piece`](Piece.md).[`onLoad`](Piece.md#onload)

---

### onUnload()

> **onUnload**(): `unknown`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:254

Per-piece listener that is called when the piece is unloaded from the store.
Useful to set-up clean-up tasks.

#### Returns

`unknown`

#### Inherited from

[`Piece`](Piece.md).[`onUnload`](Piece.md#onunload)

---

### reload()

> **reload**(): `Promise`\<`void`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:262

Reloads the piece by loading the same path in the store.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Piece`](Piece.md).[`reload`](Piece.md#reload)

---

### toJSON()

> **toJSON**(): `AliasPieceJSON`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:882

Defines the `JSON.stringify` behavior of this alias piece.

#### Returns

`AliasPieceJSON`

#### Overrides

[`Piece`](Piece.md).[`toJSON`](Piece.md#tojson)

---

### unload()

> **unload**(): `Promise`\<`void`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:258

Unloads and disables the piece.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Piece`](Piece.md).[`unload`](Piece.md#unload)
