[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/reddit-helpers](../index.md) / getRedditRedirectPostUrl

# Function: getRedditRedirectPostUrl()

> **getRedditRedirectPostUrl**(`path`): `Promise`\<`string` \| `null`\>

Defined in: [packages/reddit-helpers/src/lib/reddit.ts:50](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/reddit-helpers/src/lib/reddit.ts#L50)

Gets the proper URL of a reddit post in case an URL was provided that redirects to a post.
This happens when the shortlink is provided from the official Reddit app.

## Parameters

### path

`string`

The shortlink path to get the redirect for.

## Returns

`Promise`\<`string` \| `null`\>

The proper URL of the post from `headers.get('Location')`
