[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / eventFiltersIntegration

# Variable: eventFiltersIntegration

> `const` **eventFiltersIntegration**: (`options?`) => `Integration` & `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/integrations/eventFilters.d.ts:23

An integration that filters out events (errors and transactions) based on:

- (Errors) A curated list of known low-value or irrelevant errors (see DEFAULT_IGNORE_ERRORS)
- (Errors) A list of error messages or urls/filenames passed in via
    - Top level Sentry.init options (`ignoreErrors`, `denyUrls`, `allowUrls`)
    - The same options passed to the integration directly via

## Parameters

### options?

`Partial`\<`EventFiltersOptions`\>

(Transactions/Spans) A list of root span (transaction) names passed in via

- Top level Sentry.init option (`ignoreTransactions`)
- The same option passed to the integration directly via

## Returns

`Integration` & `object`
