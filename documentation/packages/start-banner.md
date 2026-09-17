---
title: '@wolfstar/start-banner'
description: An ANSI-aware banner generator for command-line applications.
---

<PackageHeader
	name="@wolfstar/start-banner"
	version="2.0.4"
	path="start-banner"
	description="Render consistent, ANSI-aware startup banners."
/>

## Description

A banner generator utility for your CLI, generates a string to be printed into the console given a logo, name, and extras.

The full layout is similar to the following:

```
#####################################################################
#          #                                                        #
#          #                                                        #
#   LOGO   #                          NAME                          #
#          #                                                        #
#          #                                                        #
#####################################################################
############                                                        #
############                         EXTRAS                         #
############                                                        #
############                                                        #
#####################################################################
```

It consists of two sections, "left" and "right". The left section is present only if a non-empty logo is given, otherwise only the right section will be shown. The right section consists of the "name" and "extras" fields, both of which are optional, and if none of them is given, then only the logo will be shown.

The width of the left section depends on the width of the "logo" field without the ANSI codes, which allows users to use coloured logos with ANSI codes and the width will still be correct, displaying the banner as intended.

If the height of the right section is higher than the height of the logo, then an empty padding with the logo's width will be used.

## Usage

`createStarsBanner` includes a compact default logo. Pass `logo` to replace it, or `false` for text-only output:

```ts
import { createStarsBanner } from '@wolfstar/start-banner';

console.log(createStarsBanner({ name: ['My bot'], extra: ['Ready'] }));
console.log(createStarsBanner({ logo: ['CUSTOM'], name: ['My bot'] }));
```

Use the lower-level `createBanner` function when no default artwork is wanted; pass arrays containing the logo, name,
and extra lines.
