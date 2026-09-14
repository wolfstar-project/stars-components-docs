[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / setAttribute

# Function: setAttribute()

> **setAttribute**\<`T`\>(`key`, `value`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/exports.d.ts:106

Sets an attribute on the isolation scope.

These attributes are applied to logs, metrics and streamed spans.

Supported attribute value types are `string`, `number`, `boolean`, `string[]`, `number[]` and `boolean[]`.

## Type Parameters

### T

`T` _extends_ `unknown`

## Parameters

### key

`string`

The attribute key.

### value

`RawAttribute`\<`T`\>

The attribute value.

## Returns

`void`

## Example

```typescript
Sentry.setAttribute('is_admin', true);
Sentry.setAttribute('render_duration', 150);
```
