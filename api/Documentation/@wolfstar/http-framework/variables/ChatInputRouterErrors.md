[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / ChatInputRouterErrors

# Variable: ChatInputRouterErrors

> `const` **ChatInputRouterErrors**: `object`

Defined in: [packages/http-framework/src/lib/errors/ChatInputRouterError.ts:65](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/errors/ChatInputRouterError.ts#L65)

## Type Declaration

### DuplicatedSubcommand

> `readonly` **DuplicatedSubcommand**: (`command`, `subcommandGroup`, `subcommand`) => `string`

#### Parameters

##### command

`string`

##### subcommandGroup

`string`

##### subcommand

`string`

#### Returns

`string`

### DuplicatedSubcommandGroup

> `readonly` **DuplicatedSubcommandGroup**: (`command`, `subcommandGroup`) => `string`

#### Parameters

##### command

`string`

##### subcommandGroup

`string`

#### Returns

`string`

### SubcommandGroupLinkInvalid

> `readonly` **SubcommandGroupLinkInvalid**: (`command`, `subcommandGroup`) => `string`

#### Parameters

##### command

`string`

##### subcommandGroup

`string`

#### Returns

`string`

### SubcommandLinkInvalid

> `readonly` **SubcommandLinkInvalid**: (`command`, `subcommandGroup`, `subcommand`) => `string`

#### Parameters

##### command

`string`

##### subcommandGroup

`string`

##### subcommand

`string`

#### Returns

`string`
