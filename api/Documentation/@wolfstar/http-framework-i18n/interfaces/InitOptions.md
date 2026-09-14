[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework-i18n](../index.md) / InitOptions

# Interface: InitOptions\<T\>

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:309

## theme_extends

- `PluginOptions`\<`T`\>

## Type Parameters

### T

`T` = `object`

## Properties

### appendNamespaceToCIMode?

> `optional` **appendNamespaceToCIMode?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:569

Prefixes the namespace to the returned key when using `cimode`

#### Default

```ts
false;
```

---

### appendNamespaceToMissingKey?

> `optional` **appendNamespaceToMissingKey?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:455

Appends namespace to missing key

#### Default

```ts
false;
```

---

### backend?

> `optional` **backend?**: `T`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:102

Options for backend - check documentation of plugin

#### Default

```ts
undefined;
```

#### Inherited from

`PluginOptions.backend`

---

### cache?

> `optional` **cache?**: `object`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:108

Options for cache layer - check documentation of plugin

#### Default

```ts
undefined;
```

#### Inherited from

`PluginOptions.cache`

---

### cleanCode?

> `optional` **cleanCode?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:377

Language will be lowercased EN --\> en while leaving full locales like en-US

#### Default

```ts
false;
```

---

### compatibilityJSON?

> `optional` **compatibilityJSON?**: `"v1"` \| `"v2"` \| `"v3"` \| `"v4"`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:575

Compatibility JSON version

#### Default

```ts
'v4';
```

---

### contextSeparator?

> `optional` **contextSeparator?**: `string`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:563

Char to split context from key

#### Default

```ts
'_';
```

---

### debug?

> `optional` **debug?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:314

Logs info level to console output. Helps finding issues with loading not working.

#### Default

```ts
false;
```

---

### defaultNS?

> `optional` **defaultNS?**: `string` \| `false` \| readonly `string`[]

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:389

Default namespace used if not passed to translation function

#### Default

```ts
'translation';
```

---

### detection?

> `optional` **detection?**: `object`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:96

Options for language detection - check documentation of plugin

#### Default

```ts
undefined;
```

#### Inherited from

`PluginOptions.detection`

---

### fallbackLng?

> `optional` **fallbackLng?**: `false` \| `FallbackLng`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:338

Language to use if translations in user language are not available.

#### Default

```ts
'dev';
```

---

### fallbackNS?

> `optional` **fallbackNS?**: `string` \| `false` \| readonly `string`[]

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:395

String or array of namespaces to lookup key if not found in given namespace.

#### Default

```ts
false;
```

---

### i18nFormat?

> `optional` **i18nFormat?**: `object`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:114

Options for i18n message format - check documentation of plugin

#### Default

```ts
undefined;
```

#### Inherited from

`PluginOptions.i18nFormat`

---

### ignoreJSONStructure?

> `optional` **ignoreJSONStructure?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:622

Automatically lookup for a flat key if a nested key is not found an vice-versa

#### Default

```ts
true;
```

---

### initImmediate?

> `optional` **initImmediate?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:539

Triggers resource loading in init function inside a setTimeout (default async behaviour).
Set it to false if your backend loads resources sync - that way calling i18next.t after
init is possible without relaying on the init callback.

#### Default

```ts
true;
```

---

### interpolation?

> `optional` **interpolation?**: `InterpolationOptions`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:525

#### See

https://www.i18next.com/interpolation.html

---

### joinArrays?

> `optional` **joinArrays?**: `string` \| `false`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:514

Char, eg. '\n' that arrays will be joined by

#### Default

```ts
false;
```

---

### keySeparator?

> `optional` **keySeparator?**: `string` \| `false`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:545

Char to separate keys

#### Default

```ts
'.';
```

---

### lng?

> `optional` **lng?**: `string`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:332

Language to use (overrides language detection)

#### Default

```ts
undefined;
```

---

### load?

