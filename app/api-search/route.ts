import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

/**
 * Mounted at `/api-search` rather than the conventional `/api/search`: a static `app/api/` route segment
 * would shadow the generated TypeDoc reference served from `/api/**` by the root catch-all.
 */
export const { GET } = createFromSource(source);
