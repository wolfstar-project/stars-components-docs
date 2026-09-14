import type { MDXComponents } from 'mdx/types';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import * as TwoslashComponents from 'fumadocs-twoslash/ui';
import { Badge } from '@/components/badge';
import { PackageGrid } from '@/components/package-grid';
import { PackageHeader } from '@/components/package-header';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...defaultMdxComponents,
		...TabsComponents,
		...TwoslashComponents,
		Badge,
		PackageGrid,
		PackageHeader,
		...components
	};
}