> `optional` **load?**: `"all"` \| `"currentOnly"` \| `"languageOnly"`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:359

Language codes to lookup, given set language is
'en-US': 'all' --\> ['en-US', 'en', 'dev'],
'currentOnly' --\> 'en-US',
'languageOnly' --\> 'en'

#### Default

```ts
'all';
```

---

### locizeLastUsed?

> `optional` **locizeLastUsed?**: `object`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:581

Options for https://github.com/locize/locize-lastused

#### allowedHosts?

> `optional` **allowedHosts?**: readonly `string`[]

Hostnames that are allowed to send last used data.
Please keep those to your local system, staging, test servers (not production)

##### Default

```ts
['localhost'];
```

#### apiKey?

> `optional` **apiKey?**: `string`

An api key if you want to send missing keys

#### debounceSubmit?

> `optional` **debounceSubmit?**: `number`

Debounce interval to send data in milliseconds

##### Default

```ts
90000;
```

#### projectId

> **projectId**: `string`

The id of your locize project

#### referenceLng?

> `optional` **referenceLng?**: `string`

The reference language of your project

##### Default

```ts
'en';
```

#### version?

> `optional` **version?**: `string`

Version

##### Default

```ts
'latest';
```

#### Default

```ts
undefined;
```

---

### lowerCaseLng?

> `optional` **lowerCaseLng?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:371

Language will be lowercased eg. en-US --\> en-us

#### Default

```ts
false;
```

---

### maxParallelReads?

> `optional` **maxParallelReads?**: `number`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:631

Limit parallelism of calls to backend
This is needed to prevent trying to open thousands of
sockets or file descriptors, which can cause failures
and actually make the entire process take longer.

#### Default

```ts
10;
```

---

### maxRetries?

> `optional` **maxRetries?**: `number`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:640

The maximum number of retries to perform.
Note that retries are only performed when a request has no response
and throws an error.
The default value is used if value is set below 0.

#### Default

```ts
5;
```

---

### missingInterpolationHandler?

> `optional` **missingInterpolationHandler?**: (`text`, `value`, `options`) => `any`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:461

Gets called in case a interpolation value is undefined. This method will not be called if the value is empty string or null

#### Parameters

##### text

`string`

##### value

`any`

##### options

`InitOptions`

#### Returns

`any`

#### Default

```ts
noop;
```

---

### missingKeyHandler?

> `optional` **missingKeyHandler?**: `false` \| ((`lngs`, `ns`, `key`, `fallbackValue`, `updateMissing`, `options`) => `void`)

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:434

Used for custom missing key handling (needs saveMissing set to true!)

#### Default

```ts
false;
```

---

### missingKeyNoValueFallbackToKey?

> `optional` **missingKeyNoValueFallbackToKey?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:428

Used to not fallback to the key as default value, when using saveMissing functionality.
i.e. when using with i18next-http-backend this will result in having a key with an empty string value.

#### Default

```ts
false;
```

---

### nonExplicitSupportedLngs?

> `optional` **nonExplicitSupportedLngs?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:350

If true will pass eg. en-US if finding en in supportedLngs

#### Default

```ts
false;
```

---

### ns?

> `optional` **ns?**: `string` \| readonly `string`[]

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:383

String or array of namespaces to load

#### Default

```ts
'translation';
```

---

### nsSeparator?

> `optional` **nsSeparator?**: `string` \| `false`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:551

Char to split namespace from key

#### Default

```ts
':';
```

---

### partialBundledLanguages?

> `optional` **partialBundledLanguages?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:326

Allow initializing with bundled resources while using a backend to load non bundled ones.

#### Default

```ts
false;
```

---

### pluralSeparator?

> `optional` **pluralSeparator?**: `string`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:557

Char to split plural from key

#### Default

```ts
'_';
```

---

### postProcess?

> `optional` **postProcess?**: `string` \| `false` \| readonly `string`[]

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:473

String or array of postProcessors to apply per default

