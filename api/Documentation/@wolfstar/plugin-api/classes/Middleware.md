[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-api](../index.md) / Middleware

# Abstract Class: Middleware\<Options\>

Defined in: [packages/plugin-api/src/lib/structures/Middleware.ts:11](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/Middleware.ts#L11)

A piece that runs on every incoming request, in ascending [Middleware.position](#position) order,
before route dispatch. A middleware stops the chain implicitly by ending the response
(`response.writableEnded`); there is no explicit `next()` callback.

## theme_extends

- [`Piece`](../../http-framework/classes/Piece.md)\<`Options`, `"middlewares"`\>

## Type Parameters

### Options

`Options` _extends_ [`Options`](../namespaces/Middleware/interfaces/Options.md) = [`Options`](../namespaces/Middleware/interfaces/Options.md)

## Constructors

### Constructor

> **new Middleware**\<`Options`\>(`context`, `options`): `Middleware`\<`Options`\>

Defined in: [packages/plugin-api/src/lib/structures/Middleware.ts:21](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/Middleware.ts#L21)

#### Parameters

##### context

[`LoaderContext`](../namespaces/Middleware/type-aliases/LoaderContext.md)

##### options

`Options`

#### Returns

`Middleware`\<`Options`\>

#### Overrides

[`Piece`](../../http-framework/classes/Piece.md).[`constructor`](../../http-framework/classes/Piece.md#constructor)

## Properties

### enabled

> **enabled**: `boolean`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:234

Whether or not the piece is enabled.

#### Inherited from

[`Piece`](../../http-framework/classes/Piece.md).[`enabled`](../../http-framework/classes/Piece.md#enabled)

---

### location

> `readonly` **location**: `PieceLocation`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:226

The location metadata for the piece's file.

#### Inherited from

[`Piece`](../../http-framework/classes/Piece.md).[`location`](../../http-framework/classes/Piece.md#location)

---

### name

> `readonly` **name**: `string`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:230

The name of the piece.

#### Inherited from

[`Piece`](../../http-framework/classes/Piece.md).[`name`](../../http-framework/classes/Piece.md#name)

---

### options

> `readonly` **options**: `Options`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:238

The raw options passed to this [Piece](../../http-framework/classes/Piece.md)

#### Inherited from

[`Piece`](../../http-framework/classes/Piece.md).[`options`](../../http-framework/classes/Piece.md#options-1)

---

### position

> `readonly` **position**: `number`

Defined in: [packages/plugin-api/src/lib/structures/Middleware.ts:19](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/Middleware.ts#L19)

The built-in middlewares use the following positions:

- `headers`: 10 (CORS headers, 404/405 short-circuit)
- `body`: 20 (`Content-Length` validation)

---

### store

> `readonly` **store**: [`MiddlewareStore`](MiddlewareStore.md)

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:222

The store that contains the piece.

#### Inherited from

[`Piece`](../../http-framework/classes/Piece.md).[`store`](../../http-framework/classes/Piece.md#store)

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

[`Piece`](../../http-framework/classes/Piece.md).[`container`](../../http-framework/classes/Piece.md#container)

## Methods

### onLoad()

> **onLoad**(): `unknown`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:249

Per-piece listener that is called when the piece is loaded into the store.
Useful to set-up asynchronous initialization tasks.

#### Returns

`unknown`

#### Inherited from

[`Piece`](../../http-framework/classes/Piece.md).[`onLoad`](../../http-framework/classes/Piece.md#onload)

---

### onUnload()

> **onUnload**(): `unknown`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:254

Per-piece listener that is called when the piece is unloaded from the store.
Useful to set-up clean-up tasks.

#### Returns

`unknown`

#### Inherited from

[`Piece`](../../http-framework/classes/Piece.md).[`onUnload`](../../http-framework/classes/Piece.md#onunload)

---

### reload()

> **reload**(): `Promise`\<`void`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:262

Reloads the piece by loading the same path in the store.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Piece`](../../http-framework/classes/Piece.md).[`reload`](../../http-framework/classes/Piece.md#reload)

---

### run()

> `abstract` **run**(`request`, `response`): `unknown`

Defined in: [packages/plugin-api/src/lib/structures/Middleware.ts:26](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/Middleware.ts#L26)

#### Parameters

##### request

[`ApiRequest`](ApiRequest.md)

##### response

[`ApiResponse`](ApiResponse.md)

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

[`Piece`](../../http-framework/classes/Piece.md).[`toJSON`](../../http-framework/classes/Piece.md#tojson)

---

### unload()

> **unload**(): `Promise`\<`void`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:258

Unloads and disables the piece.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Piece`](../../http-framework/classes/Piece.md).[`unload`](../../http-framework/classes/Piece.md#unload)
