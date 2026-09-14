[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / httpHeadersToSpanAttributes

# Function: httpHeadersToSpanAttributes()

> **httpHeadersToSpanAttributes**(`headers`, `dataCollection?`, `lifecycle?`): `Record`\<`string`, `string`\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/utils/request.d.ts:77

Converts incoming HTTP request or response headers to OpenTelemetry span attributes following semantic conventions.
Header names are converted to the format: http.\<request|response\>.header.\<key\>
where \<key\> is the header name in lowercase with dashes converted to underscores.

## Parameters

### headers

`Record`\<`string`, `string` \| `string`[] \| `undefined`\>

### dataCollection?

`boolean` \| `ResolvedDataCollection`

### lifecycle?

`"request"` \| `"response"`

The lifecycle of the headers, either 'request' or 'response'

## Returns

`Record`\<`string`, `string`\>

## See

- https://opentelemetry.io/docs/specs/semconv/registry/attributes/http/#http-request-header
- https://opentelemetry.io/docs/specs/semconv/registry/attributes/http/#http-response-header
- https://getsentry.github.io/sentry-conventions/attributes/http/#http-request-header-key
- https://getsentry.github.io/sentry-conventions/attributes/http/#http-response-header-key
