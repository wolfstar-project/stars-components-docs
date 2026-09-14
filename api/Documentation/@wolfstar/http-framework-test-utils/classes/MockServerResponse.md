[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework-test-utils](../index.md) / MockServerResponse

# Class: MockServerResponse

Defined in: [packages/http-framework-test-utils/src/MockServerResponse.ts:4](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/MockServerResponse.ts#L4)

## theme_extends

- `Writable`

## Constructors

### Constructor

> **new MockServerResponse**(`opts?`): `MockServerResponse`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:794

#### Parameters

##### opts?

`WritableOptions`\<`Writable`\>

#### Returns

`MockServerResponse`

#### Inherited from

`Writable.constructor`

## Properties

### closed

> `readonly` **closed**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:783

Is `true` after `'close'` has been emitted.

#### Since

v18.0.0

#### Inherited from

`Writable.closed`

---

### destroyed

> **destroyed**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:778

Is `true` after `writable.destroy()` has been called.

#### Since

v8.0.0

#### Inherited from

`Writable.destroyed`

---

### errored

> `readonly` **errored**: `Error` \| `null`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:788

Returns error if the stream has been destroyed with an error.

#### Since

v18.0.0

#### Inherited from

`Writable.errored`

---

### headers

> `readonly` **headers**: `Record`\<`string`, `string`\> = `{}`

Defined in: [packages/http-framework-test-utils/src/MockServerResponse.ts:6](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/MockServerResponse.ts#L6)

---

### statusCode

> **statusCode**: `number` = `200`

Defined in: [packages/http-framework-test-utils/src/MockServerResponse.ts:5](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/MockServerResponse.ts#L5)

---

### writable

> `readonly` **writable**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:739

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored, or ended.

#### Since

v11.4.0

#### Inherited from

`Writable.writable`

---

### writableCorked

> `readonly` **writableCorked**: `number`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:773

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

#### Since

v13.2.0, v12.16.0

#### Inherited from

`Writable.writableCorked`

---

### writableEnded

> `readonly` **writableEnded**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:745

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

#### Since

v12.9.0

#### Inherited from

`Writable.writableEnded`

---

### writableFinished

> `readonly` **writableFinished**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:750

Is set to `true` immediately before the `'finish'` event is emitted.

#### Since

v12.6.0

#### Inherited from

`Writable.writableFinished`

---

### writableHighWaterMark

> `readonly` **writableHighWaterMark**: `number`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:755

Return the value of `highWaterMark` passed when creating this `Writable`.

#### Since

v9.3.0

#### Inherited from

`Writable.writableHighWaterMark`

---

### writableLength

> `readonly` **writableLength**: `number`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:762

This property contains the number of bytes (or objects) in the queue
ready to be written. The value provides introspection data regarding
the status of the `highWaterMark`.

#### Since

v9.4.0

#### Inherited from

`Writable.writableLength`

---

### writableNeedDrain

> `readonly` **writableNeedDrain**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:793

Is `true` if the stream's buffer has been full and stream will emit `'drain'`.

#### Since

v15.2.0, v14.17.0

#### Inherited from

`Writable.writableNeedDrain`

---

### writableObjectMode

> `readonly` **writableObjectMode**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:767

Getter for the property `objectMode` of a given `Writable` stream.

#### Since

v12.3.0

#### Inherited from

`Writable.writableObjectMode`

---

### captureRejections

> `static` **captureRejections**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:459

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

#### Since

v13.4.0, v12.16.0

#### Inherited from

`Writable.captureRejections`

---

### captureRejectionSymbol

> `readonly` `static` **captureRejectionSymbol**: _typeof_ [`captureRejectionSymbol`](#capturerejectionsymbol)

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:452

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

#### Since

v13.4.0, v12.16.0

#### Inherited from

`Writable.captureRejectionSymbol`

---

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:498

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for _all_`EventEmitter` instances, the `events.defaultMaxListeners` property
can be used. If this value is not a positive number, a `RangeError` is thrown.

Take caution when setting the `events.defaultMaxListeners` because the
change affects _all_ `EventEmitter` instances, including those created before
the change is made. However, calling `emitter.setMaxListeners(n)` still has
precedence over `events.defaultMaxListeners`.

This is not a hard limit. The `EventEmitter` instance will allow
more listeners to be added but will output a trace warning to stderr indicating
that a "possible EventEmitter memory leak" has been detected. For any single
`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()` methods can be used to
temporarily avoid this warning:

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', () => {
	// do stuff
	emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
```

The `--trace-warnings` command-line flag can be used to display the
stack trace for such warnings.

The emitted warning can be inspected with `process.on('warning')` and will
have the additional `emitter`, `type`, and `count` properties, referring to
the event emitter instance, the event's name and the number of attached
listeners, respectively.
Its `name` property is set to `'MaxListenersExceededWarning'`.

#### Since

v0.11.2

#### Inherited from

`Writable.defaultMaxListeners`

---

### errorMonitor

> `readonly` `static` **errorMonitor**: _typeof_ [`errorMonitor`](#errormonitor)

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:445

This symbol shall be used to install a listener for only monitoring `'error'` events. Listeners installed using this symbol are called before the regular `'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an `'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

#### Since

v13.6.0, v12.17.0

#### Inherited from

`Writable.errorMonitor`

## Methods

### \_construct()?

> `optional` **\_construct**(`callback`): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:803

#### Parameters

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

`Writable._construct`

---

### \_destroy()

> **\_destroy**(`error`, `callback`): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:804

#### Parameters

##### error

`Error` \| `null`

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

`Writable._destroy`

---

### \_final()

> **\_final**(`callback`): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:805

#### Parameters

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

`Writable._final`

---

### \_write()

> **\_write**(`chunk`, `_encoding`, `callback`): `void`

Defined in: [packages/http-framework-test-utils/src/MockServerResponse.ts:13](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/MockServerResponse.ts#L13)

#### Parameters

##### chunk

`unknown`

##### \_encoding

`BufferEncoding`

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Overrides

`Writable._write`

---

### \_writev()?

> `optional` **\_writev**(`chunks`, `callback`): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:796

#### Parameters

##### chunks

`object`[]

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

`Writable._writev`

---

### \[captureRejectionSymbol\]()?

> `optional` **\[captureRejectionSymbol\]**\<`K`\>(`error`, `event`, ...`args`): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:136

#### Type Parameters

##### K

`K`

#### Parameters

##### error

`Error`

##### event

`string` \| `symbol`

##### args

...`AnyRest`

#### Returns

`void`

#### Inherited from

`Writable.[captureRejectionSymbol]`

---

### addListener()

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:971

Event emitter
The defined events on documents including:

1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

##### Parameters

###### event

`"close"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Writable.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:972

Event emitter
The defined events on documents including:

1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Writable.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:973

Event emitter
The defined events on documents including:

1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:974

Event emitter
The defined events on documents including:

1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

##### Parameters

###### event

`"finish"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Writable.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:975

Event emitter
The defined events on documents including:

1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

##### Parameters

###### event

`"pipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:976

Event emitter
The defined events on documents including:

1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

##### Parameters

###### event

`"unpipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:977

Event emitter
The defined events on documents including:

1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

##### Parameters

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.addListener`

---

### compose()

> **compose**\<`T`\>(`stream`, `options?`): `T`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:35

#### Type Parameters

##### T

`T` _extends_ `ReadableStream`

#### Parameters

##### stream

`T` \| `ComposeFnParam` \| `Iterable`\<`T`, `any`, `any`\> \| `AsyncIterable`\<`T`, `any`, `any`\>

##### options?

###### signal

`AbortSignal`

#### Returns

`T`

#### Inherited from

`Writable.compose`

---

### cork()

> **cork**(): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:909

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](#uncork) or [end](#end) methods are called.

The primary intent of `writable.cork()` is to accommodate a situation in which
several small chunks are written to the stream in rapid succession. Instead of
immediately forwarding them to the underlying destination, `writable.cork()` buffers all the chunks until `writable.uncork()` is called, which will pass them
all to `writable._writev()`, if present. This prevents a head-of-line blocking
situation where data is being buffered while waiting for the first small chunk
to be processed. However, use of `writable.cork()` without implementing `writable._writev()` may have an adverse effect on throughput.

See also: `writable.uncork()`, `writable._writev()`.

#### Returns

`void`

#### Since

v0.11.2

#### Inherited from

`Writable.cork`

---

### destroy()

> **destroy**(`error?`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:960

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'` event (unless `emitClose` is set to `false`). After this call, the writable
stream has ended and subsequent calls to `write()` or `end()` will result in
an `ERR_STREAM_DESTROYED` error.
This is a destructive and immediate way to destroy a stream. Previous calls to `write()` may not have drained, and may trigger an `ERR_STREAM_DESTROYED` error.
Use `end()` instead of destroy if data should flush before close, or wait for
the `'drain'` event before destroying the stream.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method,
but instead implement `writable._destroy()`.

#### Parameters

##### error?

`Error`

Optional, an error to emit with `'error'` event.

#### Returns

`this`

#### Since

v8.0.0

#### Inherited from

`Writable.destroy`

---

### emit()

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:978

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
	console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
	console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
	const parameters = args.join(', ');
	console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

##### Parameters

###### event

`"close"`

##### Returns

`boolean`

##### Since

v0.1.26

##### Inherited from

`Writable.emit`

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:979

##### Parameters

###### event

`"drain"`

##### Returns

`boolean`

##### Inherited from

`Writable.emit`

#### Call Signature

> **emit**(`event`, `err`): `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:980

##### Parameters

###### event

`"error"`

###### err

`Error`

##### Returns

`boolean`

##### Inherited from

`Writable.emit`

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:981

##### Parameters

###### event

`"finish"`

##### Returns

`boolean`

##### Inherited from

`Writable.emit`

#### Call Signature

> **emit**(`event`, `src`): `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:982

##### Parameters

###### event

`"pipe"`

###### src

`Readable`

##### Returns

`boolean`

##### Inherited from

`Writable.emit`

#### Call Signature

> **emit**(`event`, `src`): `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:983

##### Parameters

###### event

`"unpipe"`

###### src

`Readable`

##### Returns

`boolean`

##### Inherited from

`Writable.emit`

#### Call Signature

> **emit**(`event`, ...`args`): `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:984

##### Parameters

###### event

`string` \| `symbol`

###### args

...`any`[]

##### Returns

`boolean`

##### Inherited from

`Writable.emit`

---

### end()

#### Call Signature

> **end**(`cb?`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:892

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](#write) method after calling [end](#end) will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
import fs from 'node:fs';
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

##### Parameters

###### cb?

() => `void`

##### Returns

`this`

##### Since

v0.9.4

##### Inherited from

`Writable.end`

#### Call Signature

> **end**(`chunk`, `cb?`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:893

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](#write) method after calling [end](#end) will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
import fs from 'node:fs';
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

##### Parameters

###### chunk

`any`

Optional data to write. For streams not operating in object mode, `chunk` must be a \{string\}, \{Buffer\},
\{TypedArray\} or \{DataView\}. For object mode streams, `chunk` may be any JavaScript value other than `null`.

###### cb?

() => `void`

##### Returns

`this`

##### Since

v0.9.4

##### Inherited from

`Writable.end`

#### Call Signature

> **end**(`chunk`, `encoding`, `cb?`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:894

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](#write) method after calling [end](#end) will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
import fs from 'node:fs';
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

##### Parameters

###### chunk

`any`

Optional data to write. For streams not operating in object mode, `chunk` must be a \{string\}, \{Buffer\},
\{TypedArray\} or \{DataView\}. For object mode streams, `chunk` may be any JavaScript value other than `null`.

###### encoding

`BufferEncoding`

The encoding if `chunk` is a string

###### cb?

() => `void`

##### Returns

`this`

##### Since

v0.9.4

##### Inherited from

`Writable.end`

---

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:922

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Since

v6.0.0

#### Inherited from

`Writable.eventNames`

---

### getBody()

> **getBody**(): `string`

Defined in: [packages/http-framework-test-utils/src/MockServerResponse.ts:18](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/MockServerResponse.ts#L18)

#### Returns

`string`

---

### getBodyAsJson()

> **getBodyAsJson**\<`T`\>(): `T`

Defined in: [packages/http-framework-test-utils/src/MockServerResponse.ts:22](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/MockServerResponse.ts#L22)

#### Type Parameters

##### T

`T` = `unknown`

#### Returns

`T`

---

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:774

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [EventEmitter.defaultMaxListeners](#defaultmaxlisteners).

#### Returns

`number`

#### Since

v1.0.0

#### Inherited from

`Writable.getMaxListeners`

---

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`, `listener?`): `number`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:868

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Type Parameters

##### K

`K`

#### Parameters

##### eventName

`string` \| `symbol`

The name of the event being listened for

##### listener?

`Function`

The event handler function

#### Returns

`number`

#### Since

v3.2.0

#### Inherited from

`Writable.listenerCount`

---

### listeners()

> **listeners**\<`K`\>(`eventName`): `Function`[]

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:787

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
	console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type Parameters

##### K

`K`

#### Parameters

##### eventName

`string` \| `symbol`

#### Returns

`Function`[]

#### Since

v0.1.26

#### Inherited from

`Writable.listeners`

---

### off()

> **off**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:747

Alias for `emitter.removeListener()`.

#### Type Parameters

##### K

`K`

#### Parameters

##### eventName

`string` \| `symbol`

##### listener

(...`args`) => `void`

#### Returns

`this`

#### Since

v10.0.0

#### Inherited from

`Writable.off`

---

### on()

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:985

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
	console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

###### event

`"close"`

###### listener

() => `void`

The callback function

##### Returns

`this`

##### Since

v0.1.101

##### Inherited from

`Writable.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:986

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Writable.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:987

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:988

##### Parameters

###### event

`"finish"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Writable.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:989

##### Parameters

###### event

`"pipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:990

##### Parameters

###### event

`"unpipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:991

##### Parameters

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.on`

---

### once()

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:992

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
	console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

###### event

`"close"`

###### listener

() => `void`

The callback function

##### Returns

`this`

##### Since

v0.3.0

##### Inherited from

`Writable.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:993

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Writable.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:994

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:995

##### Parameters

###### event

`"finish"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Writable.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:996

##### Parameters

###### event

`"pipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:997

##### Parameters

###### event

`"unpipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:998

##### Parameters

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.once`

---

### pipe()

> **pipe**\<`T`\>(`destination`, `options?`): `T`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:29

#### Type Parameters

##### T

`T` _extends_ `WritableStream`

#### Parameters

##### destination

`T`

##### options?

###### end?

`boolean`

#### Returns

`T`

#### Inherited from

`Writable.pipe`

---

### prependListener()

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:999

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
	console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

###### event

`"close"`

###### listener

() => `void`

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

`Writable.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1000

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Writable.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1001

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1002

##### Parameters

###### event

`"finish"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Writable.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1003

##### Parameters

###### event

`"pipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1004

##### Parameters

###### event

`"unpipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1005

##### Parameters

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.prependListener`

---

### prependOnceListener()

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1006

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
	console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

###### event

`"close"`

###### listener

() => `void`

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Inherited from

`Writable.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1007

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Writable.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1008

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1009

##### Parameters

###### event

`"finish"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Writable.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1010

##### Parameters

###### event

`"pipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1011

##### Parameters

###### event

`"unpipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1012

##### Parameters

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.prependOnceListener`

---

### rawListeners()

> **rawListeners**\<`K`\>(`eventName`): `Function`[]

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:818

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Type Parameters

##### K

`K`

#### Parameters

##### eventName

`string` \| `symbol`

#### Returns

`Function`[]

#### Since

v9.4.0

#### Inherited from

`Writable.rawListeners`

---

### removeAllListeners()

> **removeAllListeners**(`eventName?`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:758

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

##### eventName?

`string` \| `symbol`

#### Returns

`this`

#### Since

v0.1.26

#### Inherited from

`Writable.removeAllListeners`

---

### removeListener()

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1013

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
	console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
	console.log('A');
	myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
	console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
	console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

###### event

`"close"`

###### listener

() => `void`

##### Returns

`this`

##### Since

v0.1.26

##### Inherited from

`Writable.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1014

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Writable.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1015

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1016

##### Parameters

###### event

`"finish"`

###### listener

() => `void`

##### Returns

`this`

##### Inherited from

`Writable.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1017

##### Parameters

###### event

`"pipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1018

##### Parameters

###### event

`"unpipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:1019

##### Parameters

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Inherited from

`Writable.removeListener`

---

### reset()

> **reset**(): `void`

Defined in: [packages/http-framework-test-utils/src/MockServerResponse.ts:26](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/MockServerResponse.ts#L26)

#### Returns

`void`

---

### setDefaultEncoding()

> **setDefaultEncoding**(`encoding`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:869

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

#### Parameters

##### encoding

`BufferEncoding`

The new default encoding

#### Returns

`this`

#### Since

v0.11.15

#### Inherited from

`Writable.setDefaultEncoding`

---

### setHeader()

> **setHeader**(`name`, `value`): `void`

Defined in: [packages/http-framework-test-utils/src/MockServerResponse.ts:9](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/MockServerResponse.ts#L9)

#### Parameters

##### name

`string`

##### value

`string` \| `number` \| readonly `string`[]

#### Returns

`void`

---

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:768

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

##### n

`number`

#### Returns

`this`

#### Since

v0.3.5

#### Inherited from

`Writable.setMaxListeners`

---

### uncork()

> **uncork**(): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:943

The `writable.uncork()` method flushes all data buffered since [cork](#cork) was called.

When using `writable.cork()` and `writable.uncork()` to manage the buffering
of writes to a stream, defer calls to `writable.uncork()` using `process.nextTick()`. Doing so allows batching of all `writable.write()` calls that occur within a given Node.js event
loop phase.

```js
stream.cork();
stream.write('some ');
stream.write('data ');
process.nextTick(() => stream.uncork());
```

If the `writable.cork()` method is called multiple times on a stream, the
same number of calls to `writable.uncork()` must be called to flush the buffered
data.

```js
stream.cork();
stream.write('some ');
stream.cork();
stream.write('data ');
process.nextTick(() => {
	stream.uncork();
	// The data will not be flushed until uncork() is called a second time.
	stream.uncork();
});
```

See also: `writable.cork()`.

#### Returns

`void`

#### Since

v0.11.2

#### Inherited from

`Writable.uncork`

---

### write()

#### Call Signature

> **write**(`chunk`, `callback?`): `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:862

The `writable.write()` method writes some data to the stream, and calls the
supplied `callback` once the data has been fully handled. If an error
occurs, the `callback` will be called with the error as its
first argument. The `callback` is called asynchronously and before `'error'` is
emitted.

The return value is `true` if the internal buffer is less than the `highWaterMark` configured when the stream was created after admitting `chunk`.
If `false` is returned, further attempts to write data to the stream should
stop until the `'drain'` event is emitted.

While a stream is not draining, calls to `write()` will buffer `chunk`, and
return false. Once all currently buffered chunks are drained (accepted for
delivery by the operating system), the `'drain'` event will be emitted.
Once `write()` returns false, do not write more chunks
until the `'drain'` event is emitted. While calling `write()` on a stream that
is not draining is allowed, Node.js will buffer all written chunks until
maximum memory usage occurs, at which point it will abort unconditionally.
Even before it aborts, high memory usage will cause poor garbage collector
performance and high RSS (which is not typically released back to the system,
even after the memory is no longer required). Since TCP sockets may never
drain if the remote peer does not read the data, writing a socket that is
not draining may lead to a remotely exploitable vulnerability.

Writing data while the stream is not draining is particularly
problematic for a `Transform`, because the `Transform` streams are paused
by default until they are piped or a `'data'` or `'readable'` event handler
is added.

If the data to be written can be generated or fetched on demand, it is
recommended to encapsulate the logic into a `Readable` and use [pipe](#pipe). However, if calling `write()` is preferred, it is
possible to respect backpressure and avoid memory issues using the `'drain'` event:

```js
function write(data, cb) {
	if (!stream.write(data)) {
		stream.once('drain', cb);
	} else {
		process.nextTick(cb);
	}
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
	console.log('Write completed, do more writes now.');
});
```

A `Writable` stream in object mode will always ignore the `encoding` argument.

##### Parameters

###### chunk

`any`

Optional data to write. For streams not operating in object mode, `chunk` must be a \{string\}, \{Buffer\},
\{TypedArray\} or \{DataView\}. For object mode streams, `chunk` may be any JavaScript value other than `null`.

###### callback?

(`error`) => `void`

Callback for when this chunk of data is flushed.

##### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

##### Since

v0.9.4

##### Inherited from

`Writable.write`

#### Call Signature

> **write**(`chunk`, `encoding`, `callback?`): `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:863

The `writable.write()` method writes some data to the stream, and calls the
supplied `callback` once the data has been fully handled. If an error
occurs, the `callback` will be called with the error as its
first argument. The `callback` is called asynchronously and before `'error'` is
emitted.

The return value is `true` if the internal buffer is less than the `highWaterMark` configured when the stream was created after admitting `chunk`.
If `false` is returned, further attempts to write data to the stream should
stop until the `'drain'` event is emitted.

While a stream is not draining, calls to `write()` will buffer `chunk`, and
return false. Once all currently buffered chunks are drained (accepted for
delivery by the operating system), the `'drain'` event will be emitted.
Once `write()` returns false, do not write more chunks
until the `'drain'` event is emitted. While calling `write()` on a stream that
is not draining is allowed, Node.js will buffer all written chunks until
maximum memory usage occurs, at which point it will abort unconditionally.
Even before it aborts, high memory usage will cause poor garbage collector
performance and high RSS (which is not typically released back to the system,
even after the memory is no longer required). Since TCP sockets may never
drain if the remote peer does not read the data, writing a socket that is
not draining may lead to a remotely exploitable vulnerability.

Writing data while the stream is not draining is particularly
problematic for a `Transform`, because the `Transform` streams are paused
by default until they are piped or a `'data'` or `'readable'` event handler
is added.

If the data to be written can be generated or fetched on demand, it is
recommended to encapsulate the logic into a `Readable` and use [pipe](#pipe). However, if calling `write()` is preferred, it is
possible to respect backpressure and avoid memory issues using the `'drain'` event:

```js
function write(data, cb) {
	if (!stream.write(data)) {
		stream.once('drain', cb);
	} else {
		process.nextTick(cb);
	}
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
	console.log('Write completed, do more writes now.');
});
```

A `Writable` stream in object mode will always ignore the `encoding` argument.

##### Parameters

###### chunk

`any`

Optional data to write. For streams not operating in object mode, `chunk` must be a \{string\}, \{Buffer\},
\{TypedArray\} or \{DataView\}. For object mode streams, `chunk` may be any JavaScript value other than `null`.

###### encoding

`BufferEncoding`

The encoding, if `chunk` is a string.

###### callback?

(`error`) => `void`

Callback for when this chunk of data is flushed.

##### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

##### Since

v0.9.4

##### Inherited from

`Writable.write`

---

### addAbortListener()

> `static` **addAbortListener**(`signal`, `resource`): `Disposable`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:437

**`Experimental`**

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
	let disposable;
	try {
		signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
		disposable = addAbortListener(signal, (e) => {
			// Do something when signal is aborted.
		});
	} finally {
		disposable?.[Symbol.dispose]();
	}
}
```

#### Parameters

##### signal

`AbortSignal`

##### resource

(`event`) => `void`

#### Returns

`Disposable`

Disposable that removes the `abort` listener.

#### Since

v20.5.0

#### Inherited from

`Writable.addAbortListener`

---

### fromWeb()

> `static` **fromWeb**(`writableStream`, `options?`): `Writable`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:724

**`Experimental`**

A utility method for creating a `Writable` from a web `WritableStream`.

#### Parameters

##### writableStream

`WritableStream`

##### options?

`Pick`\<`WritableOptions`\<`Writable`\>, `"decodeStrings"` \| `"highWaterMark"` \| `"objectMode"` \| `"signal"`\>

#### Returns

`Writable`

#### Since

v17.0.0

#### Inherited from

`Writable.fromWeb`

---

### getEventListeners()

> `static` **getEventListeners**(`emitter`, `name`): `Function`[]

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:358

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
	const ee = new EventEmitter();
	const listener = () => console.log('Events are fun');
	ee.on('foo', listener);
	console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
	const et = new EventTarget();
	const listener = () => console.log('Events are fun');
	et.addEventListener('foo', listener);
	console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

#### Parameters

##### emitter

`EventEmitter`\<`DefaultEventMap`\> \| `EventTarget`

##### name

`string` \| `symbol`

#### Returns

`Function`[]

#### Since

v15.2.0, v14.17.0

#### Inherited from

`Writable.getEventListeners`

---

### getMaxListeners()

> `static` **getMaxListeners**(`emitter`): `number`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:387

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
	const ee = new EventEmitter();
	console.log(getMaxListeners(ee)); // 10
	setMaxListeners(11, ee);
	console.log(getMaxListeners(ee)); // 11
}
{
	const et = new EventTarget();
	console.log(getMaxListeners(et)); // 10
	setMaxListeners(11, et);
	console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

##### emitter

`EventEmitter`\<`DefaultEventMap`\> \| `EventTarget`

#### Returns

`number`

#### Since

v19.9.0

#### Inherited from

`Writable.getMaxListeners`

---

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `eventName`): `number`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:330

A class method that returns the number of listeners for the given `eventName` registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

#### Parameters

##### emitter

`EventEmitter`

The emitter to query

##### eventName

`string` \| `symbol`

The event name

#### Returns

`number`

#### Since

v0.9.12

#### Deprecated

Since v3.2.0 - Use `listenerCount` instead.

#### Inherited from

`Writable.listenerCount`

---

### on()

#### Call Signature

> `static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterator`\<`any`[]\>

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:303

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
	ee.emit('foo', 'bar');
	ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
	// The execution of this inner block is synchronous and it
	// processes one event at a time (even with await). Do not use
	// if concurrent execution is required.
	console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
	const ee = new EventEmitter();

	// Emit later on
	process.nextTick(() => {
		ee.emit('foo', 'bar');
		ee.emit('foo', 42);
	});

	for await (const event of on(ee, 'foo', { signal: ac.signal })) {
		// The execution of this inner block is synchronous and it
		// processes one event at a time (even with await). Do not use
		// if concurrent execution is required.
		console.log(event); // prints ['bar'] [42]
	}
	// Unreachable here
})();

process.nextTick(() => ac.abort());
```

Use the `close` option to specify an array of event names that will end the iteration:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
	ee.emit('foo', 'bar');
	ee.emit('foo', 42);
	ee.emit('close');
});

for await (const event of on(ee, 'foo', { close: ['close'] })) {
	console.log(event); // prints ['bar'] [42]
}
// the loop will exit after 'close' is emitted
console.log('done'); // prints 'done'
```

##### Parameters

###### emitter

`EventEmitter`

###### eventName

`string` \| `symbol`

###### options?

`StaticEventEmitterIteratorOptions`

##### Returns

`AsyncIterator`\<`any`[]\>

An `AsyncIterator` that iterates `eventName` events emitted by the `emitter`

##### Since

v13.6.0, v12.16.0

##### Inherited from

`Writable.on`

#### Call Signature

> `static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterator`\<`any`[]\>

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:308

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
	ee.emit('foo', 'bar');
	ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
	// The execution of this inner block is synchronous and it
	// processes one event at a time (even with await). Do not use
	// if concurrent execution is required.
	console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
	const ee = new EventEmitter();

	// Emit later on
	process.nextTick(() => {
		ee.emit('foo', 'bar');
		ee.emit('foo', 42);
	});

	for await (const event of on(ee, 'foo', { signal: ac.signal })) {
		// The execution of this inner block is synchronous and it
		// processes one event at a time (even with await). Do not use
		// if concurrent execution is required.
		console.log(event); // prints ['bar'] [42]
	}
	// Unreachable here
})();

process.nextTick(() => ac.abort());
```

Use the `close` option to specify an array of event names that will end the iteration:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
	ee.emit('foo', 'bar');
	ee.emit('foo', 42);
	ee.emit('close');
});

for await (const event of on(ee, 'foo', { close: ['close'] })) {
	console.log(event); // prints ['bar'] [42]
}
// the loop will exit after 'close' is emitted
console.log('done'); // prints 'done'
```

##### Parameters

###### emitter

`EventTarget`

###### eventName

`string`

###### options?

`StaticEventEmitterIteratorOptions`

##### Returns

`AsyncIterator`\<`any`[]\>

An `AsyncIterator` that iterates `eventName` events emitted by the `emitter`

##### Since

v13.6.0, v12.16.0

##### Inherited from

`Writable.on`

---

### once()

#### Call Signature

> `static` **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:217

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
	ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
	ee.emit('error', err);
});

try {
	await once(ee, 'myevent');
} catch (err) {
	console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()` is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
	.then(([err]) => console.log('ok', err.message))
	.catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
	try {
		await once(emitter, event, { signal });
		console.log('event emitted!');
	} catch (error) {
		if (error.name === 'AbortError') {
			console.error('Waiting for the event was canceled!');
		} else {
			console.error('There was an error', error.message);
		}
	}
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

##### Parameters

###### emitter

`EventEmitter`

###### eventName

`string` \| `symbol`

###### options?

`StaticEventEmitterOptions`

##### Returns

`Promise`\<`any`[]\>

##### Since

v11.13.0, v10.16.0

##### Inherited from

`Writable.once`

#### Call Signature

> `static` **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:222

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
	ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
	ee.emit('error', err);
});

try {
	await once(ee, 'myevent');
} catch (err) {
	console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()` is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
	.then(([err]) => console.log('ok', err.message))
	.catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
	try {
		await once(emitter, event, { signal });
		console.log('event emitted!');
	} catch (error) {
		if (error.name === 'AbortError') {
			console.error('Waiting for the event was canceled!');
		} else {
			console.error('There was an error', error.message);
		}
	}
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

##### Parameters

###### emitter

`EventTarget`

###### eventName

`string`

###### options?

`StaticEventEmitterOptions`

##### Returns

`Promise`\<`any`[]\>

##### Since

v11.13.0, v10.16.0

##### Inherited from

`Writable.once`

---

### setMaxListeners()

> `static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:402

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

##### n?

`number`

A non-negative number. The maximum number of listeners per `EventTarget` event.

##### eventTargets

...(`EventEmitter`\<`DefaultEventMap`\> \| `EventTarget`)[]

Zero or more \{EventTarget\} or \{EventEmitter\} instances. If none are specified, `n` is set as the default max for all newly created \{EventTarget\} and \{EventEmitter\}
objects.

#### Returns

`void`

#### Since

v15.4.0

#### Inherited from

`Writable.setMaxListeners`

---

### toWeb()

> `static` **toWeb**(`streamWritable`): `WritableStream`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:733

**`Experimental`**

A utility method for creating a web `WritableStream` from a `Writable`.

#### Parameters

##### streamWritable

`Writable`

#### Returns

`WritableStream`

#### Since

v17.0.0

#### Inherited from

`Writable.toWeb`
