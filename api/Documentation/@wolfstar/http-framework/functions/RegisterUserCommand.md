[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / RegisterUserCommand

# Function: RegisterUserCommand()

> **RegisterUserCommand**\<`Options`\>(`data`): (`target`, `method`) => `void`

Defined in: [packages/http-framework/src/lib/interactions/decorators/RegisterUserCommand.ts:23](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/decorators/RegisterUserCommand.ts#L23)

Registers a user command.

## Type Parameters

### Options

`Options` _extends_ [`PieceOptions`](../interfaces/PieceOptions.md) = [`PieceOptions`](../interfaces/PieceOptions.md)

The options type for the command.

## Parameters

### data

`CommandData`

The command to register.

## Returns

A method decorator function, does not override the method.

(`target`, `method`) => `void`

## Example

```typescript
export class UserCommand extends Command {
	(at)RegisterUserCommand(createData())
	public run(interaction: Command.UserInteraction, data: TransformedArguments.User) {
		// ...
	}
}
```
