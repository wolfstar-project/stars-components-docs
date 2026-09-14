[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/http-framework](../../../index.md) / [Listener](../index.md) / Emitter

# Interface: Emitter

Defined in: [packages/http-framework/src/lib/structures/Listener.ts:34](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Listener.ts#L34)

## Methods

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

Defined in: [packages/http-framework/src/lib/structures/Listener.ts:40](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Listener.ts#L40)

#### Parameters

##### eventName

`string`

##### args

...`any`[]

#### Returns

`boolean`

---

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: [packages/http-framework/src/lib/structures/Listener.ts:39](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Listener.ts#L39)

#### Returns

`number`

---

### off()

> **off**(`eventName`, `listener`): `this`

Defined in: [packages/http-framework/src/lib/structures/Listener.ts:37](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Listener.ts#L37)

#### Parameters

##### eventName

`string`

##### listener

(...`args`) => `void`

#### Returns

`this`

---

### on()

> **on**(`eventName`, `listener`): `this`

Defined in: [packages/http-framework/src/lib/structures/Listener.ts:35](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Listener.ts#L35)

#### Parameters

##### eventName

`string`

##### listener

(...`args`) => `void`

#### Returns

`this`

---

### once()

> **once**(`eventName`, `listener`): `this`

Defined in: [packages/http-framework/src/lib/structures/Listener.ts:36](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Listener.ts#L36)

#### Parameters

##### eventName

`string`

##### listener

(...`args`) => `void`

#### Returns

`this`

---

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

Defined in: [packages/http-framework/src/lib/structures/Listener.ts:38](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/structures/Listener.ts#L38)

#### Parameters

##### n

`number`

#### Returns

`this`
