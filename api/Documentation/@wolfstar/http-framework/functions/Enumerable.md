[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / Enumerable

# Function: Enumerable()

> **Enumerable**(`value`): (`target`, `key`) => `void`

Defined in: [packages/http-framework/src/lib/decorators/Enumerable.ts:24](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/decorators/Enumerable.ts#L24)

Decorator that sets the `enumerable` property of a class field to the given value.

## Parameters

### value

`boolean`

Whether the property should be enumerable or not.

## Returns

A property decorator.

(`target`, `key`) => `void`

## Remarks

The decorator installs a setter on the prototype, which is bypassed by the `Object.defineProperty` call
that `useDefineForClassFields` (enabled by `@sapphire/ts-config`, and the default from `ES2022` onwards) emits for
class fields. Mark the field as `declare` so no field definition is emitted, and assign it in the constructor.

## Example

```typescript
import { Command, Enumerable } from '@wolfstar/http-framework';

export class UserCommand extends Command {
	(at)Enumerable(false)
	declare public cache: Map<string, string>;

	public constructor(context: Command.LoaderContext, options: Command.Options) {
		super(context, options);
		this.cache = new Map();
	}
}
```
