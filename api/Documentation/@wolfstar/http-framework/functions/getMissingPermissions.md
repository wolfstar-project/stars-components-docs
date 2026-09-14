[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / getMissingPermissions

# Function: getMissingPermissions()

> **getMissingPermissions**(`granted`, `required`): `bigint`

Defined in: [packages/http-framework/src/lib/utils/permissions.ts:52](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/utils/permissions.ts#L52)

Computes the permissions from `required` that are missing in `granted`.

## Parameters

### granted

`bigint`

The bitfield of the permissions that were granted.

### required

`bigint`

The bitfield of the permissions that are required.

## Returns

`bigint`

The bitfield of the missing permissions, `0n` if none are missing.

## Remarks

Members with the `Administrator` permission implicitly have every permission, so this returns `0n` when
`granted` contains it.
