[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / Listener

# Abstract Class: Listener\<Options\>

Defined in: [packages/http-framework/src/lib/structures/Listener.ts:7](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Listener.ts#L7)

The piece to be stored in [Store](Store.md) instances.

## theme_extends

- [`Piece`](Piece.md)\<`Options`, `"listeners"`\>

## Type Parameters

### Options

`Options` _extends_ [`Options`](../namespaces/Listener/interfaces/Options.md) = [`Options`](../namespaces/Listener/interfaces/Options.md)

## Constructors

### Constructor

> **new Listener**\<`Options`\>(`context`, `options`): `Listener`\<`Options`\>

Defined in: [packages/http-framework/src/lib/structures/Listener.ts:12](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Listener.ts#L12)

#### Parameters

##### context

[`LoaderContext`](../namespaces/Listener/type-aliases/LoaderContext.md)

##### options

`Options`

#### Returns

`Listener`\<`Options`\>

#### Overrides

[`Piece`](Piece.md).[`constructor`](Piece.md#constructor)

## Properties

### \_listener

> `protected` **\_listener**: (...`args`) => `unknown`

Defined in: [packages/http-framework/src/lib/structures/Listener.ts:10](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Listener.ts#L10)

#### Parameters

##### args

...readonly `any`[]

#### Returns

`unknown`

---

### emitter

> **emitter**: [`Emitter`](../namespaces/Listener/interfaces/Emitter.md)

Defined in: [packages/http-framework/src/lib/structures/Listener.ts:8](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Listener.ts#L8)

---

### enabled

> **enabled**: `boolean`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:234

Whether or not the piece is enabled.

#### Inherited from

[`Piece`](Piece.md).[`enabled`](Piece.md#enabled)

---

### event

> **event**: `string`

Defined in: [packages/http-framework/src/lib/structures/Listener.ts:9](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Listener.ts#L9)

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

> `readonly` **store**: [`ListenerStore`](ListenerStore.md)

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

### run()

> `abstract` **run**(...`args`): `unknown`

Defined in: [packages/http-framework/src/lib/structures/Listener.ts:20](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Listener.ts#L20)

#### Parameters

##### args

...readonly `any`[]

#### Returns

`unknown`

---

### toJSON()

> **toJSON**(): `PieceJSON`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:266

Defines the `JSON.stringify` behavior of this piece.

#### Returns

`PieceJSON`

#### Inherited from

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
