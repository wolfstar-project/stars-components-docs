[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / ChatInputRouterError

# Class: ChatInputRouterError\<Options\>

Defined in: [packages/http-framework/src/lib/errors/ChatInputRouterError.ts:10](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/ChatInputRouterError.ts#L10)

Represents an error that is thrown when a ChatInputRouter encounters an error.

## Since

2.0.0

## theme_extends

- [`UserError`](UserError.md)

## Type Parameters

### Options

`Options` _extends_ [`Options`](../namespaces/Command/type-aliases/Options.md) = [`Options`](../namespaces/Command/type-aliases/Options.md)

## Constructors

### Constructor

> **new ChatInputRouterError**\<`Options`\>(`key`, `command`, `group?`, `subcommand?`): `ChatInputRouterError`\<`Options`\>

Defined in: [packages/http-framework/src/lib/errors/ChatInputRouterError.ts:35](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/ChatInputRouterError.ts#L35)

#### Parameters

##### key

`"DuplicatedSubcommandGroup"` \| `"DuplicatedSubcommand"` \| `"SubcommandGroupLinkInvalid"` \| `"SubcommandLinkInvalid"`

##### command

[`Command`](Command.md)\<`Options`\>

##### group?

`APIApplicationCommandSubcommandGroupOption` \| `null`

##### subcommand?

`APIApplicationCommandSubcommandOption` \| `null`

#### Returns

`ChatInputRouterError`\<`Options`\>

#### Overrides

[`UserError`](UserError.md).[`constructor`](UserError.md#constructor)

## Properties

### cause?

> `optional` **cause?**: `unknown`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

[`UserError`](UserError.md).[`cause`](UserError.md#cause)

---

### command

> `readonly` **command**: [`Command`](Command.md)\<`Options`\>

Defined in: [packages/http-framework/src/lib/errors/ChatInputRouterError.ts:21](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/ChatInputRouterError.ts#L21)

The command that was being processed when the error was thrown.

#### Since

2.0.0

---

### context

> `readonly` **context**: `unknown`

Defined in: [packages/http-framework/src/lib/errors/UserError.ts:30](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/UserError.ts#L30)

User-provided context.

#### Since

3.2.0

#### Inherited from

[`UserError`](UserError.md).[`context`](UserError.md#context)

---

### group

> `readonly` **group**: `APIApplicationCommandSubcommandGroupOption` \| `null`

Defined in: [packages/http-framework/src/lib/errors/ChatInputRouterError.ts:27](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/ChatInputRouterError.ts#L27)

The subcommand group that was being processed when the error was thrown, if any.

#### Since

2.0.0

---

### identifier

> `readonly` **identifier**: `string`

Defined in: [packages/http-framework/src/lib/errors/UserError.ts:24](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/UserError.ts#L24)

An identifier, useful to localize emitted errors.

#### Since

3.2.0

#### Inherited from

[`UserError`](UserError.md).[`identifier`](UserError.md#identifier)

---

### key

> `readonly` **key**: `"DuplicatedSubcommandGroup"` \| `"DuplicatedSubcommand"` \| `"SubcommandGroupLinkInvalid"` \| `"SubcommandLinkInvalid"`

Defined in: [packages/http-framework/src/lib/errors/ChatInputRouterError.ts:15](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/ChatInputRouterError.ts#L15)

The key identifying the error.

#### Since

2.0.0

---

### message

> **message**: `string`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`UserError`](UserError.md).[`message`](UserError.md#message)

---

### stack?

> `optional` **stack?**: `string`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

[`UserError`](UserError.md).[`stack`](UserError.md#stack)

---

### subcommand

> `readonly` **subcommand**: `APIApplicationCommandSubcommandOption` \| `null`

Defined in: [packages/http-framework/src/lib/errors/ChatInputRouterError.ts:33](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/ChatInputRouterError.ts#L33)

The subcommand that was being processed when the error was thrown, if any.

#### Since

2.0.0

---

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/globals.d.ts:161

The `Error.stackTraceLimit` property specifies the number of stack frames
collected by a stack trace (whether generated by `new Error().stack` or
`Error.captureStackTrace(obj)`).

The default value is `10` but may be set to any valid JavaScript number. Changes
will affect any stack trace captured _after_ the value has been changed.

If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.

#### Inherited from

[`UserError`](UserError.md).[`stackTraceLimit`](UserError.md#stacktracelimit)

## Accessors

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [packages/http-framework/src/lib/errors/ChatInputRouterError.ts:60](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/ChatInputRouterError.ts#L60)

##### Returns

`string`

This will be `'UserError'` and can be used to distinguish the type of error when any error gets thrown.

#### Overrides

[`UserError`](UserError.md).[`name`](UserError.md#name)

---

### path

#### Get Signature

> **get** **path**(): `string`

Defined in: [packages/http-framework/src/lib/errors/ChatInputRouterError.ts:56](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/ChatInputRouterError.ts#L56)

The path of the command that was being processed when the error was thrown.

##### Since

2.0.0

##### Returns

`string`

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/globals.d.ts:145

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack; // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
	b();
}

function b() {
	c();
}

function c() {
	// Create an error without stack trace to avoid calculating the stack trace twice.
	const { stackTraceLimit } = Error;
	Error.stackTraceLimit = 0;
	const error = new Error();
	Error.stackTraceLimit = stackTraceLimit;

	// Capture the stack trace above function b
	Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
	throw error;
}

a();
```

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

[`UserError`](UserError.md).[`captureStackTrace`](UserError.md#capturestacktrace)

---

### prepareStackTrace()

> `static` **prepareStackTrace**(`err`, `stackTraces`): `any`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/globals.d.ts:149

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`UserError`](UserError.md).[`prepareStackTrace`](UserError.md#preparestacktrace)
