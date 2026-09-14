import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { SerwistProvider } from '@serwist/turbopack/react';
import './global.css';

export const metadata: Metadata = {
	title: { default: 'Stars Components', template: '%s | Stars Components' },
	description: 'Documentation for the shared packages powering the Star Network.',
	applicationName: 'Stars Components',
	manifest: '/manifest.webmanifest',
	icons: {
		icon: [
			{ url: '/favicon.svg', type: 'image/svg+xml' },
			{ url: '/favicon.ico', sizes: '48x48' }
		],
		apple: '/apple-touch-icon-180x180.png'
	}
};

export const viewport: Viewport = {
	themeColor: '#7657ff'
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en-US" suppressHydrationWarning>
			<body className="flex min-h-screen flex-col">
				{/* The search index is served from `/api-search`, not `/api/search`: a static `app/api/` segment
				    would shadow the generated TypeDoc reference that lives under `/api/**`. */}
				<RootProvider search={{ options: { api: '/api-search' } }}>
					<SerwistProvider swUrl="/serwist/sw.js" disable={process.env.NODE_ENV !== 'production'}>
						{children}
					</SerwistProvider>
				</RootProvider>
			</body>
		</html>
	);
}
