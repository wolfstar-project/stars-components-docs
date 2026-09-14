[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / createMethodDecorator

# Function: createMethodDecorator()

> **createMethodDecorator**\<`TFunction`\>(`fn`): `TFunction`

Defined in: [packages/http-framework/src/lib/decorators/utils.ts:18](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/decorators/utils.ts#L18)

Utility to make a method decorator from a function.

## Type Parameters

### TFunction

`TFunction` _extends_ (...`args`) => `unknown`

## Parameters

### fn

`TFunction`

The method to decorate.

## Returns

`TFunction`

The decorator.

## Remarks

The decorator is returned with the signature it was given, rather than widened to `MethodDecorator`, so a
decorator built on top of this keeps whatever constraint it declares on its target.

## Example

```typescript
// Enumerable function that will not append the property to the prototype:
function enumerableMethod(value: boolean) {
	return createMethodDecorator((_target: unknown, _propertyKey: string, descriptor: PropertyDescriptor) => {
		descriptor.enumerable = value;
	});
}
```
