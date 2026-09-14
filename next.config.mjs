import { withSerwist } from '@serwist/turbopack';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,
	// Next 16 no longer runs ESLint as part of `next build` (the `eslint` config key was removed); this repo
	// uses oxlint (`pnpm lint`) instead, so there is nothing to reconfigure here.
	typescript: { ignoreBuildErrors: false }
};

// `withSerwist` (from `@serwist/turbopack`) is Turbopack-compatible: it serves the compiled service worker
// from the `app/serwist/[path]` route handler instead of hooking into the bundler, which `@serwist/next`
// (webpack-only) cannot do now that Next 16 builds with Turbopack by default.
export default withMDX(withSerwist(config));
