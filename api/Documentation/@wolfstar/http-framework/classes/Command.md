[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / Command

# Abstract Class: Command\<Options\>

Defined in: [packages/http-framework/src/lib/structures/Command.ts:7](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Command.ts#L7)

The piece to be stored in [Store](Store.md) instances.

## theme_extends

- [`Piece`](Piece.md)\<`Options`, `"commands"`\>

## Type Parameters

### Options

`Options` _extends_ [`Options`](../namespaces/Command/type-aliases/Options.md) = [`Options`](../namespaces/Command/type-aliases/Options.md)

## Constructors

### Constructor

> **new Command**\<`Options`\>(`context`, `options?`): `Command`\<`Options`\>

Defined in: [packages/http-framework/src/lib/structures/Command.ts:14](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Command.ts#L14)

#### Parameters

##### context

[`LoaderContext`](../namespaces/Command/type-aliases/LoaderContext.md)

##### options?

`Options` = `...`

#### Returns

`Command`\<`Options`\>

#### Overrides

[`Piece`](Piece.md).[`constructor`](Piece.md#constructor)

## Properties

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

### router

> `readonly` **router**: [`CommandRouter`](CommandRouter.md)\<`Options`\>

Defined in: [packages/http-framework/src/lib/structures/Command.ts:12](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Command.ts#L12)

The router for the command.

#### Since

2.0.0

---

### store

> `readonly` **store**: [`CommandStore`](CommandStore.md)

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

---

### registry

#### Get Signature

> **get** **registry**(): [`ApplicationCommandRegistryEntry`](ApplicationCommandRegistryEntry.md) \| `null`

Defined in: [packages/http-framework/src/lib/structures/Command.ts:25](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Command.ts#L25)

Gets the registry for this command.

##### Returns

[`ApplicationCommandRegistryEntry`](ApplicationCommandRegistryEntry.md) \| `null`

The registry for this command, or `null` if it is not registered.

## Methods

### autocompleteRun()

> **autocompleteRun**(`interaction`, `args`): `unknown`

Defined in: [packages/http-framework/src/lib/structures/Command.ts:78](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Command.ts#L78)

Responds to an auto completable option for this command

#### Parameters

##### interaction

[`AutocompleteInteraction`](AutocompleteInteraction.md)

The interaction to be handled.

##### args

`any`

The parsed arguments for this autocomplete interaction.

#### Returns

`unknown`

The response to the autocomplete interaction.

---

### chatInputRun()

> **chatInputRun**(`interaction`, `args`): `unknown`

Defined in: [packages/http-framework/src/lib/structures/Command.ts:66](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Command.ts#L66)

Responds to the chat input command for this command

#### Parameters

##### interaction

[`ApplicationCommand`](../namespaces/Interactions/type-aliases/ApplicationCommand.md)

The interaction to be handled.

##### args

`object`

The parsed arguments for this autocomplete interaction.

#### Returns

`unknown`

---

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

### registerApplicationCommands()?

> `optional` **registerApplicationCommands**(`registry`): `unknown`

Defined in: [packages/http-framework/src/lib/structures/Command.ts:58](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Command.ts#L58)

Registers this command's application commands imperatively, without relying on decorators.

#### Parameters

##### registry

[`Registry`](../namespaces/Command/type-aliases/Registry.md)

The registry to register this command's application commands with.

#### Returns

`unknown`

#### Remarks

This is invoked once, synchronously, from the base `Command` constructor, right before this
command's router is built, and therefore before any subclass field initializers or subclass constructor body have
run. Because of this it must be declared as a method (not a class-field arrow function, which would not yet be
assigned at this point and would be silently skipped) and it must not read subclass instance state, which is still
uninitialized; it should register commands using only the provided `registry`. This matches the static, class-level
nature of the decorators: it is the decorator-free equivalent of [RegisterCommand](../functions/RegisterCommand.md) and its siblings, and a
command should use either this method or the decorators, not both.

#### Since

3.1.0

#### Example

```typescript
import { Command } from '@wolfstar/http-framework';

export class UserCommand extends Command {
	public override registerApplicationCommands(registry: Command.Registry) {
		registry.registerChatInputCommand((builder) => builder.setName('ping').setDescription('Runs a network connection test with me'));
	}

	public override chatInputRun(interaction: Command.ChatInputInteraction) {
		return interaction.reply({ content: 'Pong!' });
	}
}
```

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
