[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-api](../index.md) / RouteStore

# Class: RouteStore

Defined in: [packages/plugin-api/src/lib/structures/RouteStore.ts:6](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/RouteStore.ts#L6)

The store class which contains [Piece](../../http-framework/classes/Piece.md)s.

## theme_extends

- [`Store`](../../http-framework/classes/Store.md)\<[`Route`](Route.md), `"routes"`\>

## Constructors

### Constructor

> **new RouteStore**(): `RouteStore`

Defined in: [packages/plugin-api/src/lib/structures/RouteStore.ts:12](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/RouteStore.ts#L12)

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Returns

`RouteStore`

#### Overrides

[`Store`](../../http-framework/classes/Store.md).[`constructor`](../../http-framework/classes/Store.md#constructor)

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:137

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`[toStringTag]`](../../http-framework/classes/Store.md#tostringtag)

---

### constructor

> **constructor**: `CollectionConstructor`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:21

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

`Store.constructor`

---

### Constructor

> `readonly` **Constructor**: `AbstractConstructor`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:462

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`Constructor`](../../http-framework/classes/Store.md#constructor-2)

---

### name

> `readonly` **name**: `"routes"`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:463

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`name`](../../http-framework/classes/Store.md#name)

---

### paths

> `readonly` **paths**: `Set`\<`string`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:464

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`paths`](../../http-framework/classes/Store.md#paths)

---

### router

> `readonly` **router**: [`RouterRoot`](RouterRoot.md)

Defined in: [packages/plugin-api/src/lib/structures/RouteStore.ts:10](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/RouteStore.ts#L10)

The trie used to match an incoming request's pathname to a registered [Route](Route.md).

---

### size

> `readonly` **size**: `number`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:45

#### Returns

the number of elements in the Map.

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`size`](../../http-framework/classes/Store.md#size)

---

### strategy

> `readonly` **strategy**: `ILoaderStrategy`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:465

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`strategy`](../../http-framework/classes/Store.md#strategy)

---

### \[species\]

> `readonly` `static` **\[species\]**: `MapConstructor`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`[species]`](../../http-framework/classes/Store.md#species)

---

### defaultStrategy

> `static` **defaultStrategy**: `ILoaderStrategy`\<`any`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:584

The default strategy, defaults to LoaderStrategy, which is constructed on demand when a store is constructed,
when none was set beforehand.

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`defaultStrategy`](../../http-framework/classes/Store.md#defaultstrategy)

---

### logger

> `static` **logger**: `StoreLogger` \| `null`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:588

The default logger, defaults to `null`.

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`logger`](../../http-framework/classes/Store.md#logger)

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

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`container`](../../http-framework/classes/Store.md#container)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `MapIterator`\<\[`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\]\>

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts:143

Returns an iterable of entries in the map.

#### Returns

`MapIterator`\<\[`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\]\>

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`[iterator]`](../../http-framework/classes/Store.md#iterator)

---

### at()

> **at**(`index`): [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:98

Identical to [Array.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at).
Returns the item at a given index, allowing for positive and negative integers.
Negative integers count back from the last item in the collection.

#### Parameters

##### index

`number`

The index of the element to obtain

#### Returns

[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`at`](../../http-framework/classes/Store.md#at)

---

### clear()

> **clear**(): `void`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:20

#### Returns

`void`

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`clear`](../../http-framework/classes/Store.md#clear)

---

### clone()

> **clone**(): `Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:361

Creates an identical shallow copy of this collection.

#### Returns

`Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

#### Example

```ts
const newColl = someColl.clone();
```

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`clone`](../../http-framework/classes/Store.md#clone)

---

### concat()

> **concat**(...`collections`): `Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:371

Combines this collection with others into a new collection. None of the source collections are modified.

#### Parameters

##### collections

...`ReadonlyCollection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>[]

Collections to merge

#### Returns

`Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

#### Example

```ts
const newColl = someColl.concat(someOtherColl, anotherColl, ohBoyAColl);
```

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`concat`](../../http-framework/classes/Store.md#concat)

---

### construct()

> **construct**(`Ctor`, `data`): [`Route`](Route.md)

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:566

Constructs a [Piece](../../http-framework/classes/Piece.md) instance.

#### Parameters

##### Ctor

`ILoaderResultEntry`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

The [Piece](../../http-framework/classes/Piece.md)'s constructor used to build the instance.

##### data

`HydratedModuleData`

The module's information

#### Returns

[`Route`](Route.md)

An instance of the constructed piece.

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`construct`](../../http-framework/classes/Store.md#construct)

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

[`Store`](../../http-framework/classes/Store.md).[`delete`](../../http-framework/classes/Store.md#delete)

---

### difference()

> **difference**(`other`): `Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:439

Returns a new collection containing the items where the key is present in this collection but not the other.

#### Parameters

##### other

`ReadonlyCollection`\<`string`, `any`\>

The other Collection to filter against

#### Returns

`Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

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

[`Store`](../../http-framework/classes/Store.md).[`difference`](../../http-framework/classes/Store.md#difference)

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

[`Store`](../../http-framework/classes/Store.md).[`each`](../../http-framework/classes/Store.md#each)

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

[`Store`](../../http-framework/classes/Store.md).[`each`](../../http-framework/classes/Store.md#each)

---

### ensure()

> **ensure**(`key`, `defaultValueGenerator`): [`Route`](Route.md)

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:41

Obtains the value of the given key if it exists, otherwise sets and returns the value provided by the default value generator.

#### Parameters

##### key

`string`

The key to get if it exists, or set otherwise

##### defaultValueGenerator

(`key`, `collection`) => [`Route`](Route.md)

A function that generates the default value

#### Returns

[`Route`](Route.md)

#### Example

```ts
collection.ensure(guildId, () => defaultGuildConfig);
```

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`ensure`](../../http-framework/classes/Store.md#ensure)

---

### entries()

> **entries**(): `MapIterator`\<\[`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\]\>

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts:148

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`MapIterator`\<\[`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\]\>

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`entries`](../../http-framework/classes/Store.md#entries)

---

### equals()

> **equals**(`collection`): `boolean`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:380

Checks if this collection shares identical items with another.
This is different to checking for equality using equal-signs, because
the collections may be different objects, but contain the same data.

#### Parameters

##### collection

`ReadonlyCollection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Collection to compare with

#### Returns

`boolean`

Whether the collections have identical contents

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`equals`](../../http-framework/classes/Store.md#equals)

---

### every()

#### Call Signature

> **every**\<`NewKey`\>(`fn`): `this is Collection<NewKey, Route<Options>>`

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

`this is Collection<NewKey, Route<Options>>`

##### Example

```ts
collection.every((user) => !user.bot);
```

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`every`](../../http-framework/classes/Store.md#every)

#### Call Signature

> **every**\<`NewValue`\>(`fn`): `this is Collection<string, NewValue>`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:293

Checks if all items passes a test. Identical in behavior to
[Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).

##### Type Parameters

###### NewValue

`NewValue` _extends_ [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>

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

[`Store`](../../http-framework/classes/Store.md).[`every`](../../http-framework/classes/Store.md#every)

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

[`Store`](../../http-framework/classes/Store.md).[`every`](../../http-framework/classes/Store.md#every)

#### Call Signature

> **every**\<`This`, `NewKey`\>(`fn`, `thisArg`): `this is Collection<NewKey, Route<Options>>`

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

`this is Collection<NewKey, Route<Options>>`

##### Example

```ts
collection.every((user) => !user.bot);
```

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`every`](../../http-framework/classes/Store.md#every)

#### Call Signature

> **every**\<`This`, `NewValue`\>(`fn`, `thisArg`): `this is Collection<string, NewValue>`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:296

Checks if all items passes a test. Identical in behavior to
[Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).

##### Type Parameters

###### This

`This`

###### NewValue

`NewValue` _extends_ [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>

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

[`Store`](../../http-framework/classes/Store.md).[`every`](../../http-framework/classes/Store.md#every)

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

[`Store`](../../http-framework/classes/Store.md).[`every`](../../http-framework/classes/Store.md#every)

---

### filter()

#### Call Signature

> **filter**\<`NewKey`\>(`fn`): `Collection`\<`NewKey`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

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

`Collection`\<`NewKey`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

##### Example

```ts
collection.filter((user) => user.username === 'Bob');
```

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`filter`](../../http-framework/classes/Store.md#filter)

#### Call Signature

> **filter**\<`NewValue`\>(`fn`): `Collection`\<`string`, `NewValue`\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:207

Identical to
[Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
but returns a Collection instead of an Array.

##### Type Parameters

###### NewValue

`NewValue` _extends_ [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>

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

[`Store`](../../http-framework/classes/Store.md).[`filter`](../../http-framework/classes/Store.md#filter)

#### Call Signature

> **filter**(`fn`): `Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:208

Identical to
[Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
but returns a Collection instead of an Array.

##### Parameters

###### fn

(`value`, `key`, `collection`) => `unknown`

The function to test with (should return a boolean)

##### Returns

`Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

##### Example

```ts
collection.filter((user) => user.username === 'Bob');
```

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`filter`](../../http-framework/classes/Store.md#filter)

#### Call Signature

> **filter**\<`This`, `NewKey`\>(`fn`, `thisArg`): `Collection`\<`NewKey`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

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

`Collection`\<`NewKey`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

##### Example

```ts
collection.filter((user) => user.username === 'Bob');
```

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`filter`](../../http-framework/classes/Store.md#filter)

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

`NewValue` _extends_ [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>

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

[`Store`](../../http-framework/classes/Store.md).[`filter`](../../http-framework/classes/Store.md#filter)

#### Call Signature

> **filter**\<`This`\>(`fn`, `thisArg`): `Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

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

`Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

##### Example

```ts
collection.filter((user) => user.username === 'Bob');
```

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`filter`](../../http-framework/classes/Store.md#filter)

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

`NewValue` _extends_ [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>

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

[`Store`](../../http-framework/classes/Store.md).[`find`](../../http-framework/classes/Store.md#find)

#### Call Signature

> **find**(`fn`): [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

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

[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

##### Example

```ts
collection.find((user) => user.username === 'Bob');
```

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`find`](../../http-framework/classes/Store.md#find)

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

`NewValue` _extends_ [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>

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

[`Store`](../../http-framework/classes/Store.md).[`find`](../../http-framework/classes/Store.md#find)

#### Call Signature

> **find**\<`This`\>(`fn`, `thisArg`): [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

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

[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

##### Example

```ts
collection.find((user) => user.username === 'Bob');
```

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`find`](../../http-framework/classes/Store.md#find)

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

[`Store`](../../http-framework/classes/Store.md).[`findKey`](../../http-framework/classes/Store.md#findkey)

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

[`Store`](../../http-framework/classes/Store.md).[`findKey`](../../http-framework/classes/Store.md#findkey)

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

[`Store`](../../http-framework/classes/Store.md).[`findKey`](../../http-framework/classes/Store.md#findkey)

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

[`Store`](../../http-framework/classes/Store.md).[`findKey`](../../http-framework/classes/Store.md#findkey)

---

### findLast()

#### Call Signature

> **findLast**\<`NewValue`\>(`fn`): `NewValue` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:169

Searches for a last item where the given function returns a truthy value. This behaves like
[Array.findLast()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast).

##### Type Parameters

###### NewValue

`NewValue` _extends_ [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>

##### Parameters

###### fn

(`value`, `key`, `collection`) => `value is NewValue`

The function to test with (should return a boolean)

##### Returns

`NewValue` \| `undefined`

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`findLast`](../../http-framework/classes/Store.md#findlast)

#### Call Signature

> **findLast**(`fn`): [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:170

Searches for a last item where the given function returns a truthy value. This behaves like
[Array.findLast()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast).

##### Parameters

###### fn

(`value`, `key`, `collection`) => `unknown`

The function to test with (should return a boolean)

##### Returns

[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`findLast`](../../http-framework/classes/Store.md#findlast)

#### Call Signature

> **findLast**\<`This`, `NewValue`\>(`fn`, `thisArg`): `NewValue` \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:171

Searches for a last item where the given function returns a truthy value. This behaves like
[Array.findLast()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast).

##### Type Parameters

###### This

`This`

###### NewValue

`NewValue` _extends_ [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>

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

[`Store`](../../http-framework/classes/Store.md).[`findLast`](../../http-framework/classes/Store.md#findlast)

#### Call Signature

> **findLast**\<`This`\>(`fn`, `thisArg`): [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

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

[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`findLast`](../../http-framework/classes/Store.md#findlast)

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

[`Store`](../../http-framework/classes/Store.md).[`findLastKey`](../../http-framework/classes/Store.md#findlastkey)

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

[`Store`](../../http-framework/classes/Store.md).[`findLastKey`](../../http-framework/classes/Store.md#findlastkey)

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

[`Store`](../../http-framework/classes/Store.md).[`findLastKey`](../../http-framework/classes/Store.md#findlastkey)

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

[`Store`](../../http-framework/classes/Store.md).[`findLastKey`](../../http-framework/classes/Store.md#findlastkey)

---

### first()

#### Call Signature

> **first**(): [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:62

Obtains the first value(s) in this collection.

##### Returns

[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

A single value if no amount is provided or an array of values, starting from the end if amount is negative

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`first`](../../http-framework/classes/Store.md#first)

#### Call Signature

> **first**(`amount`): [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>[]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:63

Obtains the first value(s) in this collection.

##### Parameters

###### amount

`number`

Amount of values to obtain from the beginning

##### Returns

[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>[]

A single value if no amount is provided or an array of values, starting from the end if amount is negative

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`first`](../../http-framework/classes/Store.md#first)

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

[`Store`](../../http-framework/classes/Store.md).[`firstKey`](../../http-framework/classes/Store.md#firstkey)

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

[`Store`](../../http-framework/classes/Store.md).[`firstKey`](../../http-framework/classes/Store.md#firstkey)

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

[`Store`](../../http-framework/classes/Store.md).[`flatMap`](../../http-framework/classes/Store.md#flatmap)

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

[`Store`](../../http-framework/classes/Store.md).[`flatMap`](../../http-framework/classes/Store.md#flatmap)

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

[`Store`](../../http-framework/classes/Store.md).[`forEach`](../../http-framework/classes/Store.md#foreach)

---

### get()

> **get**(`key`): [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:33

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

##### key

`string`

#### Returns

[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`get`](../../http-framework/classes/Store.md#get)

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

[`Store`](../../http-framework/classes/Store.md).[`has`](../../http-framework/classes/Store.md#has)

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

[`Store`](../../http-framework/classes/Store.md).[`hasAll`](../../http-framework/classes/Store.md#hasall)

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

[`Store`](../../http-framework/classes/Store.md).[`hasAny`](../../http-framework/classes/Store.md#hasany)

---

### insert()

> **insert**(`piece`): `Promise`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:559

Inserts a piece into the store.

#### Parameters

##### piece

[`Route`](Route.md)

The piece to be inserted into the store.

#### Returns

`Promise`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

The inserted piece.

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`insert`](../../http-framework/classes/Store.md#insert)

---

### intersection()

> **intersection**(`other`): `Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:407

The intersection method returns a new collection containing the items where the key is present in both collections.

#### Parameters

##### other

`ReadonlyCollection`\<`string`, `any`\>

The other Collection to filter against

#### Returns

`Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

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

[`Store`](../../http-framework/classes/Store.md).[`intersection`](../../http-framework/classes/Store.md#intersection)

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

[`Store`](../../http-framework/classes/Store.md).[`keyAt`](../../http-framework/classes/Store.md#keyat)

---

### keys()

> **keys**(): `MapIterator`\<`string`\>

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts:153

Returns an iterable of keys in the map

#### Returns

`MapIterator`\<`string`\>

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`keys`](../../http-framework/classes/Store.md#keys)

---

### last()

#### Call Signature

> **last**(): [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:80

Obtains the last value(s) in this collection.

##### Returns

[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

A single value if no amount is provided or an array of values, starting from the start if
amount is negative

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`last`](../../http-framework/classes/Store.md#last)

#### Call Signature

> **last**(`amount`): [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>[]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:81

Obtains the last value(s) in this collection.

##### Parameters

###### amount

`number`

Amount of values to obtain from the end

##### Returns

[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>[]

A single value if no amount is provided or an array of values, starting from the start if
amount is negative

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`last`](../../http-framework/classes/Store.md#last)

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

[`Store`](../../http-framework/classes/Store.md).[`lastKey`](../../http-framework/classes/Store.md#lastkey)

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

[`Store`](../../http-framework/classes/Store.md).[`lastKey`](../../http-framework/classes/Store.md#lastkey)

---

### load()

> **load**(`root`, `path`): `Promise`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>[]\>

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

`Promise`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>[]\>

All the loaded pieces.

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`load`](../../http-framework/classes/Store.md#load)

---

### loadAll()

> **loadAll**(): `Promise`\<`void`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:547

Loads all pieces from all directories specified by [paths](../../http-framework/classes/Store.md#paths).

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`loadAll`](../../http-framework/classes/Store.md#loadall)

---

### loadPiece()

> **loadPiece**(`entry`): `Promise`\<`void`\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:526

Adds a piece into the store's list of manually registered pieces. If [`()`](MiddlewareStore.md#loadall) was called, the
piece will be loaded immediately, otherwise it will be queued until [`()`](MiddlewareStore.md#loadall) is called.

All manually registered pieces will be kept even after they are loaded to ensure they can be loaded again if
[`()`](MiddlewareStore.md#loadall) is called again.

#### Parameters

##### entry

`StoreManuallyRegisteredPiece`\<`"routes"`\>

The entry to load.

#### Returns

`Promise`\<`void`\>

#### Remarks

- Pieces loaded this way will have their [`root`](../../http-framework/interfaces/LoaderPieceContext.md#root) and
  [`path`](../../http-framework/interfaces/LoaderPieceContext.md#path) set to `VirtualPath`, and as such, cannot be reloaded.
- This method is useful in environments where file system access is limited or unavailable, such as when using
  [Serverless Computing](https://en.wikipedia.org/wiki/Serverless_computing).
- This method will always throw a TypeError if `entry.piece` is not a class.
- This method will always throw a [`LoaderError`](../../http-framework/classes/LoaderError.md) if the piece does not extend the
  [`store's piece constructor`](MiddlewareStore.md#constructor-2).
- This operation is atomic, if any of the above errors are thrown, the piece will not be loaded.

#### Seealso

[`()`](../../http-framework/classes/StoreRegistry.md#loadpiece)

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

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`loadPiece`](../../http-framework/classes/Store.md#loadpiece)

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

[`Store`](../../http-framework/classes/Store.md).[`map`](../../http-framework/classes/Store.md#map)

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

[`Store`](../../http-framework/classes/Store.md).[`map`](../../http-framework/classes/Store.md#map)

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

[`Store`](../../http-framework/classes/Store.md).[`mapValues`](../../http-framework/classes/Store.md#mapvalues)

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

[`Store`](../../http-framework/classes/Store.md).[`mapValues`](../../http-framework/classes/Store.md#mapvalues)

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

[`Store`](../../http-framework/classes/Store.md).[`merge`](../../http-framework/classes/Store.md#merge)

---

### partition()

#### Call Signature

> **partition**\<`NewKey`\>(`fn`): \[`Collection`\<`NewKey`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>, `Collection`\<`Exclude`\<`string`, `NewKey`\>, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>\]

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

\[`Collection`\<`NewKey`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>, `Collection`\<`Exclude`\<`string`, `NewKey`\>, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>\]

##### Example

```ts
const [big, small] = collection.partition((guild) => guild.memberCount > 250);
```

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`partition`](../../http-framework/classes/Store.md#partition)

#### Call Signature

> **partition**\<`NewValue`\>(`fn`): \[`Collection`\<`string`, `NewValue`\>, `Collection`\<`string`, `Exclude`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>, `NewValue`\>\>\]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:224

Partitions the collection into two collections where the first collection
contains the items that passed and the second contains the items that failed.

##### Type Parameters

###### NewValue

`NewValue` _extends_ [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>

##### Parameters

###### fn

(`value`, `key`, `collection`) => `value is NewValue`

Function used to test (should return a boolean)

##### Returns

\[`Collection`\<`string`, `NewValue`\>, `Collection`\<`string`, `Exclude`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>, `NewValue`\>\>\]

##### Example

```ts
const [big, small] = collection.partition((guild) => guild.memberCount > 250);
```

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`partition`](../../http-framework/classes/Store.md#partition)

#### Call Signature

> **partition**(`fn`): \[`Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>, `Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>\]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:225

Partitions the collection into two collections where the first collection
contains the items that passed and the second contains the items that failed.

##### Parameters

###### fn

(`value`, `key`, `collection`) => `unknown`

Function used to test (should return a boolean)

##### Returns

\[`Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>, `Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>\]

##### Example

```ts
const [big, small] = collection.partition((guild) => guild.memberCount > 250);
```

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`partition`](../../http-framework/classes/Store.md#partition)

#### Call Signature

> **partition**\<`This`, `NewKey`\>(`fn`, `thisArg`): \[`Collection`\<`NewKey`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>, `Collection`\<`Exclude`\<`string`, `NewKey`\>, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>\]

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

\[`Collection`\<`NewKey`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>, `Collection`\<`Exclude`\<`string`, `NewKey`\>, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>\]

##### Example

```ts
const [big, small] = collection.partition((guild) => guild.memberCount > 250);
```

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`partition`](../../http-framework/classes/Store.md#partition)

#### Call Signature

> **partition**\<`This`, `NewValue`\>(`fn`, `thisArg`): \[`Collection`\<`string`, `NewValue`\>, `Collection`\<`string`, `Exclude`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>, `NewValue`\>\>\]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:227

Partitions the collection into two collections where the first collection
contains the items that passed and the second contains the items that failed.

##### Type Parameters

###### This

`This`

###### NewValue

`NewValue` _extends_ [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>

##### Parameters

###### fn

(`this`, `value`, `key`, `collection`) => `value is NewValue`

Function used to test (should return a boolean)

###### thisArg

`This`

Value to use as `this` when executing the function

##### Returns

\[`Collection`\<`string`, `NewValue`\>, `Collection`\<`string`, `Exclude`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>, `NewValue`\>\>\]

##### Example

```ts
const [big, small] = collection.partition((guild) => guild.memberCount > 250);
```

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`partition`](../../http-framework/classes/Store.md#partition)

#### Call Signature

> **partition**\<`This`\>(`fn`, `thisArg`): \[`Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>, `Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>\]

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

\[`Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>, `Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>\]

##### Example

```ts
const [big, small] = collection.partition((guild) => guild.memberCount > 250);
```

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`partition`](../../http-framework/classes/Store.md#partition)

---

### random()

#### Call Signature

> **random**(): [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:113

Obtains unique random value(s) from this collection.

##### Returns

[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

A single value if no amount is provided or an array of values

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`random`](../../http-framework/classes/Store.md#random)

#### Call Signature

> **random**(`amount`): [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>[]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:114

Obtains unique random value(s) from this collection.

##### Parameters

###### amount

`number`

Amount of values to obtain randomly

##### Returns

[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>[]

A single value if no amount is provided or an array of values

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`random`](../../http-framework/classes/Store.md#random)

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

[`Store`](../../http-framework/classes/Store.md).[`randomKey`](../../http-framework/classes/Store.md#randomkey)

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

[`Store`](../../http-framework/classes/Store.md).[`randomKey`](../../http-framework/classes/Store.md#randomkey)

---

### reduce()

#### Call Signature

> **reduce**(`fn`, `initialValue?`): [`Route`](Route.md)

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:310

Applies a function to produce a single value. Identical in behavior to
[Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

##### Parameters

###### fn

(`accumulator`, `value`, `key`, `collection`) => [`Route`](Route.md)

Function used to reduce, taking four arguments; `accumulator`, `currentValue`, `currentKey`,
and `collection`

###### initialValue?

[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>

Starting value for the accumulator

##### Returns

[`Route`](Route.md)

##### Example

```ts
collection.reduce((acc, guild) => acc + guild.memberCount, 0);
```

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`reduce`](../../http-framework/classes/Store.md#reduce)

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

[`Store`](../../http-framework/classes/Store.md).[`reduce`](../../http-framework/classes/Store.md#reduce)

---

### reduceRight()

#### Call Signature

> **reduceRight**(`fn`, `initialValue?`): [`Route`](Route.md)

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:319

Applies a function to produce a single value. Identical in behavior to
[Array.reduceRight()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight).

##### Parameters

###### fn

(`accumulator`, `value`, `key`, `collection`) => [`Route`](Route.md)

Function used to reduce, taking four arguments; `accumulator`, `value`, `key`, and `collection`

###### initialValue?

[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>

Starting value for the accumulator

##### Returns

[`Route`](Route.md)

##### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`reduceRight`](../../http-framework/classes/Store.md#reduceright)

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

[`Store`](../../http-framework/classes/Store.md).[`reduceRight`](../../http-framework/classes/Store.md#reduceright)

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

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`registerPath`](../../http-framework/classes/Store.md#registerpath)

---

### resolve()

> **resolve**(`name`): [`Route`](Route.md)

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:553

Resolves a piece by its name or its instance.

#### Parameters

##### name

`string` \| [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>

The name of the piece or the instance itself.

#### Returns

[`Route`](Route.md)

The resolved piece.

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`resolve`](../../http-framework/classes/Store.md#resolve)

---

### reverse()

> **reverse**(): `this`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:127

Identical to [Array.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
but returns a Collection instead of an Array.

#### Returns

`this`

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`reverse`](../../http-framework/classes/Store.md#reverse)

---

### set()

> **set**(`key`, `value`): `this`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:41

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

##### key

`string`

##### value

[`Route`](Route.md)

#### Returns

`this`

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`set`](../../http-framework/classes/Store.md#set)

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

[`Store`](../../http-framework/classes/Store.md).[`some`](../../http-framework/classes/Store.md#some)

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

[`Store`](../../http-framework/classes/Store.md).[`some`](../../http-framework/classes/Store.md#some)

---

### sort()

> **sort**(`compareFunction?`): `this`

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:393

The sort method sorts the items of a collection in place and returns it.
The sort is not necessarily stable in Node 10 or older.
The default sort order is according to string Unicode code points.

#### Parameters

##### compareFunction?

`Comparator`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Specifies a function that defines the sort order.
If omitted, the collection is sorted according to each character's Unicode code point value, according to the string conversion of each element.

#### Returns

`this`

#### Example

```ts
collection.sort((userA, userB) => userA.createdTimestamp - userB.createdTimestamp);
```

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`sort`](../../http-framework/classes/Store.md#sort)

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

[`Store`](../../http-framework/classes/Store.md).[`sweep`](../../http-framework/classes/Store.md#sweep)

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

[`Store`](../../http-framework/classes/Store.md).[`sweep`](../../http-framework/classes/Store.md#sweep)

---

### symmetricDifference()

> **symmetricDifference**\<`OtherValue`\>(`other`): `Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `OtherValue`\>

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

`Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `OtherValue`\>

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

[`Store`](../../http-framework/classes/Store.md).[`symmetricDifference`](../../http-framework/classes/Store.md#symmetricdifference)

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

[`Store`](../../http-framework/classes/Store.md).[`tap`](../../http-framework/classes/Store.md#tap)

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

[`Store`](../../http-framework/classes/Store.md).[`tap`](../../http-framework/classes/Store.md#tap)

---

### toJSON()

> **toJSON**(): \[`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\][]

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:502

#### Returns

\[`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\][]

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`toJSON`](../../http-framework/classes/Store.md#tojson)

---

### toReversed()

> **toReversed**(): `Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:487

Identical to [Array.toReversed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)
but returns a Collection instead of an Array.

#### Returns

`Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`toReversed`](../../http-framework/classes/Store.md#toreversed)

---

### toSorted()

> **toSorted**(`compareFunction?`): `Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Defined in: node_modules/.pnpm/@discordjs+collection@2.1.1/node_modules/@discordjs/collection/dist/index.d.mts:501

The sorted method sorts the items of a collection and returns it.
The sort is not necessarily stable in Node 10 or older.
The default sort order is according to string Unicode code points.

#### Parameters

##### compareFunction?

`Comparator`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Specifies a function that defines the sort order.
If omitted, the collection is sorted according to each character's Unicode code point value,
according to the string conversion of each element.

#### Returns

`Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

#### Example

```ts
collection.sorted((userA, userB) => userA.createdTimestamp - userB.createdTimestamp);
```

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`toSorted`](../../http-framework/classes/Store.md#tosorted)

---

### union()

> **union**\<`OtherValue`\>(`other`): `Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `OtherValue`\>

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

`Collection`\<`string`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `OtherValue`\>

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

[`Store`](../../http-framework/classes/Store.md).[`union`](../../http-framework/classes/Store.md#union)

---

### unload()

> **unload**(`name`): `Promise`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:539

Unloads a piece given its instance or its name.

#### Parameters

##### name

`string` \| [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>

The name of the file to load.

#### Returns

`Promise`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Returns the piece that was unloaded.

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`unload`](../../http-framework/classes/Store.md#unload)

---

### unloadAll()

> **unloadAll**(): `Promise`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>[]\>

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:543

Unloads all pieces from the store.

#### Returns

`Promise`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>[]\>

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`unloadAll`](../../http-framework/classes/Store.md#unloadall)

---

### values()

> **values**(): `MapIterator`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts:158

Returns an iterable of values in the map

#### Returns

`MapIterator`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

#### Inherited from

[`Store`](../../http-framework/classes/Store.md).[`values`](../../http-framework/classes/Store.md#values)

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

[`Store`](../../http-framework/classes/Store.md).[`combineEntries`](../../http-framework/classes/Store.md#combineentries)
