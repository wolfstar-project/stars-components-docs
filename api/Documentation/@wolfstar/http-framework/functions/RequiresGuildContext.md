[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / RequiresGuildContext

# Function: RequiresGuildContext()

> **RequiresGuildContext**(`fallback?`): `MethodDecorator`

Defined in: [packages/http-framework/src/lib/decorators/RequiresContext.ts:30](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/decorators/RequiresContext.ts#L30)

Decorator that only runs the decorated method when the interaction was received from a guild.

## Parameters

### fallback?

[`ContextFallback`](../type-aliases/ContextFallback.md) = `...`

The fallback to run when the interaction did not come from a guild. Defaults to a no-op, which
silently skips the method.

## Returns

`MethodDecorator`

A method decorator.

## Example

```typescript
import { Command, RegisterCommand, RequiresGuildContext } from '@wolfstar/http-framework';

(at)RegisterCommand({ name: 'kick', description: 'Kicks a member' })
export class UserCommand extends Command {
	(at)RequiresGuildContext((interaction: Command.ChatInputInteraction) =>
		interaction.reply({ content: 'This command can only be used in a server.' })
	)
	public override chatInputRun(interaction: Command.ChatInputInteraction) {
		return interaction.reply({ content: `Hello from ${interaction.guildId}!` });
	}
}
```
