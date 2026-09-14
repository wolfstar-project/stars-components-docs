[@wolfstar/website](../../../../../../../../index.md) / [Documentation](../../../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../../../index.md) / [Sentry](../../../index.md) / [logger](../index.md) / debug

# Function: debug()

> **debug**(...`args`): `void`

Defined in: node*modules/.pnpm/@sentry+node-core@10.71.0*@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/logs/exports.d.ts:49

## Parameters

### args

...`CaptureLogArgs`

## Returns

`void`

## Examples

```
Sentry.logger.debug('Cache miss for user profile', {
  userId: 'user_123',
  cacheKey: 'profile:user_123'
});
```

**With template strings**

```
Sentry.logger.debug('Cache %s for %s: %s',
  ['miss', 'user profile', 'key not found'],
  { userId: 'user_123' }
);
```
