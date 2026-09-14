[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / Log

# Interface: Log

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/log.d.ts:4

## Properties

### attributes?

> `optional` **attributes?**: `Record`\<`string`, `unknown`\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/log.d.ts:22

Arbitrary structured data that stores information about the log - e.g., userId: 100.

---

### level

> **level**: [`LogSeverityLevel`](../type-aliases/LogSeverityLevel.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/log.d.ts:14

The severity level of the log.

Allowed values are, from highest to lowest:
`critical`, `fatal`, `error`, `warn`, `info`, `debug`, `trace`.

The log level changes how logs are filtered and displayed.
Critical level logs are emphasized more than trace level logs.

---

### message

> **message**: `ParameterizedString`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/log.d.ts:18

The message to be logged.

---

### severityNumber?

> `optional` **severityNumber?**: `number`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/log.d.ts:26

The severity number.
