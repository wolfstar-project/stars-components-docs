[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index-1.md) / [@wolfstar/plugin-api](../../../index.md) / [Route](../index.md) / Options

# Interface: Options

Defined in: [packages/plugin-api/src/lib/structures/Route.ts:65](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/Route.ts#L65)

The options for the [Piece](../../../../http-framework/classes/Piece.md).

## theme_extends

- [`PieceOptions`](../../../../http-framework/interfaces/PieceOptions.md)

## Properties

### enabled?

> `readonly` `optional` **enabled?**: `boolean`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:204

Whether or not the piece should be enabled. If set to false, the piece will be unloaded.

#### Default

```ts
true;
```

#### Inherited from

[`PieceOptions`](../../../../http-framework/interfaces/PieceOptions.md).[`enabled`](../../../../http-framework/interfaces/PieceOptions.md#enabled)

---

### methods?

> `optional` **methods?**: readonly (`"DELETE"` \| `"GET"` \| `"HEAD"` \| `"OPTIONS"` \| `"PATCH"` \| `"POST"` \| `"PUT"`)[]

Defined in: [packages/plugin-api/src/lib/structures/Route.ts:76](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/Route.ts#L76)

The HTTP methods this route responds to. If omitted, inferred from a `.<method>` filename
suffix (e.g. `hello.post.ts`), defaulting to `GET`.

---

### name?

> `readonly` `optional` **name?**: `string`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:199

The name for the piece.

#### Default

```ts
'';
```

#### Inherited from

[`PieceOptions`](../../../../http-framework/interfaces/PieceOptions.md).[`name`](../../../../http-framework/interfaces/PieceOptions.md#name)

---

### route?

> `optional` **route?**: `` `/${string}` ``

Defined in: [packages/plugin-api/src/lib/structures/Route.ts:70](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/Route.ts#L70)

An explicit route path, e.g. `/users/[id]`. If omitted, the path is inferred from the
piece's directory structure and file name.
