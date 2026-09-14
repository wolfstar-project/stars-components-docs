[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/twitch-helpers](../index.md) / checkSignature

# Function: checkSignature()

> **checkSignature**(`algorithm`, `signature`, `data`): `boolean`

Defined in: [twitch.ts:117](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/twitch-helpers/src/lib/twitch.ts#L117)

This method can be used to verify the Twitch signature when receiving an event sub request.

## Parameters

### algorithm

`string`

The algorithm to use

### signature

`string`

The signature to verify

### data

`BinaryLike`

The data to verify

## Returns

`boolean`

Whether or not the signature is valid

## Example

```typescript
// Grab the headers that we need to use for verification
const twitchEventSubMessageSignature = request.headers['twitch-eventsub-message-signature'];
const twitchEventSubMessageId = request.headers['twitch-eventsub-message-id'];
const twitchEventSubMessageTimestamp = request.headers['twitch-eventsub-message-timestamp'];

// If there is no body then tell Twitch they are sending malformed data
if (!isObject(request.body)) return response.badRequest('Malformed data received');

// If any of the headers is missing tell Twitch they are sending invalid data
if (!twitchEventSubMessageSignature || !twitchEventSubMessageId || !twitchEventSubMessageTimestamp) {
	return response.badRequest('Missing required Twitch Eventsub headers');
}

// Construct the verification signature
const twitchEventSubMessage = twitchEventSubMessageId + twitchEventSubMessageTimestamp + JSON.stringify(request.body);

// Split the algorithm from the signature
const [algorithm, signature] = twitchEventSubMessageSignature.toString().split('=', 2);

// Verify the signature
if (!twitch.checkSignature(algorithm, signature, twitchEventSubMessage)) {
	return response.forbidden('Invalid Hub signature');
}
```
