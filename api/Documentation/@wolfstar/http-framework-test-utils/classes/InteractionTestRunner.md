[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework-test-utils](../index.md) / InteractionTestRunner

# Class: InteractionTestRunner

Defined in: [packages/http-framework-test-utils/src/InteractionTestRunner.ts:6](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/InteractionTestRunner.ts#L6)

## Constructors

### Constructor

> **new InteractionTestRunner**(`client`): `InteractionTestRunner`

Defined in: [packages/http-framework-test-utils/src/InteractionTestRunner.ts:9](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/InteractionTestRunner.ts#L9)

#### Parameters

##### client

[`TestableClient`](TestableClient.md)

#### Returns

`InteractionTestRunner`

## Methods

### run()

> **run**(`interaction`): `Promise`\<[`InteractionResult`](../interfaces/InteractionResult.md)\>

Defined in: [packages/http-framework-test-utils/src/InteractionTestRunner.ts:13](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework-test-utils/src/InteractionTestRunner.ts#L13)

#### Parameters

##### interaction

`APIApplicationCommandAutocompleteInteraction` \| `APIChatInputApplicationCommandInteraction` \| `APIModalSubmitInteraction` \| `APIContextMenuInteraction` \| `APIMessageComponentInteraction` \| `APIPingInteraction`

#### Returns

`Promise`\<[`InteractionResult`](../interfaces/InteractionResult.md)\>
