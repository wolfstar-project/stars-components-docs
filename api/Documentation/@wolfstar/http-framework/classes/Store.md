[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / Store

# Class: Store\<T, StoreName\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:460

The store class which contains [Piece](Piece.md)s.

## theme_extends

- `Collection`\<`string`, `T`\>

## theme_extended_by

- [`CommandStore`](CommandStore.md)
- [`InteractionHandlerStore`](InteractionHandlerStore.md)
- [`ListenerStore`](ListenerStore.md)
- [`AliasStore`](AliasStore.md)
- [`MiddlewareStore`](../../plugin-api/classes/MiddlewareStore.md)
- [`RouteStore`](../../plugin-api/classes/RouteStore.md)

## Type Parameters

### T

`T` _extends_ [`Piece`](Piece.md)

### StoreName

`StoreName` _extends_ `StoreRegistryKey` = `StoreRegistryKey`

## Constructors

### Constructor

> **new Store**\<`T`, `StoreName`\>(`constructor`, `options`): `Store`\<`T`, `StoreName`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:474

#### Parameters

##### constructor

`AbstractConstructor`\<`T`\>

The piece constructor this store loads.

##### options

[`StoreOptions`](../interfaces/StoreOptions.md)\<`T`, `StoreName`\>

The options for the store.

#### Returns

`Store`\<`T`, `StoreName`\>

#### Overrides

`Collection<string, T>.constructor`

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:137

#### Inherited from

`Collection.[toStringTag]`

---

### constructor

> **constructor**: `CollectionConstructor`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:21

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

`Collection.constructor`

---

### Constructor

> `readonly` **Constructor**: `AbstractConstructor`\<`T`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:462

---

### name

> `readonly` **name**: `StoreName`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:463

---

### paths

> `readonly` **paths**: `Set`\<`string`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:464

---

### size

> `readonly` **size**: `number`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:45

#### Returns

the number of elements in the Map.

#### Inherited from

`Collection.size`

---

### strategy

> `readonly` **strategy**: `ILoaderStrategy`\<`T`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:465

---

### \[species\]

> `readonly` `static` **\[species\]**: `MapConstructor`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319

#### Inherited from

`Collection.[species]`

---

### defaultStrategy

> `static` **defaultStrategy**: `ILoaderStrategy`\<`any`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:584

The default strategy, defaults to LoaderStrategy, which is constructed on demand when a store is constructed,
when none was set beforehand.

---

### logger

> `static` **logger**: `StoreLogger` \| `null`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:588

The default logger, defaults to `null`.

## Accessors

### container

#### Get Signature

> **get** **container**(): `Container`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:479

A reference to the Container object for ease of use.

##### See

container

##### Returns

`Container`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `MapIterator`\<\[`string`, `T`\]\>

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts:143

Returns an iterable of entries in the map.

#### Returns

`MapIterator`\<\[`string`, `T`\]\>

#### Inherited from

`Collection.[iterator]`

---

### at()

> **at**(`index`): `T` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:98

Identical to [Array.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at).
Returns the item at a given index, allowing for positive and negative integers.
Negative integers count back from the last item in the collection.

#### Parameters

##### index

`number`

The index of the element to obtain

#### Returns

`T` \| `undefined`

#### Inherited from

`Collection.at`

---

### clear()

> **clear**(): `void`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:20

#### Returns

`void`

#### Inherited from

`Collection.clear`

---

### clone()

> **clone**(): `Collection`\<`string`, `T`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:361

Creates an identical shallow copy of this collection.

#### Returns

`Collection`\<`string`, `T`\>

#### Example

```ts
const newColl = someColl.clone();
```

#### Inherited from

`Collection.clone`

---

### concat()

> **concat**(...`collections`): `Collection`\<`string`, `T`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:371

Combines this collection with others into a new collection. None of the source collections are modified.

#### Parameters

##### collections

...`ReadonlyCollection`\<`string`, `T`\>[]

Collections to merge

#### Returns

`Collection`\<`string`, `T`\>

#### Example

```ts
const newColl = someColl.concat(someOtherColl, anotherColl, ohBoyAColl);
```

#### Inherited from

`Collection.concat`

---

### construct()

> **construct**(`Ctor`, `data`): `T`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:566

Constructs a [Piece](Piece.md) instance.

#### Parameters

##### Ctor

`ILoaderResultEntry`\<`T`\>

The [Piece](Piece.md)'s constructor used to build the instance.

##### data

`HydratedModuleData`

The module's information

#### Returns

`T`

An instance of the constructed piece.

---

### delete()

> **delete**(`key`): `boolean`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:24

#### Parameters

##### key

`string`

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

`Collection.delete`

---

### difference()

> **difference**(`other`): `Collection`\<`string`, `T`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:439

Returns a new collection containing the items where the key is present in this collection but not the other.

#### Parameters

##### other

`ReadonlyCollection`\<`string`, `any`\>

The other Collection to filter against

#### Returns

`Collection`\<`string`, `T`\>

#### Example

```ts
const col1 = new Collection([
	['a', 1],
	['b', 2]
]);
const col2 = new Collection([
	['a', 1],
	['c', 3]
]);
console.log(col1.difference(col2));
// => Collection { 'b' => 2 }
console.log(col2.difference(col1));
// => Collection { 'c' => 3 }
```

#### Inherited from

`Collection.difference`

---

### each()

#### Call Signature

> **each**(`fn`): `this`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:336

Identical to
[Map.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach),
but returns the collection instead of undefined.

##### Parameters

###### fn

(`value`, `key`, `collection`) => `void`

Function to execute for each element

##### Returns

`this`

##### Example

```ts
collection
	.each((user) => console.log(user.username))
	.filter((user) => user.bot)
	.each((user) => console.log(user.username));
```

##### Inherited from

`Collection.each`

#### Call Signature

> **each**\<`This`\>(`fn`, `thisArg`): `this`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:337

Identical to
[Map.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach),
but returns the collection instead of undefined.

##### Type Parameters

###### This

`This`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `void`

Function to execute for each element

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`this`

##### Example

```ts
collection
	.each((user) => console.log(user.username))
	.filter((user) => user.bot)
	.each((user) => console.log(user.username));
```

##### Inherited from

`Collection.each`

---

### ensure()

> **ensure**(`key`, `defaultValueGenerator`): `T`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:41

Obtains the value of the given key if it exists, otherwise sets and returns the value provided by the default value generator.

#### Parameters

##### key

`string`

The key to get if it exists, or set otherwise

##### defaultValueGenerator

(`key`, `collection`) => `T`

A function that generates the default value

#### Returns

`T`

#### Example

```ts
collection.ensure(guildId, () => defaultGuildConfig);
```

#### Inherited from

`Collection.ensure`

---

### entries()

> **entries**(): `MapIterator`\<\[`string`, `T`\]\>

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts:148

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`MapIterator`\<\[`string`, `T`\]\>

#### Inherited from

`Collection.entries`

---

### equals()

> **equals**(`collection`): `boolean`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:380

Checks if this collection shares identical items with another.
This is different to checking for equality using equal-signs, because
the collections may be different objects, but contain the same data.

#### Parameters

##### collection

`ReadonlyCollection`\<`string`, `T`\>

Collection to compare with

#### Returns

`boolean`

Whether the collections have identical contents

#### Inherited from

`Collection.equals`

---

### every()

#### Call Signature

> **every**\<`NewKey`\>(`fn`): `this is Collection<NewKey, T>`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:292

Checks if all items passes a test. Identical in behavior to
[Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).

##### Type Parameters

###### NewKey

`NewKey` _extends_ `string`

##### Parameters

###### fn

(`value`, `key`, `collection`) => `key is NewKey`

Function used to test (should return a boolean)

##### Returns

`this is Collection<NewKey, T>`

##### Example

```ts
collection.every((user) => !user.bot);
```

##### Inherited from

`Collection.every`

#### Call Signature

> **every**\<`NewValue`\>(`fn`): `this is Collection<string, NewValue>`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:293

Checks if all items passes a test. Identical in behavior to
[Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).

##### Type Parameters

###### NewValue

`NewValue` _extends_ [`Piece`](Piece.md)\<[`PieceOptions`](../interfaces/PieceOptions.md), keyof [`StoreRegistryEntries`](../interfaces/StoreRegistryEntries.md)\>

##### Parameters

###### fn

(`value`, `key`, `collection`) => `value is NewValue`

Function used to test (should return a boolean)

##### Returns

`this is Collection<string, NewValue>`

##### Example

```ts
collection.every((user) => !user.bot);
```

##### Inherited from

`Collection.every`

#### Call Signature

> **every**(`fn`): `boolean`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:294

Checks if all items passes a test. Identical in behavior to
[Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).

##### Parameters

###### fn

(`value`, `key`, `collection`) => `unknown`

Function used to test (should return a boolean)

##### Returns

`boolean`

##### Example

```ts
collection.every((user) => !user.bot);
```

##### Inherited from

`Collection.every`

#### Call Signature

> **every**\<`This`, `NewKey`\>(`fn`, `thisArg`): `this is Collection<NewKey, T>`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:295

Checks if all items passes a test. Identical in behavior to
[Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).

##### Type Parameters

###### This

`This`

###### NewKey

`NewKey` _extends_ `string`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `key is NewKey`

Function used to test (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`this is Collection<NewKey, T>`

##### Example

```ts
collection.every((user) => !user.bot);
```

##### Inherited from

`Collection.every`

#### Call Signature

> **every**\<`This`, `NewValue`\>(`fn`, `thisArg`): `this is Collection<string, NewValue>`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:296

Checks if all items passes a test. Identical in behavior to
[Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).

##### Type Parameters

###### This

`This`

###### NewValue

`NewValue` _extends_ [`Piece`](Piece.md)\<[`PieceOptions`](../interfaces/PieceOptions.md), keyof [`StoreRegistryEntries`](../interfaces/StoreRegistryEntries.md)\>

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `value is NewValue`

Function used to test (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`this is Collection<string, NewValue>`

##### Example

```ts
collection.every((user) => !user.bot);
```

##### Inherited from

`Collection.every`

#### Call Signature

> **every**\<`This`\>(`fn`, `thisArg`): `boolean`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:297

Checks if all items passes a test. Identical in behavior to
[Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).

##### Type Parameters

###### This

`This`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `unknown`

Function used to test (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`boolean`

##### Example

```ts
collection.every((user) => !user.bot);
```

##### Inherited from

`Collection.every`

---

### filter()

#### Call Signature

> **filter**\<`NewKey`\>(`fn`): `Collection`\<`NewKey`, `T`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:206

Identical to
[Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
but returns a Collection instead of an Array.

##### Type Parameters

###### NewKey

`NewKey` _extends_ `string`

##### Parameters

###### fn

(`value`, `key`, `collection`) => `key is NewKey`

The function to test with (should return a boolean)

##### Returns

`Collection`\<`NewKey`, `T`\>

##### Example

```ts
collection.filter((user) => user.username === 'Bob');
```

##### Inherited from

`Collection.filter`

#### Call Signature

> **filter**\<`NewValue`\>(`fn`): `Collection`\<`string`, `NewValue`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:207

Identical to
[Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
but returns a Collection instead of an Array.

##### Type Parameters

###### NewValue

`NewValue` _extends_ [`Piece`](Piece.md)\<[`PieceOptions`](../interfaces/PieceOptions.md), keyof [`StoreRegistryEntries`](../interfaces/StoreRegistryEntries.md)\>

##### Parameters

###### fn

(`value`, `key`, `collection`) => `value is NewValue`

The function to test with (should return a boolean)

##### Returns

`Collection`\<`string`, `NewValue`\>

##### Example

```ts
collection.filter((user) => user.username === 'Bob');
```

##### Inherited from

`Collection.filter`

#### Call Signature

> **filter**(`fn`): `Collection`\<`string`, `T`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:208

Identical to
[Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
but returns a Collection instead of an Array.

##### Parameters

###### fn

(`value`, `key`, `collection`) => `unknown`

The function to test with (should return a boolean)

##### Returns

`Collection`\<`string`, `T`\>

##### Example

```ts
collection.filter((user) => user.username === 'Bob');
```

##### Inherited from

`Collection.filter`

#### Call Signature

> **filter**\<`This`, `NewKey`\>(`fn`, `thisArg`): `Collection`\<`NewKey`, `T`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:209

Identical to
[Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
but returns a Collection instead of an Array.

##### Type Parameters

###### This

`This`

###### NewKey

`NewKey` _extends_ `string`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `key is NewKey`

The function to test with (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`Collection`\<`NewKey`, `T`\>

##### Example

```ts
collection.filter((user) => user.username === 'Bob');
```

##### Inherited from

`Collection.filter`

#### Call Signature

> **filter**\<`This`, `NewValue`\>(`fn`, `thisArg`): `Collection`\<`string`, `NewValue`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:210

Identical to
[Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
but returns a Collection instead of an Array.

##### Type Parameters

###### This

`This`

###### NewValue

`NewValue` _extends_ [`Piece`](Piece.md)\<[`PieceOptions`](../interfaces/PieceOptions.md), keyof [`StoreRegistryEntries`](../interfaces/StoreRegistryEntries.md)\>

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `value is NewValue`

The function to test with (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`Collection`\<`string`, `NewValue`\>

##### Example

```ts
collection.filter((user) => user.username === 'Bob');
```

##### Inherited from

`Collection.filter`

#### Call Signature

> **filter**\<`This`\>(`fn`, `thisArg`): `Collection`\<`string`, `T`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:211

Identical to
[Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
but returns a Collection instead of an Array.

##### Type Parameters

###### This

`This`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `unknown`

The function to test with (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`Collection`\<`string`, `T`\>

##### Example

```ts
collection.filter((user) => user.username === 'Bob');
```

##### Inherited from

`Collection.filter`

---

### find()

#### Call Signature

> **find**\<`NewValue`\>(`fn`): `NewValue` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:142

Searches for a single item where the given function returns a truthy value. This behaves like
[Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
All collections used in Discord.js are mapped using their `id` property, and if you want to find by id you
should use the `get` method. See
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get) for details.

##### Type Parameters

###### NewValue

`NewValue` _extends_ [`Piece`](Piece.md)\<[`PieceOptions`](../interfaces/PieceOptions.md), keyof [`StoreRegistryEntries`](../interfaces/StoreRegistryEntries.md)\>

##### Parameters

###### fn

(`value`, `key`, `collection`) => `value is NewValue`

The function to test with (should return a boolean)

##### Returns

`NewValue` \| `undefined`

##### Example

```ts
collection.find((user) => user.username === 'Bob');
```

##### Inherited from

`Collection.find`

#### Call Signature

> **find**(`fn`): `T` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:143

Searches for a single item where the given function returns a truthy value. This behaves like
[Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
All collections used in Discord.js are mapped using their `id` property, and if you want to find by id you
should use the `get` method. See
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get) for details.

##### Parameters

###### fn

(`value`, `key`, `collection`) => `unknown`

The function to test with (should return a boolean)

##### Returns

`T` \| `undefined`

##### Example

```ts
collection.find((user) => user.username === 'Bob');
```

##### Inherited from

`Collection.find`

#### Call Signature

> **find**\<`This`, `NewValue`\>(`fn`, `thisArg`): `NewValue` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:144

Searches for a single item where the given function returns a truthy value. This behaves like
[Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
All collections used in Discord.js are mapped using their `id` property, and if you want to find by id you
should use the `get` method. See
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get) for details.

##### Type Parameters

###### This

`This`

###### NewValue

`NewValue` _extends_ [`Piece`](Piece.md)\<[`PieceOptions`](../interfaces/PieceOptions.md), keyof [`StoreRegistryEntries`](../interfaces/StoreRegistryEntries.md)\>

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `value is NewValue`

The function to test with (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`NewValue` \| `undefined`

##### Example

```ts
collection.find((user) => user.username === 'Bob');
```

##### Inherited from

`Collection.find`

#### Call Signature

> **find**\<`This`\>(`fn`, `thisArg`): `T` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:145

Searches for a single item where the given function returns a truthy value. This behaves like
[Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
All collections used in Discord.js are mapped using their `id` property, and if you want to find by id you
should use the `get` method. See
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get) for details.

##### Type Parameters

###### This

`This`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `unknown`

The function to test with (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`T` \| `undefined`

##### Example

```ts
collection.find((user) => user.username === 'Bob');
```

##### Inherited from

`Collection.find`

---

### findKey()

#### Call Signature

> **findKey**\<`NewKey`\>(`fn`): `NewKey` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:158

Searches for the key of a single item where the given function returns a truthy value. This behaves like
[Array.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex),
but returns the key rather than the positional index.

##### Type Parameters

###### NewKey

`NewKey` _extends_ `string`

##### Parameters

###### fn

(`value`, `key`, `collection`) => `key is NewKey`

The function to test with (should return a boolean)

##### Returns

`NewKey` \| `undefined`

##### Example

```ts
collection.findKey((user) => user.username === 'Bob');
```

##### Inherited from

`Collection.findKey`

#### Call Signature

> **findKey**(`fn`): `string` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:159

Searches for the key of a single item where the given function returns a truthy value. This behaves like
[Array.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex),
but returns the key rather than the positional index.

##### Parameters

###### fn

(`value`, `key`, `collection`) => `unknown`

The function to test with (should return a boolean)

##### Returns

`string` \| `undefined`

##### Example

```ts
collection.findKey((user) => user.username === 'Bob');
```

##### Inherited from

`Collection.findKey`

#### Call Signature

> **findKey**\<`This`, `NewKey`\>(`fn`, `thisArg`): `NewKey` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:160

Searches for the key of a single item where the given function returns a truthy value. This behaves like
[Array.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex),
but returns the key rather than the positional index.

##### Type Parameters

###### This

`This`

###### NewKey

`NewKey` _extends_ `string`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `key is NewKey`

The function to test with (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`NewKey` \| `undefined`

##### Example

```ts
collection.findKey((user) => user.username === 'Bob');
```

##### Inherited from

`Collection.findKey`

#### Call Signature

> **findKey**\<`This`\>(`fn`, `thisArg`): `string` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:161

Searches for the key of a single item where the given function returns a truthy value. This behaves like
[Array.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex),
but returns the key rather than the positional index.

##### Type Parameters

###### This

`This`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `unknown`

The function to test with (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`string` \| `undefined`

##### Example

```ts
collection.findKey((user) => user.username === 'Bob');
```

##### Inherited from

`Collection.findKey`

---

### findLast()

#### Call Signature

> **findLast**\<`NewValue`\>(`fn`): `NewValue` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:169

Searches for a last item where the given function returns a truthy value. This behaves like
[Array.findLast()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast).

##### Type Parameters

###### NewValue

`NewValue` _extends_ [`Piece`](Piece.md)\<[`PieceOptions`](../interfaces/PieceOptions.md), keyof [`StoreRegistryEntries`](../interfaces/StoreRegistryEntries.md)\>

##### Parameters

###### fn

(`value`, `key`, `collection`) => `value is NewValue`

The function to test with (should return a boolean)

##### Returns

`NewValue` \| `undefined`

##### Inherited from

`Collection.findLast`

#### Call Signature

> **findLast**(`fn`): `T` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:170

Searches for a last item where the given function returns a truthy value. This behaves like
[Array.findLast()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast).

##### Parameters

###### fn

(`value`, `key`, `collection`) => `unknown`

The function to test with (should return a boolean)

##### Returns

`T` \| `undefined`

##### Inherited from

`Collection.findLast`

#### Call Signature

> **findLast**\<`This`, `NewValue`\>(`fn`, `thisArg`): `NewValue` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:171

Searches for a last item where the given function returns a truthy value. This behaves like
[Array.findLast()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast).

##### Type Parameters

###### This

`This`

###### NewValue

`NewValue` _extends_ [`Piece`](Piece.md)\<[`PieceOptions`](../interfaces/PieceOptions.md), keyof [`StoreRegistryEntries`](../interfaces/StoreRegistryEntries.md)\>

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `value is NewValue`

The function to test with (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`NewValue` \| `undefined`

##### Inherited from

`Collection.findLast`

#### Call Signature

> **findLast**\<`This`\>(`fn`, `thisArg`): `T` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:172

Searches for a last item where the given function returns a truthy value. This behaves like
[Array.findLast()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast).

##### Type Parameters

###### This

`This`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `unknown`

The function to test with (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`T` \| `undefined`

##### Inherited from

`Collection.findLast`

---

### findLastKey()

#### Call Signature

> **findLastKey**\<`NewKey`\>(`fn`): `NewKey` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:181

Searches for the key of a last item where the given function returns a truthy value. This behaves like
[Array.findLastIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex),
but returns the key rather than the positional index.

##### Type Parameters

###### NewKey

`NewKey` _extends_ `string`

##### Parameters

###### fn

(`value`, `key`, `collection`) => `key is NewKey`

The function to test with (should return a boolean)

##### Returns

`NewKey` \| `undefined`

##### Inherited from

`Collection.findLastKey`

#### Call Signature

> **findLastKey**(`fn`): `string` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:182

Searches for the key of a last item where the given function returns a truthy value. This behaves like
[Array.findLastIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex),
but returns the key rather than the positional index.

##### Parameters

###### fn

(`value`, `key`, `collection`) => `unknown`

The function to test with (should return a boolean)

##### Returns

`string` \| `undefined`

##### Inherited from

`Collection.findLastKey`

#### Call Signature

> **findLastKey**\<`This`, `NewKey`\>(`fn`, `thisArg`): `NewKey` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:183

Searches for the key of a last item where the given function returns a truthy value. This behaves like
[Array.findLastIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex),
but returns the key rather than the positional index.

##### Type Parameters

###### This

`This`

###### NewKey

`NewKey` _extends_ `string`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `key is NewKey`

The function to test with (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`NewKey` \| `undefined`

##### Inherited from

`Collection.findLastKey`

#### Call Signature

> **findLastKey**\<`This`\>(`fn`, `thisArg`): `string` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:184

Searches for the key of a last item where the given function returns a truthy value. This behaves like
[Array.findLastIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex),
but returns the key rather than the positional index.

##### Type Parameters

###### This

`This`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `unknown`

The function to test with (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`string` \| `undefined`

##### Inherited from

`Collection.findLastKey`

---

### first()

#### Call Signature

> **first**(): `T` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:62

Obtains the first value(s) in this collection.

##### Returns

`T` \| `undefined`

A single value if no amount is provided or an array of values, starting from the end if amount is negative

##### Inherited from

`Collection.first`

#### Call Signature

> **first**(`amount`): `T`[]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:63

Obtains the first value(s) in this collection.

##### Parameters

###### amount

`number`

Amount of values to obtain from the beginning

##### Returns

`T`[]

A single value if no amount is provided or an array of values, starting from the end if amount is negative

##### Inherited from

`Collection.first`

---

### firstKey()

#### Call Signature

> **firstKey**(): `string` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:71

Obtains the first key(s) in this collection.

##### Returns

`string` \| `undefined`

A single key if no amount is provided or an array of keys, starting from the end if
amount is negative

##### Inherited from

`Collection.firstKey`

#### Call Signature

> **firstKey**(`amount`): `string`[]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:72

Obtains the first key(s) in this collection.

##### Parameters

###### amount

`number`

Amount of keys to obtain from the beginning

##### Returns

`string`[]

A single key if no amount is provided or an array of keys, starting from the end if
amount is negative

##### Inherited from

`Collection.firstKey`

---

### flatMap()

#### Call Signature

> **flatMap**\<`NewValue`\>(`fn`): `Collection`\<`string`, `NewValue`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:240

Maps each item into a Collection, then joins the results into a single Collection. Identical in behavior to
[Array.flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap).

##### Type Parameters

###### NewValue

`NewValue`

##### Parameters

###### fn

(`value`, `key`, `collection`) => `Collection`\<`string`, `NewValue`\>

Function that produces a new Collection

##### Returns

`Collection`\<`string`, `NewValue`\>

##### Example

```ts
collection.flatMap((guild) => guild.members.cache);
```

##### Inherited from

`Collection.flatMap`

#### Call Signature

> **flatMap**\<`NewValue`, `This`\>(`fn`, `thisArg`): `Collection`\<`string`, `NewValue`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:241

Maps each item into a Collection, then joins the results into a single Collection. Identical in behavior to
[Array.flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap).

##### Type Parameters

###### NewValue

`NewValue`

###### This

`This`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `Collection`\<`string`, `NewValue`\>

Function that produces a new Collection

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`Collection`\<`string`, `NewValue`\>

##### Example

```ts
collection.flatMap((guild) => guild.members.cache);
```

##### Inherited from

`Collection.flatMap`

---

### forEach()

> **forEach**(`callbackfn`, `thisArg?`): `void`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:28

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

##### callbackfn

(`value`, `key`, `map`) => `void`

##### thisArg?

`any`

#### Returns

`void`

#### Inherited from

`Collection.forEach`

---

### get()

> **get**(`key`): `T` \| `undefined`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:33

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

##### key

`string`

#### Returns

`T` \| `undefined`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

`Collection.get`

---

### has()

> **has**(`key`): `boolean`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:37

#### Parameters

##### key

`string`

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

`Collection.has`

---

### hasAll()

> **hasAll**(...`keys`): `boolean`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:48

Checks if all of the elements exist in the collection.

#### Parameters

##### keys

...`string`[]

The keys of the elements to check for

#### Returns

`boolean`

`true` if all of the elements exist, `false` if at least one does not exist.

#### Inherited from

`Collection.hasAll`

---

### hasAny()

> **hasAny**(...`keys`): `boolean`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:55

Checks if any of the elements exist in the collection.

#### Parameters

##### keys

...`string`[]

The keys of the elements to check for

#### Returns

`boolean`

`true` if any of the elements exist, `false` if none exist.

#### Inherited from

`Collection.hasAny`

---

### insert()

> **insert**(`piece`): `Promise`\<`T`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:559

Inserts a piece into the store.

#### Parameters

##### piece

`T`

The piece to be inserted into the store.

#### Returns

`Promise`\<`T`\>

The inserted piece.

---

### intersection()

> **intersection**(`other`): `Collection`\<`string`, `T`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:407

The intersection method returns a new collection containing the items where the key is present in both collections.

#### Parameters

##### other

`ReadonlyCollection`\<`string`, `any`\>

The other Collection to filter against

#### Returns

`Collection`\<`string`, `T`\>

#### Example

```ts
const col1 = new Collection([
	['a', 1],
	['b', 2]
]);
const col2 = new Collection([
	['a', 1],
	['c', 3]
]);
const intersection = col1.intersection(col2);
console.log(col1.intersection(col2));
// => Collection { 'a' => 1 }
```

#### Inherited from

`Collection.intersection`

---

### keyAt()

> **keyAt**(`index`): `string` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:106

Identical to [Array.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at).
Returns the key at a given index, allowing for positive and negative integers.
Negative integers count back from the last item in the collection.

#### Parameters

##### index

`number`

The index of the key to obtain

#### Returns

`string` \| `undefined`

#### Inherited from

`Collection.keyAt`

---

### keys()

> **keys**(): `MapIterator`\<`string`\>

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts:153

Returns an iterable of keys in the map

#### Returns

`MapIterator`\<`string`\>

#### Inherited from

`Collection.keys`

---

### last()

#### Call Signature

> **last**(): `T` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:80

Obtains the last value(s) in this collection.

##### Returns

`T` \| `undefined`

A single value if no amount is provided or an array of values, starting from the start if
amount is negative

##### Inherited from

`Collection.last`

#### Call Signature

> **last**(`amount`): `T`[]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:81

Obtains the last value(s) in this collection.

##### Parameters

###### amount

`number`

Amount of values to obtain from the end

##### Returns

`T`[]

A single value if no amount is provided or an array of values, starting from the start if
amount is negative

##### Inherited from

`Collection.last`

---

### lastKey()

#### Call Signature

> **lastKey**(): `string` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:89

Obtains the last key(s) in this collection.

##### Returns

`string` \| `undefined`

A single key if no amount is provided or an array of keys, starting from the start if
amount is negative

##### Inherited from

`Collection.lastKey`

#### Call Signature

> **lastKey**(`amount`): `string`[]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:90

Obtains the last key(s) in this collection.

##### Parameters

###### amount

`number`

Amount of keys to obtain from the end

##### Returns

`string`[]

A single key if no amount is provided or an array of keys, starting from the start if
amount is negative

##### Inherited from

`Collection.lastKey`

---

### load()

> **load**(`root`, `path`): `Promise`\<`T`[]\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:533

Loads one or more pieces from a path.

#### Parameters

##### root

`string`

The root directory the file is from.

##### path

`string`

The path of the file to load, relative to the `root`.

#### Returns

`Promise`\<`T`[]\>

All the loaded pieces.

---

### loadAll()

> **loadAll**(): `Promise`\<`void`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:547

Loads all pieces from all directories specified by [paths](#paths).

#### Returns

`Promise`\<`void`\>

---

### loadPiece()

> **loadPiece**(`entry`): `Promise`\<`void`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:526

Adds a piece into the store's list of manually registered pieces. If [`()`](#loadall) was called, the
piece will be loaded immediately, otherwise it will be queued until [`()`](#loadall) is called.

All manually registered pieces will be kept even after they are loaded to ensure they can be loaded again if
[`()`](#loadall) is called again.

#### Parameters

##### entry

`StoreManuallyRegisteredPiece`\<`StoreName`\>

The entry to load.

#### Returns

`Promise`\<`void`\>

#### Remarks

- Pieces loaded this way will have their [`root`](../interfaces/LoaderPieceContext.md#root) and
  [`path`](../interfaces/LoaderPieceContext.md#path) set to `VirtualPath`, and as such, cannot be reloaded.
- This method is useful in environments where file system access is limited or unavailable, such as when using
  [Serverless Computing](https://en.wikipedia.org/wiki/Serverless_computing).
- This method will always throw a TypeError if `entry.piece` is not a class.
- This method will always throw a [`LoaderError`](LoaderError.md) if the piece does not extend the
  [`store's piece constructor`](#constructor-2).
- This operation is atomic, if any of the above errors are thrown, the piece will not be loaded.

#### Seealso

[`()`](StoreRegistry.md#loadpiece)

#### Since

3.8.0

#### Example

```typescript
import { container } from '@sapphire/pieces';

class PingCommand extends Command {
	// ...
}

container.stores.get('commands').loadPiece({
	name: 'ping',
	piece: PingCommand
});
```

---

### map()

#### Call Signature

> **map**\<`NewValue`\>(`fn`): `NewValue`[]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:253

Maps each item to another value into an array. Identical in behavior to
[Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

##### Type Parameters

###### NewValue

`NewValue`

##### Parameters

###### fn

(`value`, `key`, `collection`) => `NewValue`

Function that produces an element of the new array, taking three arguments

##### Returns

`NewValue`[]

##### Example

```ts
collection.map((user) => user.tag);
```

##### Inherited from

`Collection.map`

#### Call Signature

> **map**\<`This`, `NewValue`\>(`fn`, `thisArg`): `NewValue`[]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:254

Maps each item to another value into an array. Identical in behavior to
[Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

##### Type Parameters

###### This

`This`

###### NewValue

`NewValue`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `NewValue`

Function that produces an element of the new array, taking three arguments

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`NewValue`[]

##### Example

```ts
collection.map((user) => user.tag);
```

##### Inherited from

`Collection.map`

---

### mapValues()

#### Call Signature

> **mapValues**\<`NewValue`\>(`fn`): `Collection`\<`string`, `NewValue`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:266

Maps each item to another value into a collection. Identical in behavior to
[Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

##### Type Parameters

###### NewValue

`NewValue`

##### Parameters

###### fn

(`value`, `key`, `collection`) => `NewValue`

Function that produces an element of the new collection, taking three arguments

##### Returns

`Collection`\<`string`, `NewValue`\>

##### Example

```ts
collection.mapValues((user) => user.tag);
```

##### Inherited from

`Collection.mapValues`

#### Call Signature

> **mapValues**\<`This`, `NewValue`\>(`fn`, `thisArg`): `Collection`\<`string`, `NewValue`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:267

Maps each item to another value into a collection. Identical in behavior to
[Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

##### Type Parameters

###### This

`This`

###### NewValue

`NewValue`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `NewValue`

Function that produces an element of the new collection, taking three arguments

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`Collection`\<`string`, `NewValue`\>

##### Example

```ts
collection.mapValues((user) => user.tag);
```

##### Inherited from

`Collection.mapValues`

---

### merge()

> **merge**\<`OtherValue`, `ResultValue`\>(`other`, `whenInSelf`, `whenInOther`, `whenInBoth`): `Collection`\<`string`, `ResultValue`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:482

Merges two Collections together into a new Collection.

#### Type Parameters

##### OtherValue

`OtherValue`

##### ResultValue

`ResultValue`

#### Parameters

##### other

`ReadonlyCollection`\<`string`, `OtherValue`\>

The other Collection to merge with

##### whenInSelf

(`value`, `key`) => `Keep`\<`ResultValue`\>

Function getting the result if the entry only exists in this Collection

##### whenInOther

(`valueOther`, `key`) => `Keep`\<`ResultValue`\>

Function getting the result if the entry only exists in the other Collection

##### whenInBoth

(`value`, `valueOther`, `key`) => `Keep`\<`ResultValue`\>

Function getting the result if the entry exists in both Collections

#### Returns

`Collection`\<`string`, `ResultValue`\>

#### Examples

```ts
// Sums up the entries in two collections.
coll.merge(
	other,
	(x) => ({ keep: true, value: x }),
	(y) => ({ keep: true, value: y }),
	(x, y) => ({ keep: true, value: x + y })
);
```

```ts
// Intersects two collections in a left-biased manner.
coll.merge(
	other,
	(x) => ({ keep: false }),
	(y) => ({ keep: false }),
	(x, _) => ({ keep: true, value: x })
);
```

#### Inherited from

`Collection.merge`

---

### partition()

#### Call Signature

> **partition**\<`NewKey`\>(`fn`): \[`Collection`\<`NewKey`, `T`\>, `Collection`\<`Exclude`\<`string`, `NewKey`\>, `T`\>\]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:223

Partitions the collection into two collections where the first collection
contains the items that passed and the second contains the items that failed.

##### Type Parameters

###### NewKey

`NewKey` _extends_ `string`

##### Parameters

###### fn

(`value`, `key`, `collection`) => `key is NewKey`

Function used to test (should return a boolean)

##### Returns

\[`Collection`\<`NewKey`, `T`\>, `Collection`\<`Exclude`\<`string`, `NewKey`\>, `T`\>\]

##### Example

```ts
const [big, small] = collection.partition((guild) => guild.memberCount > 250);
```

##### Inherited from

`Collection.partition`

#### Call Signature

> **partition**\<`NewValue`\>(`fn`): \[`Collection`\<`string`, `NewValue`\>, `Collection`\<`string`, `Exclude`\<`T`, `NewValue`\>\>\]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:224

Partitions the collection into two collections where the first collection
contains the items that passed and the second contains the items that failed.

##### Type Parameters

###### NewValue

`NewValue` _extends_ [`Piece`](Piece.md)\<[`PieceOptions`](../interfaces/PieceOptions.md), keyof [`StoreRegistryEntries`](../interfaces/StoreRegistryEntries.md)\>

##### Parameters

###### fn

(`value`, `key`, `collection`) => `value is NewValue`

Function used to test (should return a boolean)

##### Returns

\[`Collection`\<`string`, `NewValue`\>, `Collection`\<`string`, `Exclude`\<`T`, `NewValue`\>\>\]

##### Example

```ts
const [big, small] = collection.partition((guild) => guild.memberCount > 250);
```

##### Inherited from

`Collection.partition`

#### Call Signature

> **partition**(`fn`): \[`Collection`\<`string`, `T`\>, `Collection`\<`string`, `T`\>\]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:225

Partitions the collection into two collections where the first collection
contains the items that passed and the second contains the items that failed.

##### Parameters

###### fn

(`value`, `key`, `collection`) => `unknown`

Function used to test (should return a boolean)

##### Returns

\[`Collection`\<`string`, `T`\>, `Collection`\<`string`, `T`\>\]

##### Example

```ts
const [big, small] = collection.partition((guild) => guild.memberCount > 250);
```

##### Inherited from

`Collection.partition`

#### Call Signature

> **partition**\<`This`, `NewKey`\>(`fn`, `thisArg`): \[`Collection`\<`NewKey`, `T`\>, `Collection`\<`Exclude`\<`string`, `NewKey`\>, `T`\>\]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:226

Partitions the collection into two collections where the first collection
contains the items that passed and the second contains the items that failed.

##### Type Parameters

###### This

`This`

###### NewKey

`NewKey` _extends_ `string`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `key is NewKey`

Function used to test (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

\[`Collection`\<`NewKey`, `T`\>, `Collection`\<`Exclude`\<`string`, `NewKey`\>, `T`\>\]

##### Example

```ts
const [big, small] = collection.partition((guild) => guild.memberCount > 250);
```

##### Inherited from

`Collection.partition`

#### Call Signature

> **partition**\<`This`, `NewValue`\>(`fn`, `thisArg`): \[`Collection`\<`string`, `NewValue`\>, `Collection`\<`string`, `Exclude`\<`T`, `NewValue`\>\>\]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:227

Partitions the collection into two collections where the first collection
contains the items that passed and the second contains the items that failed.

##### Type Parameters

###### This

`This`

###### NewValue

`NewValue` _extends_ [`Piece`](Piece.md)\<[`PieceOptions`](../interfaces/PieceOptions.md), keyof [`StoreRegistryEntries`](../interfaces/StoreRegistryEntries.md)\>

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `value is NewValue`

Function used to test (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

\[`Collection`\<`string`, `NewValue`\>, `Collection`\<`string`, `Exclude`\<`T`, `NewValue`\>\>\]

##### Example

```ts
const [big, small] = collection.partition((guild) => guild.memberCount > 250);
```

##### Inherited from

`Collection.partition`

#### Call Signature

> **partition**\<`This`\>(`fn`, `thisArg`): \[`Collection`\<`string`, `T`\>, `Collection`\<`string`, `T`\>\]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:228

Partitions the collection into two collections where the first collection
contains the items that passed and the second contains the items that failed.

##### Type Parameters

###### This

`This`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `unknown`

Function used to test (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

\[`Collection`\<`string`, `T`\>, `Collection`\<`string`, `T`\>\]

##### Example

```ts
const [big, small] = collection.partition((guild) => guild.memberCount > 250);
```

##### Inherited from

`Collection.partition`

---

### random()

#### Call Signature

> **random**(): `T` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:113

Obtains unique random value(s) from this collection.

##### Returns

`T` \| `undefined`

A single value if no amount is provided or an array of values

##### Inherited from

`Collection.random`

#### Call Signature

> **random**(`amount`): `T`[]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:114

Obtains unique random value(s) from this collection.

##### Parameters

###### amount

`number`

Amount of values to obtain randomly

##### Returns

`T`[]

A single value if no amount is provided or an array of values

##### Inherited from

`Collection.random`

---

### randomKey()

#### Call Signature

> **randomKey**(): `string` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:121

Obtains unique random key(s) from this collection.

##### Returns

`string` \| `undefined`

A single key if no amount is provided or an array

##### Inherited from

`Collection.randomKey`

#### Call Signature

> **randomKey**(`amount`): `string`[]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:122

Obtains unique random key(s) from this collection.

##### Parameters

###### amount

`number`

Amount of keys to obtain randomly

##### Returns

`string`[]

A single key if no amount is provided or an array

##### Inherited from

`Collection.randomKey`

---

### reduce()

#### Call Signature

> **reduce**(`fn`, `initialValue?`): `T`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:310

Applies a function to produce a single value. Identical in behavior to
[Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

##### Parameters

###### fn

(`accumulator`, `value`, `key`, `collection`) => `T`

Function used to reduce, taking four arguments; `accumulator`, `currentValue`, `currentKey`,
and `collection`

###### initialValue?

`T`

Starting value for the accumulator

##### Returns

`T`

##### Example

```ts
collection.reduce((acc, guild) => acc + guild.memberCount, 0);
```

##### Inherited from

`Collection.reduce`

#### Call Signature

> **reduce**\<`InitialValue`\>(`fn`, `initialValue`): `InitialValue`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:311

Applies a function to produce a single value. Identical in behavior to
[Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

##### Type Parameters

###### InitialValue

`InitialValue`

##### Parameters

###### fn

(`accumulator`, `value`, `key`, `collection`) => `InitialValue`

Function used to reduce, taking four arguments; `accumulator`, `currentValue`, `currentKey`,
and `collection`

###### initialValue

`InitialValue`

Starting value for the accumulator

##### Returns

`InitialValue`

##### Example

```ts
collection.reduce((acc, guild) => acc + guild.memberCount, 0);
```

##### Inherited from

`Collection.reduce`

---

### reduceRight()

#### Call Signature

> **reduceRight**(`fn`, `initialValue?`): `T`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:319

Applies a function to produce a single value. Identical in behavior to
[Array.reduceRight()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight).

##### Parameters

###### fn

(`accumulator`, `value`, `key`, `collection`) => `T`

Function used to reduce, taking four arguments; `accumulator`, `value`, `key`, and `collection`

###### initialValue?

`T`

Starting value for the accumulator

##### Returns

`T`

##### Inherited from

`Collection.reduceRight`

#### Call Signature

> **reduceRight**\<`InitialValue`\>(`fn`, `initialValue`): `InitialValue`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:320

Applies a function to produce a single value. Identical in behavior to
[Array.reduceRight()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight).

##### Type Parameters

###### InitialValue

`InitialValue`

##### Parameters

###### fn

(`accumulator`, `value`, `key`, `collection`) => `InitialValue`

Function used to reduce, taking four arguments; `accumulator`, `value`, `key`, and `collection`

###### initialValue

`InitialValue`

Starting value for the accumulator

##### Returns

`InitialValue`

##### Inherited from

`Collection.reduceRight`

---

### registerPath()

> **registerPath**(`path`): `this`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:490

Registers a directory into the store.

#### Parameters

##### path

`Path`

The path to be added.

#### Returns

`this`

#### Example

```typescript
store.registerPath(resolve('commands')).registerPath(resolve('third-party', 'commands'));
```

---

### resolve()

> **resolve**(`name`): `T`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:553

Resolves a piece by its name or its instance.

#### Parameters

##### name

`string` \| `T`

The name of the piece or the instance itself.

#### Returns

`T`

The resolved piece.

---

### reverse()

> **reverse**(): `this`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:127

Identical to [Array.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
but returns a Collection instead of an Array.

#### Returns

`this`

#### Inherited from

`Collection.reverse`

---

### set()

> **set**(`key`, `value`): `this`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:41

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

##### key

`string`

##### value

`T`

#### Returns

`this`

#### Inherited from

`Collection.set`

---

### some()

#### Call Signature

> **some**(`fn`): `boolean`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:279

Checks if there exists an item that passes a test. Identical in behavior to
[Array.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some).

##### Parameters

###### fn

(`value`, `key`, `collection`) => `unknown`

Function used to test (should return a boolean)

##### Returns

`boolean`

##### Example

```ts
collection.some((user) => user.discriminator === '0000');
```

##### Inherited from

`Collection.some`

#### Call Signature

> **some**\<`This`\>(`fn`, `thisArg`): `boolean`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:280

Checks if there exists an item that passes a test. Identical in behavior to
[Array.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some).

##### Type Parameters

###### This

`This`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `unknown`

Function used to test (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`boolean`

##### Example

```ts
collection.some((user) => user.discriminator === '0000');
```

##### Inherited from

`Collection.some`

---

### sort()

> **sort**(`compareFunction?`): `this`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:393

The sort method sorts the items of a collection in place and returns it.
The sort is not necessarily stable in Node 10 or older.
The default sort order is according to string Unicode code points.

#### Parameters

##### compareFunction?

`Comparator`\<`string`, `T`\>

Specifies a function that defines the sort order.
If omitted, the collection is sorted according to each character's Unicode code point value, according to the string conversion of each element.

#### Returns

`this`

#### Example

```ts
collection.sort((userA, userB) => userA.createdTimestamp - userB.createdTimestamp);
```

#### Inherited from

`Collection.sort`

---

### sweep()

#### Call Signature

> **sweep**(`fn`): `number`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:192

Removes items that satisfy the provided filter function.

##### Parameters

###### fn

(`value`, `key`, `collection`) => `unknown`

Function used to test (should return a boolean)

##### Returns

`number`

The number of removed entries

##### Inherited from

`Collection.sweep`

#### Call Signature

> **sweep**\<`This`\>(`fn`, `thisArg`): `number`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:193

Removes items that satisfy the provided filter function.

##### Type Parameters

###### This

`This`

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `unknown`

Function used to test (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`number`

The number of removed entries

##### Inherited from

`Collection.sweep`

---

### symmetricDifference()

> **symmetricDifference**\<`OtherValue`\>(`other`): `Collection`\<`string`, `T` \| `OtherValue`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:453

Returns a new collection containing only the items where the keys are present in either collection, but not both.

#### Type Parameters

##### OtherValue

`OtherValue`

#### Parameters

##### other

`ReadonlyCollection`\<`string`, `OtherValue`\>

The other Collection to filter against

#### Returns

`Collection`\<`string`, `T` \| `OtherValue`\>

#### Example

```ts
const col1 = new Collection([
	['a', 1],
	['b', 2]
]);
const col2 = new Collection([
	['a', 1],
	['c', 3]
]);
const symmetricDifference = col1.symmetricDifference(col2);
console.log(col1.symmetricDifference(col2));
// => Collection { 'b' => 2, 'c' => 3 }
```

#### Inherited from

`Collection.symmetricDifference`

---

### tap()

#### Call Signature

> **tap**(`fn`): `this`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:351

Runs a function on the collection and returns the collection.

##### Parameters

###### fn

(`collection`) => `void`

Function to execute

##### Returns

`this`

##### Example

```ts
collection
	.tap((coll) => console.log(coll.size))
	.filter((user) => user.bot)
	.tap((coll) => console.log(coll.size));
```

##### Inherited from

`Collection.tap`

#### Call Signature

> **tap**\<`This`\>(`fn`, `thisArg`): `this`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:352

Runs a function on the collection and returns the collection.

##### Type Parameters

###### This

`This`

##### Parameters

###### fn

(`this`, `collection`) => `void`

Function to execute

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

`this`

##### Example

```ts
collection
	.tap((coll) => console.log(coll.size))
	.filter((user) => user.bot)
	.tap((coll) => console.log(coll.size));
```

##### Inherited from

`Collection.tap`

---

### toJSON()

> **toJSON**(): \[`string`, `T`\][]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:502

#### Returns

\[`string`, `T`\][]

#### Inherited from

`Collection.toJSON`

---

### toReversed()

> **toReversed**(): `Collection`\<`string`, `T`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:487

Identical to [Array.toReversed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)
but returns a Collection instead of an Array.

#### Returns

`Collection`\<`string`, `T`\>

#### Inherited from

`Collection.toReversed`

---

### toSorted()

> **toSorted**(`compareFunction?`): `Collection`\<`string`, `T`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:501

The sorted method sorts the items of a collection and returns it.
The sort is not necessarily stable in Node 10 or older.
The default sort order is according to string Unicode code points.

#### Parameters

##### compareFunction?

`Comparator`\<`string`, `T`\>

Specifies a function that defines the sort order.
If omitted, the collection is sorted according to each character's Unicode code point value,
according to the string conversion of each element.

#### Returns

`Collection`\<`string`, `T`\>

#### Example

```ts
collection.sorted((userA, userB) => userA.createdTimestamp - userB.createdTimestamp);
```

#### Inherited from

`Collection.toSorted`

---

### union()

> **union**\<`OtherValue`\>(`other`): `Collection`\<`string`, `T` \| `OtherValue`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:424

Returns a new collection containing the items where the key is present in either of the collections.

#### Type Parameters

##### OtherValue

`OtherValue`

#### Parameters

##### other

`ReadonlyCollection`\<`string`, `OtherValue`\>

The other Collection to filter against

#### Returns

`Collection`\<`string`, `T` \| `OtherValue`\>

#### Remarks

If the collections have any items with the same key, the value from the first collection will be used.

#### Example

```ts
const col1 = new Collection([
	['a', 1],
	['b', 2]
]);
const col2 = new Collection([
	['a', 1],
	['b', 3],
	['c', 3]
]);
const union = col1.union(col2);
console.log(union);
// => Collection { 'a' => 1, 'b' => 2, 'c' => 3 }
```

#### Inherited from

`Collection.union`

---

### unload()

> **unload**(`name`): `Promise`\<`T`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:539

Unloads a piece given its instance or its name.

#### Parameters

##### name

`string` \| `T`

The name of the file to load.

#### Returns

`Promise`\<`T`\>

Returns the piece that was unloaded.

---

### unloadAll()

> **unloadAll**(): `Promise`\<`T`[]\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:543

Unloads all pieces from the store.

#### Returns

`Promise`\<`T`[]\>

---

### values()

> **values**(): `MapIterator`\<`T`\>

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts:158

Returns an iterable of values in the map

#### Returns

`MapIterator`\<`T`\>

#### Inherited from

`Collection.values`

---

### combineEntries()

> `static` **combineEntries**\<`Key`, `Value`\>(`entries`, `combine`): `Collection`\<`Key`, `Value`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:515

Creates a Collection from a list of entries.

#### Type Parameters

##### Key

`Key`

##### Value

`Value`

#### Parameters

##### entries

`Iterable`\<\[`Key`, `Value`\]\>

The list of entries

##### combine

(`firstValue`, `secondValue`, `key`) => `Value`

Function to combine an existing entry with a new one

#### Returns

`Collection`\<`Key`, `Value`\>

#### Example

```ts
Collection.combineEntries(
	[
		['a', 1],
		['b', 2],
		['a', 2]
	],
	(x, y) => x + y
);
// returns Collection { "a" => 3, "b" => 2 }
```

#### Inherited from

`Collection.combineEntries`

---

### groupBy()

> `static` **groupBy**\<`K`, `T`\>(`items`, `keySelector`): `Map`\<`K`, `T`[]\>

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2024.collection.d.ts:25

Groups members of an iterable according to the return value of the passed callback.

#### Type Parameters

##### K

`K`

##### T

`T`

#### Parameters

##### items

`Iterable`\<`T`\>

An iterable.

##### keySelector

(`item`, `index`) => `K`

A callback which will be invoked for each item in items.

#### Returns

`Map`\<`K`, `T`[]\>

#### Inherited from

`Collection.groupBy`
