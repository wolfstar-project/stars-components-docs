[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / PolymorphicRequest

# Type Alias: PolymorphicRequest

> **PolymorphicRequest** = `BaseRequest` & `NodeRequest` & `ExpressRequest` & `KoaRequest` & `NextjsRequest`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/types/polymorphics.d.ts:15

A `Request` type compatible with Node, Express, browser, etc., because everything is optional
