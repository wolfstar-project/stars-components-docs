[@wolfstar/website](../../../../../../../../index.md) / [Documentation](../../../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../../../index.md) / [Sentry](../../../index.md) / [logger](../index.md) / error

# Function: error()

> **error**(...`args`): `void`

Defined in: node*modules/.pnpm/@sentry+node-core@10.71.0*@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/logs/exports.d.ts:123

## Parameters

### args

...`CaptureLogArgs`

## Returns

`void`

## Examples

```
Sentry.logger.error('Failed to process payment', {
  orderId: 'order_123',
  errorCode: 'PAYMENT_FAILED',
  amount: 99.99
});
```

**With template strings**

```
Sentry.logger.error('Payment processing failed for order %s: %s',
  ['order_123', 'insufficient funds'],
  { amount: 99.99 }
);
```
