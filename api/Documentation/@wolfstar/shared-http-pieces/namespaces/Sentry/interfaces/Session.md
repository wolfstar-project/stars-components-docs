[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / Session

# Interface: Session

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:2

## Properties

### abnormal_mechanism?

> `optional` **abnormal_mechanism?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:17

---

### did?

> `optional` **did?**: `string` \| `number`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:4

---

### duration?

> `optional` **duration?**: `number`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:8

---

### environment?

> `optional` **environment?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:11

---

### errors

> **errors**: `number`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:14

---

### ignoreDuration

> **ignoreDuration**: `boolean`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:16

---

### init

> **init**: `boolean`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:5

---

### ipAddress?

> `optional` **ipAddress?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:13

---

### release?

> `optional` **release?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:10

---

### sid

> **sid**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:3

---

### started

> **started**: `number`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:7

---

### status

> **status**: `SessionStatus`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:9

---

### timestamp

> **timestamp**: `number`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:6

---

### user?

> `optional` **user?**: [`User`](User.md) \| `null`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:15

---

### userAgent?

> `optional` **userAgent?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:12

## Methods

### toJSON()

> **toJSON**(): `SerializedSession`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/session.d.ts:25

Overrides default JSON serialization of the Session because
the Sentry servers expect a slightly different schema of a session
which is described in the interface

#### Returns

`SerializedSession`

a Sentry-backend conforming JSON object of the session

#### See

SerializedSession in this file.
