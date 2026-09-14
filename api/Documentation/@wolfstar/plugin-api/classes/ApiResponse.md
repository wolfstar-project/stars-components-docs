[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-api](../index.md) / ApiResponse

# Class: ApiResponse

Defined in: [packages/plugin-api/src/lib/http/ApiResponse.ts:5](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiResponse.ts#L5)

## theme_extends

- `ServerResponse`\<[`ApiRequest`](ApiRequest.md)\>

## Constructors

### Constructor

> **new ApiResponse**(`req`): `ApiResponse`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:803

#### Parameters

##### req

[`ApiRequest`](ApiRequest.md)

#### Returns

`ApiResponse`

#### Inherited from

`ServerResponse<ApiRequest>.constructor`

## Properties

### chunkedEncoding

> **chunkedEncoding**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:575

#### Inherited from

`ServerResponse.chunkedEncoding`

---

### closed

> `readonly` **closed**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:783

Is `true` after `'close'` has been emitted.

#### Since

v18.0.0

#### Inherited from

`ServerResponse.closed`

---

### ~~connection~~

> `readonly` **connection**: `Socket` \| `null`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:593

Alias of `outgoingMessage.socket`.

#### Since

v0.3.0

#### Deprecated

Since v15.12.0,v14.17.1 - Use `socket` instead.

#### Inherited from

`ServerResponse.connection`

---

### destroyed

> **destroyed**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:778

Is `true` after `writable.destroy()` has been called.

#### Since

v8.0.0

#### Inherited from

`ServerResponse.destroyed`

---

### errored

> `readonly` **errored**: `Error` \| `null`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:788

Returns error if the stream has been destroyed with an error.

#### Since

v18.0.0

#### Inherited from

`ServerResponse.errored`

---

### ~~finished~~

> **finished**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:582

#### Deprecated

Use `writableEnded` instead.

#### Inherited from

`ServerResponse.finished`

---

### headersSent

> `readonly` **headersSent**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:587

Read-only. `true` if the headers were sent, otherwise `false`.

#### Since

v0.9.3

#### Inherited from

`ServerResponse.headersSent`

---

### req

> `readonly` **req**: [`ApiRequest`](ApiRequest.md)

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:574

#### Inherited from

`ServerResponse.req`

---

### sendDate

> **sendDate**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:578

#### Inherited from

`ServerResponse.sendDate`

---

### shouldKeepAlive

> **shouldKeepAlive**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:576

#### Inherited from

`ServerResponse.shouldKeepAlive`

---

### socket

> `readonly` **socket**: `Socket` \| `null`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:601

Reference to the underlying socket. Usually, users will not want to access
this property.

After calling `outgoingMessage.end()`, this property will be nulled.

#### Since

v0.3.0

#### Inherited from

`ServerResponse.socket`

---

### statusCode

> **statusCode**: `number`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:780

When using implicit headers (not calling `response.writeHead()` explicitly),
this property controls the status code that will be sent to the client when
the headers get flushed.

```js
response.statusCode = 404;
```

After response header was sent to the client, this property indicates the
status code which was sent out.

#### Since

v0.4.0

#### Inherited from

`ServerResponse.statusCode`

---

### statusMessage

> **statusMessage**: `string`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:795

When using implicit headers (not calling `response.writeHead()` explicitly),
this property controls the status message that will be sent to the client when
the headers get flushed. If this is left as `undefined` then the standard
message for the status code will be used.

```js
response.statusMessage = 'Not found';
```

After response header was sent to the client, this property indicates the
status message which was sent out.

#### Since

v0.11.8

#### Inherited from

`ServerResponse.statusMessage`

---

### strictContentLength

> **strictContentLength**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:802

If set to `true`, Node.js will check whether the `Content-Length` header value and the size of the body, in bytes, are equal.
Mismatching the `Content-Length` header value will result
in an `Error` being thrown, identified by `code:``'ERR_HTTP_CONTENT_LENGTH_MISMATCH'`.

#### Since

v18.10.0, v16.18.0

#### Inherited from

`ServerResponse.strictContentLength`

---

### useChunkedEncodingByDefault

> **useChunkedEncodingByDefault**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:577

#### Inherited from

`ServerResponse.useChunkedEncodingByDefault`

---

### writable

> `readonly` **writable**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:739

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored, or ended.

#### Since

v11.4.0

#### Inherited from

`ServerResponse.writable`

---

### writableCorked

> `readonly` **writableCorked**: `number`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:773

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

#### Since

v13.2.0, v12.16.0

#### Inherited from

`ServerResponse.writableCorked`

---

### writableEnded

> `readonly` **writableEnded**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:745

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

#### Since

v12.9.0

#### Inherited from

`ServerResponse.writableEnded`

---

### writableFinished

> `readonly` **writableFinished**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:750

Is set to `true` immediately before the `'finish'` event is emitted.

#### Since

v12.6.0

#### Inherited from

`ServerResponse.writableFinished`

---

### writableHighWaterMark

> `readonly` **writableHighWaterMark**: `number`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:755

Return the value of `highWaterMark` passed when creating this `Writable`.

#### Since

v9.3.0

#### Inherited from

`ServerResponse.writableHighWaterMark`

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

`ServerResponse.writableLength`

---

### writableNeedDrain

> `readonly` **writableNeedDrain**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:793

Is `true` if the stream's buffer has been full and stream will emit `'drain'`.

#### Since

v15.2.0, v14.17.0

#### Inherited from

`ServerResponse.writableNeedDrain`

---

### writableObjectMode

> `readonly` **writableObjectMode**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:767

Getter for the property `objectMode` of a given `Writable` stream.

#### Since

v12.3.0

#### Inherited from

`ServerResponse.writableObjectMode`

---

### captureRejections

> `static` **captureRejections**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:459

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

#### Since

v13.4.0, v12.16.0

#### Inherited from

`ServerResponse.captureRejections`

---

### captureRejectionSymbol

> `readonly` `static` **captureRejectionSymbol**: _typeof_ [`captureRejectionSymbol`](ApiRequest.md#capturerejectionsymbol)

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:452

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

#### Since

v13.4.0, v12.16.0

#### Inherited from

`ServerResponse.captureRejectionSymbol`

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

`ServerResponse.defaultMaxListeners`

---

### errorMonitor

> `readonly` `static` **errorMonitor**: _typeof_ [`errorMonitor`](ApiRequest.md#errormonitor)

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:445

This symbol shall be used to install a listener for only monitoring `'error'` events. Listeners installed using this symbol are called before the regular `'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an `'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

#### Since

v13.6.0, v12.17.0

#### Inherited from

`ServerResponse.errorMonitor`

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

`ServerResponse._construct`

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

`ServerResponse._destroy`

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

`ServerResponse._final`

---

### \_write()

> **\_write**(`chunk`, `encoding`, `callback`): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:795

#### Parameters

##### chunk

`any`

##### encoding

`BufferEncoding`

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

`ServerResponse._write`

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

`ServerResponse._writev`

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

`ServerResponse.[captureRejectionSymbol]`

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

`ServerResponse.addListener`

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

`ServerResponse.addListener`

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

`ServerResponse.addListener`

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

`ServerResponse.addListener`

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

`ServerResponse.addListener`

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

`ServerResponse.addListener`

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

`ServerResponse.addListener`

---

### addTrailers()

> **addTrailers**(`headers`): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:746

Adds HTTP trailers (headers but at the end of the message) to the message.

Trailers will **only** be emitted if the message is chunked encoded. If not,
the trailers will be silently discarded.

HTTP requires the `Trailer` header to be sent to emit trailers,
with a list of header field names in its value, e.g.

```js
message.writeHead(200, { 'Content-Type': 'text/plain', Trailer: 'Content-MD5' });
message.write(fileData);
message.addTrailers({ 'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667' });
message.end();
```

Attempting to set a header field name or value that contains invalid characters
will result in a `TypeError` being thrown.

#### Parameters

##### headers

`OutgoingHttpHeaders` \| readonly \[`string`, `string`\][]

#### Returns

`void`

#### Since

v0.3.0

#### Inherited from

`ServerResponse.addTrailers`

---

### appendHeader()

> **appendHeader**(`name`, `value`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:669

Append a single header value to the header object.

If the value is an array, this is equivalent to calling this method multiple
times.

If there were no previous values for the header, this is equivalent to calling `outgoingMessage.setHeader(name, value)`.

Depending of the value of `options.uniqueHeaders` when the client request or the
server were created, this will end up in the header being sent multiple times or
a single time with values joined using `; `.

#### Parameters

##### name

`string`

Header name

##### value

`string` \| readonly `string`[]

Header value

#### Returns

`this`

#### Since

v18.3.0, v16.17.0

#### Inherited from

`ServerResponse.appendHeader`

---

### assignSocket()

> **assignSocket**(`socket`): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:804

#### Parameters

##### socket

`Socket`

#### Returns

`void`

#### Inherited from

`ServerResponse.assignSocket`

---

### badRequest()

> **badRequest**(`body?`): `this`

Defined in: [packages/plugin-api/src/lib/http/ApiResponse.ts:41](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiResponse.ts#L41)

#### Parameters

##### body?

`unknown` = `...`

#### Returns

`this`

---

### compose()

> **compose**\<`T`\>(`stream`, `options?`): `T`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:35

#### Type Parameters

##### T

`T` _extends_ `ReadableStream`

#### Parameters

##### stream

`ComposeFnParam` \| `T` \| `Iterable`\<`T`, `any`, `any`\> \| `AsyncIterable`\<`T`, `any`, `any`\>

##### options?

###### signal

`AbortSignal`

#### Returns

`T`

#### Inherited from

`ServerResponse.compose`

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

`ServerResponse.cork`

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

`ServerResponse.destroy`

---

### detachSocket()

> **detachSocket**(`socket`): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:805

#### Parameters

##### socket

`Socket`

#### Returns

`void`

#### Inherited from

`ServerResponse.detachSocket`

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

`ServerResponse.emit`

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:979

##### Parameters

###### event

`"drain"`

##### Returns

`boolean`

##### Inherited from

`ServerResponse.emit`

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

`ServerResponse.emit`

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/stream.d.ts:981

##### Parameters

###### event

`"finish"`

##### Returns

`boolean`

##### Inherited from

`ServerResponse.emit`

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

`ServerResponse.emit`

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

`ServerResponse.emit`

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

`ServerResponse.emit`

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

`ServerResponse.end`

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

`ServerResponse.end`

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

`ServerResponse.end`

---

### error()

> **error**(`statusCode?`, `body?`): `this`

Defined in: [packages/plugin-api/src/lib/http/ApiResponse.ts:45](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiResponse.ts#L45)

#### Parameters

##### statusCode?

`number` = `HttpCodes.InternalServerError`

##### body?

`unknown` = `...`

#### Returns

`this`

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

`ServerResponse.eventNames`

---

### flushHeaders()

> **flushHeaders**(): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:759

Flushes the message headers.

For efficiency reason, Node.js normally buffers the message headers
until `outgoingMessage.end()` is called or the first chunk of message data
is written. It then tries to pack the headers and data into a single TCP
packet.

It is usually desired (it saves a TCP round-trip), but not when the first
data is not sent until possibly much later. `outgoingMessage.flushHeaders()` bypasses the optimization and kickstarts the message.

#### Returns

`void`

#### Since

v1.6.0

#### Inherited from

`ServerResponse.flushHeaders`

---

### getHeader()

> **getHeader**(`name`): `string` \| `number` \| `string`[] \| `undefined`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:676

Gets the value of the HTTP header with the given name. If that header is not
set, the returned value will be `undefined`.

#### Parameters

##### name

`string`

Name of header

#### Returns

`string` \| `number` \| `string`[] \| `undefined`

#### Since

v0.4.0

#### Inherited from

`ServerResponse.getHeader`

---

### getHeaderNames()

> **getHeaderNames**(): `string`[]

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:704

Returns an array containing the unique names of the current outgoing headers.
All names are lowercase.

#### Returns

`string`[]

#### Since

v7.7.0

#### Inherited from

`ServerResponse.getHeaderNames`

---

### getHeaders()

> **getHeaders**(): `OutgoingHttpHeaders`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:698

Returns a shallow copy of the current outgoing headers. Since a shallow
copy is used, array values may be mutated without additional calls to
various header-related HTTP module methods. The keys of the returned
object are the header names and the values are the respective header
values. All header names are lowercase.

The object returned by the `outgoingMessage.getHeaders()` method does
not prototypically inherit from the JavaScript `Object`. This means that
typical `Object` methods such as `obj.toString()`, `obj.hasOwnProperty()`,
and others are not defined and will not work.

```js
outgoingMessage.setHeader('Foo', 'bar');
outgoingMessage.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);

const headers = outgoingMessage.getHeaders();
// headers === { foo: 'bar', 'set-cookie': ['foo=bar', 'bar=baz'] }
```

#### Returns

`OutgoingHttpHeaders`

#### Since

v7.7.0

#### Inherited from

`ServerResponse.getHeaders`

---

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:774

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [EventEmitter.defaultMaxListeners](ApiRequest.md#defaultmaxlisteners).

#### Returns

`number`

#### Since

v1.0.0

#### Inherited from

`ServerResponse.getMaxListeners`

---

### hasHeader()

> **hasHeader**(`name`): `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:714

Returns `true` if the header identified by `name` is currently set in the
outgoing headers. The header name is case-insensitive.

```js
const hasContentType = outgoingMessage.hasHeader('content-type');
```

#### Parameters

##### name

`string`

#### Returns

`boolean`

#### Since

v7.7.0

#### Inherited from

`ServerResponse.hasHeader`

---

### json()

> **json**(`body`, `statusCode?`): `this`

Defined in: [packages/plugin-api/src/lib/http/ApiResponse.ts:11](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiResponse.ts#L11)

#### Parameters

##### body

`unknown`

##### statusCode?

`number` = `HttpCodes.OK`

#### Returns

`this`

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

`ServerResponse.listenerCount`

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

`ServerResponse.listeners`

---

### methodNotAllowed()

> **methodNotAllowed**(`body?`): `this`

Defined in: [packages/plugin-api/src/lib/http/ApiResponse.ts:37](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiResponse.ts#L37)

#### Parameters

##### body?

`unknown` = `...`

#### Returns

`this`

---

### noContent()

> **noContent**(): `this`

Defined in: [packages/plugin-api/src/lib/http/ApiResponse.ts:27](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiResponse.ts#L27)

#### Returns

`this`

---

### notFound()

> **notFound**(`body?`): `this`

Defined in: [packages/plugin-api/src/lib/http/ApiResponse.ts:33](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiResponse.ts#L33)

#### Parameters

##### body?

`unknown` = `...`

#### Returns

`this`

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

`ServerResponse.off`

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

`ServerResponse.on`

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

`ServerResponse.on`

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

`ServerResponse.on`

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

`ServerResponse.on`

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

`ServerResponse.on`

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

`ServerResponse.on`

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

`ServerResponse.on`

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

`ServerResponse.once`

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

`ServerResponse.once`

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

`ServerResponse.once`

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

`ServerResponse.once`

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

`ServerResponse.once`

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

`ServerResponse.once`

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

`ServerResponse.once`

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

`ServerResponse.pipe`

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

`ServerResponse.prependListener`

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

`ServerResponse.prependListener`

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

`ServerResponse.prependListener`

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

`ServerResponse.prependListener`

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

`ServerResponse.prependListener`

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

`ServerResponse.prependListener`

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

`ServerResponse.prependListener`

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

`ServerResponse.prependOnceListener`

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

`ServerResponse.prependOnceListener`

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

`ServerResponse.prependOnceListener`

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

`ServerResponse.prependOnceListener`

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

`ServerResponse.prependOnceListener`

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

`ServerResponse.prependOnceListener`

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

`ServerResponse.prependOnceListener`

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

`ServerResponse.rawListeners`

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

`ServerResponse.removeAllListeners`

---

### removeHeader()

> **removeHeader**(`name`): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:724

Removes a header that is queued for implicit sending.

```js
outgoingMessage.removeHeader('Content-Encoding');
```

#### Parameters

##### name

`string`

Header name

#### Returns

`void`

#### Since

v0.4.0

#### Inherited from

`ServerResponse.removeHeader`

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

`ServerResponse.removeListener`

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

`ServerResponse.removeListener`

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

`ServerResponse.removeListener`

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

`ServerResponse.removeListener`

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

`ServerResponse.removeListener`

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

`ServerResponse.removeListener`

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

`ServerResponse.removeListener`

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

`ServerResponse.setDefaultEncoding`

---

### setHeader()

> **setHeader**(`name`, `value`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:617

Sets a single header value. If the header already exists in the to-be-sent
headers, its value will be replaced. Use an array of strings to send multiple
headers with the same name.

#### Parameters

##### name

`string`

Header name

##### value

`string` \| `number` \| readonly `string`[]

Header value

#### Returns

`this`

#### Since

v0.4.0

#### Inherited from

`ServerResponse.setHeader`

---

### setHeaders()

> **setHeaders**(`headers`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:653

Sets multiple header values for implicit headers. headers must be an instance of
`Headers` or `Map`, if a header already exists in the to-be-sent headers, its
value will be replaced.

```js
const headers = new Headers({ foo: 'bar' });
outgoingMessage.setHeaders(headers);
```

or

```js
const headers = new Map([['foo', 'bar']]);
outgoingMessage.setHeaders(headers);
```

When headers have been set with `outgoingMessage.setHeaders()`, they will be
merged with any headers passed to `response.writeHead()`, with the headers passed
to `response.writeHead()` given precedence.

```js
// Returns content-type = text/plain
const server = http.createServer((req, res) => {
	const headers = new Headers({ 'Content-Type': 'text/html' });
	res.setHeaders(headers);
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('ok');
});
```

#### Parameters

##### headers

`Headers` \| `Map`\<`string`, `string` \| `number` \| readonly `string`[]\>

#### Returns

`this`

#### Since

v19.6.0, v18.15.0

#### Inherited from

`ServerResponse.setHeaders`

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

`ServerResponse.setMaxListeners`

---

### setTimeout()

> **setTimeout**(`msecs`, `callback?`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:608

Once a socket is associated with the message and is connected, `socket.setTimeout()` will be called with `msecs` as the first parameter.

#### Parameters

##### msecs

`number`

##### callback?

() => `void`

Optional function to be called when a timeout occurs. Same as binding to the `timeout` event.

#### Returns

`this`

#### Since

v0.9.12

#### Inherited from

`ServerResponse.setTimeout`

---

### status()

> **status**(`statusCode`): `this`

Defined in: [packages/plugin-api/src/lib/http/ApiResponse.ts:6](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiResponse.ts#L6)

#### Parameters

##### statusCode

`number`

#### Returns

`this`

---

### text()

> **text**(`body`, `statusCode?`): `this`

Defined in: [packages/plugin-api/src/lib/http/ApiResponse.ts:19](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiResponse.ts#L19)

#### Parameters

##### body

`string`

##### statusCode?

`number` = `HttpCodes.OK`

#### Returns

`this`

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

`ServerResponse.uncork`

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

`ServerResponse.write`

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

`ServerResponse.write`

---

### writeContinue()

> **writeContinue**(`callback?`): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:811

Sends an HTTP/1.1 100 Continue message to the client, indicating that
the request body should be sent. See the `'checkContinue'` event on `Server`.

#### Parameters

##### callback?

() => `void`

#### Returns

`void`

#### Since

v0.3.0

#### Inherited from

`ServerResponse.writeContinue`

---

### writeEarlyHints()

> **writeEarlyHints**(`hints`, `callback?`): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:845

Sends an HTTP/1.1 103 Early Hints message to the client with a Link header,
indicating that the user agent can preload/preconnect the linked resources.
The `hints` is an object containing the values of headers to be sent with
early hints message. The optional `callback` argument will be called when
the response message has been written.

**Example**

```js
const earlyHintsLink = '</styles.css>; rel=preload; as=style';
response.writeEarlyHints({
	link: earlyHintsLink
});

const earlyHintsLinks = ['</styles.css>; rel=preload; as=style', '</scripts.js>; rel=preload; as=script'];
response.writeEarlyHints({
	link: earlyHintsLinks,
	'x-trace-id': 'id for diagnostics'
});

const earlyHintsCallback = () => console.log('early hints message sent');
response.writeEarlyHints(
	{
		link: earlyHintsLinks
	},
	earlyHintsCallback
);
```

#### Parameters

##### hints

`Record`\<`string`, `string` \| `string`[]\>

An object containing the values of headers

##### callback?

() => `void`

Will be called when the response message has been written

#### Returns

`void`

#### Since

v18.11.0

#### Inherited from

`ServerResponse.writeEarlyHints`

---

### writeHead()

#### Call Signature

> **writeHead**(`statusCode`, `statusMessage?`, `headers?`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:903

Sends a response header to the request. The status code is a 3-digit HTTP
status code, like `404`. The last argument, `headers`, are the response headers.
Optionally one can give a human-readable `statusMessage` as the second
argument.

`headers` may be an `Array` where the keys and values are in the same list.
It is _not_ a list of tuples. So, the even-numbered offsets are key values,
and the odd-numbered offsets are the associated values. The array is in the same
format as `request.rawHeaders`.

Returns a reference to the `ServerResponse`, so that calls can be chained.

```js
const body = 'hello world';
response
	.writeHead(200, {
		'Content-Length': Buffer.byteLength(body),
		'Content-Type': 'text/plain'
	})
	.end(body);
```

This method must only be called once on a message and it must
be called before `response.end()` is called.

If `response.write()` or `response.end()` are called before calling
this, the implicit/mutable headers will be calculated and call this function.

When headers have been set with `response.setHeader()`, they will be merged
with any headers passed to `response.writeHead()`, with the headers passed
to `response.writeHead()` given precedence.

If this method is called and `response.setHeader()` has not been called,
it will directly write the supplied header values onto the network channel
without caching internally, and the `response.getHeader()` on the header
will not yield the expected result. If progressive population of headers is
desired with potential future retrieval and modification, use `response.setHeader()` instead.

```js
// Returns content-type = text/plain
const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.setHeader('X-Foo', 'bar');
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('ok');
});
```

`Content-Length` is read in bytes, not characters. Use `Buffer.byteLength()` to determine the length of the body in bytes. Node.js
will check whether `Content-Length` and the length of the body which has
been transmitted are equal or not.

Attempting to set a header field name or value that contains invalid characters
will result in a \[`Error`\]\[\] being thrown.

##### Parameters

###### statusCode

`number`

###### statusMessage?

`string`

###### headers?

`OutgoingHttpHeaders` \| `OutgoingHttpHeader`[]

##### Returns

`this`

##### Since

v0.1.30

##### Inherited from

`ServerResponse.writeHead`

#### Call Signature

> **writeHead**(`statusCode`, `headers?`): `this`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:908

Sends a response header to the request. The status code is a 3-digit HTTP
status code, like `404`. The last argument, `headers`, are the response headers.
Optionally one can give a human-readable `statusMessage` as the second
argument.

`headers` may be an `Array` where the keys and values are in the same list.
It is _not_ a list of tuples. So, the even-numbered offsets are key values,
and the odd-numbered offsets are the associated values. The array is in the same
format as `request.rawHeaders`.

Returns a reference to the `ServerResponse`, so that calls can be chained.

```js
const body = 'hello world';
response
	.writeHead(200, {
		'Content-Length': Buffer.byteLength(body),
		'Content-Type': 'text/plain'
	})
	.end(body);
```

This method must only be called once on a message and it must
be called before `response.end()` is called.

If `response.write()` or `response.end()` are called before calling
this, the implicit/mutable headers will be calculated and call this function.

When headers have been set with `response.setHeader()`, they will be merged
with any headers passed to `response.writeHead()`, with the headers passed
to `response.writeHead()` given precedence.

If this method is called and `response.setHeader()` has not been called,
it will directly write the supplied header values onto the network channel
without caching internally, and the `response.getHeader()` on the header
will not yield the expected result. If progressive population of headers is
desired with potential future retrieval and modification, use `response.setHeader()` instead.

```js
// Returns content-type = text/plain
const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.setHeader('X-Foo', 'bar');
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('ok');
});
```

`Content-Length` is read in bytes, not characters. Use `Buffer.byteLength()` to determine the length of the body in bytes. Node.js
will check whether `Content-Length` and the length of the body which has
been transmitted are equal or not.

Attempting to set a header field name or value that contains invalid characters
will result in a \[`Error`\]\[\] being thrown.

##### Parameters

###### statusCode

`number`

###### headers?

`OutgoingHttpHeaders` \| `OutgoingHttpHeader`[]

##### Returns

`this`

##### Since

v0.1.30

##### Inherited from

`ServerResponse.writeHead`

---

### writeProcessing()

> **writeProcessing**(): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/http.d.ts:914

Sends a HTTP/1.1 102 Processing message to the client, indicating that
the request body should be sent.

#### Returns

`void`

#### Since

v10.0.0

#### Inherited from

`ServerResponse.writeProcessing`

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

`ServerResponse.addAbortListener`

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

`Pick`\<`WritableOptions`\<`Writable`\>, `"highWaterMark"` \| `"objectMode"` \| `"signal"` \| `"decodeStrings"`\>

#### Returns

`Writable`

#### Since

v17.0.0

#### Inherited from

`ServerResponse.fromWeb`

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

`ServerResponse.getEventListeners`

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

`ServerResponse.getMaxListeners`

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

`ServerResponse.listenerCount`

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

`ServerResponse.on`

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

`ServerResponse.on`

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

`ServerResponse.once`

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

`ServerResponse.once`

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

`ServerResponse.setMaxListeners`

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

`ServerResponse.toWeb`
