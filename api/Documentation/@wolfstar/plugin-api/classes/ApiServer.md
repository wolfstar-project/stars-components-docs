[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-api](../index.md) / ApiServer

# Class: ApiServer

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:76](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L76)

A standalone HTTP server for auxiliary REST routes (health checks, dashboards, webhooks from
other services, etc). It is deliberately independent from Client.server, which is
reserved for the Discord interactions webhook.

## theme_extends

- `AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>

## Constructors

### Constructor

> **new ApiServer**(`options?`): `ApiServer`

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:82](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L82)

#### Parameters

##### options?

[`ApiServerOptions`](../interfaces/ApiServerOptions.md) = `{}`

#### Returns

`ApiServer`

#### Overrides

`AsyncEventEmitter<ApiServerEvents>.constructor`

## Properties

### \[brandSymbol\]

> `protected` `readonly` **\[brandSymbol\]**: [`ApiServerEvents`](../interfaces/ApiServerEvents.md)

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:12

This field doesn't actually exist, it's just a way to make TS properly infer the events from classes that extend AsyncEventEmitter

#### Inherited from

`AsyncEventEmitter.[brandSymbol]`

---

### middlewares

> `readonly` **middlewares**: [`MiddlewareStore`](MiddlewareStore.md)

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:78](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L78)

---

### options

> `readonly` **options**: [`ApiServerOptions`](../interfaces/ApiServerOptions.md)

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:80](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L80)

---

### routes

> `readonly` **routes**: [`RouteStore`](RouteStore.md)

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:77](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L77)

---

### server

> `readonly` **server**: `Server`\<_typeof_ [`ApiRequest`](ApiRequest.md), _typeof_ [`ApiResponse`](ApiResponse.md)\>

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:79](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L79)

## Methods

### addListener()

#### Call Signature

> **addListener**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:19

##### Type Parameters

###### K

`K` _extends_ keyof AsyncEventEmitterPredefinedEvents \| keyof ApiServerEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.addListener`

#### Call Signature

> **addListener**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:20

##### Type Parameters

###### K

`K` _extends_ `string` \| `symbol`

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.addListener`

---

### connect()

> **connect**(): `Promise`\<`void`\>

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:108](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L108)

Starts listening for requests.

#### Returns

`Promise`\<`void`\>

---

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:128](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L128)

Stops the server from accepting new connections.

#### Returns

`Promise`\<`void`\>

---

### emit()

#### Call Signature

> **emit**\<`K`\>(`eventName`, ...`args`): `boolean`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:39

##### Type Parameters

###### K

`K` _extends_ keyof AsyncEventEmitterPredefinedEvents \| keyof ApiServerEvents

##### Parameters

###### eventName

`K`

###### args

...`InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`\>

##### Returns

`boolean`

##### Inherited from

`AsyncEventEmitter.emit`

#### Call Signature

> **emit**\<`K`\>(`eventName`, ...`args`): `boolean`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:40

##### Type Parameters

###### K

`K` _extends_ `string` \| `symbol`

##### Parameters

###### eventName

`K`

###### args

...`InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`\>

##### Returns

`boolean`

##### Inherited from

`AsyncEventEmitter.emit`

---

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[] & keyof `AsyncEventEmitterPredefinedEvents`[] & keyof [`ApiServerEvents`](../interfaces/ApiServerEvents.md)[]

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:47

#### Returns

(`string` \| `symbol`)[] & keyof `AsyncEventEmitterPredefinedEvents`[] & keyof [`ApiServerEvents`](../interfaces/ApiServerEvents.md)[]

#### Inherited from

`AsyncEventEmitter.eventNames`

---

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:34

#### Returns

`number`

#### Inherited from

`AsyncEventEmitter.getMaxListeners`

---

### listenerCount()

#### Call Signature

> **listenerCount**\<`K`\>(`eventName`): `number`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:41

##### Type Parameters

###### K

`K` _extends_ keyof AsyncEventEmitterPredefinedEvents \| keyof ApiServerEvents

##### Parameters

###### eventName

`K`

##### Returns

`number`

##### Inherited from

`AsyncEventEmitter.listenerCount`

#### Call Signature

> **listenerCount**(`eventName`): `number`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:42

##### Parameters

###### eventName

`string` \| `symbol`

##### Returns

`number`

##### Inherited from

`AsyncEventEmitter.listenerCount`

---

### listeners()

#### Call Signature

> **listeners**\<`K`\>(`eventName`): `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>[]

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:35

