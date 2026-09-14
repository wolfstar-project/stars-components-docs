[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / Client

# Class: Client

Defined in: [packages/http-framework/src/lib/Client.ts:27](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L27)

## theme_extends

- `AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>

## Constructors

### Constructor

> **new Client**(`options?`): `Client`

Defined in: [packages/http-framework/src/lib/Client.ts:35](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L35)

#### Parameters

##### options?

[`ClientOptions`](../interfaces/ClientOptions.md) = `{}`

#### Returns

`Client`

#### Overrides

`AsyncEventEmitter<MappedClientEvents>.constructor`

## Properties

### \[brandSymbol\]

> `protected` `readonly` **\[brandSymbol\]**: `Events`

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:12

This field doesn't actually exist, it's just a way to make TS properly infer the events from classes that extend AsyncEventEmitter

#### Inherited from

`AsyncEventEmitter.[brandSymbol]`

---

### bodySizeLimit

> `readonly` **bodySizeLimit**: `number`

Defined in: [packages/http-framework/src/lib/Client.ts:31](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L31)

---

### httpReplyOnError

> `readonly` **httpReplyOnError**: `boolean`

Defined in: [packages/http-framework/src/lib/Client.ts:32](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L32)

---

### id

> `readonly` **id**: `string`

Defined in: [packages/http-framework/src/lib/Client.ts:29](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L29)

---

### options

> `readonly` **options**: [`ClientOptions`](../interfaces/ClientOptions.md)

Defined in: [packages/http-framework/src/lib/Client.ts:30](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L30)

---

### server

> **server**: `Server`

Defined in: [packages/http-framework/src/lib/Client.ts:28](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L28)

---

### plugins

> `readonly` `static` **plugins**: [`PluginManager`](PluginManager.md)

Defined in: [packages/http-framework/src/lib/Client.ts:88](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L88)

The plugin manager, holding every registered plugin hook.

#### Since

2.4.0

## Accessors

### registry

#### Get Signature

> **get** **registry**(): [`ApplicationCommandRegistry`](ApplicationCommandRegistry.md)

Defined in: [packages/http-framework/src/lib/Client.ts:107](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L107)

Gets the application command registry.

##### Since

2.0.0

##### Returns

[`ApplicationCommandRegistry`](ApplicationCommandRegistry.md)

The application command registry.

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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>

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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.addListener`

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

...`InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`\>

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

...`InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`\>

##### Returns

`boolean`

##### Inherited from

`AsyncEventEmitter.emit`

---

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[] & keyof `AsyncEventEmitterPredefinedEvents`[] & keyof [`ClientEvents`](../interfaces/ClientEvents.md)[]

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:47

#### Returns

(`string` \| `symbol`)[] & keyof `AsyncEventEmitterPredefinedEvents`[] & keyof [`ClientEvents`](../interfaces/ClientEvents.md)[]

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

### handleHttpMessage()

> `protected` **handleHttpMessage**(`interaction`, `response`): `Promise`\<`ServerResponse`\<`IncomingMessage`\>\>

Defined in: [packages/http-framework/src/lib/Client.ts:192](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L192)

#### Parameters

##### interaction

`APIApplicationCommandAutocompleteInteraction` \| `APIChatInputApplicationCommandInteraction` \| `APIContextMenuInteraction` \| `APIMessageComponentInteraction` \| `APIModalSubmitInteraction` \| `APIPingInteraction`

##### response

`ServerResponse`

#### Returns

`Promise`\<`ServerResponse`\<`IncomingMessage`\>\>

---

### handleRawHttpMessage()

> `protected` **handleRawHttpMessage**(`request`, `response`, `path`, `key`): `Promise`\<`ServerResponse`\<`IncomingMessage`\>\>

Defined in: [packages/http-framework/src/lib/Client.ts:155](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L155)

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

---

### listen()

> **listen**(`options`): `Promise`\<`void`\>

Defined in: [packages/http-framework/src/lib/Client.ts:133](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L133)

Starts the HTTP server, listening for HTTP interactions.

#### Parameters

##### options

[`ListenOptions`](../interfaces/ListenOptions.md)

The listen options.

#### Returns

`Promise`\<`void`\>

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

> **listeners**\<`K`\>(`eventName`): `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>[]

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:35

##### Type Parameters

###### K

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

##### Returns

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>[]

##### Inherited from

`AsyncEventEmitter.listeners`

#### Call Signature

> **listeners**\<`K`\>(`eventName`): `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>[]

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:36

##### Type Parameters

###### K

`K` _extends_ `string` \| `symbol`

##### Parameters

###### eventName

`K`

##### Returns

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>[]

##### Inherited from

`AsyncEventEmitter.listeners`

---

### load()

> **load**(`options?`): `Promise`\<`void`\>

Defined in: [packages/http-framework/src/lib/Client.ts:115](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L115)

Loads all the commands.

#### Parameters

##### options?

[`LoadOptions`](../interfaces/LoadOptions.md) = `{}`

The load options.

#### Returns

`Promise`\<`void`\>

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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>

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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>

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

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>

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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>

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

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>

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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>

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

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>

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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>

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

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>

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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>

##### Returns

`this`

##### Inherited from

`AsyncEventEmitter.prependOnceListener`

---

### rawListeners()

#### Call Signature

> **rawListeners**\<`K`\>(`eventName`): `InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>[]

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:37

##### Type Parameters

###### K

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

##### Returns

`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>[]

##### Inherited from

`AsyncEventEmitter.rawListeners`

#### Call Signature

> **rawListeners**\<`K`\>(`eventName`): `InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>[]

Defined in: node_modules/.pnpm/@vladfrangu+async_event\_emitter@2.4.7/node_modules/@vladfrangu/async_event_emitter/dist/index.d.mts:38

##### Type Parameters

###### K

`K` _extends_ `string` \| `symbol`

##### Parameters

###### eventName

`K`

##### Returns

`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>[]

##### Inherited from

`AsyncEventEmitter.rawListeners`

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

`AsyncEventEmitter.removeAllListeners`

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

`K` _extends_ keyof ClientEvents \| keyof AsyncEventEmitterPredefinedEvents

##### Parameters

###### eventName

`K`

###### listener

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>

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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>, `K`, [`MappedClientEvents`](../type-aliases/MappedClientEvents.md)\>\[`"listener"`\], `undefined`\>

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

---

### use()

> `static` **use**(`plugin`): _typeof_ [`Client`](../namespaces/Client/index.md)

Defined in: [packages/http-framework/src/lib/Client.ts:96](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L96)

Registers a plugin onto the Client, applying all of its hooks.

#### Parameters

##### plugin

_typeof_ [`Plugin`](Plugin.md)

The plugin to register.

#### Returns

_typeof_ [`Client`](../namespaces/Client/index.md)

#### Since

2.4.0
