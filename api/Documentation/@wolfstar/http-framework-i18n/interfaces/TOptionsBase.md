[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework-i18n](../index.md) / TOptionsBase

# Interface: TOptionsBase

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:651

## Properties

### context?

> `optional` **context?**: `any`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:663

Used for contexts (eg. male\female)

---

### count?

> `optional` **count?**: `number`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:659

Count value used for plurals

---

### defaultValue?

> `optional` **defaultValue?**: `any`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:655

Default value to return if a translation was not found

---

### fallbackLng?

> `optional` **fallbackLng?**: `FallbackLng`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:679

Override language to lookup key if not found see fallbacks for details

---

### interpolation?

> `optional` **interpolation?**: `InterpolationOptions`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:711

Override interpolation options

---

### joinArrays?

> `optional` **joinArrays?**: `string`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:703

Char, eg. '\n' that arrays will be joined by (can be set globally too)

---

### keySeparator?

> `optional` **keySeparator?**: `string` \| `false`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:687

Override char to separate keys

---

### lng?

> `optional` **lng?**: `string`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:671

Override language to use

---

### lngs?

> `optional` **lngs?**: readonly `string`[]

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:675

Override languages to use

---

### ns?

> `optional` **ns?**: `string` \| readonly `string`[]

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:683

Override namespaces (string or array)

---

### nsSeparator?

> `optional` **nsSeparator?**: `string` \| `false`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:691

Override char to split namespace from key

---

### postProcess?

> `optional` **postProcess?**: `string` \| readonly `string`[]

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:707

String or array of postProcessors to apply see interval plurals as a sample

---

### replace?

> `optional` **replace?**: `any`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:667

Object with vars for interpolation - or put them directly in options

---

### returnDetails?

> `optional` **returnDetails?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:699

Returns an object that includes information about the used language, namespace, key and value

---

### returnObjects?

> `optional` **returnObjects?**: `boolean`

Defined in: node_modules/.pnpm/i18next@22.5.1/node_modules/i18next/index.d.ts:695

Accessing an object not a translation string (can be set globally too)
