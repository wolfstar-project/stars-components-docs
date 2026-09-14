[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/reddit-helpers](../index.md) / fetchRedditPost

# Function: fetchRedditPost()

> **fetchRedditPost**(`subreddit`, `key`): `Promise`\<`Ok`\<[`CacheHit`](../interfaces/CacheHit.md), `any`\> \| `Result`\<[`CacheHit`](../interfaces/CacheHit.md), [`RedditParseException`](../classes/RedditParseException.md), `false`\> \| `Result`\<[`CacheHit`](../interfaces/CacheHit.md), `FetchError`, `false`\>\>

Defined in: [packages/reddit-helpers/src/lib/reddit.ts:61](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/reddit-helpers/src/lib/reddit.ts#L61)

Fetches a Reddit post from a specified subreddit.

## Parameters

### subreddit

`string`

The name of the subreddit this post belongs to.

### key

`string`

The key of the post to fetch.

## Returns

`Promise`\<`Ok`\<[`CacheHit`](../interfaces/CacheHit.md), `any`\> \| `Result`\<[`CacheHit`](../interfaces/CacheHit.md), [`RedditParseException`](../classes/RedditParseException.md), `false`\> \| `Result`\<[`CacheHit`](../interfaces/CacheHit.md), `FetchError`, `false`\>\>

A promise that resolves to the RedditResponse object contained the fetched post.
