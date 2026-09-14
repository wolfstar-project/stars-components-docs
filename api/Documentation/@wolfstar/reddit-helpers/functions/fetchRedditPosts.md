[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/reddit-helpers](../index.md) / fetchRedditPosts

# Function: fetchRedditPosts()

> **fetchRedditPosts**(`subreddit`, `limit?`): `Promise`\<`Ok`\<[`CacheHit`](../interfaces/CacheHit.md), `any`\> \| `Result`\<[`CacheHit`](../interfaces/CacheHit.md), `FetchError`, `boolean`\>\>

Defined in: [packages/reddit-helpers/src/lib/reddit.ts:36](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/reddit-helpers/src/lib/reddit.ts#L36)

Fetches Reddit posts from a specified subreddit.

## Parameters

### subreddit

`string`

The name of the subreddit to fetch posts from.

### limit?

`number` = `30`

The amount of posts to fetch, defaults to `30`

## Returns

`Promise`\<`Ok`\<[`CacheHit`](../interfaces/CacheHit.md), `any`\> \| `Result`\<[`CacheHit`](../interfaces/CacheHit.md), `FetchError`, `boolean`\>\>

A promise that resolves to the RedditResponse object containing the fetched posts.
