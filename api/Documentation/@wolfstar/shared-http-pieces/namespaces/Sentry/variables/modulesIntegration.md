[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / modulesIntegration

# Variable: modulesIntegration

> `const` **modulesIntegration**: () => `object`

Defined in: node_modules/.pnpm/@sentry+node-core@10.71.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/integrations/modules.d.ts:9

Add node modules / packages to the event.
For this, multiple sources are used:

- They can be injected at build time into the **SENTRY_SERVER_MODULES** variable (e.g. in Next.js)
- They are extracted from the dependencies & devDependencies in the package.json file
- They are extracted from the require.cache (CJS only)

## Returns

`object`

### getModules

> **getModules**: _typeof_ `_getModules`

### name

> **name**: `"Modules"`

### processEvent()

> **processEvent**(`event`): [`Event`](../interfaces/Event.md)

#### Parameters

##### event

[`Event`](../interfaces/Event.md)

#### Returns

[`Event`](../interfaces/Event.md)
