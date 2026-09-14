[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / pinoIntegration

# Variable: pinoIntegration

> `const` **pinoIntegration**: `PinoIntegrationFunction`

Defined in: node*modules/.pnpm/@sentry+node-core@10.71.0*@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/integrations/pino.d.ts:69

Integration for Pino logging library.
Captures Pino logs as Sentry logs and optionally captures some log levels as events.

By default, all Pino loggers will be captured. To ignore a specific logger, use `pinoIntegration.untrackLogger(logger)`.

If you disable automatic instrumentation with `autoInstrument: false`, you can mark specific loggers to be tracked with `pinoIntegration.trackLogger(logger)`.

Requires Pino \>=v8.0.0 and Node \>=20.6.0 or \>=18.19.0
