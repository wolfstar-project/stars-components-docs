[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/twitch-helpers](../index.md) / fetchUsers

# Function: fetchUsers()

> **fetchUsers**(`params?`): `Promise`\<`FetchResult`\<[`TwitchHelixResponse`](../interfaces/TwitchHelixResponse.md)\<[`TwitchHelixUsersSearchResult`](../interfaces/TwitchHelixUsersSearchResult.md)\>\>\>

Defined in: [twitch.ts:35](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/twitch-helpers/src/lib/twitch.ts#L35)

Fetches the user data for lists of User IDs and/or login names.

## Parameters

### params?

[`TwitchFetchUsersParameters`](../interfaces/TwitchFetchUsersParameters.md) = `...`

An object with lists of Twitch User IDs and/or Twitch User Logins.

## Returns

`Promise`\<`FetchResult`\<[`TwitchHelixResponse`](../interfaces/TwitchHelixResponse.md)\<[`TwitchHelixUsersSearchResult`](../interfaces/TwitchHelixUsersSearchResult.md)\>\>\>

The Twitch user data for every provided ID and/or login that matches a valid user.
