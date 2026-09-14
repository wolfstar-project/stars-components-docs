[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / SentryContextManager

# Variable: SentryContextManager

> `const` **SentryContextManager**: _typeof_ `SentryAsyncLocalStorageContextManager`

Defined in: node_modules/.pnpm/@sentry+node-core@10.71.0_@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/otel/contextManager.d.ts:6

This is a custom ContextManager for OpenTelemetry & Sentry.
It ensures that we create a new hub per context, so that the OTEL Context & the Sentry Scopes are always in sync.
