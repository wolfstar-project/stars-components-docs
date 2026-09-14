[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/http-framework](../../../index.md) / [Listener](../index.md) / Options

# Interface: Options

Defined in: [packages/http-framework/src/lib/structures/Listener.ts:29](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Listener.ts#L29)

## theme_extends

- [`Options`](../../Piece/type-aliases/Options.md)

## Properties

### emitter

> **emitter**: `"rest"` \| [`Emitter`](Emitter.md) \| `"client"`

Defined in: [packages/http-framework/src/lib/structures/Listener.ts:30](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Listener.ts#L30)

---

### enabled?

> `readonly` `optional` **enabled?**: `boolean`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:204

Whether or not the piece should be enabled. If set to false, the piece will be unloaded.

#### Default

```ts
true;
```

#### Inherited from

`Piece.Options.enabled`

---

### event?

> `optional` **event?**: `string`

Defined in: [packages/http-framework/src/lib/structures/Listener.ts:31](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Listener.ts#L31)

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

`Piece.Options.name`
