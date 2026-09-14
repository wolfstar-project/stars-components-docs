import { docs } from '@/.source/server';
import { loader } from 'fumadocs-core/source';

/**
 * `baseUrl: '/'` keeps every public URL identical to the VitePress site it replaced:
 * `content/guide/*.mdx` -> `/guide/*`, `content/packages/*.mdx` -> `/packages/*`,
 * `content/api/**` -> `/api/**`.
 */
export const source = loader({
	baseUrl: '/',
	source: docs.toFumadocsSource()
});
