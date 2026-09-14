[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / ApplicationCommandRegistry

# Class: ApplicationCommandRegistry

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts:26](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts#L26)

Represents a registry for application commands.

## Remarks

This registry is globally available through `container.applicationCommandRegistry`.

## Since

2.0.0

## Implements

- `JSONEncodable`\<[`Command`](../namespaces/ApplicationCommandRegistryEntry/type-aliases/Command.md)[]\>

## Constructors

### Constructor

> **new ApplicationCommandRegistry**(): `ApplicationCommandRegistry`

#### Returns

`ApplicationCommandRegistry`

## Accessors

### store

#### Get Signature

> **get** **store**(): [`CommandStore`](CommandStore.md)

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts:32](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts#L32)

##### Returns

[`CommandStore`](CommandStore.md)

## Methods

### delete()

> **delete**\<`Options`\>(`target`): `boolean`

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts:70](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts#L70)

Deletes a command from the registry.

#### Type Parameters

##### Options

`Options` _extends_ [`PieceOptions`](../interfaces/PieceOptions.md)

The options type for the command.

#### Parameters

##### target

\{(`context`, `options`): [`Command`](Command.md)\<`Options`\>; `Location`: _typeof_ `PieceLocation`; `prototype`: [`Command`](Command.md)\<`any`\>; \}

The command to delete.

###### Location

_typeof_ `PieceLocation`

###### prototype

[`Command`](Command.md)\<`any`\>

#### Returns

`boolean`

True if the command was successfully deleted, false otherwise.

#### Since

2.0.0

---

### ensure()

> **ensure**\<`Options`\>(`target`): [`ApplicationCommandRegistryEntry`](ApplicationCommandRegistryEntry.md)

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts:82](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts#L82)

Retrieves or creates an [`ApplicationCommandRegistryEntry`](ApplicationCommandRegistryEntry.md) for the specified command class.

#### Type Parameters

##### Options

`Options` _extends_ [`PieceOptions`](../interfaces/PieceOptions.md)

The options type for the command.

#### Parameters

##### target

\{(`context`, `options`): [`Command`](Command.md)\<`Options`\>; `Location`: _typeof_ `PieceLocation`; `prototype`: [`Command`](Command.md)\<`any`\>; \}

The command class to ensure registration for.

###### Location

_typeof_ `PieceLocation`

###### prototype

[`Command`](Command.md)\<`any`\>

#### Returns

[`ApplicationCommandRegistryEntry`](ApplicationCommandRegistryEntry.md)

The application command registry entry for the command.

#### Since

2.0.0

---

### get()

> **get**\<`Options`\>(`target`): [`ApplicationCommandRegistryEntry`](ApplicationCommandRegistryEntry.md) \| `null`

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts:58](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts#L58)

Retrieves the [`ApplicationCommandRegistryEntry`](ApplicationCommandRegistryEntry.md) associated with the specified command class.

#### Type Parameters

##### Options

`Options` _extends_ [`PieceOptions`](../interfaces/PieceOptions.md)

The options type of the command class.

#### Parameters

##### target

\{(`context`, `options`): [`Command`](Command.md)\<`Options`\>; `Location`: _typeof_ `PieceLocation`; `prototype`: [`Command`](Command.md)\<`any`\>; \}

The command class to retrieve the entry for.

###### Location

_typeof_ `PieceLocation`

###### prototype

[`Command`](Command.md)\<`any`\>

#### Returns

[`ApplicationCommandRegistryEntry`](ApplicationCommandRegistryEntry.md) \| `null`

The [`ApplicationCommandRegistryEntry`](ApplicationCommandRegistryEntry.md) associated with the command class, or null if not found.

#### Since

2.0.0

---

### getLoadedChatInputCommands()

> **getLoadedChatInputCommands**(): `Collection`\<`string`, [`ApplicationCommandRegistryEntry`](ApplicationCommandRegistryEntry.md)\>

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts:118](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts#L118)

Retrieves the loaded chat input commands from the application command registry.

#### Returns

`Collection`\<`string`, [`ApplicationCommandRegistryEntry`](ApplicationCommandRegistryEntry.md)\>

A collection of chat input commands.

#### Since

2.0.0

---

### getLoadedContextMenuCommands()

> **getLoadedContextMenuCommands**(): `Collection`\<`string`, [`ApplicationCommandRegistryEntry`](ApplicationCommandRegistryEntry.md)\>

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts:133](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts#L133)

Retrieves the loaded context menu commands.

#### Returns

`Collection`\<`string`, [`ApplicationCommandRegistryEntry`](ApplicationCommandRegistryEntry.md)\>

A collection of context menu commands.

#### Since

2.0.0

---

### getLoadedGlobalCommands()

> **getLoadedGlobalCommands**(): [`Command`](../namespaces/ApplicationCommandRegistryEntry/type-aliases/Command.md)[]

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts:150](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts#L150)

Retrieves the loaded global commands from the application command registry.

#### Returns

[`Command`](../namespaces/ApplicationCommandRegistryEntry/type-aliases/Command.md)[]

An array of loaded global commands.

#### Since

2.0.0

---

### getLoadedGuildCommands()

> **getLoadedGuildCommands**(): `Collection`\<`string`, [`Command`](../namespaces/ApplicationCommandRegistryEntry/type-aliases/Command.md)[]\>

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts:163](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts#L163)

Retrieves the loaded guild commands from the application command registry.

#### Returns

`Collection`\<`string`, [`Command`](../namespaces/ApplicationCommandRegistryEntry/type-aliases/Command.md)[]\>

A collection of guild commands, where the key is the guild ID and the value is an array of commands.

#### Since

2.0.0

---

### loadCommands()

> **loadCommands**(`baseUserDirectory?`): `Promise`\<`void`\>

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts:104](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts#L104)

Loads the commands from the specified base user directory.

#### Parameters

##### baseUserDirectory?

`string` \| `URL` \| `null`

The base user directory to load the commands from, define it as `null` to not register
a path for the file system loader.

#### Returns

`Promise`\<`void`\>

A promise that resolves when all the commands are loaded.

#### Since

2.0.0

---

### pushAllCommandsInGuild()

> **pushAllCommandsInGuild**(`guildId`): `Promise`\<`RESTPutAPIApplicationGuildCommandsResult`\>

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts:208](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts#L208)

Registers all the commands including guild-restricted ones in a single guild.

#### Parameters

##### guildId

`string`

The guild to register the commands at.

#### Returns

`Promise`\<`RESTPutAPIApplicationGuildCommandsResult`\>

The raw result from registering the commands in the specified guild.

---

### pushGlobalCommands()

> **pushGlobalCommands**(): `Promise`\<`RESTPutAPIApplicationCommandsResult`\>

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts:187](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts#L187)

Registers all the non guild-restricted commands globally.

#### Returns

`Promise`\<`RESTPutAPIApplicationCommandsResult`\>

The raw result from registering the commands globally.

#### Since

2.0.0

---

### pushGlobalCommandsInGuild()

> **pushGlobalCommandsInGuild**(`guildId`): `Promise`\<`RESTPutAPIApplicationGuildCommandsResult`\>

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts:198](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts#L198)

Registers all the non guild-restricted commands in a single guild.

#### Parameters

##### guildId

`string`

The guild to register the commands at.

#### Returns

`Promise`\<`RESTPutAPIApplicationGuildCommandsResult`\>

The raw result from registering the commands in the specified guild.

#### Since

2.0.0

---

### pushGuildRestrictedCommands()

> **pushGuildRestrictedCommands**(): `Promise`\<`PromiseSettledResult`\<`RESTPutAPIApplicationGuildCommandsResult`\>[]\>

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts:217](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts#L217)

Registers all the guild-restricted commands in their respective guilds.

#### Returns

`Promise`\<`PromiseSettledResult`\<`RESTPutAPIApplicationGuildCommandsResult`\>[]\>

The settled promises from all the guild command registrations.

---

### setup()

> **setup**(`options`): `ApplicationCommandRegistry`

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts:43](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts#L43)

Sets up the application command registry with the provided options.

#### Parameters

##### options

`Readonly`\<[`SetupOptions`](../namespaces/ApplicationCommandRegistry/interfaces/SetupOptions.md)\>

The setup options for the application command registry.

#### Returns

`ApplicationCommandRegistry`

The updated instance of the application command registry.

#### Since

2.0.0

---

### toJSON()

> **toJSON**(): [`Command`](../namespaces/ApplicationCommandRegistryEntry/type-aliases/Command.md)[]

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts:92](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistry.ts#L92)

Converts the [`ApplicationCommandRegistryEntry`](ApplicationCommandRegistryEntry.md) objects to an array of command objects in JSON format.

#### Returns

[`Command`](../namespaces/ApplicationCommandRegistryEntry/type-aliases/Command.md)[]

An array of Command objects in JSON format.

#### Since

2.0.0

#### Implementation of

`JSONEncodable.toJSON`
