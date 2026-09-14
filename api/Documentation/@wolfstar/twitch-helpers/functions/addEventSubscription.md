[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/twitch-helpers](../index.md) / addEventSubscription

# Function: addEventSubscription()

> **addEventSubscription**(`streamerId`, `subscriptionType?`): `Promise`\<[`TwitchEventSubResult`](../interfaces/TwitchEventSubResult.md)\>

Defined in: [twitch.ts:131](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/twitch-helpers/src/lib/twitch.ts#L131)

Adds a new Twitch subscription.

## Parameters

### streamerId

`string`

The Twitch ID of the streamer to subscribe to. You can use [fetchUsers](fetchUsers.md) to get the user information.

### subscriptionType?

[`TwitchEventSubTypes`](../enumerations/TwitchEventSubTypes.md) = `TwitchEventSubTypes.StreamOnline`

The type of subscription to add.

## Returns

`Promise`\<[`TwitchEventSubResult`](../interfaces/TwitchEventSubResult.md)\>

If successful the result of the Twitch subscription, this contains the `id` that can be stored in a database
for reference. Otherwise an HttpError is thrown.

## Remarks

This requires `process.env.TWITCH_EVENTSUB_CALLBACK` and `process.env.TWITCH_EVENTSUB_SECRET` to be set.
