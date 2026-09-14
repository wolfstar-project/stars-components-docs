[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / PartialMessage

# Class: PartialMessage\<I\>

Defined in: [packages/http-framework/src/lib/interactions/structures/Message.ts:17](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/Message.ts#L17)

## theme_extended_by

- [`Message`](Message.md)

## Type Parameters

### I

`I` _extends_ [`BaseInteraction`](BaseInteraction.md) = [`BaseInteraction`](BaseInteraction.md)

## Constructors

### Constructor

> **new PartialMessage**\<`I`\>(`interaction`): `PartialMessage`\<`I`\>

Defined in: [packages/http-framework/src/lib/interactions/structures/Message.ts:20](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/Message.ts#L20)

#### Parameters

##### interaction

`I`

#### Returns

`PartialMessage`\<`I`\>

## Properties

### interaction

> `readonly` **interaction**: `I`

Defined in: [packages/http-framework/src/lib/interactions/structures/Message.ts:18](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/Message.ts#L18)

## Accessors

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [packages/http-framework/src/lib/interactions/structures/Message.ts:27](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/Message.ts#L27)

The ID of the message.

##### Returns

`string`

---

### thread

#### Get Signature

> **get** **thread**(): `APIChannel` \| `undefined`

Defined in: [packages/http-framework/src/lib/interactions/structures/Message.ts:34](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/Message.ts#L34)

The thread, if the message started one.

##### Returns

`APIChannel` \| `undefined`

## Methods

### delete()

> **delete**(): [`AsyncDiscordResult`](../type-aliases/AsyncDiscordResult.md)\<`PartialMessage`\<`I`\>\>

Defined in: [packages/http-framework/src/lib/interactions/structures/Message.ts:70](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/Message.ts#L70)

Deletes the message.

#### Returns

[`AsyncDiscordResult`](../type-aliases/AsyncDiscordResult.md)\<`PartialMessage`\<`I`\>\>

---

### get()

> **get**(): [`AsyncDiscordResult`](../type-aliases/AsyncDiscordResult.md)\<[`Message`](Message.md)\<[`BaseInteraction`](BaseInteraction.md)\<[`BaseInteractionType`](../type-aliases/BaseInteractionType.md)\>\>\>

Defined in: [packages/http-framework/src/lib/interactions/structures/Message.ts:41](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/Message.ts#L41)

Retrieves the message from Discord, returns a clone of the instance.

#### Returns

[`AsyncDiscordResult`](../type-aliases/AsyncDiscordResult.md)\<[`Message`](Message.md)\<[`BaseInteraction`](BaseInteraction.md)\<[`BaseInteractionType`](../type-aliases/BaseInteractionType.md)\>\>\>

---

### update()

> **update**(`data`): [`AsyncDiscordResult`](../type-aliases/AsyncDiscordResult.md)\<[`Message`](Message.md)\<[`BaseInteraction`](BaseInteraction.md)\<[`BaseInteractionType`](../type-aliases/BaseInteractionType.md)\>\>\>

Defined in: [packages/http-framework/src/lib/interactions/structures/Message.ts:55](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/structures/Message.ts#L55)

Updates the message, returns a clone of the instance.

#### Parameters

##### data

[`UpdateResponseOptions`](../type-aliases/UpdateResponseOptions.md)

The data to be sent.

#### Returns

[`AsyncDiscordResult`](../type-aliases/AsyncDiscordResult.md)\<[`Message`](Message.md)\<[`BaseInteraction`](BaseInteraction.md)\<[`BaseInteractionType`](../type-aliases/BaseInteractionType.md)\>\>\>
