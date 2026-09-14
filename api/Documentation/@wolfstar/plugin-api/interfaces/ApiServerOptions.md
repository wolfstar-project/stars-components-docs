[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-api](../index.md) / ApiServerOptions

# Interface: ApiServerOptions

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:34](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L34)

## Properties

### automaticallyConnect?

> `optional` **automaticallyConnect?**: `boolean`

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:68](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L68)

Whether to start listening automatically once the interaction webhook is up (during the
`postListen` plugin hook).

#### Default

```ts
true;
```

---

### listenOptions?

> `optional` **listenOptions?**: `ListenOptions`

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:61](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L61)

Raw options forwarded to `Server#listen`.

#### Default

```ts
{
	port: 4000;
}
```

---

### maximumBodyLength?

> `optional` **maximumBodyLength?**: `number`

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:50](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L50)

The maximum request body size in bytes, enforced by the built-in `body` middleware.

#### Default

```ts
1024 * 1024 * 50;
```

---

### origin?

> `optional` **origin?**: `string`

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:44](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L44)

The value of the `Access-Control-Allow-Origin` header set by the built-in `headers` middleware.

#### Default

```ts
'*';
```

---

### prefix?

> `optional` **prefix?**: `string`

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:38](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L38)

A path segment prefix applied to every route, e.g. `/api`.

---

### server?

> `optional` **server?**: `ServerOptions`\<_typeof_ `IncomingMessage`, _typeof_ `ServerResponse`\>

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:55](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L55)

Raw options forwarded to `node:http`'s `createServer`.
