[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / Scope

# Class: Scope

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:76

Holds additional event information.

## Constructors

### Constructor

> **new Scope**(): `Scope`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:125

#### Returns

`Scope`

## Properties

### \_attachments

> `protected` **\_attachments**: `Attachment`[]

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:98

Attachments

---

### \_attributes

> `protected` **\_attributes**: `RawAttributes`\<`Record`\<`string`, `unknown`\>\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:92

Attributes

---

### \_breadcrumbs

> `protected` **\_breadcrumbs**: [`Breadcrumb`](../interfaces/Breadcrumb.md)[]

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:84

Array of breadcrumbs.

---

### \_client?

> `protected` `optional` **\_client?**: `Client`\<`ClientOptions`\<`BaseTransportOptions`\>\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:120

The client on this scope

---

### \_contexts

> `protected` **\_contexts**: `Contexts`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:96

Contexts

---

### \_conversationId?

> `protected` `optional` **\_conversationId?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:124

Conversation ID

---

### \_eventProcessors

> `protected` **\_eventProcessors**: `EventProcessor`[]

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:82

Callback list that will be called during event processing.

---

### \_extra

> `protected` **\_extra**: `Extras`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:94

Extra

---

### \_fingerprint?

> `protected` `optional` **\_fingerprint?**: `string`[]

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:107

Fingerprint

---

### \_lastEventId?

> `protected` `optional` **\_lastEventId?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:122

Contains the last event id of a captured event.

---

### \_level?

> `protected` `optional` **\_level?**: [`SeverityLevel`](../type-aliases/SeverityLevel.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:109

Severity

---

### \_notifyingListeners

> `protected` **\_notifyingListeners**: `boolean`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:78

Flag if notifying is happening.

---

### \_propagationContext

> `protected` **\_propagationContext**: `PropagationContext`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:100

Propagation Context for distributed tracing

---

### \_scopeListeners

> `protected` **\_scopeListeners**: (`scope`) => `void`[]

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:80

Callback for client to receive scope changes.

#### Parameters

##### scope

`Scope`

#### Returns

`void`

---

### \_sdkProcessingMetadata

> `protected` **\_sdkProcessingMetadata**: `SdkProcessingMetadata`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:105

A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
sent to Sentry

---

### \_session?

> `protected` `optional` **\_session?**: [`Session`](../interfaces/Session.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:118

Session

---

### \_tags

> `protected` **\_tags**: `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:88

Tags

#### Index Signature

\[`key`: `string`\]: `Primitive`

---

### \_transactionName?

> `protected` `optional` **\_transactionName?**: `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:116

Transaction Name

IMPORTANT: The transaction name on the scope has nothing to do with root spans/transaction objects.
It's purpose is to assign a transaction to the scope that's added to non-transaction events.

---

### \_user

> `protected` **\_user**: [`User`](../interfaces/User.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:86

User

## Methods

### \_notifyScopeListeners()

> `protected` **\_notifyScopeListeners**(): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:351

This will be called on every set call.

#### Returns

`void`

---

### addAttachment()

> **addAttachment**(`attachment`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:309

Add an attachment to the scope.

#### Parameters

##### attachment

`Attachment`

#### Returns

`this`

---

### addBreadcrumb()

> **addBreadcrumb**(`breadcrumb`, `maxBreadcrumbs?`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:297

Adds a breadcrumb to the scope.
By default, the last 100 breadcrumbs are kept.

#### Parameters

##### breadcrumb

[`Breadcrumb`](../interfaces/Breadcrumb.md)

##### maxBreadcrumbs?

`number`

#### Returns

`this`

---

### addEventProcessor()

> **addEventProcessor**(`callback`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:157

Add an event processor that will be called before an event is sent.

#### Parameters

##### callback

`EventProcessor`

#### Returns

`this`

---

### addScopeListener()

> **addScopeListener**(`callback`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:153

#### Parameters

##### callback

(`scope`) => `void`

#### Returns

`void`

#### Inherit Doc

---

### captureEvent()

> **captureEvent**(`event`, `hint?`): `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:347

Capture a Sentry event for this scope.

#### Parameters

##### event

[`Event`](../interfaces/Event.md)

##### hint?

[`EventHint`](../interfaces/EventHint.md)

#### Returns

`string`

The id of the captured event.

---

### captureException()

> **captureException**(`exception`, `hint?`): `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:335

Capture an exception for this scope.

#### Parameters

##### exception

`unknown`

##### hint?

[`EventHint`](../interfaces/EventHint.md)

#### Returns

`string`

The id of the captured Sentry event.

---

### captureMessage()

> **captureMessage**(`message`, `level?`, `hint?`): `string`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:341

Capture a message for this scope.

#### Parameters

##### message

`string`

##### level?

[`SeverityLevel`](../type-aliases/SeverityLevel.md)

##### hint?

[`EventHint`](../interfaces/EventHint.md)

#### Returns

`string`

The id of the captured message.

---

### ~~clear()~~

> **clear**(): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:292

Clears the current scope and resets its properties.
Note: The client will not be cleared.

#### Returns

`this`

#### Deprecated

This method will be removed in v11. To reset scope state, re-initialize the SDK or run
your code in a fresh scope via `withScope` instead.

---

### clearAttachments()

> **clearAttachments**(): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:313

Clear all attachments from the scope.

#### Returns

`this`

---

### clearBreadcrumbs()

> **clearBreadcrumbs**(): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:305

Clear all breadcrumbs from the scope.

#### Returns

`this`

---

### clone()

> **clone**(): `Scope`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:129

Clone all data from this scope into a new scope.

#### Returns

`Scope`

---

### getClient()

> **getClient**\<`C`\>(): `C` \| `undefined`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:144

Get the client assigned to this scope.

#### Type Parameters

##### C

`C` _extends_ `Client`\<`ClientOptions`\<`BaseTransportOptions`\>\>

#### Returns

`C` \| `undefined`

---

### getLastBreadcrumb()

> **getLastBreadcrumb**(): [`Breadcrumb`](../interfaces/Breadcrumb.md) \| `undefined`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:301

Get the last breadcrumb of the scope.

#### Returns

[`Breadcrumb`](../interfaces/Breadcrumb.md) \| `undefined`

---

### getPropagationContext()

> **getPropagationContext**(): `PropagationContext`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:329

Get propagation context from the scope, used for distributed tracing

#### Returns

`PropagationContext`

---

### getScopeData()

> **getScopeData**(): `ScopeData`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:317

Get the data of this scope, which should be applied to an event during processing.

#### Returns

`ScopeData`

---

### getSession()

> **getSession**(): [`Session`](../interfaces/Session.md) \| `undefined`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:277

Get the session from the scope.

#### Returns

[`Session`](../interfaces/Session.md) \| `undefined`

---

### getUser()

> **getUser**(): [`User`](../interfaces/User.md) \| `undefined`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:166

Get the user from this scope.

#### Returns

[`User`](../interfaces/User.md) \| `undefined`

---

### lastEventId()

> **lastEventId**(): `string` \| `undefined`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:149

Get the ID of the last captured error event.
This is generally only available on the isolation scope.

#### Returns

`string` \| `undefined`

---

### removeAttribute()

> **removeAttribute**(`key`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:233

Removes the attribute with the given key from the scope.

#### Parameters

##### key

`string`

The attribute key.

#### Returns

`this`

#### Example

```typescript
scope.removeAttribute('is_admin');
```

---

### setAttribute()

> **setAttribute**\<`T`\>(`key`, `value`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:218

Sets an attribute onto the scope.

These attributes are applied to logs, metrics and streamed spans.

Supported attribute value types are `string`, `number`, `boolean`, `string[]`, `number[]` and `boolean[]`.

#### Type Parameters

##### T

`T` _extends_ `unknown`

#### Parameters

##### key

`string`

The attribute key.

##### value

`RawAttribute`\<`T`\>

The attribute value.

#### Returns

`this`

#### Example

```typescript
scope.setAttribute('is_admin', true);
scope.setAttribute('render_duration', 150);
```

---

### setAttributes()

> **setAttributes**\<`T`\>(`newAttributes`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:201

Sets attributes onto the scope.

These attributes are applied to logs, metrics and streamed spans.

Supported attribute value types are `string`, `number`, `boolean`, `string[]`, `number[]` and `boolean[]`.

#### Type Parameters

##### T

`T` _extends_ `Record`\<`string`, `unknown`\>

#### Parameters

##### newAttributes

`RawAttributes`\<`T`\>

The attributes to set on the scope, as key-value pairs.

#### Returns

`this`

#### Example

```typescript
scope.setAttributes({
	is_admin: true,
	payment_selection: 'credit_card',
	render_duration: 150
});
```

---

### setClient()

> **setClient**(`client`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:135

Update the client assigned to this scope.
Note that not every scope will have a client assigned - isolation scopes & the global scope will generally not have a client,
as well as manually created scopes.

#### Parameters

##### client

`Client`\<`ClientOptions`\<`BaseTransportOptions`\>\> \| `undefined`

#### Returns

`void`

---

### setContext()

> **setContext**(`key`, `context`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:269

Sets context data with the given name.
Data passed as context will be normalized. You can also pass `null` to unset the context.
Note that context data will not be merged - calling `setContext` will overwrite an existing context with the same key.

#### Parameters

##### key

`string`

##### context

`Context` \| `null`

#### Returns

`this`

---

### setConversationId()

> **setConversationId**(`conversationId`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:171

Set the conversation ID for this scope.
Set to `null` to unset the conversation ID.

#### Parameters

##### conversationId

`string` \| `null` \| `undefined`

#### Returns

`this`

---

### setExtra()

> **setExtra**(`key`, `extra`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:242

Set a single key:value extra entry that will be sent as extra data with the event.

#### Parameters

##### key

`string`

##### extra

`unknown`

#### Returns

`this`

---

### setExtras()

> **setExtras**(`extras`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:238

Set an object that will be merged into existing extra on the scope,
and will be sent as extra data with the event.

#### Parameters

##### extras

`Extras`

#### Returns

`this`

---

### setFingerprint()

> **setFingerprint**(`fingerprint`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:247

Sets the fingerprint on the scope to send with the events.

#### Parameters

##### fingerprint

`string`[]

Fingerprint to group events in Sentry.

#### Returns

`this`

---

### setLastEventId()

> **setLastEventId**(`lastEventId`): `void`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:140

Set the ID of the last captured error event.
This is generally only captured on the isolation scope.

#### Parameters

##### lastEventId

`string` \| `undefined`

#### Returns

`void`

---

### setLevel()

> **setLevel**(`level`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:251

Sets the level on the scope for future events.

#### Parameters

##### level

[`SeverityLevel`](../type-aliases/SeverityLevel.md)

#### Returns

`this`

---

### setPropagationContext()

> **setPropagationContext**(`context`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:325

Add propagation context to the scope, used for distributed tracing

#### Parameters

##### context

`PropagationContext`

#### Returns

`this`

---

### setSDKProcessingMetadata()

> **setSDKProcessingMetadata**(`newData`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:321

Add data which will be accessible during event processing but won't get sent to Sentry.

#### Parameters

##### newData

`SdkProcessingMetadata`

#### Returns

`this`

---

### setSession()

> **setSession**(`session?`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:273

Set the session for the scope.

#### Parameters

##### session?

[`Session`](../interfaces/Session.md)

#### Returns

`this`

---

### setTag()

> **setTag**(`key`, `value`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:182

Set a single tag that will be sent as tags data with the event.

#### Parameters

##### key

`string`

##### value

`Primitive`

#### Returns

`this`

---

### setTags()

> **setTags**(`tags`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:176

Set an object that will be merged into existing tags on the scope,
and will be sent as tags data with the event.

#### Parameters

##### tags

#### Returns

`this`

---

### setTransactionName()

> **setTransactionName**(`name?`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:263

Sets the transaction name on the scope so that the name of e.g. taken server route or
the page location is attached to future events.

IMPORTANT: Calling this function does NOT change the name of the currently active
root span. If you want to change the name of the active root span, use
`Sentry.updateSpanName(rootSpan, 'new name')` instead.

By default, the SDK updates the scope's transaction name automatically on sensible
occasions, such as a page navigation or when handling a new request on the server.

#### Parameters

##### name?

`string`

#### Returns

`this`

---

### setUser()

> **setUser**(`user`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:162

Set the user for this scope.
Set to `null` to unset the user.

#### Parameters

##### user

[`User`](../interfaces/User.md) \| `null`

#### Returns

`this`

---

### update()

> **update**(`captureContext?`): `this`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/scope.d.ts:284

Updates the scope with provided data. Can work in three variations:

- plain object containing updatable attributes
- Scope instance that'll extract the attributes from
- callback function that'll receive the current scope as an argument and allow for modifications

#### Parameters

##### captureContext?

[`CaptureContext`](../type-aliases/CaptureContext.md)

#### Returns

`this`
