[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE

# Variable: SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE

> `const` **SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE**: `"sentry.sample_rate"` = `"sentry.sample_rate"`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/semanticAttributes.d.ts:13

Attributes that holds the sample rate that was locally applied to a span.
If this attribute is not defined, it means that the span inherited a sampling decision.

NOTE: Is only defined on root spans.
