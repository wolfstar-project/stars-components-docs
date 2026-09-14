[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / resolvePermissions

# Function: resolvePermissions()

> **resolvePermissions**(`resolvable`): `bigint`

Defined in: [packages/http-framework/src/lib/utils/permissions.ts:29](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/utils/permissions.ts#L29)

Resolves any [`PermissionResolvable`](../type-aliases/PermissionResolvable.md) into a single permission bitfield.

## Parameters

### resolvable

[`PermissionResolvable`](../type-aliases/PermissionResolvable.md)

The value to resolve.

## Returns

`bigint`

The resolved bitfield.

## Throws

`TypeError` If a string was given that is not a known permission flag.

## Example

```typescript
resolvePermissions(['BanMembers', PermissionFlagsBits.KickMembers]);
// 6n
```
