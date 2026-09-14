[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/influx-utilities](../index.md) / Client

# Class: Client

Defined in: [packages/influx-utilities/src/lib/Client.ts:5](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/influx-utilities/src/lib/Client.ts#L5)

## Constructors

### Constructor

> **new Client**(`options?`): `Client`

Defined in: [packages/influx-utilities/src/lib/Client.ts:12](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/influx-utilities/src/lib/Client.ts#L12)

#### Parameters

##### options?

[`ConnectionOptions`](../interfaces/ConnectionOptions.md) = `{}`

#### Returns

`Client`

## Properties

### influx

> `readonly` **influx**: [`InfluxDB`](InfluxDB.md)

Defined in: [packages/influx-utilities/src/lib/Client.ts:6](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/influx-utilities/src/lib/Client.ts#L6)

---

### queryApi

> `readonly` **queryApi**: [`QueryApi`](../interfaces/QueryApi.md)

Defined in: [packages/influx-utilities/src/lib/Client.ts:7](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/influx-utilities/src/lib/Client.ts#L7)

---

### writeApi

> `readonly` **writeApi**: [`WriteApi`](../interfaces/WriteApi.md)

Defined in: [packages/influx-utilities/src/lib/Client.ts:8](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/influx-utilities/src/lib/Client.ts#L8)

## Methods

### addInjectTag()

> **addInjectTag**(`name`, `value`): `void`

Defined in: [packages/influx-utilities/src/lib/Client.ts:28](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/influx-utilities/src/lib/Client.ts#L28)

Adds a tag that will be injected in all points.

#### Parameters

##### name

`string`

The name of the tag to inject.

##### value

`string`

The value of the tag to inject.

#### Returns

`void`

---

### flush()

> **flush**(`withRetryBuffer?`): `Promise`\<`void`\>

Defined in: [packages/influx-utilities/src/lib/Client.ts:52](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/influx-utilities/src/lib/Client.ts#L52)

Flushes the pending writes to the server.

#### Parameters

##### withRetryBuffer?

`boolean`

Whether or not it should flush the scheduled retries

#### Returns

`Promise`\<`void`\>

---

### writePoint()

> **writePoint**(`point`): `void`

Defined in: [packages/influx-utilities/src/lib/Client.ts:36](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/influx-utilities/src/lib/Client.ts#L36)

Writes a point into the write buffer.

#### Parameters

##### point

[`Point`](Point.md)

The point to write.

#### Returns

`void`

---

### writePoints()

> **writePoints**(`points`): `void`

Defined in: [packages/influx-utilities/src/lib/Client.ts:44](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/influx-utilities/src/lib/Client.ts#L44)

Writes multiple points into the write buffer.

#### Parameters

##### points

readonly [`Point`](Point.md)[]

The points to write.

#### Returns

`void`
