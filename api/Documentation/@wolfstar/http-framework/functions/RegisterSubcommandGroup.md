[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / RegisterSubcommandGroup

# Function: RegisterSubcommandGroup()

> **RegisterSubcommandGroup**\<`Options`\>(`data`): (`target`, `method`) => `void`

Defined in: [packages/http-framework/src/lib/interactions/decorators/RegisterSubcommandGroup.ts:35](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/decorators/RegisterSubcommandGroup.ts#L35)

Registers a subcommand group for a chat input command.

## Type Parameters

### Options

`Options` _extends_ [`PieceOptions`](../interfaces/PieceOptions.md) = [`PieceOptions`](../interfaces/PieceOptions.md)

The options type for the command.

## Parameters

### data

`SubcommandGroupData`

The subcommand group data.

## Returns

(`target`, `method`) => `void`

## Remarks

This decorator must be used in conjunction with [RegisterSubcommand](RegisterSubcommand.md).

## Example

```typescript
import { Command, RegisterCommand, RegisterSubcommand, RegisterSubcommandGroup } from '@wolfstar/http-framework';

(at)RegisterCommand({
	name: 'ping',
	description: 'A simple ping pong command'
})
export class UserCommand extends Command {
	(at)RegisterSubcommandGroup({
		name: 'subcommand-group',
		description: 'A simple subcommand group'
	})
	(at)RegisterSubcommand(
		{ name: 'subcommand', description: 'A simple subcommand' },
		'subcommand-group'
	)
	public async run(interaction: Command.ChatInputInteraction) {
		return interaction.reply('Pong!');
	}
}
```
