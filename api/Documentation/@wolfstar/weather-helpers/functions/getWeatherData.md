[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/weather-helpers](../index.md) / getWeatherData

# Function: getWeatherData()

> **getWeatherData**(`query`, `lang`): `Promise`\<`Result`\<[`Weather`](../interfaces/Weather.md), [`Identifiers`](../enumerations/Identifiers.md), `boolean`\>\>

Defined in: [weather.ts:76](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/weather-helpers/src/lib/weather.ts#L76)

Retrieves weather data for a given query and language.

## Parameters

### query

`string`

The query string for the weather data.

### lang

`string`

The language code for the weather data.

## Returns

`Promise`\<`Result`\<[`Weather`](../interfaces/Weather.md), [`Identifiers`](../enumerations/Identifiers.md), `boolean`\>\>

A promise that resolves to a Result object containing either the weather data or an error identifier.
