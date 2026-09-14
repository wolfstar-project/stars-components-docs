[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-api](../index.md) / Route

# Abstract Class: Route\<Options\>

Defined in: [packages/plugin-api/src/lib/structures/Route.ts:16](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/Route.ts#L16)

A single HTTP endpoint. The route's path and methods are either given explicitly via
[Route.Options.route](../namespaces/Route/interfaces/Options.md#route)/[Route.Options.methods](../namespaces/Route/interfaces/Options.md#methods), or inferred from the piece's file
system location: directories become path segments (`(group)`-style directories are skipped,
`index` collapses into its parent), `[param]` segments become dynamic, and a `.<method>`
filename suffix (e.g. `hello.post.ts`) implies that HTTP method.

## theme_extends

- [`Piece`](../../http-framework/classes/Piece.md)\<`Options`, `"routes"`\>

## Type Parameters

### Options

`Options` _extends_ [`Options`](../namespaces/Route/interfaces/Options.md) = [`Options`](../namespaces/Route/interfaces/Options.md)

## Constructors

### Constructor

> **new Route**\<`Options`\>(`context`, `options`): `Route`\<`Options`\>

Defined in: [packages/plugin-api/src/lib/structures/Route.ts:30](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/Route.ts#L30)

#### Parameters

##### context

[`LoaderContext`](../namespaces/Route/type-aliases/LoaderContext.md)

##### options

`Options`

#### Returns

`Route`\<`Options`\>

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

[`Middleware`](Middleware.md).[`location`](Middleware.md#location)

---

### methods

> `readonly` **methods**: `ReadonlySet`\<`"DELETE"` \| `"GET"` \| `"HEAD"` \| `"OPTIONS"` \| `"PATCH"` \| `"POST"` \| `"PUT"`\>

Defined in: [packages/plugin-api/src/lib/structures/Route.ts:28](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/Route.ts#L28)

The HTTP methods this route responds to.

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

### path

> `readonly` **path**: readonly `string`[]

Defined in: [packages/plugin-api/src/lib/structures/Route.ts:23](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/Route.ts#L23)

The normalized path segments this route is registered under, e.g. `['users', '[id]']`.

---

### store

> `readonly` **store**: [`RouteStore`](RouteStore.md)

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

Defined in: [packages/plugin-api/src/lib/structures/Route.ts:59](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/Route.ts#L59)

Handles every method this route was registered for. Branch on `request.method` when a route
needs to support multiple methods.

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
