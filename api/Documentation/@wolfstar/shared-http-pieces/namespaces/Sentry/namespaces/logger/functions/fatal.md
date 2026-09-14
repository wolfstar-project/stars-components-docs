[@wolfstar/website](../../../../../../../../index.md) / [Documentation](../../../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../../../index.md) / [Sentry](../../../index.md) / [logger](../index.md) / fatal

# Function: fatal()

> **fatal**(...`args`): `void`

Defined in: node*modules/.pnpm/@sentry+node-core@10.71.0*@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/logs/exports.d.ts:148

## Parameters

### args

...`CaptureLogArgs`

## Returns

`void`

## Examples

```
Sentry.logger.fatal('Database connection pool exhausted', {
  database: 'users',
  activeConnections: 100,
  maxConnections: 100
});
```

**With template strings**

```
Sentry.logger.fatal('Database %s: %s connections active',
  ['connection pool exhausted', '100/100'],
  { database: 'users' }
);
```
