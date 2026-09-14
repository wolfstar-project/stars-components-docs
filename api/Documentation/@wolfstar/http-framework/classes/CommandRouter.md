[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / CommandRouter

# Class: CommandRouter\<Options\>

Defined in: [packages/http-framework/src/lib/interactions/router/CommandRouter.ts:23](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/router/CommandRouter.ts#L23)

Represents a command router that handles routing of interactions for a specific command.

## Since

2.0.0

## Type Parameters

### Options

`Options` _extends_ [`Options`](../namespaces/Command/type-aliases/Options.md) = [`Options`](../namespaces/Command/type-aliases/Options.md)

The options type for the command.

## Constructors

### Constructor

> **new CommandRouter**\<`Options`\>(`command`): `CommandRouter`\<`Options`\>

Defined in: [packages/http-framework/src/lib/interactions/router/CommandRouter.ts:30](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/router/CommandRouter.ts#L30)

#### Parameters

##### command

[`Command`](Command.md)\<`Options`\>

#### Returns

`CommandRouter`\<`Options`\>

## Accessors

### chatInputName

#### Get Signature

> **get** **chatInputName**(): `string` \| `null`

Defined in: [packages/http-framework/src/lib/interactions/router/CommandRouter.ts:47](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/router/CommandRouter.ts#L47)

The name of the registered chat input command for this command, if any.

##### Since

2.0.0

##### Returns

`string` \| `null`

---

### contextMenuNames

#### Get Signature

> **get** **contextMenuNames**(): `string`[]

Defined in: [packages/http-framework/src/lib/interactions/router/CommandRouter.ts:56](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/router/CommandRouter.ts#L56)

The names of the registered context menu commands for this command, if any.

##### Since

2.0.0

##### Returns

`string`[]

## Methods

### routeChatInputInteraction()

> **routeChatInputInteraction**(`data`): `string` \| `null`

Defined in: [packages/http-framework/src/lib/interactions/router/CommandRouter.ts:67](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/router/CommandRouter.ts#L67)

Routes a chat input interaction based on the provided data.

#### Parameters

##### data

`APIChatInputApplicationCommandInteractionData`

The data of the chat input interaction.

#### Returns

`string` \| `null`

The mapped command name or `null` if no mapping is found.

#### Since

2.0.0

---

### routeContextMenuInteraction()

> **routeContextMenuInteraction**(`data`): `string` \| `null`

Defined in: [packages/http-framework/src/lib/interactions/router/CommandRouter.ts:91](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/router/CommandRouter.ts#L91)

Routes a context menu interaction based on the provided data.

#### Parameters

##### data

`APIContextMenuInteractionData`

The data for the context menu interaction.

#### Returns

`string` \| `null`

The result of the context menu interaction, or null if no result is found.

#### Since

2.0.0
