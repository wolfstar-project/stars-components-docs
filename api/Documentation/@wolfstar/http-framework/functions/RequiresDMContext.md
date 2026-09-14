[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / RequiresDMContext

# Function: RequiresDMContext()

> **RequiresDMContext**(`fallback?`): `MethodDecorator`

Defined in: [packages/http-framework/src/lib/decorators/RequiresContext.ts:56](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/decorators/RequiresContext.ts#L56)

Decorator that only runs the decorated method when the interaction was **not** received from a guild, that is, from a
DM or from a user-installed app context.

## Parameters

### fallback?

[`ContextFallback`](../type-aliases/ContextFallback.md) = `...`

The fallback to run when the interaction came from a guild. Defaults to a no-op, which silently skips
the method.

## Returns

`MethodDecorator`

A method decorator.

## Example

```typescript
import { Command, RegisterCommand, RequiresDMContext } from '@wolfstar/http-framework';

(at)RegisterCommand({ name: 'private', description: 'Only usable outside of servers' })
export class UserCommand extends Command {
	(at)RequiresDMContext((interaction: Command.ChatInputInteraction) =>
		interaction.reply({ content: 'This command cannot be used in a server.' })
	)
	public override chatInputRun(interaction: Command.ChatInputInteraction) {
		return interaction.reply({ content: 'Hello!' });
	}
}
```