#### Default

```ts
false;
```

---

### postProcessPassResolved?

> `optional` **postProcessPassResolved?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:479

passthrough the resolved object including 'usedNS', 'usedLang' etc into options object of postprocessors as 'i18nResolved' property

#### Default

```ts
false;
```

---

### preload?

> `optional` **preload?**: `false` \| readonly `string`[]

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:365

Array of languages to preload. Important on server-side to assert translations are loaded before rendering views.

#### Default

```ts
false;
```

---

### react?

> `optional` **react?**: `ReactOptions`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:531

Options for react - check documentation of plugin

#### Default

```ts
undefined;
```

---

### resources?

> `optional` **resources?**: `Resource`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:320

Resources to initialize with (if not using loading or not appending using addResourceBundle)

#### Default

```ts
undefined;
```

---

### retryTimeout?

> `optional` **retryTimeout?**: `number`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:648

Set how long to wait, in milliseconds, betweeen retries of failed requests.
This number is compounded by a factor of 2 for subsequent retry.
The default value is used if value is set below 1ms.

#### Default

```ts
350;
```

---

### returnDetails?

> `optional` **returnDetails?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:502

Returns an object that includes information about the used language, namespace, key and value

---

### returnEmptyString?

> `optional` **returnEmptyString?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:491

Allows empty string as valid translation

#### Default

```ts
true;
```

---

### returnNull?

> `optional` **returnNull?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:485

Allows null values as valid translation

#### Default

```ts
true;
```

---

### returnObjects?

> `optional` **returnObjects?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:497

Allows objects as valid translation result

#### Default

```ts
false;
```

---

### saveMissing?

> `optional` **saveMissing?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:401

Calls save missing key function on backend if key not found.

#### Default

```ts
false;
```

---

### saveMissingPlurals?

> `optional` **saveMissingPlurals?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:407

Calls save missing key function on backend if key not found also for plural forms.

#### Default

```ts
false;
```

---

### saveMissingTo?

> `optional` **saveMissingTo?**: `"all"` \| `"current"` \| `"fallback"`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:421

#### Default

```ts
'fallback';
```

---

### simplifyPluralSuffix?

> `optional` **simplifyPluralSuffix?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:467

Will use 'plural' as suffix for languages only having 1 plural form, setting it to false will suffix all with numbers

#### Default

```ts
true;
```

---

### supportedLngs?

> `optional` **supportedLngs?**: `false` \| readonly `string`[]

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:344

Array of allowed languages

#### Default

```ts
false;
```

---

### updateMissing?

> `optional` **updateMissing?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:416

Experimental: enable to update default values using the saveMissing
(Works only if defaultValue different from translated value.
Only useful on initial development or when keeping code as source of truth not changing values outside of code.
Only supported if backend supports it already)

#### Default

```ts
false;
```

## Methods

### overloadTranslationOptionHandler()?

> `optional` **overloadTranslationOptionHandler**(`args`): [`TOptions`](../type-aliases/TOptions.md)

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:520

Sets defaultValue

#### Parameters

##### args

`string`[]

#### Returns

[`TOptions`](../type-aliases/TOptions.md)

#### Default

```ts
(args) => ({ defaultValue: args[1] });
```

---

### parseMissingKeyHandler()?

> `optional` **parseMissingKeyHandler**(`key`, `defaultValue?`): `any`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:449

Receives a key that was not found in `t()` and returns a value, that will be returned by `t()`

#### Parameters

##### key

`string`

##### defaultValue?

`string`

#### Returns

`any`

#### Default

```ts
noop;
```

---

### returnedObjectHandler()?

> `optional` **returnedObjectHandler**(`key`, `value`, `options`): `void`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:508

Gets called if object was passed in as key but returnObjects was set to false

#### Parameters

##### key

`string`

##### value

`string`

##### options

`any`

#### Returns

`void`

#### Default

```ts
noop;
```
