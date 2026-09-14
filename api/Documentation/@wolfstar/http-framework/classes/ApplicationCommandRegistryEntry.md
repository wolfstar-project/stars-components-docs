[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / ApplicationCommandRegistryEntry

# Class: ApplicationCommandRegistryEntry

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistryEntry.ts:18](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistryEntry.ts#L18)

Represents an entry in the application command registry.

This class provides methods to manage and manipulate application command data.

## Since

2.0.0

## Implements

- `JSONEncodable`\<[`Command`](../namespaces/ApplicationCommandRegistryEntry/type-aliases/Command.md)[]\>

## Constructors

### Constructor

> **new ApplicationCommandRegistryEntry**(): `ApplicationCommandRegistryEntry`

#### Returns

`ApplicationCommandRegistryEntry`

## Accessors

### chatInput

#### Get Signature

> **get** **chatInput**(): `ChatInputCommandResolver` \| `null`

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistryEntry.ts:75](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistryEntry.ts#L75)

Gets the chat input command resolver.

##### Since

2.0.0

##### Returns

`ChatInputCommandResolver` \| `null`

The chat input command resolver or `null` if not set.

---

### contextMenu

#### Get Signature

> **get** **contextMenu**(): `ContextMenuCommandResolver`[]

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistryEntry.ts:85](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistryEntry.ts#L85)

Gets the context menu commands associated with this registry entry.

##### Since

2.0.0

##### Returns

`ContextMenuCommandResolver`[]

An array of `ContextMenuCommandResolver` objects representing the context menu commands.

## Methods

### getGlobalId()

> **getGlobalId**(): `string` \| `null`

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistryEntry.ts:29](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistryEntry.ts#L29)

Retrieves the loaded global ID of the `ApplicationCommandRegistryEntry`.

#### Returns

`string` \| `null`

The loaded global ID of the `ApplicationCommandRegistryEntry`, or `null` if it's not set.

#### Since

2.0.0

---

### getGuildId()

> **getGuildId**(`guildId`): `string` \| `null`

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistryEntry.ts:52](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistryEntry.ts#L52)

Retrieves the loaded guild ID associated with the given guild ID.

#### Parameters

##### guildId

`string`

The guild ID to retrieve.

#### Returns

`string` \| `null`

The associated guild ID, or null if not found.

#### Since

2.0.0

---

### setGlobalId()

> **setGlobalId**(`value`): `ApplicationCommandRegistryEntry`

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistryEntry.ts:40](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistryEntry.ts#L40)

Sets the loaded global ID for the `ApplicationCommandRegistryEntry`.

#### Parameters

##### value

`string`

The Snowflake value to set as the global ID.

#### Returns

`ApplicationCommandRegistryEntry`

The updated `ApplicationCommandRegistryEntry` instance.

#### Since

2.0.0

---

### setGuildId()

> **setGuildId**(`guildId`, `value`): `this`

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistryEntry.ts:64](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistryEntry.ts#L64)

Sets the loaded guild ID for the registry entry.

#### Parameters

##### guildId

`string`

The guild ID to set.

##### value

`string`

The value to associate with the guild ID.

#### Returns

`this`

The updated registry entry.

#### Since

2.0.0

---

### toJSON()

> **toJSON**(): [`Command`](../namespaces/ApplicationCommandRegistryEntry/type-aliases/Command.md)[]

Defined in: [packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistryEntry.ts:95](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/shared/ApplicationCommandRegistryEntry.ts#L95)

Converts the `ApplicationCommandRegistryEntry` to a JSON representation.

#### Returns

[`Command`](../namespaces/ApplicationCommandRegistryEntry/type-aliases/Command.md)[]

An array of Command objects in JSON format.

#### Since

2.0.0

#### Implementation of

`JSONEncodable.toJSON`
