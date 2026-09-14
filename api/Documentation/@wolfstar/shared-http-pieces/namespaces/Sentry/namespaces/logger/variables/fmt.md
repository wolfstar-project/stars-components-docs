[@wolfstar/website](../../../../../../../../index.md) / [Documentation](../../../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../../../index.md) / [Sentry](../../../index.md) / [logger](../index.md) / fmt

# Variable: fmt

> `const` **fmt**: _typeof_ [`parameterize`](../../../functions/parameterize.md)

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/utils/parameterize.d.ts:21

Tagged template function which returns parameterized representation of the message.

## Param

**strings**

An array of string values splitted between expressions

## Param

**values**

Expressions extracted from template string

## Returns

A `ParameterizedString` object that can be passed into `captureMessage` or Sentry.logger.X methods.
