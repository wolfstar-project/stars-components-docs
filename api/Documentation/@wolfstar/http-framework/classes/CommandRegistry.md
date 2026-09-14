[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / CommandRegistry

# Class: CommandRegistry\<Options\>

Defined in: [packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts:18](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts#L18)

A per-command registry passed to [`Command.registerApplicationCommands`](Command.md#registerapplicationcommands), allowing commands to be
registered imperatively, without relying on decorators.

## Remarks

This is the decorator-free equivalent of [RegisterCommand](../functions/RegisterCommand.md), [RegisterSubcommand](../functions/RegisterSubcommand.md),
[RegisterSubcommandGroup](../functions/RegisterSubcommandGroup.md), [RegisterMessageCommand](../functions/RegisterMessageCommand.md), [RegisterUserCommand](../functions/RegisterUserCommand.md), and
[RestrictGuildIds](../functions/RestrictGuildIds.md); both approaches can be used interchangeably as they share the same underlying
[`ApplicationCommandRegistryEntry`](../namespaces/ApplicationCommandRegistryEntry/index.md).

## Since

3.1.0

## Type Parameters

### Options

`Options` _extends_ [`Options`](../namespaces/Command/type-aliases/Options.md) = [`Options`](../namespaces/Command/type-aliases/Options.md)

## Constructors

### Constructor

> **new CommandRegistry**\<`Options`\>(`target`): `CommandRegistry`\<`Options`\>

Defined in: [packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts:21](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts#L21)

#### Parameters

##### target

_typeof_ [`Command`](../namespaces/Command/index.md)

#### Returns

`CommandRegistry`\<`Options`\>

## Methods

### registerChatInputCommand()

> **registerChatInputCommand**(`data`): `this`

Defined in: [packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts:40](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts#L40)

Registers the chat input (slash) command for this command.

#### Parameters

##### data

`CommandData`

The command data.

#### Returns

`this`

This registry, for chaining.

#### Since

3.1.0

#### Example

```typescript
public override registerApplicationCommands(registry: Command.Registry) {
	registry.registerChatInputCommand((builder) =>
		builder.setName('ping').setDescription('A simple ping pong command')
	);
}
```

---

### registerContextMenuCommand()

> **registerContextMenuCommand**(`data`, `type`, `method?`): `this`

Defined in: [packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts:81](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts#L81)

Registers a context menu command for this command.

#### Parameters

##### data

`CommandData`

The command data.

##### type

`User` \| `Message`

The type of context menu command to register.

##### method?

`string` \| `null`

The name of the method that handles this context menu command, if any.

#### Returns

`this`

This registry, for chaining.

#### Since

3.1.0

---

### registerMessageCommand()

> **registerMessageCommand**(`data`, `method?`): `this`

Defined in: [packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts:98](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts#L98)

Registers a "Message" context menu command for this command.

#### Parameters

##### data

`CommandData`

The command data.

##### method?

`string` \| `null`

The name of the method that handles this context menu command, if any.

#### Returns

`this`

This registry, for chaining.

#### Since

3.1.0

---

### registerSubcommand()

> **registerSubcommand**(`data`, `method`, `groupName?`): `this`

Defined in: [packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts:54](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts#L54)

Registers a subcommand for the chat input command of this command.

#### Parameters

##### data

`SubcommandData`

The subcommand data.

##### method

`string`

The name of the method that handles this subcommand.

##### groupName?

`string` \| `null`

The name of the subcommand group this subcommand belongs to, if any.

#### Returns

`this`

This registry, for chaining.

#### Since

3.1.0

---

### registerSubcommandGroup()

> **registerSubcommandGroup**(`data`, `method?`): `this`

Defined in: [packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts:67](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts#L67)

Registers a subcommand group for the chat input command of this command.

#### Parameters

##### data

`SubcommandGroupData`

The subcommand group data.

##### method?

`string` \| `null`

The name of the method that handles this subcommand group, if any.

#### Returns

`this`

This registry, for chaining.

#### Since

3.1.0

---

### registerUserCommand()

> **registerUserCommand**(`data`, `method?`): `this`

Defined in: [packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts:110](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts#L110)

Registers a "User" context menu command for this command.

#### Parameters

##### data

`CommandData`

The command data.

##### method?

`string` \| `null`

The name of the method that handles this context menu command, if any.

#### Returns

`this`

This registry, for chaining.

#### Since

3.1.0

---

### setGuildIds()

> **setGuildIds**(`guildIds`): `this`

Defined in: [packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts:121](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/CommandRegistry.ts#L121)

Restricts this command to the given guild IDs, so it is only registered there instead of globally.

#### Parameters

##### guildIds

readonly `string`[]

The guild IDs to restrict this command to.

#### Returns

`this`

This registry, for chaining.

#### Since

3.1.0