##### Type Parameters

###### K

`K` _extends_ keyof AsyncEventEmitterPredefinedEvents \| keyof ApiServerEvents

##### Parameters

###### eventName

`K`

##### Returns

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>[]

##### Inherited from

`AsyncEventEmitter.listeners`

#### Call Signature

> **listeners**\<`K`\>(`eventName`): `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>[]

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:36

##### Type Parameters

###### K

`K` _extends_ `string` \| `symbol`

##### Parameters

###### eventName

`K`

##### Returns

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>[]

##### Inherited from

`AsyncEventEmitter.listeners`

---

### off()

#### Call Signature

> **off**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:27

##### Type Parameters

###### K

`K` _extends_ keyof AsyncEventEmitterPredefinedEvents \| keyof ApiServerEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.off`

#### Call Signature

> **off**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:28

##### Type Parameters

###### K

`K` _extends_ `string` \| `symbol`

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.off`

---

### on()

#### Call Signature

> **on**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:21

##### Type Parameters

###### K

`K` _extends_ keyof AsyncEventEmitterPredefinedEvents \| keyof ApiServerEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.on`

#### Call Signature

> **on**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:22

##### Type Parameters

###### K

`K` _extends_ `string` \| `symbol`

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.on`

---

### once()

#### Call Signature

> **once**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:23

##### Type Parameters

###### K

`K` _extends_ keyof AsyncEventEmitterPredefinedEvents \| keyof ApiServerEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.once`

#### Call Signature

> **once**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:24

##### Type Parameters

###### K

`K` _extends_ `string` \| `symbol`

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.once`

---

### prependListener()

#### Call Signature

> **prependListener**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:43

##### Type Parameters

###### K

`K` _extends_ keyof AsyncEventEmitterPredefinedEvents \| keyof ApiServerEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.prependListener`

#### Call Signature

> **prependListener**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:44

##### Type Parameters

###### K

`K` _extends_ `string` \| `symbol`

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.prependListener`

---

### prependOnceListener()

#### Call Signature

> **prependOnceListener**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:45

##### Type Parameters

###### K

`K` _extends_ keyof AsyncEventEmitterPredefinedEvents \| keyof ApiServerEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.prependOnceListener`

#### Call Signature

> **prependOnceListener**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:46

##### Type Parameters

###### K

`K` _extends_ `string` \| `symbol`

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.prependOnceListener`

---

### rawListeners()

#### Call Signature

> **rawListeners**\<`K`\>(`eventName`): `InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>[]

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:37

##### Type Parameters

###### K

`K` _extends_ keyof AsyncEventEmitterPredefinedEvents \| keyof ApiServerEvents

##### Parameters

###### eventName

`K`

##### Returns

`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>[]

##### Inherited from

`AsyncEventEmitter.rawListeners`

#### Call Signature

> **rawListeners**\<`K`\>(`eventName`): `InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>[]

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:38

##### Type Parameters

###### K

`K` _extends_ `string` \| `symbol`

##### Parameters

###### eventName

`K`

##### Returns

`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>[]

##### Inherited from

`AsyncEventEmitter.rawListeners`

---

### removeAllListeners()

#### Call Signature

> **removeAllListeners**\<`K`\>(`event`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:29

##### Type Parameters

###### K

`K` _extends_ keyof AsyncEventEmitterPredefinedEvents \| keyof ApiServerEvents

##### Parameters

###### event

`K`

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.removeAllListeners`

#### Call Signature

