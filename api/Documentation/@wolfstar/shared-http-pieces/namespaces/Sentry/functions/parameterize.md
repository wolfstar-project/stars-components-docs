[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / parameterize

# Function: parameterize()

> **parameterize**(`strings`, ...`values`): `ParameterizedString`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/utils/parameterize.d.ts:13

Tagged template function which returns parameterized representation of the message
For example: parameterize`This is a log statement with ${x} and ${y} params`, would return:
"**sentry_template_string**": 'This is a log statement with %s and %s params',
"**sentry_template_values**": ['first', 'second']

## Parameters

### strings

`TemplateStringsArray`

An array of string values splitted between expressions

### values

...`unknown`[]

Expressions extracted from template string

## Returns

`ParameterizedString`

A `ParameterizedString` object that can be passed into `captureMessage` or Sentry.logger.X methods.
