[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / MessageComponentMentionableSelectInteraction

# Class: MessageComponentMentionableSelectInteraction

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/MessageComponentMentionableSelectInteraction.ts:6](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/MessageComponentMentionableSelectInteraction.ts#L6)

## theme_extends

- [`MessageComponentInteraction`](MessageComponentInteraction.md)\<[`Type`](../namespaces/MessageComponentMentionableSelectInteraction/type-aliases/Type.md)\>

## Constructors

### Constructor

> **new MessageComponentMentionableSelectInteraction**(`response`, `data`): `MessageComponentMentionableSelectInteraction`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:25](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L25)

#### Parameters

##### response

`ServerResponse`

##### data

[`Type`](../namespaces/MessageComponentMentionableSelectInteraction/type-aliases/Type.md)

#### Returns

`MessageComponentMentionableSelectInteraction`

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`constructor`](MessageComponentInteraction.md#constructor)

## Properties

### \[Data\]

> `protected` `readonly` **\[Data\]**: [`Type`](../namespaces/MessageComponentMentionableSelectInteraction/type-aliases/Type.md)

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:22](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L22)

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`[Data]`](MessageComponentInteraction.md#data)

---

### \[Response\]

> `protected` `readonly` **\[Response\]**: `ServerResponse`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:23](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L23)

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`[Response]`](MessageComponentInteraction.md#response)

## Accessors

### app_permissions

#### Get Signature

> **get** **app_permissions**(): `T`\[`"app_permissions"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:51](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L51)

Bitwise set of permissions the app or bot has within the channel the interaction was sent from.

##### Returns

`T`\[`"app_permissions"`\]

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`app_permissions`](MessageComponentInteraction.md#app-permissions)

---

### application_id

#### Get Signature

> **get** **application_id**(): `T`\[`"application_id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:67](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L67)

The ID of the application the interaction is for.

##### Returns

`T`\[`"application_id"`\]

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`application_id`](MessageComponentInteraction.md#application-id)

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

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`applicationId`](MessageComponentInteraction.md#applicationid)

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

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`applicationPermissions`](MessageComponentInteraction.md#applicationpermissions)

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

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`authorizing_integration_owners`](MessageComponentInteraction.md#authorizing-integration-owners)

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

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`authorizingIntegrationOwners`](MessageComponentInteraction.md#authorizingintegrationowners)

---

### channel

#### Get Signature

> **get** **channel**(): `T`\[`"channel"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:101](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L101)

The channel of the interaction.

##### Returns

`T`\[`"channel"`\]

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`channel`](MessageComponentInteraction.md#channel)

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

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`channel_id`](MessageComponentInteraction.md#channel-id)

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

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`channelId`](MessageComponentInteraction.md#channelid)

---

### context

#### Get Signature

> **get** **context**(): `T`\[`"context"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:126](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L126)

Context where the interaction was triggered from.

##### Returns

`T`\[`"context"`\]

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`context`](MessageComponentInteraction.md#context)

---

### data

#### Get Signature

> **get** **data**(): `T`\[`"data"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:133](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L133)

The command data payload.

##### Returns

`T`\[`"data"`\]

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`data`](MessageComponentInteraction.md#data-1)

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

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`entitlements`](MessageComponentInteraction.md#entitlements)

---

### guild_id

#### Get Signature

> **get** **guild_id**(): `T`\[`"guild_id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:148](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L148)

The guild the interaction was sent from.

##### Returns

`T`\[`"guild_id"`\]

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`guild_id`](MessageComponentInteraction.md#guild-id)

---

### guild_locale

#### Get Signature

> **get** **guild_locale**(): `T`\[`"guild_locale"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:164](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L164)

The guild's preferred locale, if invoked in a guild.

##### Returns

`T`\[`"guild_locale"`\]

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`guild_locale`](MessageComponentInteraction.md#guild-locale)

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

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`guildId`](MessageComponentInteraction.md#guildid)

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

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`guildLocale`](MessageComponentInteraction.md#guildlocale)

---

### id

#### Get Signature

> **get** **id**(): `T`\[`"id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:37](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L37)

The ID of the interaction.

##### Returns

`T`\[`"id"`\]

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`id`](MessageComponentInteraction.md#id)

---

### ids

#### Get Signature

> **get** **ids**(): `string`[]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/MessageComponentMentionableSelectInteraction.ts:10](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/MessageComponentMentionableSelectInteraction.ts#L10)

Gets the IDs of the selected users and roles.

##### Returns

`string`[]

---

### locale

#### Get Signature

> **get** **locale**(): `T`\[`"locale"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:180](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L180)

The selected language of the invoking user.

##### Returns

`T`\[`"locale"`\]

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`locale`](MessageComponentInteraction.md#locale)

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

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`member`](MessageComponentInteraction.md#member)

---

### mentionables

#### Get Signature

> **get** **mentionables**(): `Collection`\<`string`, [`Value`](../namespaces/MessageComponentMentionableSelectInteraction/type-aliases/Value.md)\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/MessageComponentMentionableSelectInteraction.ts:61](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/MessageComponentMentionableSelectInteraction.ts#L61)

Creates a collection with all the selected users, members, and roles.

##### Note

The collection will always be empty if the interaction came from direct messages.

##### Seealso

[MessageComponentMentionableSelectInteraction.keys](#keys).

##### Seealso

[MessageComponentMentionableSelectInteraction.values](#values).

##### Seealso

[MessageComponentMentionableSelectInteraction.entries](#entries).

##### Returns

`Collection`\<`string`, [`Value`](../namespaces/MessageComponentMentionableSelectInteraction/type-aliases/Value.md)\>

---

### message

#### Get Signature

> **get** **message**(): `APIMessage`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/MessageComponentInteraction.ts:33](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/MessageComponentInteraction.ts#L33)

The message the interaction was attached to.

##### Returns

`APIMessage`

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`message`](MessageComponentInteraction.md#message)

---

### replied

#### Get Signature

> **get** **replied**(): `boolean`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:30](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L30)

##### Returns

`boolean`

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`replied`](MessageComponentInteraction.md#replied)

---

### roles

#### Get Signature

> **get** **roles**(): `Collection`\<`string`, `APIRole`\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/MessageComponentMentionableSelectInteraction.ts:41](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/MessageComponentMentionableSelectInteraction.ts#L41)

Creates a collection with all the selected roles.

##### Note

The collection will always be empty if the interaction came from direct messages.

##### Seealso

[MessageComponentMentionableSelectInteraction.keys](#keys).

##### Seealso

[MessageComponentMentionableSelectInteraction.values](#values).

##### Seealso

[MessageComponentMentionableSelectInteraction.entries](#entries).

##### Returns

`Collection`\<`string`, `APIRole`\>

---

### token

#### Get Signature

> **get** **token**(): `T`\[`"token"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:196](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L196)

A continuation token for responding to the interaction.

##### Returns

`T`\[`"token"`\]

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`token`](MessageComponentInteraction.md#token)

---

### type

#### Get Signature

> **get** **type**(): `T`\[`"type"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:44](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L44)

The type of the interaction.

##### Returns

`T`\[`"type"`\]

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`type`](MessageComponentInteraction.md#type)

---

### user

#### Get Signature

> **get** **user**(): `APIUser`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:203](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L203)

User object for the invoking user.

##### Returns

`APIUser`

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`user`](MessageComponentInteraction.md#user)

---

### users

#### Get Signature

> **get** **users**(): `Collection`\<`string`, [`ValueUser`](../namespaces/MessageComponentMentionableSelectInteraction/type-aliases/ValueUser.md)\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/MessageComponentMentionableSelectInteraction.ts:21](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/MessageComponentMentionableSelectInteraction.ts#L21)

Creates a collection with all the selected users.

##### Seealso

[MessageComponentMentionableSelectInteraction.keys](#keys).

##### Seealso

[MessageComponentMentionableSelectInteraction.values](#values).

##### Seealso

[MessageComponentMentionableSelectInteraction.entries](#entries).

##### Returns

`Collection`\<`string`, [`ValueUser`](../namespaces/MessageComponentMentionableSelectInteraction/type-aliases/ValueUser.md)\>

---

### version

#### Get Signature

> **get** **version**(): `T`\[`"version"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:210](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L210)

Read-only property, always `1`.

##### Returns

`T`\[`"version"`\]

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`version`](MessageComponentInteraction.md#version)

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

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`_sendReply`](MessageComponentInteraction.md#sendreply)

---

### defer()

> **defer**(`data?`): `Promise`\<[`PartialMessage`](PartialMessage.md)\<`MessageComponentMentionableSelectInteraction`\>\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/MessageComponentInteraction.ts:70](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/MessageComponentInteraction.ts#L70)

ACK an interaction and edit a response later. The user sees a loading state.

#### Parameters

##### data?

`Pick`\<`APIInteractionResponseCallbackData`, `"flags"`\>

The data to be sent, if any.

#### Returns

`Promise`\<[`PartialMessage`](PartialMessage.md)\<`MessageComponentMentionableSelectInteraction`\>\>

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`defer`](MessageComponentInteraction.md#defer)

---

### deferUpdate()

> **deferUpdate**(): `Promise`\<[`PartialMessage`](PartialMessage.md)\<`MessageComponentMentionableSelectInteraction`\>\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/MessageComponentInteraction.ts:40](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/MessageComponentInteraction.ts#L40)

ACK a button interaction and update it to a loading state.

#### Returns

`Promise`\<[`PartialMessage`](PartialMessage.md)\<`MessageComponentMentionableSelectInteraction`\>\>

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`deferUpdate`](MessageComponentInteraction.md#deferupdate)

---

### entries()

> **entries**(): `IterableIterator`\<\[`string`, [`Value`](../namespaces/MessageComponentMentionableSelectInteraction/type-aliases/Value.md)\]\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/MessageComponentMentionableSelectInteraction.ts:109](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/MessageComponentMentionableSelectInteraction.ts#L109)

Returns an iterator of [ID, Mentionable] pairs.

#### Returns

`IterableIterator`\<\[`string`, [`Value`](../namespaces/MessageComponentMentionableSelectInteraction/type-aliases/Value.md)\]\>

#### Seealso

[MessageComponentMentionableSelectInteraction.users](#users).

#### Seealso

[MessageComponentMentionableSelectInteraction.roles](#roles).

#### Seealso

[MessageComponentMentionableSelectInteraction.keys](#keys).

#### Seealso

[MessageComponentMentionableSelectInteraction.values](#values).

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

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`fetchChannel`](MessageComponentInteraction.md#fetchchannel)

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

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`fetchGuild`](MessageComponentInteraction.md#fetchguild)

---

### followup()

> **followup**(`data`): [`AsyncDiscordResult`](../type-aliases/AsyncDiscordResult.md)\<[`Message`](Message.md)\<`MessageComponentMentionableSelectInteraction`\>\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/MessageComponentInteraction.ts:89](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/MessageComponentInteraction.ts#L89)

Sends a follow-up message.

#### Parameters

##### data

[`FollowupOptions`](../type-aliases/FollowupOptions.md)

The data to be sent.

#### Returns

[`AsyncDiscordResult`](../type-aliases/AsyncDiscordResult.md)\<[`Message`](Message.md)\<`MessageComponentMentionableSelectInteraction`\>\>

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`followup`](MessageComponentInteraction.md#followup)

---

### inGuild()

> **inGuild**(): `this is InGuild<MessageComponentMentionableSelectInteraction>`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:218](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L218)

Determines whether or not the interaction was sent from a guild.

#### Returns

`this is InGuild<MessageComponentMentionableSelectInteraction>`

The casted interaction type.

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`inGuild`](MessageComponentInteraction.md#inguild)

---

### keys()

> **keys**(): `IterableIterator`\<`string`\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/MessageComponentMentionableSelectInteraction.ts:70](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/MessageComponentMentionableSelectInteraction.ts#L70)

Returns an iterator of the selected users and roles IDs.

#### Returns

`IterableIterator`\<`string`\>

#### Seealso

[MessageComponentMentionableSelectInteraction.ids](#ids).

---

### reply()

> **reply**(`data`): `Promise`\<[`PartialMessage`](PartialMessage.md)\<`MessageComponentMentionableSelectInteraction`\>\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/MessageComponentInteraction.ts:60](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/MessageComponentInteraction.ts#L60)

Responds to the interaction with a message.

#### Parameters

##### data

[`MessageResponseOptions`](../type-aliases/MessageResponseOptions.md)

The data to be sent.

#### Returns

`Promise`\<[`PartialMessage`](PartialMessage.md)\<`MessageComponentMentionableSelectInteraction`\>\>

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`reply`](MessageComponentInteraction.md#reply)

---

### showModal()

> **showModal**(`data`): `Promise`\<`void`\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/MessageComponentInteraction.ts:80](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/MessageComponentInteraction.ts#L80)

Responds to the interaction with a popup modal.

#### Parameters

##### data

`APIModalInteractionResponseCallbackData`

The data to be sent.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`showModal`](MessageComponentInteraction.md#showmodal)

---

### update()

> **update**(`data?`): `Promise`\<[`PartialMessage`](PartialMessage.md)\<`MessageComponentMentionableSelectInteraction`\>\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/MessageComponentInteraction.ts:50](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/MessageComponentInteraction.ts#L50)

ACK an interaction and edit a response later. The user sees a loading state.

#### Parameters

##### data?

`APIInteractionResponseCallbackData`

The data to be sent, if any.

#### Returns

`Promise`\<[`PartialMessage`](PartialMessage.md)\<`MessageComponentMentionableSelectInteraction`\>\>

#### Inherited from

[`MessageComponentInteraction`](MessageComponentInteraction.md).[`update`](MessageComponentInteraction.md#update)

---

### values()

> **values**(): `IterableIterator`\<[`Value`](../namespaces/MessageComponentMentionableSelectInteraction/type-aliases/Value.md)\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/MessageComponentMentionableSelectInteraction.ts:82](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/MessageComponentMentionableSelectInteraction.ts#L82)

Returns an iterator of the selected users, members, and roles.

#### Returns

`IterableIterator`\<[`Value`](../namespaces/MessageComponentMentionableSelectInteraction/type-aliases/Value.md)\>

#### Seealso

[MessageComponentMentionableSelectInteraction.users](#users).

#### Seealso

[MessageComponentMentionableSelectInteraction.roles](#roles).

#### Seealso

[MessageComponentMentionableSelectInteraction.keys](#keys).

#### Seealso

[MessageComponentMentionableSelectInteraction.entries](#entries).
