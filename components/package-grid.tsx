'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { packages } from '@/lib/packages';

// `Plugins` was missing from the VitePress version, which left the three plugin packages reachable only through `All`.
const categories = ['All', 'Core framework', 'Infrastructure', 'Shared pieces', 'Platform helpers', 'Plugins'] as const;

type Category = (typeof categories)[number];

export function PackageGrid() {
	const [activeCategory, setActiveCategory] = useState<Category>('All');
	const visiblePackages = useMemo(
		() => (activeCategory === 'All' ? packages : packages.filter((item) => item.category === activeCategory)),
		[activeCategory]
	);

	return (
		<>
			<div className="mt-7 mb-[22px] flex flex-wrap gap-2" role="group" aria-label="Filter packages by category">
				{categories.map((category) => {
					const isActive = activeCategory === category;

					return (
						<button
							key={category}
							type="button"
							aria-pressed={isActive}
							onClick={() => {
								setActiveCategory(category);
							}}
							className={`cursor-pointer rounded-full border px-[13px] py-2 text-[13px] font-semibold transition-colors hover:border-fd-primary hover:bg-fd-primary/10 hover:text-fd-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary ${
								isActive
									? 'border-fd-primary bg-fd-primary/10 text-fd-primary'
									: 'border-[var(--wolfstar-card-border)] bg-fd-background text-fd-muted-foreground'
							}`}
						>
							{category}
						</button>
					);
				})}
			</div>

			<div className="mb-9 grid grid-cols-1 gap-4 min-[700px]:grid-cols-2">
				{visiblePackages.map((item) => (
					<Link
						key={item.name}
						href={`/packages/${item.path}`}
						className="flex min-h-[190px] flex-col rounded-2xl border border-[var(--wolfstar-card-border)] bg-fd-card bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-fd-primary)_14%,transparent),transparent_42%)] p-[22px] text-fd-foreground no-underline shadow-[var(--wolfstar-card-shadow)] transition-[border-color,transform] duration-200 hover:-translate-y-[3px] hover:border-fd-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0 min-[700px]:min-h-[210px]"
					>
						<span className="text-xs font-bold tracking-[0.08em] text-fd-primary uppercase">{item.category}</span>
						<h2 className="mt-3 mb-2 text-[18px] leading-[1.35] font-semibold">{item.name}</h2>
						<p className="m-0 flex-1 text-sm leading-relaxed text-fd-muted-foreground">{item.description}</p>
						<span className="mt-[18px] flex justify-between text-xs font-semibold text-fd-muted-foreground">
							<span>v{item.version}</span>
							<span aria-hidden="true">Read docs →</span>
						</span>
					</Link>
				))}
			</div>
		</>
	);
}
