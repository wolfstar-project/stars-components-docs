[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-api](../index.md) / RouterBranch

# Class: RouterBranch

Defined in: [packages/plugin-api/src/lib/structures/router/RouterBranch.ts:9](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterBranch.ts#L9)

A single segment of the route trie. Each branch owns exactly one [RouterNode](RouterNode.md) (its
method-to-route map) and may have any number of static children plus at most one dynamic
(`[param]`) child, which is only checked after every static child fails to match.

## theme_extended_by

- [`RouterRoot`](RouterRoot.md)

## Constructors

### Constructor

> **new RouterBranch**(`name`, `dynamic`, `parent`): `RouterBranch`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterBranch.ts:18](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterBranch.ts#L18)

#### Parameters

##### name

`string`

##### dynamic

`boolean`

##### parent

`RouterBranch` \| `null`

#### Returns

`RouterBranch`

## Properties

### dynamic

> `readonly` **dynamic**: `boolean`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterBranch.ts:11](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterBranch.ts#L11)

---

### name

> `readonly` **name**: `string`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterBranch.ts:10](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterBranch.ts#L10)

---

### node

> `readonly` **node**: [`RouterNode`](RouterNode.md)

Defined in: [packages/plugin-api/src/lib/structures/router/RouterBranch.ts:13](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterBranch.ts#L13)

---

### parent

> `readonly` **parent**: `RouterBranch` \| `null`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterBranch.ts:12](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterBranch.ts#L12)

## Methods

### findAt()

> `protected` **findAt**(`parts`, `index`): `RouterBranch` \| `null`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterBranch.ts:68](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterBranch.ts#L68)

#### Parameters

##### parts

readonly `string`[]

##### index

`number`

#### Returns

`RouterBranch` \| `null`

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

---

### matches()

> **matches**(`part`): `boolean`

Defined in: [packages/plugin-api/src/lib/structures/router/RouterBranch.ts:25](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/structures/router/RouterBranch.ts#L25)

#### Parameters

##### part

`string`

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
