[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / Span

# Interface: Span

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/span.d.ts:207

A generic Span which holds trace data.

## Methods

### addEvent()

> **addEvent**(`name`, `attributesOrStartTime?`, `startTime?`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/span.d.ts:253

Adds an event to the Span.

#### Parameters

##### name

`string`

##### attributesOrStartTime?

`SpanTimeInput` \| `SpanAttributes`

##### startTime?

`SpanTimeInput`

#### Returns

`this`

---

### addLink()

> **addLink**(`link`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/span.d.ts:261

Associates this span with a related span. Links can reference spans from the same or different trace
and are typically used for batch operations, cross-trace scenarios, or scatter/gather patterns.

Prefer setting links directly when starting a span (e.g. `Sentry.startSpan()`) as some context information is only available during span creation.

#### Parameters

##### link

`SpanLink`

The link containing the context of the span to link to and optional attributes

#### Returns

`this`

---

### addLinks()

> **addLinks**(`links`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/span.d.ts:268

Associates this span with multiple related spans. See [addLink](#addlink) for more details.

Prefer setting links directly when starting a span (e.g. `Sentry.startSpan()`) as some context information is only available during span creation.

#### Parameters

##### links

`SpanLink`[]

Array of links to associate with this span

#### Returns

`this`

---

### end()

> **end**(`endTimestamp?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/span.d.ts:216

End the current span.

#### Parameters

##### endTimestamp?

`SpanTimeInput`

#### Returns

`void`

---

### isRecording()

> **isRecording**(): `boolean`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/span.d.ts:249

If this is span is actually recording data.
This will return false if tracing is disabled, this span was not sampled or if the span is already finished.

#### Returns

`boolean`

---

### recordException()

> **recordException**(`exception`, `time?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/span.d.ts:272

NOT USED IN SENTRY, only added for compliance with OTEL Span interface

#### Parameters

##### exception

`unknown`

##### time?

`SpanTimeInput`

#### Returns

`void`

---

### setAttribute()

> **setAttribute**(`key`, `value`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/span.d.ts:221

Set a single attribute on the span.
Set it to `undefined` to remove the attribute.

#### Parameters

##### key

`string`

##### value

`SpanAttributeValue` \| `undefined`

#### Returns

`this`

---

### setAttributes()

> **setAttributes**(`attributes`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/span.d.ts:226

Set multiple attributes on the span.
Any attribute set to `undefined` will be removed.

#### Parameters

##### attributes

`SpanAttributes`

#### Returns

`this`

---

### setStatus()

> **setStatus**(`status`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/span.d.ts:230

Sets the status attribute on the current span.

#### Parameters

##### status

`SpanStatus`

#### Returns

`this`

---

### spanContext()

> **spanContext**(): `SpanContextData`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/span.d.ts:212

Get context data for this span.
This includes the spanId & the traceId.

#### Returns

`SpanContextData`

---

### updateName()

> **updateName**(`name`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/span.d.ts:244

Update the name of the span.

**Important:** You most likely want to use `Sentry.updateSpanName(span, name)` instead!

This method will update the current span name but cannot guarantee that the new name will be
the final name of the span. Instrumentation might still overwrite the name with an automatically
computed name, for example in `http.server` or `db` spans.

You can ensure that your name is kept and not overwritten by calling `Sentry.updateSpanName(span, name)`

#### Parameters

##### name

`string`

the new name of the span

#### Returns

`this`
