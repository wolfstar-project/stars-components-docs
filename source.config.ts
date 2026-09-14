import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { defineConfig, defineDocs, type DocsCollection } from 'fumadocs-mdx/config';
import { transformerTwoslash } from 'fumadocs-twoslash';
import remarkDirective from 'remark-directive';

/**
 * A single `docs` collection rooted at `content/` keeps the public URLs identical to the VitePress site:
 * `content/guide/*.mdx` -> `/guide/*`, `content/packages/*.mdx` -> `/packages/*`, `content/api/**\/*.md` -> `/api/**`.
 *
 * `fumadocs-mdx` picks the compilation format from the file extension (see `build-default.ts`): `.mdx` is
 * compiled with `format: 'mdx'` and `.md` with `format: 'md'` (strict CommonMark, no JSX and no expressions).
 * That is exactly what the generated TypeDoc reference under `content/api/` needs — it is full of bare `<`,
 * `{` and `|` characters that would be parsed as JSX/expressions in MDX — so no extra collection is required.
 */
export const docs: DocsCollection<typeof pageSchema, typeof metaSchema> = defineDocs({
	dir: 'content',
	docs: {
		postprocess: {
			// Required by `page.data.getText('processed')`, which backs `/llms-full.txt`.
			includeProcessedMarkdown: true
		}
	}
});

export default defineConfig({
	mdxOptions: {
		// `remark-directive` enables the `::include[...]` / `:::name` generic directive syntax on top of
		// Fumadocs' own `<include>` tag, which is what pulls `data/readmes/<pkg>/README.md` into `content/packages/*.mdx`.
		remarkPlugins: (plugins) => [remarkDirective, ...plugins],
		rehypeCodeOptions: {
			themes: {
				light: 'github-light',
				dark: 'github-dark'
			},
			transformers: [
				...(rehypeCodeDefaultOptions.transformers ?? []),
				transformerTwoslash({
					twoslashOptions: {
						compilerOptions: {
							// `ModuleResolutionKind.Bundler` — parity with the previous VitePress twoslash config.
							moduleResolution: 100
						}
					}
				})
			]
		}
	}
});
