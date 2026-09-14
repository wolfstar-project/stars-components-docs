[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / Piece

# Class: Piece\<Options, StoreName\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:218

The piece to be stored in [Store](Store.md) instances.

## theme_extended_by

- [`Command`](Command.md)
- [`InteractionHandler`](InteractionHandler.md)
- [`Listener`](Listener.md)
- [`AliasPiece`](AliasPiece.md)
- [`Middleware`](../../plugin-api/classes/Middleware.md)
- [`Route`](../../plugin-api/classes/Route.md)

## Type Parameters

### Options

`Options` _extends_ [`PieceOptions`](../interfaces/PieceOptions.md) = [`PieceOptions`](../interfaces/PieceOptions.md)

### StoreName

`StoreName` _extends_ `StoreRegistryKey` = `StoreRegistryKey`

## Constructors

### Constructor

> **new Piece**\<`Options`, `StoreName`\>(`context`, `options?`): `Piece`\<`Options`, `StoreName`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:239

#### Parameters

##### context

[`LoaderContext`](../namespaces/Piece/type-aliases/LoaderContext.md)\<`StoreName`\>

##### options?

[`PieceOptions`](../interfaces/PieceOptions.md)

#### Returns

`Piece`\<`Options`, `StoreName`\>

## Properties

### enabled

> **enabled**: `boolean`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:234

Whether or not the piece is enabled.

---

### location

> `readonly` **location**: `PieceLocation`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:226

The location metadata for the piece's file.

---

### name

> `readonly` **name**: `string`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:230

The name of the piece.

---

### options

> `readonly` **options**: `Options`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:238

The raw options passed to this Piece

---

### store

> `readonly` **store**: [`StoreRegistryEntries`](../interfaces/StoreRegistryEntries.md)\[`StoreName`\]

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:222

The store that contains the piece.

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

## Methods

### onLoad()

> **onLoad**(): `unknown`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:249

Per-piece listener that is called when the piece is loaded into the store.
Useful to set-up asynchronous initialization tasks.

#### Returns

`unknown`

---

### onUnload()

> **onUnload**(): `unknown`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:254

Per-piece listener that is called when the piece is unloaded from the store.
Useful to set-up clean-up tasks.

#### Returns

`unknown`

---

### reload()

> **reload**(): `Promise`\<`void`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:262

Reloads the piece by loading the same path in the store.

#### Returns

`Promise`\<`void`\>

---

### toJSON()

> **toJSON**(): `PieceJSON`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:266

Defines the `JSON.stringify` behavior of this piece.

#### Returns

`PieceJSON`

---

### unload()

> **unload**(): `Promise`\<`void`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:258

Unloads and disables the piece.

#### Returns

`Promise`\<`void`\>
