[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/twitch-helpers](../index.md) / fetchUserFollowage

# Function: fetchUserFollowage()

> **fetchUserFollowage**(`followerId`, `streamerId`): `Promise`\<`FetchResult`\<[`TwitchHelixResponse`](../interfaces/TwitchHelixResponse.md)\<[`TwitchHelixUserFollowsResult`](../interfaces/TwitchHelixUserFollowsResult.md)\> & `object`\>\>

Defined in: [twitch.ts:77](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/twitch-helpers/src/lib/twitch.ts#L77)

Check if [followerId](#fetchuserfollowage) follows [streamerId](#fetchuserfollowage) and returns the followage data.

## Parameters

### followerId

`string`

The Twitch User ID of the user of whom you want to check if they are following [streamerId](#fetchuserfollowage).

### streamerId

`string`

The Twitch User ID of the user of whom you want to check if they are followed by [followerId](#fetchuserfollowage).

## Returns

`Promise`\<`FetchResult`\<[`TwitchHelixResponse`](../interfaces/TwitchHelixResponse.md)\<[`TwitchHelixUserFollowsResult`](../interfaces/TwitchHelixUserFollowsResult.md)\> & `object`\>\>

A FetchResult that contains the object with details of whether [followerId](#fetchuserfollowage) follows [streamerId](#fetchuserfollowage)
