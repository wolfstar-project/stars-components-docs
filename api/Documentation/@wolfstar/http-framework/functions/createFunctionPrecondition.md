[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / createFunctionPrecondition

# Function: createFunctionPrecondition()

> **createFunctionPrecondition**(`precondition`, `fallback?`): `MethodDecorator`

Defined in: [packages/http-framework/src/lib/decorators/utils.ts:72](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/decorators/utils.ts#L72)

Utility to make a method decorator with lighter syntax and inferred types.

## Parameters

### precondition

(...`args`) => `boolean` \| `Promise`\<`boolean`\>

The predicate to run before the decorated method. It receives the same arguments as the method
and is called with the same `this`.

### fallback?

(...`args`) => `unknown`

The fallback to run when the precondition is not met. Defaults to a no-op returning `undefined`.

## Returns

`MethodDecorator`

The decorator.

## Remarks

The decorated method is replaced by an `async` one, so it always returns a `Promise`, even when both the
precondition and the original method are synchronous.

## Example

```typescript
import { Command, RegisterCommand, createFunctionPrecondition } from '@wolfstar/http-framework';

const RequiresOwner = createFunctionPrecondition(
	(interaction: Command.ChatInputInteraction) => interaction.user.id === process.env.OWNER_ID,
	(interaction: Command.ChatInputInteraction) => interaction.reply({ content: 'Owner only.' })
);
```
