[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-subcommands-advanced](../index.md) / RegisterSubCommandGroupOptions

# Interface: RegisterSubCommandGroupOptions

Defined in: [packages/plugin-subcommands-advanced/src/lib/utils/types.ts:34](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-subcommands-advanced/src/lib/utils/types.ts#L34)

Options to register a command class as a subcommand inside a parent subcommand group.

## Properties

### groupName

> **groupName**: `string`

Defined in: [packages/plugin-subcommands-advanced/src/lib/utils/types.ts:42](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-subcommands-advanced/src/lib/utils/types.ts#L42)

The name of the subcommand group already registered on the parent.

---

### parentCommandName

> **parentCommandName**: `string`

Defined in: [packages/plugin-subcommands-advanced/src/lib/utils/types.ts:38](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-subcommands-advanced/src/lib/utils/types.ts#L38)

The chat-input name of the parent command.

---

### slashSubcommand

> **slashSubcommand**: [`SlashSubcommandResolvable`](../type-aliases/SlashSubcommandResolvable.md)

Defined in: [packages/plugin-subcommands-advanced/src/lib/utils/types.ts:46](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-subcommands-advanced/src/lib/utils/types.ts#L46)

Slash subcommand data (builder, JSON, or callback). Required for Discord registration.
