---
title: '@wolfstar/safe-fetch'
description: A native fetch wrapper powered by Result values.
---

<PackageHeader
	name="@wolfstar/safe-fetch"
	version="1.1.6"
	path="safe-fetch"
	description="Wrap native fetch responses in Result values."
/>

## Description

A fetch wrapper on top of Rust's Result, powered by [`@sapphire/result`](https://www.npmjs.com/package/@sapphire/result).

## Features

- Powered by the native `fetch` function
- CJS and ESM support

## Usage

```typescript
import { Json, safeFetch } from '@wolfstar/safe-fetch';

const result = await Json<{ id: number; name: string }>(safeFetch('https://api.example.org/users/1'));

result.match({
	ok: (user) => console.log(user.name),
	err: (error) => console.error(error)
});
```
