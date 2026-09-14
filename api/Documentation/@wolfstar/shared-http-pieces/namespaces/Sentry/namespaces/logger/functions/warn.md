[@wolfstar/website](../../../../../../../../index.md) / [Documentation](../../../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../../../index.md) / [Sentry](../../../index.md) / [logger](../index.md) / warn

# Function: warn()

> **warn**(...`args`): `void`

Defined in: node*modules/.pnpm/@sentry+node-core@10.71.0*@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/logs/exports.d.ts:98

## Parameters

### args

...`CaptureLogArgs`

## Returns

`void`

## Examples

```
Sentry.logger.warn('Rate limit approaching', {
  endpoint: '/api/users',
  currentRate: '95/100',
  resetTime: '2024-03-20T10:00:00Z'
});
```

**With template strings**

```
Sentry.logger.warn('Rate limit %s for %s: %s',
  ['approaching', '/api/users', '95/100 requests'],
  { resetTime: '2024-03-20T10:00:00Z' }
);
```
