[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / PieceConstructor

# Type Alias: PieceConstructor\<Options\>

> **PieceConstructor**\<`Options`\> = (`context`, `options?`) => `unknown`

Defined in: [packages/http-framework/src/lib/decorators/ApplyOptions.ts:8](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/decorators/ApplyOptions.ts#L8)

The constructor signature shared by every `Piece` of `@wolfstar/http-framework`, such as `Command`, `Listener`, and
`InteractionHandler`.

## Type Parameters

### Options

`Options` _extends_ [`PieceOptions`](../interfaces/PieceOptions.md) = [`PieceOptions`](../interfaces/PieceOptions.md)

## Parameters

### context

[`LoaderPieceContext`](../interfaces/LoaderPieceContext.md)

### options?

`Options`

## Returns

`unknown`
