[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / prismaIntegration

# Variable: prismaIntegration

> `const` **prismaIntegration**: (`options?`) => `Integration` & `object`

Defined in: node_modules/.pnpm/@sentry+server-utils@10.71.0_supports-color@7.2.0/node_modules/@sentry/server-utils/build/types/prisma/index.d.ts:42

Adds Sentry tracing instrumentation for the [prisma](https://www.npmjs.com/package/prisma) library.
For more information, see the [`prismaIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/prisma/).

NOTE: This integration works out of the box with Prisma v6, and v7.
On Prisma versions prior to v6, add `previewFeatures = ["tracing"]` to the client generator block of your Prisma schema:

```
generator client {
  provider = "prisma-client-js"
  previewFeatures = ["tracing"]
}
```

## Parameters

### options?

`PrismaOptions`

## Returns

`Integration` & `object`
