[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / ExclusiveEventHintOrCaptureContext

# Type Alias: ExclusiveEventHintOrCaptureContext

> **ExclusiveEventHintOrCaptureContext** = [`CaptureContext`](CaptureContext.md) & `Partial`\<`{ [key in keyof EventHint]: never }`\> \| [`EventHint`](../interfaces/EventHint.md) & `Partial`\<`{ [key in keyof ScopeContext]: never }`\>

Defined in: node_modules/.pnpm/@sentry+core@10.71.0/node_modules/@sentry/core/build/types/utils/prepareEvent.d.ts:12

This type makes sure that we get either a CaptureContext, OR an EventHint.
It does not allow mixing them, which could lead to unexpected outcomes, e.g. this is disallowed:
\{ user: \{ id: '123' \}, mechanism: \{ handled: false \} \}
