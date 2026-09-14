[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-subcommands-advanced](../index.md) / RegisterAsSubcommandGroup

# Function: RegisterAsSubcommandGroup()

> **RegisterAsSubcommandGroup**(`parentCommandName`, `groupName`, `slashSubcommand`): \<`T`\>(`target`) => `T`

Defined in: [packages/plugin-subcommands-advanced/src/lib/utils/decorators.ts:75](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-subcommands-advanced/src/lib/utils/decorators.ts#L75)

Class decorator that registers the decorated command as a subcommand inside a group.

## Parameters

### parentCommandName

`string`

### groupName

`string`

### slashSubcommand

[`SlashSubcommandResolvable`](../type-aliases/SlashSubcommandResolvable.md)

## Returns

\<`T`\>(`target`) => `T`

## Example

```typescript
import { Command, RegisterAsSubcommandGroup } from '@wolfstar/plugin-subcommands-advanced';

@RegisterAsSubcommandGroup('utils', 'poll', (builder) => builder.setName('create').setDescription('Create a poll'))
export class PollCreateCommand extends Command {
	public override chatInputRun(interaction: Command.ChatInputInteraction) {
		return interaction.reply({ content: 'Created!' });
	}
}
```
