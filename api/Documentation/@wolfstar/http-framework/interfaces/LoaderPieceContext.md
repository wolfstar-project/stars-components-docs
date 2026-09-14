[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / LoaderPieceContext

# Interface: LoaderPieceContext\<StoreName\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:170

The context for the piece, contains extra information from the store,
the piece's path, and the store that loaded it.

## theme_extended_by

- [`PieceContext`](PieceContext.md)

## Type Parameters

### StoreName

`StoreName` _extends_ `StoreRegistryKey` = `StoreRegistryKey`

## Properties

### name

> `readonly` **name**: `string`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:182

The module's name extracted from the path.

---

### path

> `readonly` **path**: `string`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:178

The path the module was loaded from, relative to [LoaderPieceContext.root](#root).

---

### root

> `readonly` **root**: `string`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:174

The root directory the piece was loaded from.

---

### store

> `readonly` **store**: [`StoreRegistryEntries`](StoreRegistryEntries.md)\[`StoreName`\]

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:186

The store that loaded the piece.
