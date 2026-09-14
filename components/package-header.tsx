'use client';

import { useEffect, useRef, useState } from 'react';

export interface PackageHeaderProps {
	description: string;
	name: string;
	path: string;
	repository?: 'stars-components' | 'plugins';
	version: string;
}

const COPIED_RESET_DELAY = 1600;

// Ports `.package-header-actions > a` / `.install-command` from the old VitePress stylesheet.
const actionClassName =
	'inline-flex min-h-[38px] items-center gap-3 rounded-[9px] border border-[var(--wolfstar-card-border)] bg-fd-background px-3.5 text-[13px] font-semibold text-fd-foreground no-underline transition-colors hover:border-fd-primary hover:text-fd-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary';

export function PackageHeader({ description, name, path, repository = 'stars-components', version }: PackageHeaderProps) {
	const [copied, setCopied] = useState(false);
	const resetTimeout = useRef<number | undefined>(undefined);
	const installCommand = `pnpm add ${name}`;

	useEffect(
		() => () => {
			if (resetTimeout.current !== undefined) window.clearTimeout(resetTimeout.current);
		},
		[]
	);

	function handleCopy() {
		// `navigator.clipboard` is undefined outside secure contexts, and `writeText` rejects when the
		// permission is denied — both paths are handled so nothing escapes as an unhandled rejection.
		const clipboard = typeof navigator === 'undefined' ? undefined : navigator.clipboard;
		if (!clipboard) return;

		void clipboard.writeText(installCommand).then(
			() => {
				setCopied(true);
				if (resetTimeout.current !== undefined) window.clearTimeout(resetTimeout.current);
				resetTimeout.current = window.setTimeout(() => {
					setCopied(false);
				}, COPIED_RESET_DELAY);
			},
			() => {
				setCopied(false);
			}
		);
	}

	return (
		<header className="mb-8 rounded-[18px] border border-[var(--wolfstar-card-border)] bg-fd-card bg-[radial-gradient(circle_at_100%_0,color-mix(in_oklab,var(--color-fd-primary)_14%,transparent),transparent_46%)] p-[26px] shadow-[var(--wolfstar-card-shadow)]">
			<div className="text-xs font-bold tracking-[0.08em] text-fd-primary uppercase">Package · v{version}</div>
			<h1 className="mt-1.5 mb-2 text-[clamp(28px,5vw,40px)] font-bold tracking-[-0.03em]">{name}</h1>
			<p className="m-0 max-w-[680px] text-base text-fd-muted-foreground">{description}</p>
			<div className="mt-[22px] flex flex-wrap items-center gap-2.5">
				<button
					type="button"
					className={`${actionClassName} min-w-[250px] cursor-pointer justify-between max-[700px]:w-full max-[700px]:min-w-0`}
					aria-label={`Copy ${installCommand}`}
					onClick={handleCopy}
				>
					<code className="bg-transparent font-mono text-inherit">{installCommand}</code>
					<span className="text-[11px] text-fd-muted-foreground uppercase" aria-live="polite">
						{copied ? 'Copied!' : 'Copy'}
					</span>
				</button>
				<a className={actionClassName} href={`https://npmx.dev/package/${name}`}>
					npm
				</a>
				<a className={actionClassName} href={`https://github.com/wolfstar-project/${repository}/tree/main/packages/${path}`}>
					Source
				</a>
			</div>
		</header>
	);
}
