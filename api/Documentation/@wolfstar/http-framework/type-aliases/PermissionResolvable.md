[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / PermissionResolvable

# Type Alias: PermissionResolvable

> **PermissionResolvable** = `bigint` \| [`PermissionString`](PermissionString.md) \| readonly `PermissionResolvable`[]

Defined in: [packages/http-framework/src/lib/utils/permissions.ts:15](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/utils/permissions.ts#L15)

Anything that can be resolved into a permission bitfield:

- A `bigint`, such as the values of `PermissionFlagsBits`.
- A [`PermissionString`](PermissionString.md), such as `'BanMembers'`.
- An arbitrarily nested (readonly) array of the above.
