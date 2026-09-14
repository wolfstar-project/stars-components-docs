[@wolfstar/website](../../../../../../../../index.md) / [Documentation](../../../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../../../index.md) / [Sentry](../../../index.md) / [logger](../index.md) / info

# Function: info()

> **info**(...`args`): `void`

Defined in: node*modules/.pnpm/@sentry+node-core@10.71.0*@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/logs/exports.d.ts:73

## Parameters

### args

...`CaptureLogArgs`

## Returns

`void`

## Examples

```
Sentry.logger.info('User profile updated', {
  userId: 'user_123',
  updatedFields: ['email', 'preferences']
});
```

**With template strings**

```
Sentry.logger.info('User %s updated their %s',
  ['John Doe', 'profile settings'],
  { userId: 'user_123' }
);
```
