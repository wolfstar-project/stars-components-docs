[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / anrIntegration

# ~~Variable: anrIntegration~~

> `const` **anrIntegration**: `AnrReturn`

Defined in: node*modules/.pnpm/@sentry+node-core@10.71.0*@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/integrations/anr/index.d.ts:45

Application Not Responding (ANR) integration for Node.js applications.

## Deprecated

The ANR integration has been deprecated. Use `eventLoopBlockIntegration` from `@sentry/node-native` instead.

Detects when the Node.js main thread event loop is blocked for more than the configured
threshold (5 seconds by default) and reports these as Sentry events.

ANR detection uses a worker thread to monitor the event loop in the main app thread.
The main app thread sends a heartbeat message to the ANR worker thread every 50ms by default.
If the ANR worker does not receive a heartbeat message for the configured threshold duration,
it triggers an ANR event.

- Node.js 16.17.0 or higher
- Only supported in the Node.js runtime (not browsers)
- Not supported for Node.js clusters

Overhead should be minimal:

- Main thread: Only polling the ANR worker over IPC every 50ms
- Worker thread: Consumes around 10-20 MB of RAM
- When ANR detected: Brief pause in debugger to capture stack trace (negligible compared to the blocking)

## Example

```javascript
Sentry.init({
	dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
	integrations: [
		Sentry.anrIntegration({
			anrThreshold: 5000,
			captureStackTrace: true,
			pollInterval: 50
		})
	]
});
```
