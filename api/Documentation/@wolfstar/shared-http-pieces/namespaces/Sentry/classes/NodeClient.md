[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / NodeClient

# Class: NodeClient

Defined in: node_modules/.pnpm/@sentry+node-core@10.71.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/sdk/client.d.ts:7

A client for using Sentry with Node & OpenTelemetry.

## theme_extends

- `ServerRuntimeClient`\<`NodeClientOptions`\>

## Constructors

### Constructor

> **new NodeClient**(`options`): `NodeClient`

Defined in: node_modules/.pnpm/@sentry+node-core@10.71.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/sdk/client.d.ts:14

#### Parameters

##### options

`NodeClientOptions`

#### Returns

`NodeClient`

#### Overrides

`ServerRuntimeClient<NodeClientOptions>.constructor`

## Properties

### \_dataCollection

> `protected` `readonly` **\_dataCollection**: `ResolvedDataCollection`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:75

#### Inherited from

`ServerRuntimeClient._dataCollection`

---

### \_dsn?

> `protected` `readonly` `optional` **\_dsn?**: `DsnComponents`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:62

The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled.

#### Inherited from

`ServerRuntimeClient._dsn`

---

### \_eventProcessors

> `protected` **\_eventProcessors**: `EventProcessor`[]

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:68

#### Inherited from

`ServerRuntimeClient._eventProcessors`

---

### \_hooks

> `protected` **\_hooks**: `Record`\<`string`, `Set`\<`Function`\>\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:73

#### Inherited from

`ServerRuntimeClient._hooks`

---

### \_integrations

> `protected` **\_integrations**: `IntegrationIndex`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:65

Array of set up integrations.

#### Inherited from

`ServerRuntimeClient._integrations`

---

### \_numProcessing

> `protected` **\_numProcessing**: `number`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:67

Number of calls being processed

#### Inherited from

`ServerRuntimeClient._numProcessing`

---

### \_options

> `protected` `readonly` **\_options**: `NodeClientOptions`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:60

Options passed to the SDK.

#### Inherited from

`ServerRuntimeClient._options`

---

### \_outcomes

> `protected` **\_outcomes**: `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:70

Holds flushable

#### Index Signature

\[`key`: `string`\]: `number`

#### Inherited from

`ServerRuntimeClient._outcomes`

---

### \_promiseBuffer

> `protected` **\_promiseBuffer**: `PromiseBuffer`\<`unknown`\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:74

#### Inherited from

`ServerRuntimeClient._promiseBuffer`

---

### \_transport?

> `protected` `readonly` `optional` **\_transport?**: `Transport`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:63

#### Inherited from

`ServerRuntimeClient._transport`

---

### asyncLocalStorageLookup

> **asyncLocalStorageLookup**: `AsyncLocalStorageLookup` \| `undefined`

Defined in: node_modules/.pnpm/@sentry+node-core@10.71.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/sdk/client.d.ts:9

---

### traceProvider

> **traceProvider**: `OpenTelemetryTracerProvider` \| `undefined`

Defined in: node_modules/.pnpm/@sentry+node-core@10.71.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/sdk/client.d.ts:8

## Accessors

### tracer

#### Get Signature

> **get** **tracer**(): `Tracer`

Defined in: node_modules/.pnpm/@sentry+node-core@10.71.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/sdk/client.d.ts:16

Get the OTEL tracer.

##### Returns

`Tracer`

## Methods

### \_captureEvent()

> `protected` **\_captureEvent**(`event`, `hint?`, `currentScope?`, `isolationScope?`): `PromiseLike`\<`string` \| `undefined`\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:691

Processes the event and logs an error in case of rejection

#### Parameters

##### event

[`Event`](../interfaces/Event.md)

##### hint?

[`EventHint`](../interfaces/EventHint.md)

##### currentScope?

[`Scope`](Scope.md)

##### isolationScope?

[`Scope`](Scope.md)

#### Returns

`PromiseLike`\<`string` \| `undefined`\>

#### Inherited from

`ServerRuntimeClient._captureEvent`

---

### \_clearOutcomes()

> `protected` **\_clearOutcomes**(): `Outcome`[]

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:713

Clears outcomes on this client and returns them.

#### Returns

`Outcome`[]

#### Inherited from

`ServerRuntimeClient._clearOutcomes`

---

### \_flushOutcomes()

> `protected` **\_flushOutcomes**(): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:717

Sends client reports as an envelope.

#### Returns

`void`

#### Inherited from

`ServerRuntimeClient._flushOutcomes`

---

### \_getTraceInfoFromScope()

> `protected` **\_getTraceInfoFromScope**(`scope`): \[`Partial`\<`DynamicSamplingContext`\>, `TraceContext`\]

Defined in: node_modules/.pnpm/@sentry+node-core@10.71.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/sdk/client.d.ts:32

Custom implementation for OTEL, so we can handle scope-span linking.

#### Parameters

##### scope

[`Scope`](Scope.md) \| `undefined`

#### Returns

\[`Partial`\<`DynamicSamplingContext`\>, `TraceContext`\]

---

### \_isClientDoneProcessing()

> `protected` **\_isClientDoneProcessing**(`timeout?`): `Promise`\<`boolean`\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:667

Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
"no" (resolving to `false`) in order to give the client a chance to potentially finish first.

#### Parameters

##### timeout?

`number`

The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
`true`.

#### Returns

`Promise`\<`boolean`\>

A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
`false` otherwise

#### Inherited from

`ServerRuntimeClient._isClientDoneProcessing`

---

### \_isEnabled()

> `protected` **\_isEnabled**(): `boolean`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:669

Determines whether this SDK is enabled and a transport is present.

#### Returns

`boolean`

#### Inherited from

`ServerRuntimeClient._isEnabled`

---

### \_prepareEvent()

> `protected` **\_prepareEvent**(`event`, `hint`, `currentScope`, `isolationScope`): `PromiseLike`\<[`Event`](../interfaces/Event.md) \| `null`\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/server-runtime-client.d.ts:70

#### Parameters

##### event

[`Event`](../interfaces/Event.md)

##### hint

[`EventHint`](../interfaces/EventHint.md)

##### currentScope

[`Scope`](Scope.md)

##### isolationScope

[`Scope`](Scope.md)

#### Returns

`PromiseLike`\<[`Event`](../interfaces/Event.md) \| `null`\>

#### Inherit Doc

#### Inherited from

`ServerRuntimeClient._prepareEvent`

---

### \_process()

> `protected` **\_process**\<`T`\>(`taskProducer`, `dataCategory`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:709

Occupies the client with processing and event

#### Type Parameters

##### T

`T`

#### Parameters

##### taskProducer

() => `PromiseLike`\<`T`\>

##### dataCategory

`DataCategory`

#### Returns

`void`

#### Inherited from

`ServerRuntimeClient._process`

---

### \_processEvent()

> `protected` **\_processEvent**(`event`, `hint`, `currentScope`, `isolationScope`): `PromiseLike`\<[`Event`](../interfaces/Event.md)\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:705

Processes an event (either error or message) and sends it to Sentry.

This also adds breadcrumbs and context information to the event. However,
platform specific meta data (such as the User's IP address) must be added
by the SDK implementor.

#### Parameters

##### event

[`Event`](../interfaces/Event.md)

The event to send to Sentry.

##### hint

[`EventHint`](../interfaces/EventHint.md)

May contain additional information about the original exception.

##### currentScope

[`Scope`](Scope.md)

A scope containing event metadata.

##### isolationScope

[`Scope`](Scope.md)

#### Returns

`PromiseLike`\<[`Event`](../interfaces/Event.md)\>

A SyncPromise that resolves with the event or rejects in case event was/will not be send.

#### Inherited from

`ServerRuntimeClient._processEvent`

---

### \_setupIntegrations()

> `protected` **\_setupIntegrations**(): `void`

Defined in: node_modules/.pnpm/@sentry+node-core@10.71.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/sdk/client.d.ts:30

#### Returns

`void`

#### Inherit Doc

#### Overrides

`ServerRuntimeClient._setupIntegrations`

---

### \_updateSessionFromEvent()

> `protected` **\_updateSessionFromEvent**(`session`, `event`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:656

Updates existing session based on the provided event

#### Parameters

##### session

[`Session`](../interfaces/Session.md)

##### event

[`Event`](../interfaces/Event.md)

#### Returns

`void`

#### Inherited from

`ServerRuntimeClient._updateSessionFromEvent`

---

### addEventProcessor()

> **addEventProcessor**(`eventProcessor`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:161

Adds an event processor that applies to any event processed by this client.

#### Parameters

##### eventProcessor

`EventProcessor`

#### Returns

`void`

#### Inherited from

`ServerRuntimeClient.addEventProcessor`

---

### addIntegration()

> **addIntegration**(`integration`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:184

Add an integration to the client.
This can be used to e.g. lazy load integrations.
In most cases, this should not be necessary,
and you're better off just passing the integrations via `integrations: []` at initialization time.
However, if you find the need to conditionally load & add an integration, you can use `addIntegration` to do so.

#### Parameters

##### integration

`Integration`

#### Returns

`void`

#### Inherited from

`ServerRuntimeClient.addIntegration`

---

### captureCheckIn()

> **captureCheckIn**(`checkIn`, `monitorConfig?`, `scope?`): `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/server-runtime-client.d.ts:50

Create a cron monitor check in and send it to Sentry.

#### Parameters

##### checkIn

`CheckIn`

An object that describes a check in.

##### monitorConfig?

`MonitorConfig`

##### scope?

[`Scope`](Scope.md)

#### Returns

`string`

#### Inherited from

`ServerRuntimeClient.captureCheckIn`

---

### captureEvent()

> **captureEvent**(`event`, `hint?`, `scope?`): `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/server-runtime-client.d.ts:42

#### Parameters

##### event

[`Event`](../interfaces/Event.md)

##### hint?

[`EventHint`](../interfaces/EventHint.md)

##### scope?

[`Scope`](Scope.md)

#### Returns

`string`

#### Inherit Doc

#### Inherited from

`ServerRuntimeClient.captureEvent`

---

### captureException()

> **captureException**(`exception`, `hint?`, `scope?`): `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/server-runtime-client.d.ts:38

#### Parameters

##### exception

`unknown`

##### hint?

[`EventHint`](../interfaces/EventHint.md)

##### scope?

[`Scope`](Scope.md)

#### Returns

`string`

#### Inherit Doc

#### Inherited from

`ServerRuntimeClient.captureException`

---

### captureMessage()

> **captureMessage**(`message`, `level?`, `hint?`, `currentScope?`): `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:93

Captures a message event and sends it to Sentry.

Unlike `captureMessage` exported from every SDK, this method requires that you pass it the current scope.

#### Parameters

##### message

`ParameterizedString`

##### level?

[`SeverityLevel`](../type-aliases/SeverityLevel.md)

##### hint?

[`EventHint`](../interfaces/EventHint.md)

##### currentScope?

[`Scope`](Scope.md)

#### Returns

`string`

#### Inherited from

`ServerRuntimeClient.captureMessage`

---

### captureSession()

> **captureSession**(`session`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:103

Captures a session.

#### Parameters

##### session

[`Session`](../interfaces/Session.md)

#### Returns

`void`

#### Inherited from

`ServerRuntimeClient.captureSession`

---

### close()

> **close**(`timeout?`): `PromiseLike`\<`boolean`\>

Defined in: node_modules/.pnpm/@sentry+node-core@10.71.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/sdk/client.d.ts:20

#### Parameters

##### timeout?

`number`

#### Returns

`PromiseLike`\<`boolean`\>

#### Inherit Doc

#### Overrides

`ServerRuntimeClient.close`

---

### dispose()

> **dispose**(): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/server-runtime-client.d.ts:66

Disposes of the client and releases all resources.

This method clears all internal state to allow the client to be garbage collected.
It clears hooks, event processors, integrations, transport, and other internal references.

Call this method after flushing to allow the client to be garbage collected.
After calling dispose(), the client should not be used anymore.

Subclasses should override this method to clean up their own resources and call `super.dispose()`.

#### Returns

`void`

#### Inherited from

`ServerRuntimeClient.dispose`

---

### emit()

#### Call Signature

> **emit**(`hook`, `span`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:445

Fire a hook whenever a span starts.

##### Parameters

###### hook

`"spanStart"`

###### span

[`Span`](../interfaces/Span.md)

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `samplingData`, `samplingDecision`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:447

A hook that is called every time before a span is sampled.

##### Parameters

###### hook

`"beforeSampling"`

###### samplingData

###### parentContext?

`SpanContextData`

###### parentSampled?

`boolean`

###### parentSampleRate?

`number`

###### spanAttributes

`SpanAttributes`

###### spanName

`string`

###### samplingDecision

###### decision

`boolean`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `span`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:457

Fire a hook whenever a span ends.

##### Parameters

###### hook

`"spanEnd"`

###### span

[`Span`](../interfaces/Span.md)

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `immutableSpan`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:461

Fire a hook event after a span ends and the `spanEnd` hook has run.

##### Parameters

###### hook

`"afterSpanEnd"`

###### immutableSpan

`Readonly`\<[`Span`](../interfaces/Span.md)\>

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `immutableSegmentSpan`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:465

Fire a hook event after a segment span ends and the `spanEnd` hook has run.

##### Parameters

###### hook

`"afterSegmentSpanEnd"`

###### immutableSegmentSpan

`Readonly`\<[`Span`](../interfaces/Span.md)\>

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `streamedSpanJSON`, `hint?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:469

Fire a hook event to preprocess a span JSON before the `processSpan` and `processSegmentSpan` hooks run.

##### Parameters

###### hook

`"preprocessSpan"`

###### streamedSpanJSON

`StreamedSpanJSON`

###### hint?

###### spanKind?

`number`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `streamedSpanJSON`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:475

Fire a hook event when a span JSON is processed, to add some data to the span JSON.

##### Parameters

###### hook

`"processSpan"`

###### streamedSpanJSON

`StreamedSpanJSON`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `streamedSpanJSON`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:479

Fire a hook event for when a segment span JSON is processed, to add some data to the segment span JSON.

##### Parameters

###### hook

`"processSegmentSpan"`

###### streamedSpanJSON

`StreamedSpanJSON`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `span`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:483

Fire a hook indicating that an idle span is allowed to auto finish.

##### Parameters

###### hook

`"idleSpanEnableAutoFinish"`

###### span

[`Span`](../interfaces/Span.md)

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `envelope`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:488

Fire a hook event for envelope creation and sending. Expects to be given an envelope as the
second argument.

##### Parameters

###### hook

`"beforeEnvelope"`

###### envelope

`Envelope`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `event`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:492

Fire a hook indicating that stack frame metadata should be applied to the event passed to the hook.

##### Parameters

###### hook

`"applyFrameMetadata"`

###### event

[`Event`](../interfaces/Event.md)

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `event`, `hint?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:498

Fire a hook event before sending an event.
This is called right before an event is sent and should not be used to mutate the event.
Expects to be given an Event & EventHint as the second/third argument.

##### Parameters

###### hook

`"beforeSendEvent"`

###### event

[`Event`](../interfaces/Event.md)

###### hint?

[`EventHint`](../interfaces/EventHint.md)

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `session`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:503

Fire a hook event before sending a session/aggregates.
Expects to be given the prepared session/aggregates as second argument.

##### Parameters

###### hook

`"beforeSendSession"`

###### session

[`Session`](../interfaces/Session.md) \| `SessionAggregates`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `event`, `hint?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:508

Fire a hook event to process events before they are passed to (global) event processors.
Expects to be given an Event & EventHint as the second/third argument.

##### Parameters

###### hook

`"preprocessEvent"`

###### event

[`Event`](../interfaces/Event.md)

###### hint?

[`EventHint`](../interfaces/EventHint.md)

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `event`, `hint?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:513

Fire a hook event to process a user on an event before it is sent to Sentry, after all other processors have run.
Expects to be given an Event & EventHint as the second/third argument.

##### Parameters

###### hook

`"postprocessEvent"`

###### event

[`Event`](../interfaces/Event.md)

###### hint?

[`EventHint`](../interfaces/EventHint.md)

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `event`, `sendResponse`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:518

Fire a hook event after sending an event. Expects to be given an Event as the
second argument.

##### Parameters

###### hook

`"afterSendEvent"`

###### event

[`Event`](../interfaces/Event.md)

###### sendResponse

`TransportMakeRequestResponse`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `breadcrumb`, `hint?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:522

Fire a hook for when a breadcrumb is added. Expects the breadcrumb as second argument.

##### Parameters

###### hook

`"beforeAddBreadcrumb"`

###### breadcrumb

[`Breadcrumb`](../interfaces/Breadcrumb.md)

###### hint?

[`BreadcrumbHint`](../interfaces/BreadcrumbHint.md)

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `dsc`, `rootSpan?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:526

Fire a hook for when a DSC (Dynamic Sampling Context) is created. Expects the DSC as second argument.

##### Parameters

###### hook

`"createDsc"`

###### dsc

`DynamicSamplingContext`

###### rootSpan?

[`Span`](../interfaces/Span.md)

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `feedback`, `options?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:532

Fire a hook event for after preparing a feedback event. Events to be given
a feedback event as the second argument, and an optional options object as
third argument.

##### Parameters

###### hook

`"beforeSendFeedback"`

###### feedback

`FeedbackEvent`

###### options?

###### includeReplay?

`boolean`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:538

Fire a hook event for when the feedback widget is opened in a user's browser

##### Parameters

###### hook

`"openFeedbackWidget"`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `event`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:542

Fire a hook event when a replay session starts recording.

##### Parameters

###### hook

`"replayStart"`

###### event

`ReplayStartEvent`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `event`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:546

Fire a hook event when a replay session stops recording.

##### Parameters

###### hook

`"replayEnd"`

###### event

`ReplayEndEvent`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `options`, `traceOptions?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:550

Emit a hook event for browser tracing integrations to trigger a span start for a page load.

##### Parameters

###### hook

`"startPageLoadSpan"`

###### options

`StartSpanOptions`

###### traceOptions?

###### baggage?

`string`

###### sentryTrace?

`string`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:557

Emit a hook event for browser tracing integrations to trigger the end of a page load span.

##### Parameters

###### hook

`"endPageloadSpan"`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `span`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:561

Emit a hook event for browser tracing integrations to trigger after the pageload span was started.

##### Parameters

###### hook

`"afterStartPageLoadSpan"`

###### span

[`Span`](../interfaces/Span.md)

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `options`, `navigationOptions?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:565

Emit a hook event for triggering right before a navigation span is started.

##### Parameters

###### hook

`"beforeStartNavigationSpan"`

###### options

`StartSpanOptions`

###### navigationOptions?

###### isRedirect?

`boolean`

###### url?

`string`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `options`, `navigationOptions?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:572

Emit a hook event for browser tracing integrations to trigger a span for a navigation.

##### Parameters

###### hook

`"startNavigationSpan"`

###### options

`StartSpanOptions`

###### navigationOptions?

###### isRedirect?

`boolean`

###### url?

`string`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `span`, `hint`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:579

Emit a hook event for GraphQL client integration to enhance a span with request data.

##### Parameters

###### hook

`"beforeOutgoingRequestSpan"`

###### span

[`Span`](../interfaces/Span.md)

###### hint

`XhrBreadcrumbHint` \| `FetchBreadcrumbHint`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `breadcrumb`, `hint`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:583

Emit a hook event for GraphQL client integration to enhance a breadcrumb with request data.

##### Parameters

###### hook

`"beforeOutgoingRequestBreadcrumb"`

###### breadcrumb

[`Breadcrumb`](../interfaces/Breadcrumb.md)

###### hint

`XhrBreadcrumbHint` \| `FetchBreadcrumbHint`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:587

Emit a hook event for client flush

##### Parameters

###### hook

`"flush"`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:591

Emit a hook event for client close

##### Parameters

###### hook

`"close"`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `log`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:595

Emit a hook event for client before capturing a log. This hooks runs before `beforeSendLog` is fired.

##### Parameters

###### hook

`"beforeCaptureLog"`

###### log

[`Log`](../interfaces/Log.md)

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `log`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:599

Emit a hook event for client after capturing a log.

##### Parameters

###### hook

`"afterCaptureLog"`

###### log

[`Log`](../interfaces/Log.md)

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:603

Emit a hook event for client flush logs

##### Parameters

###### hook

`"flushLogs"`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `metric`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:607

Emit a hook event for client after capturing a metric.

##### Parameters

###### hook

`"afterCaptureMetric"`

###### metric

[`Metric`](../interfaces/Metric.md)

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:611

Emit a hook event for client flush metrics

##### Parameters

###### hook

`"flushMetrics"`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `metric`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:617

Emit a hook event for client to process a metric before it is captured.
This hook is called before the `beforeSendMetric` callback is fired.

##### Parameters

###### hook

`"processMetric"`

###### metric

[`Metric`](../interfaces/Metric.md)

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`, `request`, `response`, `normalizedRequest`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:622

Emit a hook event for client when a http server request is started.
This hook is called after request isolation, but before the request is processed.

##### Parameters

###### hook

`"httpServerRequest"`

###### request

`unknown`

###### response

`unknown`

###### normalizedRequest

[`RequestEventData`](../interfaces/RequestEventData.md)

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:626

Emit a hook event for starting the UI Profiler.

##### Parameters

###### hook

`"startUIProfiler"`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

#### Call Signature

> **emit**(`hook`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:630

Emit a hook event for stopping the UI Profiler.

##### Parameters

###### hook

`"stopUIProfiler"`

##### Returns

`void`

##### Inherited from

`ServerRuntimeClient.emit`

---

### eventFromException()

> **eventFromException**(`exception`, `hint?`): `PromiseLike`\<[`Event`](../interfaces/Event.md)\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/server-runtime-client.d.ts:30

#### Parameters

##### exception

`unknown`

##### hint?

[`EventHint`](../interfaces/EventHint.md)

#### Returns

`PromiseLike`\<[`Event`](../interfaces/Event.md)\>

#### Inherit Doc

#### Inherited from

`ServerRuntimeClient.eventFromException`

---

### eventFromMessage()

> **eventFromMessage**(`message`, `level?`, `hint?`): `PromiseLike`\<[`Event`](../interfaces/Event.md)\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/server-runtime-client.d.ts:34

#### Parameters

##### message

`ParameterizedString`

##### level?

[`SeverityLevel`](../type-aliases/SeverityLevel.md)

##### hint?

[`EventHint`](../interfaces/EventHint.md)

#### Returns

`PromiseLike`\<[`Event`](../interfaces/Event.md)\>

#### Inherit Doc

#### Inherited from

`ServerRuntimeClient.eventFromMessage`

---

### flush()

> **flush**(`timeout?`): `PromiseLike`\<`boolean`\>

Defined in: node_modules/.pnpm/@sentry+node-core@10.71.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/sdk/client.d.ts:18

#### Parameters

##### timeout?

`number`

#### Returns

`PromiseLike`\<`boolean`\>

#### Inherit Doc

#### Overrides

`ServerRuntimeClient.flush`

---

### getDataCollectionOptions()

> **getDataCollectionOptions**(): `ResolvedDataCollection`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:125

Get the resolved data collection configuration.

#### Returns

`ResolvedDataCollection`

#### Inherited from

`ServerRuntimeClient.getDataCollectionOptions`

---

### getDsn()

> **getDsn**(): `DsnComponents` \| `undefined`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:117

Get the current Dsn.

#### Returns

`DsnComponents` \| `undefined`

#### Inherited from

`ServerRuntimeClient.getDsn`

---

### getEventProcessors()

> **getEventProcessors**(): `EventProcessor`[]

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:157

Get all installed event processors.

#### Returns

`EventProcessor`[]

#### Inherited from

`ServerRuntimeClient.getEventProcessors`

---

### getIntegrationByName()

> **getIntegrationByName**\<`T`\>(`integrationName`): `T` \| `undefined`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:172

Gets an installed integration by its name.

#### Type Parameters

##### T

`T` _extends_ `Integration` = `Integration`

#### Parameters

##### integrationName

`string`

#### Returns

`T` \| `undefined`

The installed integration or `undefined` if no integration with that `name` was installed.

#### Inherited from

`ServerRuntimeClient.getIntegrationByName`

---

### getIntegrationNames()

> **getIntegrationNames**(): `string`[]

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:176

Returns the names of all installed integrations.

#### Returns

`string`[]

#### Inherited from

`ServerRuntimeClient.getIntegrationNames`

---

### getOptions()

> **getOptions**(): `NodeClientOptions`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:121

Get the current options.

#### Returns

`NodeClientOptions`

#### Inherited from

`ServerRuntimeClient.getOptions`

---

### getSdkMetadata()

> **getSdkMetadata**(): `SdkMetadata` \| `undefined`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:130

Get the SDK metadata.

#### Returns

`SdkMetadata` \| `undefined`

#### See

SdkMetadata

#### Inherited from

`ServerRuntimeClient.getSdkMetadata`

---

### getTransport()

> **getTransport**(): `Transport` \| `undefined`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:135

Returns the transport that is used by the client.
Please note that the transport gets lazy initialized so it will only be there once the first event has been sent.

#### Returns

`Transport` \| `undefined`

#### Inherited from

`ServerRuntimeClient.getTransport`

---

### init()

> **init**(): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:166

Initialize this client.
Call this after the client was set on a scope.

#### Returns

`void`

#### Inherited from

`ServerRuntimeClient.init`

---

### on()

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:202

Register a callback for whenever a span is started.
Receives the span as argument.

##### Parameters

###### hook

`"spanStart"`

###### callback

(`span`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:208

Register a callback before span sampling runs. Receives a `samplingDecision` object argument with a `decision`
property that can be used to make a sampling decision that will be enforced, before any span sampling runs.

##### Parameters

###### hook

`"beforeSampling"`

###### callback

(`samplingData`, `samplingDecision`) => `void`

##### Returns

`void`

A function that, when executed, removes the registered callback.

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:223

Register a callback for after a span is ended.
NOTE: The span cannot be mutated anymore in this callback.
Receives the span as argument.

##### Parameters

###### hook

`"spanEnd"`

###### callback

(`span`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:228

Register a callback for after a span is ended and the `spanEnd` hook has run.
NOTE: The span cannot be mutated anymore in this callback.

##### Parameters

###### hook

`"afterSpanEnd"`

###### callback

(`immutableSegmentSpan`) => `void`

##### Returns

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:233

Register a callback for after a segment span is ended and the `segmentSpanEnd` hook has run.
NOTE: The segment span cannot be mutated anymore in this callback.

##### Parameters

###### hook

`"afterSegmentSpanEnd"`

###### callback

(`immutableSegmentSpan`) => `void`

##### Returns

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:239

Register a callback to preprocess a span JSON _before_ it is passed to the `processSpan` and
`processSegmentSpan` hooks. Use this to backfill data that subsequent hooks rely on.
The optional `hint` exposes additional context about the originating span (e.g. the OTel `spanKind`).

##### Parameters

###### hook

`"preprocessSpan"`

###### callback

(`streamedSpanJSON`, `hint?`) => `void`

##### Returns

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:245

Register a callback for when a span JSON is processed, to add some data to the span JSON.

##### Parameters

###### hook

`"processSpan"`

###### callback

(`streamedSpanJSON`) => `void`

##### Returns

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:249

Register a callback for when a segment span JSON is processed, to add some data to the segment span JSON.

##### Parameters

###### hook

`"processSegmentSpan"`

###### callback

(`streamedSpanJSON`) => `void`

##### Returns

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:254

Register a callback for when an idle span is allowed to auto-finish.

##### Parameters

###### hook

`"idleSpanEnableAutoFinish"`

###### callback

(`span`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:259

Register a callback for transaction start and finish.

##### Parameters

###### hook

`"beforeEnvelope"`

###### callback

(`envelope`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:264

Register a callback that runs when stack frame metadata should be applied to an event.

##### Parameters

###### hook

`"applyFrameMetadata"`

###### callback

(`event`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:271

Register a callback for before sending an event.
This is called right before an event is sent and should not be used to mutate the event.
Receives an Event & EventHint as arguments.

##### Parameters

###### hook

`"beforeSendEvent"`

###### callback

(`event`, `hint?`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:277

Register a callback for before sending a session or session aggregrates..
Receives the session/aggregate as second argument.

##### Parameters

###### hook

`"beforeSendSession"`

###### callback

(`session`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:284

Register a callback for preprocessing an event,
before it is passed to (global) event processors.
Receives an Event & EventHint as arguments.

##### Parameters

###### hook

`"preprocessEvent"`

###### callback

(`event`, `hint?`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:291

Register a callback for postprocessing an event,
after it was passed to (global) event processors, before it is being sent.
Receives an Event & EventHint as arguments.

##### Parameters

###### hook

`"postprocessEvent"`

###### callback

(`event`, `hint?`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:296

Register a callback for when an event has been sent.

##### Parameters

###### hook

`"afterSendEvent"`

###### callback

(`event`, `sendResponse`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:301

Register a callback before a breadcrumb is added.

##### Parameters

###### hook

`"beforeAddBreadcrumb"`

###### callback

(`breadcrumb`, `hint?`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:306

Register a callback when a DSC (Dynamic Sampling Context) is created.

##### Parameters

###### hook

`"createDsc"`

###### callback

(`dsc`, `rootSpan?`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:313

Register a callback when a Feedback event has been prepared.
This should be used to mutate the event. The options argument can hint
about what kind of mutation it expects.

##### Parameters

###### hook

`"beforeSendFeedback"`

###### callback

(`feedback`, `options?`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:319

Register a callback when the feedback widget is opened in a user's browser

##### Parameters

###### hook

`"openFeedbackWidget"`

###### callback

() => `void`

##### Returns

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:324

A hook that is called when a replay session starts recording (either session or buffer mode).

##### Parameters

###### hook

`"replayStart"`

###### callback

(`event`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:330

A hook that is called when a replay session stops recording, either manually or due to an
internal condition such as `maxReplayDuration` expiry, send failure, or mutation limit.

##### Parameters

###### hook

`"replayEnd"`

###### callback

(`event`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:335

A hook for the browser tracing integrations to trigger a span start for a page load.

##### Parameters

###### hook

`"startPageLoadSpan"`

###### callback

(`options`, `traceOptions?`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:343

A hook for the browser tracing integrations to trigger the end of a page load span.

##### Parameters

###### hook

`"endPageloadSpan"`

###### callback

() => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:348

A hook for the browser tracing integrations to trigger after the pageload span was started.

##### Parameters

###### hook

`"afterStartPageLoadSpan"`

###### callback

(`span`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:353

A hook for triggering right before a navigation span is started.

##### Parameters

###### hook

`"beforeStartNavigationSpan"`

###### callback

(`options`, `navigationOptions?`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:361

A hook for browser tracing integrations to trigger a span for a navigation.

##### Parameters

###### hook

`"startNavigationSpan"`

###### callback

(`options`, `navigationOptions?`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:369

A hook for GraphQL client integration to enhance a span with request data.

##### Parameters

###### hook

`"beforeOutgoingRequestSpan"`

###### callback

(`span`, `hint`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:374

A hook for GraphQL client integration to enhance a breadcrumb with request data.

##### Parameters

###### hook

`"beforeOutgoingRequestBreadcrumb"`

###### callback

(`breadcrumb`, `hint`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:379

A hook that is called when the client is flushing

##### Parameters

###### hook

`"flush"`

###### callback

() => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:384

A hook that is called when the client is closing

##### Parameters

###### hook

`"close"`

###### callback

() => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:390

A hook that is called before a log is captured. This hooks runs before `beforeSendLog` is fired.

##### Parameters

###### hook

`"beforeCaptureLog"`

###### callback

(`log`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:396

A hook that is called after a log is captured

##### Parameters

###### hook

`"afterCaptureLog"`

###### callback

(`log`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:402

A hook that is called when the client is flushing logs

##### Parameters

###### hook

`"flushLogs"`

###### callback

() => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:408

A hook that is called after capturing a metric. This hooks runs after `beforeSendMetric` is fired.

##### Parameters

###### hook

`"afterCaptureMetric"`

###### callback

(`metric`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:414

A hook that is called when the client is flushing metrics

##### Parameters

###### hook

`"flushMetrics"`

###### callback

() => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:420

A hook that is called when a metric is processed before it is captured and before the `beforeSendMetric` callback is fired.

##### Parameters

###### hook

`"processMetric"`

###### callback

(`metric`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:427

A hook that is called when a http server request is started.
This hook is called after request isolation, but before the request is processed.

##### Parameters

###### hook

`"httpServerRequest"`

###### callback

(`request`, `response`, `normalizedRequest`) => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:435

A hook that is called when the UI Profiler should start profiling.

This hook is called when running `Sentry.uiProfiler.startProfiler()`.

##### Parameters

###### hook

`"startUIProfiler"`

###### callback

() => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

#### Call Signature

> **on**(`hook`, `callback`): () => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:443

A hook that is called when the UI Profiler should stop profiling.

This hook is called when running `Sentry.uiProfiler.stopProfiler()`.

##### Parameters

###### hook

`"stopUIProfiler"`

###### callback

() => `void`

##### Returns

A function that, when executed, removes the registered callback.

() => `void`

##### Inherited from

`ServerRuntimeClient.on`

---

### recordDroppedEvent()

> **recordDroppedEvent**(`reason`, `category`, `count?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:196

Record on the client that an event got dropped (ie, an event that will not be sent to Sentry).

#### Parameters

##### reason

`EventDropReason`

##### category

`DataCategory`

##### count?

`number`

#### Returns

`void`

#### Inherited from

`ServerRuntimeClient.recordDroppedEvent`

---

### registerCleanup()

> **registerCleanup**(`callback`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/server-runtime-client.d.ts:54

#### Parameters

##### callback

() => `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

`ServerRuntimeClient.registerCleanup`

---

### sendEnvelope()

> **sendEnvelope**(`envelope`): `PromiseLike`\<`TransportMakeRequestResponse`\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:634

Send an envelope to Sentry.

#### Parameters

##### envelope

`Envelope`

#### Returns

`PromiseLike`\<`TransportMakeRequestResponse`\>

#### Inherited from

`ServerRuntimeClient.sendEnvelope`

---

### sendEvent()

> **sendEvent**(`event`, `hint?`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:188

Send a fully prepared event to Sentry.

#### Parameters

##### event

[`Event`](../interfaces/Event.md)

##### hint?

[`EventHint`](../interfaces/EventHint.md)

#### Returns

`void`

#### Inherited from

`ServerRuntimeClient.sendEvent`

---

### sendSession()

> **sendSession**(`session`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/client.d.ts:192

Send a session or session aggregrates to Sentry.

#### Parameters

##### session

[`Session`](../interfaces/Session.md) \| `SessionAggregates`

#### Returns

`void`

#### Inherited from

`ServerRuntimeClient.sendSession`

---

### startClientReportTracking()

> **startClientReportTracking**(): `void`

Defined in: node_modules/.pnpm/@sentry+node-core@10.71.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/sdk/client.d.ts:28

Will start tracking client reports for this client.

NOTICE: This method will create an interval that is periodically called and attach a `process.on('beforeExit')`
hook. To clean up these resources, call `.close()` when you no longer intend to use the client. Not doing so will
result in a memory leak.

#### Returns

`void`
