[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / BaseInteraction

# Abstract Class: BaseInteraction\<T\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:21](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L21)

## theme_extended_by

- [`AutocompleteInteraction`](AutocompleteInteraction.md)
- [`CommandInteraction`](CommandInteraction.md)
- [`MessageComponentInteraction`](MessageComponentInteraction.md)
- [`ModalSubmitInteraction`](ModalSubmitInteraction.md)

## Type Parameters

### T

`T` _extends_ [`BaseInteractionType`](../type-aliases/BaseInteractionType.md) = [`BaseInteractionType`](../type-aliases/BaseInteractionType.md)

## Constructors

### Constructor

> **new BaseInteraction**\<`T`\>(`response`, `data`): `BaseInteraction`\<`T`\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:25](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L25)

#### Parameters

##### response

`ServerResponse`

##### data

`T`

#### Returns

`BaseInteraction`\<`T`\>

## Properties

### \[Data\]

> `protected` `readonly` **\[Data\]**: `T`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:22](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L22)

---

### \[Response\]

> `protected` `readonly` **\[Response\]**: `ServerResponse`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:23](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L23)

## Accessors

### app_permissions

#### Get Signature

> **get** **app_permissions**(): `T`\[`"app_permissions"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:51](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L51)

Bitwise set of permissions the app or bot has within the channel the interaction was sent from.

##### Returns

`T`\[`"app_permissions"`\]

---

### application_id

#### Get Signature

> **get** **application_id**(): `T`\[`"application_id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:67](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L67)

The ID of the application the interaction is for.

##### Returns

`T`\[`"application_id"`\]

---

### applicationId

#### Get Signature

> **get** **applicationId**(): `T`\[`"application_id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:76](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L76)

The ID of the application the interaction is for.

##### Seealso

[application_id](#application-id) for the raw data.

##### Returns

`T`\[`"application_id"`\]

---

### applicationPermissions

#### Get Signature

> **get** **applicationPermissions**(): `bigint` \| `undefined`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:60](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L60)

Bitwise set of permissions the app or bot has within the channel the interaction was sent from.

##### Seealso

[app_permissions](#app-permissions) for the raw data.

##### Returns

`bigint` \| `undefined`

---

### authorizing_integration_owners

#### Get Signature

> **get** **authorizing_integration_owners**(): `T`\[`"authorizing_integration_owners"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:84](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L84)

Mapping of installation contexts that the interaction was authorized for
to related user or guild IDs.

##### Returns

`T`\[`"authorizing_integration_owners"`\]

---

### authorizingIntegrationOwners

#### Get Signature

> **get** **authorizingIntegrationOwners**(): `T`\[`"authorizing_integration_owners"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:94](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L94)

Mapping of installation contexts that the interaction was authorized for
to related user or guild IDs.

##### Seealso

[authorizing_integration_owners](#authorizing-integration-owners) for the raw data.

##### Returns

`T`\[`"authorizing_integration_owners"`\]

---

### channel

#### Get Signature

> **get** **channel**(): `T`\[`"channel"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:101](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L101)

The channel of the interaction.

##### Returns

`T`\[`"channel"`\]

---

### channel_id

#### Get Signature

> **get** **channel_id**(): `T`\[`"channel_id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:109](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L109)

The channel the interaction was sent from.

##### Deprecated

Use [channel](#channel).id instead.

##### Returns

`T`\[`"channel_id"`\]

---

### channelId

#### Get Signature

> **get** **channelId**(): `T`\[`"channel_id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:119](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L119)

The channel the interaction was sent from.

##### Deprecated

Use [channel](#channel).id instead.

##### Seealso

[channel_id](#channel-id) for the raw data.

##### Returns

`T`\[`"channel_id"`\]

---

### context

#### Get Signature

> **get** **context**(): `T`\[`"context"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:126](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L126)

Context where the interaction was triggered from.

##### Returns

`T`\[`"context"`\]

---

### data

#### Get Signature

> **get** **data**(): `T`\[`"data"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:133](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L133)

The command data payload.

##### Returns

`T`\[`"data"`\]

---

### entitlements

#### Get Signature

> **get** **entitlements**(): `T`\[`"entitlements"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:141](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L141)

For monetized apps, any entitlements for the invoking user, representing
access to premium SKUs.

##### Returns

`T`\[`"entitlements"`\]

---

### guild_id

#### Get Signature

> **get** **guild_id**(): `T`\[`"guild_id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:148](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L148)

The guild the interaction was sent from.

##### Returns

`T`\[`"guild_id"`\]

---

### guild_locale

#### Get Signature

> **get** **guild_locale**(): `T`\[`"guild_locale"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:164](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L164)

The guild's preferred locale, if invoked in a guild.

##### Returns

`T`\[`"guild_locale"`\]

---

### guildId

#### Get Signature

> **get** **guildId**(): `T`\[`"guild_id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:157](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L157)

The guild the interaction was sent from.

##### Seealso

[guild_id](#guild-id) for the raw data.

##### Returns

`T`\[`"guild_id"`\]

---

### guildLocale

#### Get Signature

> **get** **guildLocale**(): `T`\[`"guild_locale"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:173](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L173)

The guild's preferred locale, if invoked in a guild.

##### Seealso

[guild_locale](#guild-locale) for the raw data.

##### Returns

`T`\[`"guild_locale"`\]

---

### id

#### Get Signature

> **get** **id**(): `T`\[`"id"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:37](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L37)

The ID of the interaction.

##### Returns

`T`\[`"id"`\]

---

### locale

#### Get Signature

> **get** **locale**(): `T`\[`"locale"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:180](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L180)

The selected language of the invoking user.

##### Returns

`T`\[`"locale"`\]

---

### member

#### Get Signature

> **get** **member**(): `T`\[`"member"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:189](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L189)

Guild member data for the invoking user, including permissions.

**This is only sent when an interaction is invoked in a guild**.

##### Returns

`T`\[`"member"`\]

---

### replied

#### Get Signature

> **get** **replied**(): `boolean`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:30](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L30)

##### Returns

`boolean`

---

### token

#### Get Signature

> **get** **token**(): `T`\[`"token"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:196](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L196)

A continuation token for responding to the interaction.

##### Returns

`T`\[`"token"`\]

---

### type

#### Get Signature

> **get** **type**(): `T`\[`"type"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:44](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L44)

The type of the interaction.

##### Returns

`T`\[`"type"`\]

---

### user

#### Get Signature

> **get** **user**(): `APIUser`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:203](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L203)

User object for the invoking user.

##### Returns

`APIUser`

---

### version

#### Get Signature

> **get** **version**(): `T`\[`"version"`\]

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:210](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L210)

Read-only property, always `1`.

##### Returns

`T`\[`"version"`\]

## Methods

### \_sendReply()

> `protected` **\_sendReply**(`data`): `Promise`\<`void`\>

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:243](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L243)

#### Parameters

##### data

`object`

#### Returns

`Promise`\<`void`\>

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

[channel](#channel).

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

---

### inGuild()

> **inGuild**(): `this is InGuild<BaseInteraction<T>>`

Defined in: [packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts:218](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/interactions/base/BaseInteraction.ts#L218)

Determines whether or not the interaction was sent from a guild.

#### Returns

`this is InGuild<BaseInteraction<T>>`

The casted interaction type.
