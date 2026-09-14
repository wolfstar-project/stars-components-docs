[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-subcommands-advanced](../index.md) / wireParentSubcommands

# Function: wireParentSubcommands()

> **wireParentSubcommands**(`parent`): `void`

Defined in: [packages/plugin-subcommands-advanced/src/lib/utils/wiring.ts:29](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-subcommands-advanced/src/lib/utils/wiring.ts#L29)

Install delegate methods on the parent and rebuild its chat-input resolver + router
so modular child command classes handle each subcommand.

Must run after every command piece has been constructed (e.g. from
CommandLoaderStrategy.onLoad), so the registries contain every child.

Delegates are installed on the parent **prototype** so reconstructed instances
(Store `loadAll` rebuilds pieces) still satisfy CommandRouter's method checks.

## Parameters

### parent

`Command`

## Returns

`void`
