[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / createClassDecorator

# Function: createClassDecorator()

> **createClassDecorator**\<`TFunction`\>(`fn`): `TFunction`

Defined in: [packages/http-framework/src/lib/decorators/utils.ts:32](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/decorators/utils.ts#L32)

Utility to make a class decorator from a function.

## Type Parameters

### TFunction

`TFunction` _extends_ (...`args`) => `unknown`

## Parameters

### fn

`TFunction`

The class to decorate.

## Returns

`TFunction`

The decorator.

## Remarks

The decorator is returned with the signature it was given, rather than widened to `ClassDecorator`, so a
decorator built on top of this keeps whatever constraint it declares on its target. This is what lets
[`RegisterCommand`](RegisterCommand.md) and its siblings reject a target that is not a `Command`.

## See

[`ApplyOptions`](ApplyOptions.md)
