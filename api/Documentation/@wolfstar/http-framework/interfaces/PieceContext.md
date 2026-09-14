[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / PieceContext

# ~~Interface: PieceContext\<StoreName\>~~

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:189

## Deprecated

Use [`LoaderPieceContext`](LoaderPieceContext.md) instead.

## theme_extends

- [`LoaderPieceContext`](LoaderPieceContext.md)\<`StoreName`\>

## Type Parameters

### StoreName

`StoreName` _extends_ `StoreRegistryKey` = `StoreRegistryKey`

## Properties

### ~~name~~

> `readonly` **name**: `string`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:182

The module's name extracted from the path.

#### Inherited from

[`LoaderPieceContext`](LoaderPieceContext.md).[`name`](LoaderPieceContext.md#name)

---

### ~~path~~

> `readonly` **path**: `string`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:178

The path the module was loaded from, relative to [LoaderPieceContext.root](LoaderPieceContext.md#root).

#### Inherited from

[`LoaderPieceContext`](LoaderPieceContext.md).[`path`](LoaderPieceContext.md#path)

---

### ~~root~~

> `readonly` **root**: `string`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:174

The root directory the piece was loaded from.

#### Inherited from

[`LoaderPieceContext`](LoaderPieceContext.md).[`root`](LoaderPieceContext.md#root)

---

### ~~store~~

> `readonly` **store**: [`StoreRegistryEntries`](StoreRegistryEntries.md)\[`StoreName`\]

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:186

The store that loaded the piece.

#### Inherited from

[`LoaderPieceContext`](LoaderPieceContext.md).[`store`](LoaderPieceContext.md#store)
