---
title: '@wolfstar/i18next-backend'
description: A filesystem-based i18next backend for Node.js.
---

<PackageHeader
	name="@wolfstar/i18next-backend"
	version="2.0.8"
	path="i18next-backend"
	description="Load and merge i18next resources from the filesystem."
/>

## Description

A fast and modern filesystem-based [`i18next`](https://www.npmjs.com/package/i18next) backend for Node.js.

## Usage

```typescript
import { Backend } from '@wolfstar/i18next-backend';
import i18next from 'i18next';

i18next.use(Backend);

await i18next.init({
	backend: {
		paths: [
			// Using a string:
			'/locales/{{lng}}/{{ns}}.json',
			// Using an URL:
			new URL('/locales/{{lng}}/{{ns}}.json', import.meta.url),
			// Using a function:
			(lng, ns) => `/locales/${lng}/${ns}.json`
		]
	}
	// ... i18next options
});
```
