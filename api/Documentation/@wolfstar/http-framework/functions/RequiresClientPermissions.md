[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / RequiresClientPermissions

# Function: RequiresClientPermissions()

> **RequiresClientPermissions**(...`permissions`): `MethodDecorator`

Defined in: [packages/http-framework/src/lib/decorators/RequiresPermissions.ts:41](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/decorators/RequiresPermissions.ts#L41)

Decorator that only runs the decorated method when the application has all of the given permissions in the channel
the interaction was sent from, as reported by the interaction's `app_permissions` field.

## Parameters

### permissions

...[`PermissionResolvable`](../type-aliases/PermissionResolvable.md)[]

The permissions the application must have.

## Returns

`MethodDecorator`

A method decorator.

## Remarks

When the fallback is omitted, a [`PreconditionError`](../classes/PreconditionError.md) identified by
[`Identifiers.PreconditionClientPermissions`](../enumerations/Identifiers.md#preconditionclientpermissions) is thrown, which the client emits as `commandError` (or
`interactionHandlerError`) for a `Listener` to turn into a user-facing reply.

## Example

```typescript
import { Command, RegisterCommand, RequiresClientPermissions } from '@wolfstar/http-framework';

(at)RegisterCommand({ name: 'purge', description: 'Deletes messages' })
export class UserCommand extends Command {
	(at)RequiresClientPermissions('ManageMessages')
	public override chatInputRun(interaction: Command.ChatInputInteraction) {
		return interaction.reply({ content: 'Purging!' });
	}
}
```
