[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / MessageContextMenuCommandInteraction

# Class: MessageContextMenuCommandInteraction

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/MessageContextMenuCommandInteraction.ts:4](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/MessageContextMenuCommandInteraction.ts#L4)

## theme_extends

- [`CommandInteraction`](CommandInteraction.md)\<[`Type`](../namespaces/MessageContextMenuCommandInteraction/type-aliases/Type.md)\>

## Constructors

### Constructor

> **new MessageContextMenuCommandInteraction**(`response`, `data`): `MessageContextMenuCommandInteraction`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:25](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L25)

#### Parameters

##### response

`ServerResponse`

##### data

`APIMessageApplicationCommandInteraction`

#### Returns

`MessageContextMenuCommandInteraction`

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`constructor`](CommandInteraction.md#constructor)

## Properties

### \[Data\]

> `protected` `readonly` **\[Data\]**: `APIMessageApplicationCommandInteraction`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:22](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L22)

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`[Data]`](CommandInteraction.md#data)

---

### \[Response\]

> `protected` `readonly` **\[Response\]**: `ServerResponse`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:23](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L23)

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`[Response]`](CommandInteraction.md#response)

## Accessors

### app_permissions

#### Get Signature

> **get** **app_permissions**(): `T`\[`"app_permissions"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:51](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L51)

Bitwise set of permissions the app or bot has within the channel the interaction was sent from.

##### Returns

`T`\[`"app_permissions"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`app_permissions`](CommandInteraction.md#app-permissions)

---

### application_id

#### Get Signature

> **get** **application_id**(): `T`\[`"application_id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:67](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L67)

The ID of the application the interaction is for.

##### Returns

`T`\[`"application_id"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`application_id`](CommandInteraction.md#application-id)

---

### applicationId

#### Get Signature

> **get** **applicationId**(): `T`\[`"application_id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:76](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L76)

The ID of the application the interaction is for.

##### Seealso

[application_id](BaseInteraction.md#application-id) for the raw data.

##### Returns

`T`\[`"application_id"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`applicationId`](CommandInteraction.md#applicationid)

---

### applicationPermissions

#### Get Signature

> **get** **applicationPermissions**(): `bigint` \| `undefined`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:60](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L60)

Bitwise set of permissions the app or bot has within the channel the interaction was sent from.

##### Seealso

[app_permissions](BaseInteraction.md#app-permissions) for the raw data.

##### Returns

`bigint` \| `undefined`

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`applicationPermissions`](CommandInteraction.md#applicationpermissions)

---

### authorizing_integration_owners

#### Get Signature

> **get** **authorizing_integration_owners**(): `T`\[`"authorizing_integration_owners"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:84](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L84)

Mapping of installation contexts that the interaction was authorized for
to related user or guild IDs.

##### Returns

`T`\[`"authorizing_integration_owners"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`authorizing_integration_owners`](CommandInteraction.md#authorizing-integration-owners)

---

### authorizingIntegrationOwners

#### Get Signature

> **get** **authorizingIntegrationOwners**(): `T`\[`"authorizing_integration_owners"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:94](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L94)

Mapping of installation contexts that the interaction was authorized for
to related user or guild IDs.

##### Seealso

[authorizing_integration_owners](BaseInteraction.md#authorizing-integration-owners) for the raw data.

##### Returns

`T`\[`"authorizing_integration_owners"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`authorizingIntegrationOwners`](CommandInteraction.md#authorizingintegrationowners)

---

### channel

#### Get Signature

> **get** **channel**(): `T`\[`"channel"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:101](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L101)

The channel of the interaction.

##### Returns

`T`\[`"channel"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`channel`](CommandInteraction.md#channel)

---

### channel_id

#### Get Signature

> **get** **channel_id**(): `T`\[`"channel_id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:109](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L109)

The channel the interaction was sent from.

##### Deprecated

Use [channel](BaseInteraction.md#channel).id instead.

##### Returns

`T`\[`"channel_id"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`channel_id`](CommandInteraction.md#channel-id)

---

### channelId

#### Get Signature

> **get** **channelId**(): `T`\[`"channel_id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:119](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L119)

The channel the interaction was sent from.

##### Deprecated

Use [channel](BaseInteraction.md#channel).id instead.

##### Seealso

[channel_id](BaseInteraction.md#channel-id) for the raw data.

##### Returns

`T`\[`"channel_id"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`channelId`](CommandInteraction.md#channelid)

---

### context

#### Get Signature

> **get** **context**(): `T`\[`"context"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:126](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L126)

Context where the interaction was triggered from.

##### Returns

`T`\[`"context"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`context`](CommandInteraction.md#context)

---

### data

#### Get Signature

> **get** **data**(): `T`\[`"data"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:133](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L133)

The command data payload.

##### Returns

`T`\[`"data"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`data`](CommandInteraction.md#data-1)

---

### entitlements

#### Get Signature

> **get** **entitlements**(): `T`\[`"entitlements"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:141](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L141)

For monetized apps, any entitlements for the invoking user, representing
access to premium SKUs.

##### Returns

`T`\[`"entitlements"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`entitlements`](CommandInteraction.md#entitlements)

---

### guild_id

#### Get Signature

> **get** **guild_id**(): `T`\[`"guild_id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:148](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L148)

The guild the interaction was sent from.

##### Returns

`T`\[`"guild_id"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`guild_id`](CommandInteraction.md#guild-id)

---

### guild_locale

#### Get Signature

> **get** **guild_locale**(): `T`\[`"guild_locale"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:164](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L164)

The guild's preferred locale, if invoked in a guild.

##### Returns

`T`\[`"guild_locale"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`guild_locale`](CommandInteraction.md#guild-locale)

---

### guildId

#### Get Signature

> **get** **guildId**(): `T`\[`"guild_id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:157](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L157)

The guild the interaction was sent from.

##### Seealso

[guild_id](BaseInteraction.md#guild-id) for the raw data.

##### Returns

`T`\[`"guild_id"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`guildId`](CommandInteraction.md#guildid)

---

### guildLocale

#### Get Signature

> **get** **guildLocale**(): `T`\[`"guild_locale"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:173](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L173)

The guild's preferred locale, if invoked in a guild.

##### Seealso

[guild_locale](BaseInteraction.md#guild-locale) for the raw data.

##### Returns

`T`\[`"guild_locale"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`guildLocale`](CommandInteraction.md#guildlocale)

---

### id

#### Get Signature

> **get** **id**(): `T`\[`"id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:37](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L37)

The ID of the interaction.

##### Returns

`T`\[`"id"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`id`](CommandInteraction.md#id)

---

### locale

#### Get Signature

> **get** **locale**(): `T`\[`"locale"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:180](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L180)

The selected language of the invoking user.

##### Returns

`T`\[`"locale"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`locale`](CommandInteraction.md#locale)

---

### member

#### Get Signature

> **get** **member**(): `T`\[`"member"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:189](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L189)

Guild member data for the invoking user, including permissions.

**This is only sent when an interaction is invoked in a guild**.

##### Returns

`T`\[`"member"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`member`](CommandInteraction.md#member)

---

### replied

#### Get Signature

> **get** **replied**(): `boolean`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:30](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L30)

##### Returns

`boolean`

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`replied`](CommandInteraction.md#replied)

---

### token

#### Get Signature

> **get** **token**(): `T`\[`"token"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:196](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L196)

A continuation token for responding to the interaction.

##### Returns

`T`\[`"token"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`token`](CommandInteraction.md#token)

---

### type

#### Get Signature

> **get** **type**(): `T`\[`"type"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:44](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L44)

The type of the interaction.

##### Returns

`T`\[`"type"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`type`](CommandInteraction.md#type)

---

### user

#### Get Signature

> **get** **user**(): `APIUser`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:203](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L203)

User object for the invoking user.

##### Returns

`APIUser`

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`user`](CommandInteraction.md#user)

---

### version

#### Get Signature

> **get** **version**(): `T`\[`"version"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:210](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L210)

Read-only property, always `1`.

##### Returns

`T`\[`"version"`\]

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`version`](CommandInteraction.md#version)

## Methods

### \_sendReply()

> `protected` **\_sendReply**(`data`): `Promise`\<`void`\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:243](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L243)

#### Parameters

##### data

`object`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`_sendReply`](CommandInteraction.md#sendreply)

---

### defer()

> **defer**(`data?`): `Promise`\<[`PartialMessage`](PartialMessage.md)\<`MessageContextMenuCommandInteraction`\>\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/CommandInteraction.ts:44](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/CommandInteraction.ts#L44)

ACK an interaction and edit a response later. The user sees a loading state.

#### Parameters

##### data?

`Pick`\<`APIInteractionResponseCallbackData`, `"flags"`\>

The data to be sent, if any.

#### Returns

`Promise`\<[`PartialMessage`](PartialMessage.md)\<`MessageContextMenuCommandInteraction`\>\>

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`defer`](CommandInteraction.md#defer)

---

### fetchChannel()

> **fetchChannel**(): `Promise`\<`Err`\<`Error`, `any`\> \| [`DiscordResult`](../type-aliases/DiscordResult.md)\<`APIChannel`\>\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:228](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L228)

Fetches the channel the interaction was sent from.

#### Returns

`Promise`\<`Err`\<`Error`, `any`\> \| [`DiscordResult`](../type-aliases/DiscordResult.md)\<`APIChannel`\>\>

The fetched channel.

#### Remarks

**This requires REST to have a token.**

#### Seealso

[channel](BaseInteraction.md#channel).

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`fetchChannel`](CommandInteraction.md#fetchchannel)

---

### fetchGuild()

> **fetchGuild**(): `Promise`\<`Err`\<`Error`, `any`\> \| [`DiscordResult`](../type-aliases/DiscordResult.md)\<`APIGuild`\>\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:238](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L238)

Fetches the channel the interaction was sent from.

#### Returns

`Promise`\<`Err`\<`Error`, `any`\> \| [`DiscordResult`](../type-aliases/DiscordResult.md)\<`APIGuild`\>\>

The fetched channel.

#### Remarks

**This requires REST to have a token.**

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`fetchGuild`](CommandInteraction.md#fetchguild)

---

### followup()

> **followup**(`data`): [`AsyncDiscordResult`](../type-aliases/AsyncDiscordResult.md)\<[`Message`](Message.md)\<`MessageContextMenuCommandInteraction`\>\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/CommandInteraction.ts:63](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/CommandInteraction.ts#L63)

Sends a follow-up message.

#### Parameters

##### data

[`FollowupOptions`](../type-aliases/FollowupOptions.md)

The data to be sent.

#### Returns

[`AsyncDiscordResult`](../type-aliases/AsyncDiscordResult.md)\<[`Message`](Message.md)\<`MessageContextMenuCommandInteraction`\>\>

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`followup`](CommandInteraction.md#followup)

---

### inGuild()

> **inGuild**(): `this is InGuild<MessageContextMenuCommandInteraction>`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:218](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L218)

Determines whether or not the interaction was sent from a guild.

#### Returns

`this is InGuild<MessageContextMenuCommandInteraction>`

The casted interaction type.

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`inGuild`](CommandInteraction.md#inguild)

---

### reply()

> **reply**(`data`): `Promise`\<[`PartialMessage`](PartialMessage.md)\<`MessageContextMenuCommandInteraction`\>\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/CommandInteraction.ts:34](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/CommandInteraction.ts#L34)

Responds to the interaction with a message.

#### Parameters

##### data

[`MessageResponseOptions`](../type-aliases/MessageResponseOptions.md)

The data to be sent.

#### Returns

`Promise`\<[`PartialMessage`](PartialMessage.md)\<`MessageContextMenuCommandInteraction`\>\>

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`reply`](CommandInteraction.md#reply)

---

### showModal()

> **showModal**(`data`): `Promise`\<`void`\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/CommandInteraction.ts:54](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/CommandInteraction.ts#L54)

Responds to the interaction with a popup modal.

#### Parameters

##### data

`APIModalInteractionResponseCallbackData`

The data to be sent.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`CommandInteraction`](CommandInteraction.md).[`showModal`](CommandInteraction.md#showmodal)
