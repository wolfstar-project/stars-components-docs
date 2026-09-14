[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-api](../index.md) / RouterNode

# Class: RouterNode

Defined in: [packages/plugin-api/src/lib/structures/router/RouterNode.ts:8](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterNode.ts#L8)

A single path segment's registered routes, keyed by HTTP method.

## theme_extends

- `Map`\<[`HttpMethod`](../type-aliases/HttpMethod.md), [`Route`](Route.md)\>

## Constructors

### Constructor

> **new RouterNode**(`branch`): `RouterNode`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterNode.ts:11](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterNode.ts#L11)

#### Parameters

##### branch

[`RouterBranch`](RouterBranch.md)

#### Returns

`RouterNode`

#### Overrides

`Map<HttpMethod, Route>.constructor`

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:137

#### Inherited from

[`MiddlewareStore`](MiddlewareStore.md).[`[toStringTag]`](MiddlewareStore.md#tostringtag)

---

### branch

> `readonly` **branch**: [`RouterBranch`](RouterBranch.md)

Defined in: [packages/plugin-api/src/lib/structures/router/RouterNode.ts:9](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterNode.ts#L9)

---

### size

> `readonly` **size**: `number`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:45

#### Returns

the number of elements in the Map.

#### Inherited from

[`MiddlewareStore`](MiddlewareStore.md).[`size`](MiddlewareStore.md#size)

---

### \[species\]

> `readonly` `static` **\[species\]**: `MapConstructor`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319

#### Inherited from

`Map.[species]`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `MapIterator`\<\[`"DELETE"` \| `"GET"` \| `"HEAD"` \| `"OPTIONS"` \| `"PATCH"` \| `"POST"` \| `"PUT"`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\]\>

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts:143

Returns an iterable of entries in the map.

#### Returns

`MapIterator`\<\[`"DELETE"` \| `"GET"` \| `"HEAD"` \| `"OPTIONS"` \| `"PATCH"` \| `"POST"` \| `"PUT"`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\]\>

#### Inherited from

`Map.[iterator]`

---

### clear()

> **clear**(): `void`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:20

#### Returns

`void`

#### Inherited from

`Map.clear`

---

### delete()

> **delete**(`key`): `boolean`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:24

#### Parameters

##### key

`"DELETE"` \| `"GET"` \| `"HEAD"` \| `"OPTIONS"` \| `"PATCH"` \| `"POST"` \| `"PUT"`

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

`Map.delete`

---

### entries()

> **entries**(): `MapIterator`\<\[`"DELETE"` \| `"GET"` \| `"HEAD"` \| `"OPTIONS"` \| `"PATCH"` \| `"POST"` \| `"PUT"`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\]\>

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts:148

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`MapIterator`\<\[`"DELETE"` \| `"GET"` \| `"HEAD"` \| `"OPTIONS"` \| `"PATCH"` \| `"POST"` \| `"PUT"`, [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\]\>

#### Inherited from

`Map.entries`

---

### extractParameters()

> **extractParameters**(`parts`): `Record`\<`string`, `string`\>

Defined in: [packages/plugin-api/src/lib/structures/router/RouterNode.ts:20](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterNode.ts#L20)

Walks up the branch chain collecting the values captured by dynamic (`[param]`) segments.

#### Parameters

##### parts

readonly `string`[]

The path segments of the matched request, in the same order used to reach this node.

#### Returns

`Record`\<`string`, `string`\>

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

`Map.forEach`

---

### get()

> **get**(`key`): [`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:33

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

##### key

`"DELETE"` \| `"GET"` \| `"HEAD"` \| `"OPTIONS"` \| `"PATCH"` \| `"POST"` \| `"PUT"`

#### Returns

[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\> \| `undefined`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

`Map.get`

---

### has()

> **has**(`key`): `boolean`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:37

#### Parameters

##### key

`"DELETE"` \| `"GET"` \| `"HEAD"` \| `"OPTIONS"` \| `"PATCH"` \| `"POST"` \| `"PUT"`

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

`Map.has`

---

### keys()

> **keys**(): `MapIterator`\<`"DELETE"` \| `"GET"` \| `"HEAD"` \| `"OPTIONS"` \| `"PATCH"` \| `"POST"` \| `"PUT"`\>

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts:153

Returns an iterable of keys in the map

#### Returns

`MapIterator`\<`"DELETE"` \| `"GET"` \| `"HEAD"` \| `"OPTIONS"` \| `"PATCH"` \| `"POST"` \| `"PUT"`\>

#### Inherited from

`Map.keys`

---

### set()

> **set**(`key`, `value`): `this`

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:41

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

##### key

`"DELETE"` \| `"GET"` \| `"HEAD"` \| `"OPTIONS"` \| `"PATCH"` \| `"POST"` \| `"PUT"`

##### value

[`Route`](Route.md)

#### Returns

`this`

#### Inherited from

`Map.set`

---

### values()

> **values**(): `MapIterator`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

Defined in: node_modules/.pnpm/typescript@5.8.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts:158

Returns an iterable of values in the map

#### Returns

`MapIterator`\<[`Route`](Route.md)\<[`Options`](../namespaces/Route/interfaces/Options.md)\>\>

#### Inherited from

`Map.values`
