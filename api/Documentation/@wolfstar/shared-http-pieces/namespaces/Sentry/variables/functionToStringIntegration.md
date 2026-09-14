[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / functionToStringIntegration

# Variable: functionToStringIntegration

> `const` **functionToStringIntegration**: () => `Integration` & `object`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/integrations/functiontostring.d.ts:12

Patch toString calls to return proper name for wrapped functions.

```js
Sentry.init({
	integrations: [functionToStringIntegration()]
});
```

## Returns

`Integration` & `object`
