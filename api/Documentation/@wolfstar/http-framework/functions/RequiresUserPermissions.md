[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / RequiresUserPermissions

# Function: RequiresUserPermissions()

> **RequiresUserPermissions**(...`permissions`): `MethodDecorator`

Defined in: [packages/http-framework/src/lib/decorators/RequiresPermissions.ts:87](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/decorators/RequiresPermissions.ts#L87)

Decorator that only runs the decorated method when the invoking user has all of the given permissions in the channel
the interaction was sent from.

## Parameters

### permissions

...[`PermissionResolvable`](../type-aliases/PermissionResolvable.md)[]

The permissions the invoking user must have.

## Returns

`MethodDecorator`

A method decorator.

## Remarks

Interactions received outside of a guild carry no member permissions, so the check passes for them. Pair
this decorator with [`RequiresGuildContext`](RequiresGuildContext.md) when the method must also be guild-only.

## Example

```typescript
import { Command, RegisterCommand, RequiresUserPermissions } from '@wolfstar/http-framework';

(at)RegisterCommand({ name: 'ban', description: 'Bans a member' })
export class UserCommand extends Command {
	(at)RequiresUserPermissions('BanMembers')
	public override chatInputRun(interaction: Command.ChatInputInteraction) {
		return interaction.reply({ content: 'Banned!' });
	}
}
```
