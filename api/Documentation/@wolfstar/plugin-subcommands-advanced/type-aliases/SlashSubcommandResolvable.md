[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-subcommands-advanced](../index.md) / SlashSubcommandResolvable

# Type Alias: SlashSubcommandResolvable

> **SlashSubcommandResolvable** = `SlashCommandSubcommandBuilder` \| \{ `toJSON`: `Pick`\<`APIApplicationCommandSubcommandOption`, `"name"` \| `"description"`\>; \} \| `Pick`\<`APIApplicationCommandSubcommandOption`, `"name"` \| `"description"`\> \| ((`builder`, `Container`) => `SlashCommandSubcommandBuilder` \| `void`)

Defined in: [packages/plugin-subcommands-advanced/src/lib/utils/types.ts:8](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-subcommands-advanced/src/lib/utils/types.ts#L8)

Resolvable slash-subcommand payload accepted by the plugin.
