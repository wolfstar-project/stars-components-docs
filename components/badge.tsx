import type { ReactNode } from 'react';

export type BadgeType = 'info' | 'tip' | 'warning' | 'danger';

export interface BadgeProps {
	children?: ReactNode;
	text: string;
	type: BadgeType;
}

// `text-xs`/`font-medium` are explicit so the badge keeps its own scale when it is used inline inside a heading.
const baseClassName =
	'ml-2 inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 align-middle text-xs font-medium leading-normal whitespace-nowrap';

const typeClassNames: Record<BadgeType, string> = {
	info: 'border-fd-border bg-fd-muted text-fd-muted-foreground',
	tip: 'border-fd-primary/30 bg-fd-primary/10 text-fd-primary',
	warning: 'border-amber-500/35 bg-amber-500/12 text-amber-700 dark:text-amber-300',
	danger: 'border-red-500/35 bg-red-500/12 text-red-700 dark:text-red-300'
};

export function Badge({ children, text, type }: BadgeProps) {
	return <span className={`${baseClassName} ${typeClassNames[type]}`}>{children ?? text}</span>;
}
