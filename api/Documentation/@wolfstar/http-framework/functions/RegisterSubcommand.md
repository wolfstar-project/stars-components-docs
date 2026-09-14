[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / RegisterSubcommand

# Function: RegisterSubcommand()

> **RegisterSubcommand**\<`Options`\>(`data`, `subCommandGroupName?`): (`target`, `method`) => `void`

Defined in: [packages/http-framework/src/lib/interactions/decorators/RegisterSubcommand.ts:32](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/decorators/RegisterSubcommand.ts#L32)

Registers a subcommand for a chat input command.

## Type Parameters

### Options

`Options` _extends_ [`PieceOptions`](../interfaces/PieceOptions.md) = [`PieceOptions`](../interfaces/PieceOptions.md)

## Parameters

### data

`SubcommandData`

The subcommand data.

### subCommandGroupName?

`string` \| `null`

Optional name of the subcommand group.

## Returns

A decorator function that adds the subcommand to the target command.

(`target`, `method`) => `void`

## Remarks

This decorator must be used in conjunction with RegisterSubcommand.

## Example

```typescript
import { Command, RegisterCommand, RegisterSubcommand, RegisterSubcommandGroup } from '@wolfstar/http-framework';

(at)RegisterCommand({
	name: 'ping',
	description: 'A simple ping pong command'
})
export class UserCommand extends Command {
	(at)RegisterSubcommand({
		name: 'subcommand',
		description: 'A simple subcommand'
	})
	public async run(interaction: Command.ChatInputInteraction) {
		return interaction.reply('Pong!');
	}
}
```
