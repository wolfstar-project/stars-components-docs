[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / RestrictGuildIds

# Function: RestrictGuildIds()

> **RestrictGuildIds**\<`Options`\>(`guildIds`): (`target`) => `void`

Defined in: [packages/http-framework/src/lib/interactions/decorators/RestrictGuildIds.ts:28](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/decorators/RestrictGuildIds.ts#L28)

Decorator that restricts the guild IDs for a command.

## Type Parameters

### Options

`Options` _extends_ [`PieceOptions`](../interfaces/PieceOptions.md) = [`PieceOptions`](../interfaces/PieceOptions.md)

## Parameters

### guildIds

readonly `string`[]

An array of guild IDs to restrict the command to.

## Returns

A decorator function.

(`target`) => `void`

## Example

```typescript
import { Command, RegisterCommand, RestrictGuildIds } from '@wolfstar/http-framework';

(at)RegisterCommand({
	name: 'ping',
	description: 'A simple ping pong command'
})
(at)RestrictGuildIds(['123456789012345678', '123456789012345679'])
export class UserCommand extends Command {
	public async run(interaction: Command.ChatInputInteraction) {
		return interaction.reply('Pong!');
	}
}
```
