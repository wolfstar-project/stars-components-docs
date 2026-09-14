[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-subcommands-advanced](../index.md) / RegisterSubcommandsHooks

# Variable: RegisterSubcommandsHooks

> `const` **RegisterSubcommandsHooks**: `object`

Defined in: [packages/plugin-subcommands-advanced/src/lib/utils/hooks.ts:11](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-subcommands-advanced/src/lib/utils/hooks.ts#L11)

Optional hooks for parent commands that register chat-input commands imperatively
via [Command.registerApplicationCommands](../classes/Command.md#registerapplicationcommands). Prefer relying on the automatic
wiring performed by [SubcommandsAdvancedLoaderStrategy](../classes/SubcommandsAdvancedLoaderStrategy.md); these helpers are
useful when you want to inspect or manually attach builders during registration.

## Type Declaration

### groups()

> **groups**(`piece`, `context?`): `void`

Attach registered grouped subcommands onto matching groups on a SlashCommandBuilder.

#### Parameters

##### piece

`Command`

##### context?

`SlashCommandBuilder`

#### Returns

`void`

### subcommands()

> **subcommands**(`piece`, `context?`): `void`

Attach registered direct subcommands onto a SlashCommandBuilder.

#### Parameters

##### piece

`Command`

##### context?

`SlashCommandBuilder`

#### Returns

`void`
