import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

/**
 * Shared navbar configuration, mirroring the VitePress `themeConfig.nav` / `socialLinks` this site used
 * before the Fumadocs migration. `githubUrl` renders the GitHub icon button on its own.
 */
export const baseOptions: BaseLayoutProps = {
	nav: {
		title: (
			<>
				<Image src="/logo.svg" alt="WolfStar" width={24} height={24} />
				Stars Components
			</>
		),
		url: '/'
	},
	links: [
		{ text: 'Guides', url: '/guide', active: 'nested-url' },
		{ text: 'Packages', url: '/packages', active: 'nested-url' },
		{ text: 'API', url: '/api', active: 'nested-url' },
		{
			type: 'menu',
			text: 'Community',
			items: [
				{ text: 'Contributing', url: '/guide/contributing' },
				{ text: 'GitHub', url: 'https://github.com/wolfstar-project/stars-components', external: true },
				{ text: 'WolfStar', url: 'https://wolfstar.rocks', external: true }
			]
		}
	],
	githubUrl: 'https://github.com/wolfstar-project/stars-components'
};
