[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/influx-utilities](../index.md) / InfluxDB

# Class: InfluxDB

Defined in: node_modules/.pnpm/@influxdata+influxdb-client@1.35.0/node_modules/@influxdata/influxdb-client/dist/index.d.ts:1155

InfluxDB entry point that configures communication with InfluxDB server
and provide APIs to write and query data.

## Constructors

### Constructor

> **new InfluxDB**(`options`): `InfluxDB`

Defined in: node_modules/.pnpm/@influxdata+influxdb-client@1.35.0/node_modules/@influxdata/influxdb-client/dist/index.d.ts:1163

Creates influxdb client options from an options object or url.

#### Parameters

##### options

`string` \| `ClientOptions`

client options

#### Returns

`InfluxDB`

## Properties

### processCSVResponse

> `readonly` **processCSVResponse**: (`executor`, `iterableResultExecutor`) => `AnnotatedCSVResponse`

Defined in: node_modules/.pnpm/@influxdata+influxdb-client@1.35.0/node_modules/@influxdata/influxdb-client/dist/index.d.ts:1158

#### Parameters

##### executor

`APIExecutor`

##### iterableResultExecutor

`IterableResultExecutor`

#### Returns

`AnnotatedCSVResponse`

---

### transport

> `readonly` **transport**: `Transport`

Defined in: node_modules/.pnpm/@influxdata+influxdb-client@1.35.0/node_modules/@influxdata/influxdb-client/dist/index.d.ts:1157

## Methods

### getQueryApi()

> **getQueryApi**(`org`): [`QueryApi`](../interfaces/QueryApi.md)

Defined in: node_modules/.pnpm/@influxdata+influxdb-client@1.35.0/node_modules/@influxdata/influxdb-client/dist/index.d.ts:1195

Creates QueryApi for the supplied organization .

#### Parameters

##### org

`string` \| `QueryOptions`

organization or query options

#### Returns

[`QueryApi`](../interfaces/QueryApi.md)

QueryApi instance

#### Remarks

See also [query.ts example](https://github.com/influxdata/influxdb-client-js/blob/master/examples/query.ts),
[queryWithParams.mjs example](https://github.com/influxdata/influxdb-client-js/blob/master/examples/queryWithParams.mjs),
[rxjs-query.ts example](https://github.com/influxdata/influxdb-client-js/blob/master/examples/rxjs-query.ts),
and [browser example](https://github.com/influxdata/influxdb-client-js/blob/master/examples/index.html),

---

### getWriteApi()

> **getWriteApi**(`org`, `bucket`, `precision?`, `writeOptions?`): [`WriteApi`](../interfaces/WriteApi.md)

Defined in: node_modules/.pnpm/@influxdata+influxdb-client@1.35.0/node_modules/@influxdata/influxdb-client/dist/index.d.ts:1182

Creates WriteApi for the supplied organization and bucket. BEWARE that returned instances must be closed
in order to flush the remaining data and close already scheduled retry executions.

#### Parameters

##### org

`string`

Specifies the destination organization for writes. Takes either the ID or Name interchangeably.

##### bucket

`string`

The destination bucket for writes.

##### precision?

[`WritePrecisionType`](../type-aliases/WritePrecisionType.md)

Timestamp precision for line items.

##### writeOptions?

`Partial`\<`WriteOptions`\>

Custom write options.

#### Returns

[`WriteApi`](../interfaces/WriteApi.md)

WriteApi instance

#### Remarks

Use WriteOptions to customize retry strategy options, data chunking
and flushing options. See DEFAULT_WriteOptions to see the defaults.

See also [write example](https://github.com/influxdata/influxdb-client-js/blob/master/examples/write.mjs),
[writeAdvanced example](https://github.com/influxdata/influxdb-client-js/blob/master/examples/writeAdvanced.mjs),
and [browser example](https://github.com/influxdata/influxdb-client-js/blob/master/examples/index.html).
