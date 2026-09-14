[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework-test-utils](../index.md) / TestableClient

# Class: TestableClient

Defined in: [packages/http-framework-test-utils/src/TestableClient.ts:10](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/TestableClient.ts#L10)

## theme_extends

- `Client`

## Constructors

### Constructor

> **new TestableClient**(`options?`): `TestableClient`

Defined in: [packages/http-framework-test-utils/src/TestableClient.ts:11](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/TestableClient.ts#L11)

#### Parameters

##### options?

`Partial`\<`ClientOptions`\> = `{}`

#### Returns

`TestableClient`

#### Overrides

`Client.constructor`

## Properties

### \[brandSymbol\]

> `protected` `readonly` **\[brandSymbol\]**: `Events`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:12

This field doesn't actually exist, it's just a way to make TS properly infer the events from classes that extend AsyncEventEmitter

#### Inherited from

`Client.[brandSymbol]`

---

### bodySizeLimit

> `readonly` **bodySizeLimit**: `number`

Defined in: packages/http-framework/dist/esm/index.d.ts:1849

#### Inherited from

`Client.bodySizeLimit`

---

### httpReplyOnError

> `readonly` **httpReplyOnError**: `boolean`

Defined in: packages/http-framework/dist/esm/index.d.ts:1850

#### Inherited from

`Client.httpReplyOnError`

---

### id

> `readonly` **id**: `string`

Defined in: packages/http-framework/dist/esm/index.d.ts:1847

#### Inherited from

`Client.id`

---

### options

> `readonly` **options**: `ClientOptions`

Defined in: packages/http-framework/dist/esm/index.d.ts:1848

#### Inherited from

`Client.options`

---

### server

> **server**: `Server`

Defined in: packages/http-framework/dist/esm/index.d.ts:1846

#### Inherited from

`Client.server`

---

### plugins

> `readonly` `static` **plugins**: `PluginManager`

Defined in: packages/http-framework/dist/esm/index.d.ts:1857

The plugin manager, holding every registered plugin hook.

#### Since

2.4.0

#### Inherited from

`Client.plugins`

## Accessors

### registry

#### Get Signature

> **get** **registry**(): `ApplicationCommandRegistry`

Defined in: packages/http-framework/dist/esm/index.d.ts:1871

Gets the application command registry.

##### Since

2.0.0

##### Returns

`ApplicationCommandRegistry`

The application command registry.

#### Inherited from

`Client.registry`

## Methods

### addListener()

#### Call Signature

> **addListener**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:19

##### Type Parameters

###### K

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`Client.addListener`

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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`Client.addListener`

---

### emit()

#### Call Signature

> **emit**\<`K`\>(`eventName`, ...`args`): `boolean`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:39

##### Type Parameters

###### K

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

###### args

...`InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`\>

##### Returns

`boolean`

##### Inherited from

`Client.emit`

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

...`InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`\>

##### Returns

`boolean`

##### Inherited from

`Client.emit`

---

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[] & keyof `AsyncEventEmitterPredefinedEvents`[] & keyof `ClientEvents`[]

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:47

#### Returns

(`string` \| `symbol`)[] & keyof `AsyncEventEmitterPredefinedEvents`[] & keyof `ClientEvents`[]

#### Inherited from

`Client.eventNames`

---

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:34

#### Returns

`number`

#### Inherited from

`Client.getMaxListeners`

---

### handleHttpMessage()

> **handleHttpMessage**(`interaction`, `response`): `Promise`\<`ServerResponse`\<`IncomingMessage`\>\>

Defined in: [packages/http-framework-test-utils/src/TestableClient.ts:15](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/TestableClient.ts#L15)

#### Parameters

##### interaction

`APIApplicationCommandAutocompleteInteraction` \| `APIChatInputApplicationCommandInteraction` \| `APIModalSubmitInteraction` \| `APIContextMenuInteraction` \| `APIMessageComponentInteraction` \| `APIPingInteraction`

##### response

`ServerResponse`

#### Returns

`Promise`\<`ServerResponse`\<`IncomingMessage`\>\>

#### Overrides

`Client.handleHttpMessage`

---

### handleRawHttpMessage()

> `protected` **handleRawHttpMessage**(`request`, `response`, `path`, `key`): `Promise`\<`ServerResponse`\<`IncomingMessage`\>\>

Defined in: packages/http-framework/dist/esm/index.d.ts:1882

#### Parameters

##### request

`IncomingMessage`

##### response

`ServerResponse`

##### path

`string`

##### key

`CryptoKey`

#### Returns

`Promise`\<`ServerResponse`\<`IncomingMessage`\>\>

#### Inherited from

`Client.handleRawHttpMessage`

---

### listen()

> **listen**(`options`): `Promise`\<`void`\>

Defined in: packages/http-framework/dist/esm/index.d.ts:1881

Starts the HTTP server, listening for HTTP interactions.

#### Parameters

##### options

`ListenOptions`

The listen options.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Client.listen`

---

### listenerCount()

#### Call Signature

> **listenerCount**\<`K`\>(`eventName`): `number`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:41

##### Type Parameters

###### K

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

##### Returns

`number`

##### Inherited from

`Client.listenerCount`

#### Call Signature

> **listenerCount**(`eventName`): `number`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:42

##### Parameters

###### eventName

`string` \| `symbol`

##### Returns

`number`

##### Inherited from

`Client.listenerCount`

---

### listeners()

#### Call Signature

> **listeners**\<`K`\>(`eventName`): `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>[]

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:35

##### Type Parameters

###### K

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

##### Returns

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>[]

##### Inherited from

`Client.listeners`

#### Call Signature

> **listeners**\<`K`\>(`eventName`): `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>[]

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:36

##### Type Parameters

###### K

`K` _extends_ `string` \| `symbol`

##### Parameters

###### eventName

`K`

##### Returns

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>[]

##### Inherited from

`Client.listeners`

---

### load()

> **load**(`options?`): `Promise`\<`void`\>

Defined in: packages/http-framework/dist/esm/index.d.ts:1876

Loads all the commands.

#### Parameters

##### options?

`LoadOptions`

The load options.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Client.load`

---

### off()

#### Call Signature

> **off**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:27

##### Type Parameters

###### K

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`Client.off`

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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`Client.off`

---

### on()

#### Call Signature

> **on**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:21

##### Type Parameters

###### K

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`Client.on`

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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`Client.on`

---

### once()

#### Call Signature

> **once**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:23

##### Type Parameters

###### K

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`Client.once`

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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`Client.once`

---

### prependListener()

#### Call Signature

> **prependListener**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:43

##### Type Parameters

###### K

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`Client.prependListener`

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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`Client.prependListener`

---

### prependOnceListener()

#### Call Signature

> **prependOnceListener**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:45

##### Type Parameters

###### K

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`Client.prependOnceListener`

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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`Client.prependOnceListener`

---

### rawListeners()

#### Call Signature

> **rawListeners**\<`K`\>(`eventName`): `InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>[]

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:37

##### Type Parameters

###### K

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

##### Returns

`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>[]

##### Inherited from

`Client.rawListeners`

#### Call Signature

> **rawListeners**\<`K`\>(`eventName`): `InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>[]

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:38

##### Type Parameters

###### K

`K` _extends_ `string` \| `symbol`

##### Parameters

###### eventName

`K`

##### Returns

`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>[]

##### Inherited from

`Client.rawListeners`

---

### removeAllListeners()

#### Call Signature

> **removeAllListeners**\<`K`\>(`event`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:29

##### Type Parameters

###### K

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### event

`K`

##### Returns

`this`

##### Inherited from

`Client.removeAllListeners`

#### Call Signature

> **removeAllListeners**\<`K`\>(`event?`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:30

##### Type Parameters

###### K

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### event?

`K`

##### Returns

`this`

##### Inherited from

`Client.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`event`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:31

##### Parameters

###### event

`string` \| `symbol`

##### Returns

`this`

##### Inherited from

`Client.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`event?`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:32

##### Parameters

###### event?

`string` \| `symbol`

##### Returns

`this`

##### Inherited from

`Client.removeAllListeners`

---

### removeListener()

#### Call Signature

> **removeListener**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:25

##### Type Parameters

###### K

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`Client.removeListener`

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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`MappedClientEvents`\>, `K`, `MappedClientEvents`\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`Client.removeListener`

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

`Client.setMaxListeners`

---

### waitForAllListenersToComplete()

> **waitForAllListenersToComplete**(): `Promise`\<`boolean`\>

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:48

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`Client.waitForAllListenersToComplete`

---

### listenerCount()

#### Call Signature

> `static` **listenerCount**\<`EventMap`, `EventName`\>(`emitter`, `eventName`): `number`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:51

##### Type Parameters

###### EventMap

`EventMap` _extends_ `object`

###### EventName

`EventName` _extends_ `PropertyKey` = keyof `EventMap` \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### emitter

`AsyncEventEmitter`\<`EventMap`\>

###### eventName

`EventName` \| keyof AsyncEventEmitterPredefinedEvents

##### Returns

`number`

##### Inherited from

`Client.listenerCount`

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

`Client.listenerCount`

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

`Client.on`

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

`Client.on`

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

`Client.once`

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

`Client.once`

---

### use()

> `static` **use**(`plugin`): _typeof_ `Client`

Defined in: packages/http-framework/dist/esm/index.d.ts:1864

Registers a plugin onto the Client, applying all of its hooks.

#### Parameters

##### plugin

_typeof_ `Plugin`

The plugin to register.

#### Returns

_typeof_ `Client`

#### Since

2.4.0

#### Inherited from

`Client.use`
