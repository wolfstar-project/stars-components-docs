[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / MakeArguments

# Type Alias: MakeArguments\<T\>

> **MakeArguments**\<`T`\> = `{ [K in keyof T]: ArgumentTypes[T[K]] }`

Defined in: [packages/http-framework/src/lib/interactions/resolvers/InteractionOptions.ts:241](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/interactions/resolvers/InteractionOptions.ts#L241)

Convenience type for creating arguments out of strings.

## Type Parameters

### T

`T` _extends_ `Record`\<`string`, keyof [`ArgumentTypes`](../interfaces/ArgumentTypes.md)\>

## Examples

```typescript
// Using named string:
type Options = MakeArguments<{
	name: 'string';
	file: 'attachment';
}>;

// ➥ type Options = {
//    	name: string;
//    	attachment: APIAttachment;
//    };
```

```typescript
// Using named string:
type Options = MakeArguments<{
	name: ApplicationCommandOptionType.String;
	file: ApplicationCommandOptionType.Attachment;
}>;

// ➥ type Options = {
//    	name: string;
//    	attachment: APIAttachment;
//    };
```
