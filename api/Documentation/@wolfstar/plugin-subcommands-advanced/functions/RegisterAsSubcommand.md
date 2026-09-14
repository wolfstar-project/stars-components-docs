[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-subcommands-advanced](../index.md) / RegisterAsSubcommand

# Function: RegisterAsSubcommand()

> **RegisterAsSubcommand**(`parentCommandName`, `slashSubcommand`): \<`T`\>(`target`) => `T`

Defined in: [packages/plugin-subcommands-advanced/src/lib/utils/decorators.ts:30](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-subcommands-advanced/src/lib/utils/decorators.ts#L30)

Class decorator that registers the decorated command as a direct subcommand of `parentCommandName`.

## Parameters

### parentCommandName

`string`

### slashSubcommand

[`SlashSubcommandResolvable`](../type-aliases/SlashSubcommandResolvable.md)

## Returns

\<`T`\>(`target`) => `T`

## Example

```typescript
import { Command, RegisterAsSubcommand } from '@wolfstar/plugin-subcommands-advanced';

@RegisterAsSubcommand('utils', (builder) => builder.setName('ping').setDescription('Ping!'))
export class PingCommand extends Command {
	public override chatInputRun(interaction: Command.ChatInputInteraction) {
		return interaction.reply({ content: 'Pong!' });
	}
}
```
