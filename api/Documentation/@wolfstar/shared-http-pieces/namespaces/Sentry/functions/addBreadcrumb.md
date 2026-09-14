[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / addBreadcrumb

# Function: addBreadcrumb()

> **addBreadcrumb**(`breadcrumb`, `hint?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/breadcrumbs.d.ts:8

Records a new breadcrumb which will be attached to future events.

Breadcrumbs will be added to subsequent events to provide more context on
user's actions prior to an error or crash.

## Parameters

### breadcrumb

[`Breadcrumb`](../interfaces/Breadcrumb.md)

### hint?

[`BreadcrumbHint`](../interfaces/BreadcrumbHint.md)

## Returns

`void`
