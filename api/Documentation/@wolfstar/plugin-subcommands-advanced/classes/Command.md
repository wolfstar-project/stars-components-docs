[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-subcommands-advanced](../index.md) / Command

# Class: Command\<Options\>

Defined in: [packages/plugin-subcommands-advanced/src/lib/structures/command.ts:37](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-subcommands-advanced/src/lib/structures/command.ts#L37)

Command class that can register itself as a modular subcommand (or grouped subcommand)
of a parent [Subcommand](Subcommand.md) / chat-input command.

## Example

```typescript
import { Command } from '@wolfstar/plugin-subcommands-advanced';

export class PingCommand extends Command {
	public constructor(context: Command.LoaderContext, options: Command.Options) {
		super(context, {
			...options,
			registerSubCommand: {
				parentCommandName: 'utils',
				slashSubcommand: (builder) => builder.setName('ping').setDescription('Ping!')
			}
		});
	}

	public override chatInputRun(interaction: Command.ChatInputInteraction) {
		return interaction.reply({ content: 'Pong!' });
	}
}
```

## theme_extends

- `Command`\<`Options`\>

## Type Parameters

### Options

`Options` _extends_ `AdvancedCommandOptions` = `AdvancedCommandOptions`

## Constructors

### Constructor

> **new Command**\<`Options`\>(`context`, `options?`): `Command`\<`Options`\>

Defined in: [packages/plugin-subcommands-advanced/src/lib/structures/command.ts:40](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-subcommands-advanced/src/lib/structures/command.ts#L40)

#### Parameters

##### context

`LoaderContext`

##### options?

`Options` = `...`

#### Returns

`Command`\<`Options`\>

#### Overrides

`FrameworkCommand<Options>.constructor`

## Properties

### enabled

> **enabled**: `boolean`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:234

Whether or not the piece is enabled.

#### Inherited from

[`Subcommand`](Subcommand.md).[`enabled`](Subcommand.md#enabled)

---

### location

> `readonly` **location**: `PieceLocation`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:226

The location metadata for the piece's file.

#### Inherited from

[`Subcommand`](Subcommand.md).[`location`](Subcommand.md#location)

---

### name

> `readonly` **name**: `string`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:230

The name of the piece.

#### Inherited from

`FrameworkCommand.name`

---

### options

> `readonly` **options**: `Options`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:238

The raw options passed to this [Piece](../../http-framework/namespaces/Piece/index.md)

#### Inherited from

`FrameworkCommand.options`

---

### router

> `readonly` **router**: `CommandRouter`\<`Options`\>

Defined in: node_modules/.pnpm/@wolfstar+http-framework@3.1.2/node_modules/@wolfstar/http-framework/dist/esm/index.d.ts:1586

The router for the command.

#### Since

2.0.0

#### Inherited from

`FrameworkCommand.router`

---

### store

> `readonly` **store**: `CommandStore`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:222

The store that contains the piece.

#### Inherited from

`FrameworkCommand.store`

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

[`Subcommand`](Subcommand.md).[`container`](Subcommand.md#container)

---

### registry

#### Get Signature

> **get** **registry**(): `ApplicationCommandRegistryEntry` \| `null`

Defined in: node_modules/.pnpm/@wolfstar+http-framework@3.1.2/node_modules/@wolfstar/http-framework/dist/esm/index.d.ts:1593

Gets the registry for this command.

##### Returns

`ApplicationCommandRegistryEntry` \| `null`

The registry for this command, or `null` if it is not registered.

#### Inherited from

[`Subcommand`](Subcommand.md).[`registry`](Subcommand.md#registry)

## Methods

### autocompleteRun()

> **autocompleteRun**(`interaction`, `args`): `unknown`

Defined in: node_modules/.pnpm/@wolfstar+http-framework@3.1.2/node_modules/@wolfstar/http-framework/dist/esm/index.d.ts:1638

Responds to an auto completable option for this command

#### Parameters

##### interaction

`AutocompleteInteraction$1`

The interaction to be handled.

##### args

`any`

The parsed arguments for this autocomplete interaction.

#### Returns

`unknown`

The response to the autocomplete interaction.

#### Inherited from

`FrameworkCommand.autocompleteRun`

---

### chatInputRun()

> **chatInputRun**(`interaction`, `args`): `unknown`

Defined in: node_modules/.pnpm/@wolfstar+http-framework@3.1.2/node_modules/@wolfstar/http-framework/dist/esm/index.d.ts:1630

Responds to the chat input command for this command

#### Parameters

##### interaction

`ApplicationCommand`

The interaction to be handled.

##### args

`object`

The parsed arguments for this autocomplete interaction.

#### Returns

`unknown`

#### Inherited from

`FrameworkCommand.chatInputRun`

---

### onLoad()

> **onLoad**(): `unknown`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:249

Per-piece listener that is called when the piece is loaded into the store.
Useful to set-up asynchronous initialization tasks.

#### Returns

`unknown`

#### Inherited from

`FrameworkCommand.onLoad`

---

### onUnload()

> **onUnload**(): `unknown`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:254

Per-piece listener that is called when the piece is unloaded from the store.
Useful to set-up clean-up tasks.

#### Returns

`unknown`

#### Inherited from

`FrameworkCommand.onUnload`

---

### registerApplicationCommands()?

> `optional` **registerApplicationCommands**(`registry`): `unknown`

Defined in: node_modules/.pnpm/@wolfstar+http-framework@3.1.2/node_modules/@wolfstar/http-framework/dist/esm/index.d.ts:1623

Registers this command's application commands imperatively, without relying on decorators.

#### Parameters

##### registry

`Registry`

The registry to register this command's application commands with.

#### Returns

`unknown`

#### Remarks

This is invoked once, synchronously, from the base [`Command`](../namespaces/Command/index.md) constructor, right before this
command's router is built, and therefore before any subclass field initializers or subclass constructor body have
run. Because of this it must be declared as a method (not a class-field arrow function, which would not yet be
assigned at this point and would be silently skipped) and it must not read subclass instance state, which is still
uninitialized; it should register commands using only the provided `registry`. This matches the static, class-level
nature of the decorators: it is the decorator-free equivalent of RegisterCommand and its siblings, and a
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

#### Inherited from

`FrameworkCommand.registerApplicationCommands`

---

### reload()

> **reload**(): `Promise`\<`void`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:262

Reloads the piece by loading the same path in the store.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`FrameworkCommand.reload`

---

### toJSON()

> **toJSON**(): `PieceJSON`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:266

Defines the `JSON.stringify` behavior of this piece.

#### Returns

`PieceJSON`

#### Inherited from

`FrameworkCommand.toJSON`

---

### unload()

> **unload**(): `Promise`\<`void`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:258

Unloads and disables the piece.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`FrameworkCommand.unload`
