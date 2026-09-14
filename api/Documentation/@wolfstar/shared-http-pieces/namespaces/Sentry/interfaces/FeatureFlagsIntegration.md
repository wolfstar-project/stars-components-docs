[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / FeatureFlagsIntegration

# Interface: FeatureFlagsIntegration

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/integrations/featureFlags/featureFlagsIntegration.d.ts:2

## theme_extends

- `Integration`

## Properties

### addFeatureFlag

> **addFeatureFlag**: (`name`, `value`) => `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/integrations/featureFlags/featureFlagsIntegration.d.ts:3

#### Parameters

##### name

`string`

##### value

`unknown`

#### Returns

`void`

---

### name

> **name**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/integration.d.ts:9

The name of the integration.

#### Inherited from

`Integration.name`

## Methods

### afterAllSetup()?

> `optional` **afterAllSetup**(`client`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/integration.d.ts:36

This hook is triggered after `setupOnce()` and `setup()` have been called for all integrations.
You can use it if it is important that all other integrations have been run before.

#### Parameters

##### client

`Client`

#### Returns

`void`

#### Inherited from

`Integration.afterAllSetup`

---

### beforeSetup()?

> `optional` **beforeSetup**(`client`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/integration.d.ts:22

Called before the `setup` hook of any integration is called.
This is useful if an integration needs to e.g. modify client options prior to other integrations
reading client options.

#### Parameters

##### client

`Client`

#### Returns

`void`

#### Inherited from

`Integration.beforeSetup`

---

### preprocessEvent()?

> `optional` **preprocessEvent**(`event`, `hint`, `client`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/integration.d.ts:40

An optional hook that allows to preprocess an event _before_ it is passed to all other event processors.

#### Parameters

##### event

[`Event`](Event.md)

##### hint

[`EventHint`](EventHint.md) \| `undefined`

##### client

`Client`

#### Returns

`void`

#### Inherited from

`Integration.preprocessEvent`

---

### processEvent()?

> `optional` **processEvent**(`event`, `hint`, `client`): [`Event`](Event.md) \| `PromiseLike`\<[`Event`](Event.md) \| `null`\> \| `null`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/integration.d.ts:46

An optional hook that allows to process an event.
Return `null` to drop the event, or mutate the event & return it.
This receives the client that the integration was installed for as third argument.

#### Parameters

##### event

[`Event`](Event.md)

##### hint

[`EventHint`](EventHint.md)

##### client

`Client`

#### Returns

[`Event`](Event.md) \| `PromiseLike`\<[`Event`](Event.md) \| `null`\> \| `null`

#### Inherited from

`Integration.processEvent`

---

### processSegmentSpan()?

> `optional` **processSegmentSpan**(`span`, `client`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/integration.d.ts:58

An optional hook that allows modifications to a segment span. This hook runs after the segment span is ended,
during `captureSpan` and before the segment span is passed to users' `beforeSendSpan` callback.
Use this hook to modify a segment span in-place.

#### Parameters

##### span

`StreamedSpanJSON`

##### client

`Client`

#### Returns

`void`

#### Inherited from

`Integration.processSegmentSpan`

---

### processSpan()?

> `optional` **processSpan**(`span`, `client`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/integration.d.ts:52

An optional hook that allows modifications to a span. This hook runs after the span is ended,
during `captureSpan` and before the span is passed to users' `beforeSendSpan` callback.
Use this hook to modify a span in-place.

#### Parameters

##### span

`StreamedSpanJSON`

##### client

`Client`

#### Returns

`void`

#### Inherited from

`Integration.processSpan`

---

### setup()?

> `optional` **setup**(`client`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/integration.d.ts:31

Set up an integration for the given client.
Receives the client as argument.

Whenever possible, prefer this over `setupOnce`, as that is only run for the first client,
whereas `setup` runs for each client. Only truly global things (e.g. registering global handlers)
should be done in `setupOnce`.

#### Parameters

##### client

`Client`

#### Returns

`void`

#### Inherited from

`Integration.setup`

---

### setupOnce()?

> `optional` **setupOnce**(): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/integration.d.ts:14

This hook is only called once, even if multiple clients are created.
It does not receives any arguments, and should only use for e.g. global monkey patching and similar things.

#### Returns

`void`

#### Inherited from

`Integration.setupOnce`
