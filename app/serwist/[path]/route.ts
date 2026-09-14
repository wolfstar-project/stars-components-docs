import { createSerwistRoute } from '@serwist/turbopack';

/**
 * Serves the compiled service worker from `/serwist/sw.js`. Defaults (`globDirectory: cwd`,
 * `globPatterns: ['.next/static/**\/*.{...}', 'public/**\/*']`) already precache both the Next.js
 * build output and the `public/` assets, matching `workbox.globPatterns` in the old
 * `@vite-pwa/vitepress` config. It cannot live at the root (`app/[path]/route.ts`) because that
 * would collide with the `app/[...slug]` catch-all that renders every docs page.
 */
export const { dynamic, dynamicParams, revalidate, generateStaticParams, GET } = createSerwistRoute({
	swSrc: 'app/sw.ts'
});
