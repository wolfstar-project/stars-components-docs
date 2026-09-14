[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-api](../index.md) / RouterRoot

# Class: RouterRoot

Defined in: [packages/plugin-api/src/lib/structures/router/RouterRoot.ts:12](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterRoot.ts#L12)

The root of the route trie, owned by [RouteStore.router](RouteStore.md#router). Provides the public
add/remove/find API plus the static path-parsing helpers used by [Route](Route.md)'s constructor.

## theme_extends

- [`RouterBranch`](RouterBranch.md)

## Constructors

### Constructor

> **new RouterRoot**(): `RouterRoot`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterRoot.ts:13](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterRoot.ts#L13)

#### Returns

`RouterRoot`

#### Overrides

[`RouterBranch`](RouterBranch.md).[`constructor`](RouterBranch.md#constructor)

## Properties

### dynamic

> `readonly` **dynamic**: `boolean`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterBranch.ts:11](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterBranch.ts#L11)

#### Inherited from

[`RouterBranch`](RouterBranch.md).[`dynamic`](RouterBranch.md#dynamic)

---

### name

> `readonly` **name**: `string`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterBranch.ts:10](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterBranch.ts#L10)

#### Inherited from

[`RouterBranch`](RouterBranch.md).[`name`](RouterBranch.md#name)

---

### node

> `readonly` **node**: [`RouterNode`](RouterNode.md)

Defined in: [packages/plugin-api/src/lib/structures/router/RouterBranch.ts:13](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterBranch.ts#L13)

#### Inherited from

[`RouterBranch`](RouterBranch.md).[`node`](RouterBranch.md#node)

---

### parent

> `readonly` **parent**: [`RouterBranch`](RouterBranch.md) \| `null`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterBranch.ts:12](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterBranch.ts#L12)

#### Inherited from

[`RouterBranch`](RouterBranch.md).[`parent`](RouterBranch.md#parent)

## Methods

### add()

> **add**(`route`): [`RouterNode`](RouterNode.md)

Defined in: [packages/plugin-api/src/lib/structures/router/RouterRoot.ts:17](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterRoot.ts#L17)

#### Parameters

##### route

[`Route`](Route.md)

#### Returns

[`RouterNode`](RouterNode.md)

---

### find()

> **find**(`parts`): [`RouterBranch`](RouterBranch.md) \| `null`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterRoot.ts:25](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterRoot.ts#L25)

#### Parameters

##### parts

readonly `string`[]

#### Returns

[`RouterBranch`](RouterBranch.md) \| `null`

---

### findAt()

> `protected` **findAt**(`parts`, `index`): [`RouterBranch`](RouterBranch.md) \| `null`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterBranch.ts:68](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterBranch.ts#L68)

#### Parameters

##### parts

readonly `string`[]

##### index

`number`

#### Returns

[`RouterBranch`](RouterBranch.md) \| `null`

#### Inherited from

[`RouterBranch`](RouterBranch.md).[`findAt`](RouterBranch.md#findat)

---

### insertAt()

> `protected` **insertAt**(`parts`, `index`, `route`): [`RouterNode`](RouterNode.md)

Defined in: [packages/plugin-api/src/lib/structures/router/RouterBranch.ts:29](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterBranch.ts#L29)

#### Parameters

##### parts

readonly `string`[]

##### index

`number`

##### route

[`Route`](Route.md)

#### Returns

[`RouterNode`](RouterNode.md)

#### Inherited from

[`RouterBranch`](RouterBranch.md).[`insertAt`](RouterBranch.md#insertat)

---

### matches()

> **matches**(`part`): `boolean`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterBranch.ts:25](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterBranch.ts#L25)

#### Parameters

##### part

`string`

#### Returns

`boolean`

#### Inherited from

[`RouterBranch`](RouterBranch.md).[`matches`](RouterBranch.md#matches)

---

### remove()

> **remove**(`route`): `boolean`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterRoot.ts:21](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterRoot.ts#L21)

#### Parameters

##### route

[`Route`](Route.md)

#### Returns

`boolean`

---

### removeAt()

> `protected` **removeAt**(`parts`, `index`, `route`): `boolean`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterBranch.ts:54](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterBranch.ts#L54)

#### Parameters

##### parts

readonly `string`[]

##### index

`number`

##### route

[`Route`](Route.md)

#### Returns

`boolean`

#### Inherited from

[`RouterBranch`](RouterBranch.md).[`removeAt`](RouterBranch.md#removeat)

---

### extractMethod()

> `static` **extractMethod**(`name`): `"DELETE"` \| `"GET"` \| `"HEAD"` \| `"OPTIONS"` \| `"PATCH"` \| `"POST"` \| `"PUT"` \| `null`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterRoot.ts:60](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterRoot.ts#L60)

Extracts a trailing `.<method>` suffix from a piece name, e.g. `hello.post` → `POST`.

#### Parameters

##### name

`string`

#### Returns

`"DELETE"` \| `"GET"` \| `"HEAD"` \| `"OPTIONS"` \| `"PATCH"` \| `"POST"` \| `"PUT"` \| `null`

---

### makeRoutePathForPiece()

> `static` **makeRoutePathForPiece**(`directories`, `name`): `string`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterRoot.ts:41](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterRoot.ts#L41)

Builds a route path from a piece's directory structure and file name: `(group)`-style
directories are skipped, and a file named `index` collapses into its parent directory.

#### Parameters

##### directories

readonly `string`[]

##### name

`string`

#### Returns

`string`

---

### normalize()

> `static` **normalize**(`path?`): `string`[]

Defined in: [packages/plugin-api/src/lib/structures/router/RouterRoot.ts:32](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterRoot.ts#L32)

Splits a `/`-delimited path into its non-empty segments.

#### Parameters

##### path?

`string` \| `null`

#### Returns

`string`[]
