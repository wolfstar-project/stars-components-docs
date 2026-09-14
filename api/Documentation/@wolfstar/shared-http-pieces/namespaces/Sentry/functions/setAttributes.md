[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / setAttributes

# Function: setAttributes()

> **setAttributes**\<`T`\>(`attributes`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/exports.d.ts:89

Sets attributes on the isolation scope.

These attributes are applied to logs, metrics and streamed spans.

Supported attribute value types are `string`, `number`, `boolean`, `string[]`, `number[]` and `boolean[]`.

## Type Parameters

### T

`T` _extends_ `Record`\<`string`, `unknown`\>

## Parameters

### attributes

`RawAttributes`\<`T`\>

The attributes to set on the scope, as key-value pairs.

## Returns

`void`

## Example

```typescript
Sentry.setAttributes({
	is_admin: true,
	payment_selection: 'credit_card',
	render_duration: 150
});
```
