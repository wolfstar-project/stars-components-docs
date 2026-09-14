[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / RegisterCommand

# Function: RegisterCommand()

> **RegisterCommand**\<`Options`\>(`data`): (`target`) => `void`

Defined in: [packages/http-framework/src/lib/interactions/decorators/RegisterCommand.ts:26](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/decorators/RegisterCommand.ts#L26)

Registers a command for the chat input.

## Type Parameters

### Options

`Options` _extends_ [`PieceOptions`](../interfaces/PieceOptions.md) = [`PieceOptions`](../interfaces/PieceOptions.md)

The options type for the command.

## Parameters

### data

`CommandData`

The command data.

## Returns

(`target`) => `void`

## Example

```typescript
import { Command, RegisterCommand } from '@wolfstar/http-framework';

(at)RegisterCommand({
	name: 'ping',
	description: 'A simple ping pong command'
})
export class UserCommand extends Command {
	public async run(interaction: Command.ChatInputInteraction) {
		return interaction.reply('Pong!');
	}
}
```
