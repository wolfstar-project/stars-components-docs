[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/influx-utilities](../index.md) / ConnectionOptions

# Interface: ConnectionOptions

Defined in: [packages/influx-utilities/src/lib/types.ts:3](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/influx-utilities/src/lib/types.ts#L3)

## theme_extends

- `Partial`\<`ClientOptions`\>

## Properties

### headers?

> `optional` **headers?**: `Record`\<`string`, `string`\>

Defined in: node_modules/.pnpm/@influxdata+influxdb-client@1.35.0/node_modules/@influxdata/influxdb-client/dist/index.d.ts:690

Default HTTP headers to send with every request.

#### Inherited from

`Partial.headers`

---

### org?

> `optional` **org?**: `string`

Defined in: [packages/influx-utilities/src/lib/types.ts:8](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/influx-utilities/src/lib/types.ts#L8)

The URL to connect to.

#### Default

```ts
process.env.INFLUX_ORG;
```

---

### proxyUrl?

> `optional` **proxyUrl?**: `string`

Defined in: node_modules/.pnpm/@influxdata+influxdb-client@1.35.0/node_modules/@influxdata/influxdb-client/dist/index.d.ts:694

Full HTTP web proxy URL including schema, for example http://your-proxy:8080.

#### Inherited from

`Partial.proxyUrl`

---

### timeout?

> `optional` **timeout?**: `number`

Defined in: node_modules/.pnpm/@influxdata+influxdb-client@1.35.0/node_modules/@influxdata/influxdb-client/dist/index.d.ts:671

socket timeout, 10000 milliseconds by default in node.js

#### Default Value

```ts
10000;
```

#### Inherited from

`Partial.timeout`

---

### token?

> `optional` **token?**: `string`

Defined in: node_modules/.pnpm/@influxdata+influxdb-client@1.35.0/node_modules/@influxdata/influxdb-client/dist/index.d.ts:666

authentication token

#### Inherited from

`Partial.token`

---

### transport?

> `optional` **transport?**: `Transport`

Defined in: node_modules/.pnpm/@influxdata+influxdb-client@1.35.0/node_modules/@influxdata/influxdb-client/dist/index.d.ts:794

specifies custom transport

#### Inherited from

`Partial.transport`

---

### transportOptions?

> `optional` **transportOptions?**: `object`

Defined in: node_modules/.pnpm/@influxdata+influxdb-client@1.35.0/node_modules/@influxdata/influxdb-client/dist/index.d.ts:684

TransportOptions supply extra options for the transport layer, they differ between node.js and browser/deno.
Node.js transport accepts options specified in [http.request](https://nodejs.org/api/http.html#http_http_request_options_callback) or
[https.request](https://nodejs.org/api/https.html#https_https_request_options_callback). For example, an `agent` property can be set to
[setup HTTP/HTTPS proxy](https://www.npmjs.com/package/proxy-http-agent), [rejectUnauthorized](https://nodejs.org/api/tls.html#tls_tls_connect_options_callback)
property can disable TLS server certificate verification. Additionally,
[follow-redirects](https://github.com/follow-redirects/follow-redirects) property can be also specified
in order to follow redirects in node.js.
[fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) is used under the hood in browser/deno.
For example,
[redirect](https://developer.mozilla.org/en-US/docs/Web/API/fetch) property can be set to 'error' to abort request if a redirect occurs.

#### Index Signature

\[`key`: `string`\]: `any`

#### Inherited from

`Partial.transportOptions`

---

### url?

> `optional` **url?**: `string`

Defined in: node_modules/.pnpm/@influxdata+influxdb-client@1.35.0/node_modules/@influxdata/influxdb-client/dist/index.d.ts:664

base URL

#### Inherited from

`Partial.url`

---

### writeBucket?

> `optional` **writeBucket?**: `string`

Defined in: [packages/influx-utilities/src/lib/types.ts:14](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/influx-utilities/src/lib/types.ts#L14)

The bucket to write to.

#### Default

```ts
process.env.INFLUX_BUCKET;
```

---

### writeOptions?

> `optional` **writeOptions?**: `Partial`\<`WriteOptions`\>

Defined in: node_modules/.pnpm/@influxdata+influxdb-client@1.35.0/node_modules/@influxdata/influxdb-client/dist/index.d.ts:792

supplies and overrides default writing options

#### Inherited from

`Partial.writeOptions`

---

### writePrecision?

> `optional` **writePrecision?**: [`WritePrecisionType`](../type-aliases/WritePrecisionType.md)

Defined in: [packages/influx-utilities/src/lib/types.ts:20](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/influx-utilities/src/lib/types.ts#L20)

The precision of the timestamp.

#### Default

```ts
's';
```
