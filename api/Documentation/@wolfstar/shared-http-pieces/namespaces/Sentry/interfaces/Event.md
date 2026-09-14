[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / Event

# Interface: Event

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:19

An event to be sent to Sentry.

## theme_extended_by

- [`ErrorEvent`](ErrorEvent.md)

## Properties

### breadcrumbs?

> `optional` **breadcrumbs?**: [`Breadcrumb`](Breadcrumb.md)[]

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:45

---

### contexts?

> `optional` **contexts?**: `Contexts`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:46

---

### debug_meta?

> `optional` **debug_meta?**: `DebugMeta`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:55

---

### dist?

> `optional` **dist?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:33

---

### environment?

> `optional` **environment?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:34

---

### event_id?

> `optional` **event_id?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:20

---

### exception?

> `optional` **exception?**: `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:42

#### values?

> `optional` **values?**: [`Exception`](Exception.md)[]

---

### extra?

> `optional` **extra?**: `Extras`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:50

---

### fingerprint?

> `optional` **fingerprint?**: `string`[]

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:41

---

### level?

> `optional` **level?**: [`SeverityLevel`](../type-aliases/SeverityLevel.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:28

---

### logentry?

> `optional` **logentry?**: `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:22

#### message?

> `optional` **message?**: `string`

#### params?

> `optional` **params?**: `unknown`[]

---

### logger?

> `optional` **logger?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:30

---

### measurements?

> `optional` **measurements?**: `Measurements`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:54

---

### message?

> `optional` **message?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:21

---

### modules?

> `optional` **modules?**: `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:38

#### Index Signature

\[`key`: `string`\]: `string`

---

### platform?

> `optional` **platform?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:29

---

### release?

> `optional` **release?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:32

---

### request?

> `optional` **request?**: [`RequestEventData`](RequestEventData.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:36

---

### sdk?

> `optional` **sdk?**: [`SdkInfo`](SdkInfo.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:35

---

### sdkProcessingMetadata?

> `optional` **sdkProcessingMetadata?**: `SdkProcessingMetadata`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:56

---

### server_name?

> `optional` **server_name?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:31

---

### spans?

> `optional` **spans?**: `SpanJSON`[]

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:53

---

### start_timestamp?

> `optional` **start_timestamp?**: `number`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:27

---

### tags?

> `optional` **tags?**: `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:47

#### Index Signature

\[`key`: `string`\]: `Primitive`

---

### threads?

> `optional` **threads?**: `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:60

#### values

> **values**: [`Thread`](Thread.md)[]

---

### timestamp?

> `optional` **timestamp?**: `number`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:26

---

### transaction?

> `optional` **transaction?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:37

---

### transaction_info?

> `optional` **transaction_info?**: `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:57

#### source

> **source**: `TransactionSource`

---

### type?

> `optional` **type?**: `EventType`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:52

---

### user?

> `optional` **user?**: [`User`](User.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:51
