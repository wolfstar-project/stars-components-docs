[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / CommandStoreRouter

# Class: CommandStoreRouter

Defined in: [packages/http-framework/src/lib/structures/CommandStoreRouter.ts:10](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/CommandStoreRouter.ts#L10)

Represents a router for mapping commands to chat inputs and context menus.

## Since

2.0.0

## Constructors

### Constructor

> **new CommandStoreRouter**(): `CommandStoreRouter`

#### Returns

`CommandStoreRouter`

## Methods

### get()

> **get**(`interaction`): [`Command`](Command.md)\<[`PieceOptions`](../interfaces/PieceOptions.md)\> \| `null`

Defined in: [packages/http-framework/src/lib/structures/CommandStoreRouter.ts:21](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/CommandStoreRouter.ts#L21)

Gets the command associated with the given interaction.

#### Parameters

##### interaction

`APIApplicationCommandInteraction`

The interaction object.

#### Returns

[`Command`](Command.md)\<[`PieceOptions`](../interfaces/PieceOptions.md)\> \| `null`

The command associated with the interaction, or null if not found.

#### Since

2.0.0

---

### getChatInput()

> **getChatInput**(`name`): [`Command`](Command.md)\<[`PieceOptions`](../interfaces/PieceOptions.md)\> \| `null`

Defined in: [packages/http-framework/src/lib/structures/CommandStoreRouter.ts:34](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/CommandStoreRouter.ts#L34)

Gets the chat input command with the specified name.

#### Parameters

##### name

`string`

The name of the chat input command.

#### Returns

[`Command`](Command.md)\<[`PieceOptions`](../interfaces/PieceOptions.md)\> \| `null`

The chat input command with the specified name, or null if not found.

#### Since

2.0.0

---

### getContextMenu()

> **getContextMenu**(`name`): [`Command`](Command.md)\<[`PieceOptions`](../interfaces/PieceOptions.md)\> \| `null`

Defined in: [packages/http-framework/src/lib/structures/CommandStoreRouter.ts:45](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/CommandStoreRouter.ts#L45)

Gets the context menu command with the specified name.

#### Parameters

##### name

`string`

The name of the context menu command.

#### Returns

[`Command`](Command.md)\<[`PieceOptions`](../interfaces/PieceOptions.md)\> \| `null`

The context menu command with the specified name, or null if not found.

#### Since

2.0.0
