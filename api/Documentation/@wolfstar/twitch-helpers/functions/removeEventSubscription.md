[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/twitch-helpers](../index.md) / removeEventSubscription

# Function: removeEventSubscription()

> **removeEventSubscription**(`subscriptionId`): `Promise`\<`void`\>

Defined in: [twitch.ts:163](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/twitch-helpers/src/lib/twitch.ts#L163)

Removes a Twitch subscription based on its ID.

## Parameters

### subscriptionId

`string`

the ID to remove. This ID should be saved from [addEventSubscription](addEventSubscription.md)

## Returns

`Promise`\<`void`\>

## Remarks

This requires `process.env.TWITCH_EVENTSUB_SECRET` to be set.
