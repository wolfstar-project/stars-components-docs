import type { MetadataRoute } from 'next';

/** Port of the `pwa.manifest` block from the old `@vite-pwa/vitepress` configuration. */
export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Stars Components',
		short_name: 'Stars Components',
		description: 'Documentation for the shared packages powering the Star Network.',
		start_url: '/',
		display: 'standalone',
		theme_color: '#7657ff',
		background_color: '#ffffff',
		icons: [
			{ src: '/pwa-64x64.png', sizes: '64x64', type: 'image/png' },
			{ src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
			{ src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
			{ src: '/maskable-icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
		]
	};
}
