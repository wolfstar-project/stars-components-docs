[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / Breadcrumb

# Interface: Breadcrumb

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/breadcrumb.d.ts:8

Sentry uses breadcrumbs to create a trail of events that happened prior to an issue.
These events are very similar to traditional logs but can record more rich structured data.

## Link

https://develop.sentry.dev/sdk/event-payloads/breadcrumbs/

## Properties

### data?

> `optional` **data?**: `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/breadcrumb.d.ts:49

Contains a dictionary whose contents depend on the breadcrumb type.
Additional parameters that are unsupported by the type are rendered as a key/value table.

#### Index Signature

\[`key`: `string`\]: `any`

---

### event_id?

> `optional` **event_id?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/breadcrumb.d.ts:26

---

### level?

> `optional` **level?**: [`SeverityLevel`](../type-aliases/SeverityLevel.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/breadcrumb.d.ts:25

Allowed values are, from highest to lowest:
`fatal`, `error`, `warning`, `info`, and `debug`.
Levels are used in the UI to emphasize and deemphasize the crumb. The default is `info`.

---

### message?

> `optional` **message?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/breadcrumb.d.ts:42

If a message is provided, it is rendered as text with all whitespace preserved.

---

### timestamp?

> `optional` **timestamp?**: `number`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/breadcrumb.d.ts:63

The format is a numeric (integer or float) value representing
the number of seconds that have elapsed since the Unixepoch.
Breadcrumbs are most useful when they include a timestamp, as it creates a timeline
leading up to an event expection/error.

#### Note

The API supports a string as defined in RFC 3339, but the SDKs only support a numeric value for now.

#### Link

https://develop.sentry.dev/sdk/event-payloads/breadcrumbs/#:~:text=is%20info.-,timestamp,-(recommended)

---

### type?

> `optional` **type?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/breadcrumb.d.ts:17

By default, all breadcrumbs are recorded as default, which makes them appear as a Debug entry, but Sentry provides
other types that influence how the breadcrumbs are rendered. For more information, see the description of
recognized breadcrumb types.

#### Link

https://develop.sentry.dev/sdk/event-payloads/breadcrumbs/#breadcrumb-types
