[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / ApplyOptions

# Function: ApplyOptions()

> **ApplyOptions**\<`Options`\>(`optionsOrFn`): `ClassDecorator`

Defined in: [packages/http-framework/src/lib/decorators/ApplyOptions.ts:41](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/decorators/ApplyOptions.ts#L41)

Decorator that sets the options of a `Piece`, such as a `Command`, a `Listener`, or an `InteractionHandler`.

## Type Parameters

### Options

`Options` _extends_ [`PieceOptions`](../interfaces/PieceOptions.md) = [`PieceOptions`](../interfaces/PieceOptions.md)

## Parameters

### optionsOrFn

`Options` \| ((`context`) => `Options`)

The options to pass to the piece's constructor, or a function that builds them from the loader
context.

## Returns

`ClassDecorator`

A class decorator.

## Remarks

The options are merged on top of the ones the piece was constructed with, so a piece that also passes
options through `super(context, options)` will have the decorator's values win on conflicting keys.

## Examples

```typescript
import { ApplyOptions, Command, RegisterCommand } from '@wolfstar/http-framework';

(at)ApplyOptions<Command.Options>({ name: 'ping', enabled: true })
(at)RegisterCommand({ name: 'ping', description: 'A simple ping pong command' })
export class UserCommand extends Command {
	public override chatInputRun(interaction: Command.ChatInputInteraction) {
		return interaction.reply({ content: 'Pong!' });
	}
}
```

```typescript
(at)ApplyOptions<Command.Options>(({ name }) => ({ name: name.toLowerCase() }))
export class UserCommand extends Command {}
```
