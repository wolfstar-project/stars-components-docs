import { llms } from 'fumadocs-core/source/llms';
import { source } from '@/lib/source';

export const revalidate = false;

const instance = llms(source, {
	renderPage: (page) => page.data.getText('processed')
});

/** Replaces the `llms.txt` output of `vitepress-plugin-llms`. */
export async function GET() {
	return new Response(await instance.index(), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
}
