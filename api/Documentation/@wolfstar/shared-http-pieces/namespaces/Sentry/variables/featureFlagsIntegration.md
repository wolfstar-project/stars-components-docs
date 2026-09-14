[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / featureFlagsIntegration

# Variable: featureFlagsIntegration

> `const` **featureFlagsIntegration**: `IntegrationFn`\<[`FeatureFlagsIntegration`](../interfaces/FeatureFlagsIntegration.md)\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/integrations/featureFlags/featureFlagsIntegration.d.ts:29

Sentry integration for buffering feature flag evaluations manually with an API, and
capturing them on error events and spans.

See the [feature flag documentation](https://develop.sentry.dev/sdk/expected-features/#feature-flags) for more information.

## Example

```
import * as Sentry from '@sentry/browser';
import { type FeatureFlagsIntegration } from '@sentry/browser';

// Setup
Sentry.init(..., integrations: [Sentry.featureFlagsIntegration()])

// Verify
const flagsIntegration = Sentry.getClient()?.getIntegrationByName<FeatureFlagsIntegration>('FeatureFlags');
if (flagsIntegration) {
  flagsIntegration.addFeatureFlag('my-flag', true);
} else {
  // check your setup
}
Sentry.captureException(Exception('broke')); // 'my-flag' should be captured to this Sentry event.
```
