[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/twitch-helpers](../index.md) / fetchStream

# Function: fetchStream()

> **fetchStream**(`streamerId`): `Promise`\<[`TwitchHelixStreamsResult`](../interfaces/TwitchHelixStreamsResult.md) \| `null`\>

Defined in: [twitch.ts:48](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/twitch-helpers/src/lib/twitch.ts#L48)

Retrieves the data of the current stream of a channel.

## Parameters

### streamerId

`string`

The Twitch User ID of the streamer.

## Returns

`Promise`\<[`TwitchHelixStreamsResult`](../interfaces/TwitchHelixStreamsResult.md) \| `null`\>

Either the data of the current stream if online, or `null` if the streamer is offline.
