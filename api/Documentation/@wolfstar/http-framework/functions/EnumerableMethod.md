[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / EnumerableMethod

# Function: EnumerableMethod()

> **EnumerableMethod**(`value`): (`_target`, `_key`, `descriptor`) => `void`

Defined in: [packages/http-framework/src/lib/decorators/Enumerable.ts:57](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/decorators/Enumerable.ts#L57)

Decorator that sets the `enumerable` property of a class method to the given value.

## Parameters

### value

`boolean`

Whether the method should be enumerable or not.

## Returns

A method decorator.

(`_target`, `_key`, `descriptor`) => `void`

## Example

```typescript
import { Command, EnumerableMethod } from '@wolfstar/http-framework';

export class UserCommand extends Command {
	(at)EnumerableMethod(true)
	public getCacheKey(id: string) {
		return `user:${id}`;
	}
}
```
