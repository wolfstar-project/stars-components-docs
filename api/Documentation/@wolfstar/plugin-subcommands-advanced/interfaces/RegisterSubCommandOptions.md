[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-subcommands-advanced](../index.md) / RegisterSubCommandOptions

# Interface: RegisterSubCommandOptions

Defined in: [packages/plugin-subcommands-advanced/src/lib/utils/types.ts:20](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-subcommands-advanced/src/lib/utils/types.ts#L20)

Options to register a command class as a subcommand of a parent command.

## Properties

### parentCommandName

> **parentCommandName**: `string`

Defined in: [packages/plugin-subcommands-advanced/src/lib/utils/types.ts:24](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-subcommands-advanced/src/lib/utils/types.ts#L24)

The chat-input name of the parent command (the name passed to RegisterCommand).

---

### slashSubcommand

> **slashSubcommand**: [`SlashSubcommandResolvable`](../type-aliases/SlashSubcommandResolvable.md)

Defined in: [packages/plugin-subcommands-advanced/src/lib/utils/types.ts:28](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-subcommands-advanced/src/lib/utils/types.ts#L28)

Slash subcommand data (builder, JSON, or callback). Required for Discord registration.
