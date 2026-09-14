import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export const metadata: Metadata = {
	title: 'Stars Components',
	description: 'Documentation for the shared packages powering the Star Network.'
};

interface HeroAction {
	href: string;
	text: string;
	theme: 'brand' | 'alt';
}

interface Feature {
	details: string;
	icon: string;
	link: string;
	title: string;
}

const actions: HeroAction[] = [
	{ theme: 'brand', text: 'Get Started', href: '/guide' },
	{ theme: 'alt', text: 'Features', href: '/guide/features' },
	{ theme: 'alt', text: 'Why Stars Components?', href: '/guide/why' },
	{ theme: 'alt', text: 'View on GitHub', href: 'https://github.com/wolfstar-project/stars-components' }
];

const features: Feature[] = [
	{
		icon: '⚡',
		title: 'HTTP-First Discord Bots',
		details: 'Handle Discord interactions without a gateway connection and register commands through typed decorators.',
		link: '/packages/http-framework'
	},
	{
		icon: '🧩',
		title: 'Composable Packages',
		details: 'Adopt one focused utility or combine the framework, i18n, shared pieces, and metrics as a complete stack.',
		link: '/guide/architecture'
	},
	{
		icon: '🧪',
		title: 'Interaction Testing',
		details: 'Exercise commands with typed fixtures, a local test harness, and dedicated Vitest matchers.',
		link: '/guide/testing'
	},
	{
		icon: '🌍',
		title: 'Internationalization',
		details: 'Load locale resources from disk and resolve typed translations for users and guilds.',
		link: '/packages/http-framework-i18n'
	},
	{
		icon: '🛡️',
		title: 'Safer Infrastructure',
		details: 'Parse environment variables, wrap fetch in Result values, and reuse structured logging utilities.',
		link: '/packages/env-utilities'
	},
	{
		icon: '📚',
		title: 'Searchable API',
		details: 'Browse an API reference generated directly from every public TypeScript export.',
		link: '/api'
	}
];

const actionBaseClassName =
	'inline-flex min-h-[44px] items-center justify-center rounded-full border px-6 text-sm font-semibold no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary';

const actionThemeClassNames: Record<HeroAction['theme'], string> = {
	brand: 'border-transparent bg-fd-primary text-fd-primary-foreground hover:opacity-90',
	alt: 'border-[var(--wolfstar-card-border)] bg-fd-card text-fd-foreground hover:border-fd-primary hover:text-fd-primary'
};

export default function HomePage() {
	return (
		<HomeLayout {...baseOptions}>
			<main className="mx-auto w-full max-w-5xl px-4 py-16 md:py-24">
				<section className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between md:gap-16">
					<div className="max-w-2xl text-center md:text-left">
						<h1 className="text-4xl font-bold tracking-[-0.03em] md:text-5xl">
							<span className="block bg-[linear-gradient(120deg,#7657ff_20%,#dc52c8_72%,#ff8f5c)] bg-clip-text text-transparent">
								Stars Components
							</span>
							<span className="mt-1 block">Build the Star Network</span>
						</h1>
						<p className="mx-auto mt-5 max-w-[600px] text-lg text-fd-muted-foreground md:mx-0">
							Typed, composable packages for Discord interactions, infrastructure, integrations, and testing.
						</p>
						<div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
							{actions.map((action) =>
								action.href.startsWith('/') ? (
									<Link
										key={action.text}
										href={action.href}
										className={`${actionBaseClassName} ${actionThemeClassNames[action.theme]}`}
									>
										{action.text}
									</Link>
								) : (
									<a
										key={action.text}
										href={action.href}
										rel="noreferrer"
										className={`${actionBaseClassName} ${actionThemeClassNames[action.theme]}`}
									>
										{action.text}
									</a>
								)
							)}
						</div>
					</div>

					<div className="relative flex shrink-0 items-center justify-center">
						<div
							aria-hidden="true"
							className="absolute h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(118,87,255,0.42),transparent_66%)] blur-[42px]"
						/>
						<Image
							src="/logo.svg"
							alt="WolfStar"
							width={240}
							height={240}
							priority
							unoptimized
							className="relative w-[180px] max-w-[240px] drop-shadow-[0_18px_35px_rgba(77,47,192,0.28)] md:w-[240px]"
						/>
					</div>
				</section>

				<section aria-labelledby="home-features" className="mt-20">
					<h2 id="home-features" className="sr-only">
						Features
					</h2>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{features.map((feature) => (
							<Link
								key={feature.title}
								href={feature.link}
								className="flex h-full flex-col rounded-2xl border border-[var(--wolfstar-card-border)] bg-fd-card p-6 text-fd-foreground no-underline shadow-[var(--wolfstar-card-shadow)] transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-fd-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
							>
								<span aria-hidden="true" className="text-2xl leading-none">
									{feature.icon}
								</span>
								<h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-fd-muted-foreground">{feature.details}</p>
							</Link>
						))}
					</div>
				</section>

				<section className="mt-20 max-w-3xl">
					<h2 className="text-2xl font-bold tracking-[-0.02em]">One Workspace, Focused Packages</h2>
					<p className="mt-4 text-fd-muted-foreground">
						Stars Components contains the shared building blocks used across the Star Network. Start with the scaffolding CLI for a new
						bot, or add only the utility your project needs.
					</p>

					<aside className="mt-8 rounded-xl border border-fd-primary/25 border-l-4 border-l-fd-primary bg-fd-primary/10 p-5">
						<p className="text-sm font-semibold text-fd-primary">Recommended Path</p>
						<p className="mt-2 text-sm text-fd-muted-foreground">
							Create a project with{' '}
							<code className="rounded bg-fd-muted px-1.5 py-0.5 font-mono text-[13px]">
								pnpm create @wolfstar/http-framework my-bot
							</code>
							, then continue with the{' '}
							<Link href="/guide" className="font-medium text-fd-primary underline underline-offset-2">
								getting started guide
							</Link>
							.
						</p>
					</aside>
				</section>
			</main>
		</HomeLayout>
	);
}
