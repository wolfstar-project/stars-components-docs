[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/reddit-helpers](../index.md) / CacheHit

# Interface: CacheHit

Defined in: [packages/reddit-helpers/src/lib/types.ts:7](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/reddit-helpers/src/lib/types.ts#L7)

Represents a cache hit, containing information about whether the cache has NSFW or NSFL content,
as well as an array of cache entries.

## Properties

### hasNsfl

> `readonly` **hasNsfl**: `boolean`

Defined in: [packages/reddit-helpers/src/lib/types.ts:11](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/reddit-helpers/src/lib/types.ts#L11)

Indicates whether the cache contains NSFL (Not Safe for Life) content.

---

### hasNsfw

> `readonly` **hasNsfw**: `boolean`

Defined in: [packages/reddit-helpers/src/lib/types.ts:15](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/reddit-helpers/src/lib/types.ts#L15)

Indicates whether the cache contains NSFW (Not Safe for Work) content.

---

### posts

> `readonly` **posts**: readonly [`CacheEntry`](CacheEntry.md)[]

Defined in: [packages/reddit-helpers/src/lib/types.ts:19](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/reddit-helpers/src/lib/types.ts#L19)

An array of cache entries.
