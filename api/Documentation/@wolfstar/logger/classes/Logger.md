[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/logger](../index.md) / Logger

# Class: Logger

Defined in: [packages/logger/src/lib/Logger.ts:4](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/logger/src/lib/Logger.ts#L4)

## Constructors

### Constructor

> **new Logger**(`options?`): `Logger`

Defined in: [packages/logger/src/lib/Logger.ts:20](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/logger/src/lib/Logger.ts#L20)

#### Parameters

##### options?

[`Options`](../namespaces/Logger/interfaces/Options.md) = `{}`

#### Returns

`Logger`

## Properties

### depth

> `readonly` **depth**: `number`

Defined in: [packages/logger/src/lib/Logger.ts:13](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/logger/src/lib/Logger.ts#L13)

The inspect depth when logging objects.

---

### level

> `readonly` **level**: [`Level`](../namespaces/Logger/enumerations/Level.md)

Defined in: [packages/logger/src/lib/Logger.ts:8](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/logger/src/lib/Logger.ts#L8)

The depth of the inspect.

---

### levels

> `readonly` **levels**: `Readonly`\<`Record`\<[`Level`](../namespaces/Logger/enumerations/Level.md), `Readonly`\<[`LevelContext`](../namespaces/Logger/interfaces/LevelContext.md)\>\>\>

Defined in: [packages/logger/src/lib/Logger.ts:18](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/logger/src/lib/Logger.ts#L18)

The context for each logging level.

## Methods

### debug()

> **debug**(`value`, ...`args`): `void`

Defined in: [packages/logger/src/lib/Logger.ts:46](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/logger/src/lib/Logger.ts#L46)

#### Parameters

##### value

`unknown`

##### args

...readonly `unknown`[]

#### Returns

`void`

---

### disabled()

> **disabled**(`level`): `boolean`

Defined in: [packages/logger/src/lib/Logger.ts:38](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/logger/src/lib/Logger.ts#L38)

#### Parameters

##### level

[`Level`](../namespaces/Logger/enumerations/Level.md)

#### Returns

`boolean`

---

### enabled()

> **enabled**(`level`): `boolean`

Defined in: [packages/logger/src/lib/Logger.ts:34](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/logger/src/lib/Logger.ts#L34)

#### Parameters

##### level

[`Level`](../namespaces/Logger/enumerations/Level.md)

#### Returns

`boolean`

---

### error()

> **error**(`value`, ...`args`): `void`

Defined in: [packages/logger/src/lib/Logger.ts:58](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/logger/src/lib/Logger.ts#L58)

#### Parameters

##### value

`unknown`

##### args

...readonly `unknown`[]

#### Returns

`void`

---

### fatal()

> **fatal**(`value`, ...`args`): `void`

Defined in: [packages/logger/src/lib/Logger.ts:62](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/logger/src/lib/Logger.ts#L62)

#### Parameters

##### value

`unknown`

##### args

...readonly `unknown`[]

#### Returns

`void`

---

### info()

> **info**(`value`, ...`args`): `void`

Defined in: [packages/logger/src/lib/Logger.ts:50](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/logger/src/lib/Logger.ts#L50)

#### Parameters

##### value

`unknown`

##### args

...readonly `unknown`[]

#### Returns

`void`

---

### trace()

> **trace**(`value`, ...`args`): `void`

Defined in: [packages/logger/src/lib/Logger.ts:42](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/logger/src/lib/Logger.ts#L42)

#### Parameters

##### value

`unknown`

##### args

...readonly `unknown`[]

#### Returns

`void`

---

### warn()

> **warn**(`value`, ...`args`): `void`

Defined in: [packages/logger/src/lib/Logger.ts:54](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/logger/src/lib/Logger.ts#L54)

#### Parameters

##### value

`unknown`

##### args

...readonly `unknown`[]

#### Returns

`void`
