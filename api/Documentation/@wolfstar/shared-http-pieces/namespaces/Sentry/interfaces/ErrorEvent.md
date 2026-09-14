[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / ErrorEvent

# Interface: ErrorEvent

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:70

An event to be sent to Sentry.

## theme_extends

- [`Event`](Event.md)

## Properties

### breadcrumbs?

> `optional` **breadcrumbs?**: [`Breadcrumb`](Breadcrumb.md)[]

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:45

#### Inherited from

[`Event`](Event.md).[`breadcrumbs`](Event.md#breadcrumbs)

---

### contexts?

> `optional` **contexts?**: `Contexts`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:46

#### Inherited from

[`Event`](Event.md).[`contexts`](Event.md#contexts)

---

### debug_meta?

> `optional` **debug_meta?**: `DebugMeta`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:55

#### Inherited from

[`Event`](Event.md).[`debug_meta`](Event.md#debug-meta)

---

### dist?

> `optional` **dist?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:33

#### Inherited from

[`Event`](Event.md).[`dist`](Event.md#dist)

---

### environment?

> `optional` **environment?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:34

#### Inherited from

[`Event`](Event.md).[`environment`](Event.md#environment)

---

### event_id?

> `optional` **event_id?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:20

#### Inherited from

[`Event`](Event.md).[`event_id`](Event.md#event-id)

---

### exception?

> `optional` **exception?**: `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:42

#### values?

> `optional` **values?**: [`Exception`](Exception.md)[]

#### Inherited from

[`Event`](Event.md).[`exception`](Event.md#exception)

---

### extra?

> `optional` **extra?**: `Extras`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:50

#### Inherited from

[`Event`](Event.md).[`extra`](Event.md#extra)

---

### fingerprint?

> `optional` **fingerprint?**: `string`[]

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:41

#### Inherited from

[`Event`](Event.md).[`fingerprint`](Event.md#fingerprint)

---

### level?

> `optional` **level?**: [`SeverityLevel`](../type-aliases/SeverityLevel.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:28

#### Inherited from

[`Event`](Event.md).[`level`](Event.md#level)

---

### logentry?

> `optional` **logentry?**: `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:22

#### message?

> `optional` **message?**: `string`

#### params?

> `optional` **params?**: `unknown`[]

#### Inherited from

[`Event`](Event.md).[`logentry`](Event.md#logentry)

---

### logger?

> `optional` **logger?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:30

#### Inherited from

[`Event`](Event.md).[`logger`](Event.md#logger)

---

### measurements?

> `optional` **measurements?**: `Measurements`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:54

#### Inherited from

[`Event`](Event.md).[`measurements`](Event.md#measurements)

---

### message?

> `optional` **message?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:21

#### Inherited from

[`Event`](Event.md).[`message`](Event.md#message)

---

### modules?

> `optional` **modules?**: `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:38

#### Index Signature

\[`key`: `string`\]: `string`

#### Inherited from

[`Event`](Event.md).[`modules`](Event.md#modules)

---

### platform?

> `optional` **platform?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:29

#### Inherited from

[`Event`](Event.md).[`platform`](Event.md#platform)

---

### release?

> `optional` **release?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:32

#### Inherited from

[`Event`](Event.md).[`release`](Event.md#release)

---

### request?

> `optional` **request?**: [`RequestEventData`](RequestEventData.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:36

#### Inherited from

[`Event`](Event.md).[`request`](Event.md#request)

---

### sdk?

> `optional` **sdk?**: [`SdkInfo`](SdkInfo.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:35

#### Inherited from

[`Event`](Event.md).[`sdk`](Event.md#sdk)

---

### sdkProcessingMetadata?

> `optional` **sdkProcessingMetadata?**: `SdkProcessingMetadata`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:56

#### Inherited from

[`Event`](Event.md).[`sdkProcessingMetadata`](Event.md#sdkprocessingmetadata)

---

### server_name?

> `optional` **server_name?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:31

#### Inherited from

[`Event`](Event.md).[`server_name`](Event.md#server-name)

---

### spans?

> `optional` **spans?**: `SpanJSON`[]

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:53

#### Inherited from

[`Event`](Event.md).[`spans`](Event.md#spans)

---

### start_timestamp?

> `optional` **start_timestamp?**: `number`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:27

#### Inherited from

[`Event`](Event.md).[`start_timestamp`](Event.md#start-timestamp)

---

### tags?

> `optional` **tags?**: `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:47

#### Index Signature

\[`key`: `string`\]: `Primitive`

#### Inherited from

[`Event`](Event.md).[`tags`](Event.md#tags)

---

### threads?

> `optional` **threads?**: `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:60

#### values

> **values**: [`Thread`](Thread.md)[]

#### Inherited from

[`Event`](Event.md).[`threads`](Event.md#threads)

---

### timestamp?

> `optional` **timestamp?**: `number`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:26

#### Inherited from

[`Event`](Event.md).[`timestamp`](Event.md#timestamp)

---

### transaction?

> `optional` **transaction?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:37

#### Inherited from

[`Event`](Event.md).[`transaction`](Event.md#transaction)

---

### transaction_info?

> `optional` **transaction_info?**: `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:57

#### source

> **source**: `TransactionSource`

#### Inherited from

[`Event`](Event.md).[`transaction_info`](Event.md#transaction-info)

---

### type

> **type**: `undefined`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:71

#### Overrides

[`Event`](Event.md).[`type`](Event.md#type)

---

### user?

> `optional` **user?**: [`User`](User.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/event.d.ts:51

#### Inherited from

[`Event`](Event.md).[`user`](Event.md#user)
