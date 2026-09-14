[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / instrumentLangChainEmbeddings

# Function: instrumentLangChainEmbeddings()

> **instrumentLangChainEmbeddings**\<`T`\>(`instance`, `options?`): `T`

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/tracing/langchain/embeddings.d.ts:38

Wraps a LangChain embeddings instance to create Sentry spans for `embedQuery` and `embedDocuments` calls.

Use this in non-Node runtimes (Cloudflare, browser, etc.) where auto-instrumentation is not available.

## Type Parameters

### T

`T` _extends_ `object`

## Parameters

### instance

`T`

### options?

`LangChainOptions`

## Returns

`T`

## Example

```javascript
import * as Sentry from '@sentry/cloudflare';
import { OpenAIEmbeddings } from '@langchain/openai';

const embeddings = Sentry.instrumentLangChainEmbeddings(new OpenAIEmbeddings({ model: 'text-embedding-3-small' }));

await embeddings.embedQuery('Hello world');
await embeddings.embedDocuments(['doc1', 'doc2']);
```