> **removeAllListeners**\<`K`\>(`event?`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:30

##### Type Parameters

###### K

`K` _extends_ keyof AsyncEventEmitterPredefinedEvents \| keyof ApiServerEvents

##### Parameters

###### event?

`K`

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`event`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:31

##### Parameters

###### event

`string` \| `symbol`

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`event?`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:32

##### Parameters

###### event?

`string` \| `symbol`

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.removeAllListeners`

---

### removeListener()

#### Call Signature

> **removeListener**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:25

##### Type Parameters

###### K

`K` _extends_ keyof AsyncEventEmitterPredefinedEvents \| keyof ApiServerEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.removeListener`

#### Call Signature

> **removeListener**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:26

##### Type Parameters

###### K

`K` _extends_ `string` \| `symbol`

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>, `K`, [`ApiServerEvents`](../interfaces/ApiServerEvents.md)\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.removeListener`

---

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:33

#### Parameters

##### n

`number`

#### Returns

`this`

#### Inherited from

`AsyncEventEmitter.setMaxListeners`

---

### waitForAllListenersToComplete()

> **waitForAllListenersToComplete**(): `Promise`\<`boolean`\>

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:48

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AsyncEventEmitter.waitForAllListenersToComplete`

---

### listenerCount()

#### Call Signature

> `static` **listenerCount**\<`EventMap`, `EventName`\>(`emitter`, `eventName`): `number`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:51

##### Type Parameters

###### EventMap

`EventMap` _extends_ `object`

###### EventName

`EventName` _extends_ `PropertyKey` = keyof AsyncEventEmitterPredefinedEvents \| keyof `EventMap`

##### Parameters

###### emitter

`AsyncEventEmitter`\<`EventMap`\>

###### eventName

keyof AsyncEventEmitterPredefinedEvents \| `EventName`

##### Returns

`number`

##### Inherited from

`AsyncEventEmitter.listenerCount`

#### Call Signature

> `static` **listenerCount**(`emitter`, `eventName`): `number`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:52

##### Parameters

###### emitter

`AsyncEventEmitter`\<`any`\>

###### eventName

`string` \| `symbol`

##### Returns

`number`

##### Inherited from

`AsyncEventEmitter.listenerCount`

---

### on()

#### Call Signature

> `static` **on**\<`EventMap`, `EventName`\>(`emitter`, `eventName`, `options?`): `AsyncGenerator`\<`InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<`EventMap`\>, `EventName`, `EventMap`\>, `void`\>

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:55

##### Type Parameters

###### EventMap

`EventMap` _extends_ `object`

###### EventName

`EventName` _extends_ `PropertyKey` = keyof AsyncEventEmitterPredefinedEvents \| keyof `EventMap`

##### Parameters

###### emitter

`AsyncEventEmitter`\<`EventMap`\>

###### eventName

`EventName`

###### options?

`AbortableMethods`

##### Returns

`AsyncGenerator`\<`InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<`EventMap`\>, `EventName`, `EventMap`\>, `void`\>

##### Inherited from

`AsyncEventEmitter.on`

#### Call Signature

> `static` **on**(`emitter`, `eventName`, `options?`): `AsyncGenerator`\<`any`[], `void`\>

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:56

##### Parameters

###### emitter

`AsyncEventEmitter`\<`any`\>

###### eventName

`string` \| `symbol`

###### options?

`AbortableMethods`

##### Returns

`AsyncGenerator`\<`any`[], `void`\>

##### Inherited from

`AsyncEventEmitter.on`

---

### once()

#### Call Signature

> `static` **once**\<`EventMap`, `EventName`\>(`emitter`, `eventName`, `options?`): `Promise`\<`InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<`EventMap`\>, `EventName`, `EventMap`\>\>

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:53

##### Type Parameters

###### EventMap

`EventMap` _extends_ `object`

###### EventName

`EventName` _extends_ `PropertyKey` = keyof AsyncEventEmitterPredefinedEvents \| keyof `EventMap`

##### Parameters

###### emitter

`AsyncEventEmitter`\<`EventMap`\>

###### eventName

`EventName`

###### options?

`AbortableMethods`

##### Returns

`Promise`\<`InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<`EventMap`\>, `EventName`, `EventMap`\>\>

##### Inherited from

`AsyncEventEmitter.once`

#### Call Signature

> `static` **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:54

##### Parameters

###### emitter

`AsyncEventEmitter`\<`any`\>

###### eventName

`string` \| `symbol`

###### options?

`AbortableMethods`

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

`AsyncEventEmitter.once`
