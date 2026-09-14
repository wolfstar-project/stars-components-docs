[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / ListenOptions

# Interface: ListenOptions

Defined in: [packages/http-framework/src/lib/Client.ts:274](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L274)

## theme_extends

- `Omit`\<`NetListenOptions`, `"path"` \| `"readableAll"` \| `"writableAll"`\>

## Properties

### address?

> `optional` **address?**: `string`

Defined in: [packages/http-framework/src/lib/Client.ts:283](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L283)

The address at which the server will be started.

---

### backlog?

> `optional` **backlog?**: `number`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/net.d.ts:496

#### Inherited from

`Omit.backlog`

---

### exclusive?

> `optional` **exclusive?**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/net.d.ts:497

#### Inherited from

`Omit.exclusive`

---

### host?

> `optional` **host?**: `string`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/net.d.ts:498

#### Inherited from

`Omit.host`

---

### ipv6Only?

> `optional` **ipv6Only?**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/net.d.ts:502

#### Default

```ts
false;
```

#### Inherited from

`Omit.ipv6Only`

---

### port

> **port**: `number`

Defined in: [packages/http-framework/src/lib/Client.ts:278](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L278)

The port at which the server will listen for requests.

#### Overrides

`Omit.port`

---

### postPath?

> `optional` **postPath?**: `` `/${string}` ``

Defined in: [packages/http-framework/src/lib/Client.ts:289](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L289)

The path the HTTP server will listen to.

#### Default

```ts
process.env.HTTP_POST_PATH ?? '/';
```

---

### reusePort?

> `optional` **reusePort?**: `boolean`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/net.d.ts:503

#### Inherited from

`Omit.reusePort`

---

### serverOptions?

> `optional` **serverOptions?**: `ServerOptions`\<_typeof_ `IncomingMessage`, _typeof_ `ServerResponse`\>

Defined in: [packages/http-framework/src/lib/Client.ts:294](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L294)

The options to pass to the `createServer` function.

---

### signal?

> `optional` **signal?**: `AbortSignal`

Defined in: node_modules/.pnpm/@types+node@22.15.21/node_modules/@types/node/events.d.ts:508

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

`Omit.signal`
