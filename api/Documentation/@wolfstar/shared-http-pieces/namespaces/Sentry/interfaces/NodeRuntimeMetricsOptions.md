[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / NodeRuntimeMetricsOptions

# Interface: NodeRuntimeMetricsOptions

Defined in: node*modules/.pnpm/@sentry+node-core@10.71.0*@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/integrations/nodeRuntimeMetrics.d.ts:8

## Properties

### collect?

> `optional` **collect?**: `object`

Defined in: node*modules/.pnpm/@sentry+node-core@10.71.0*@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/integrations/nodeRuntimeMetrics.d.ts:27

Which metrics to collect.

Default on (8 metrics):

- `cpuUtilization` — CPU utilization ratio
- `memRss` — Resident Set Size (actual memory footprint)
- `memHeapUsed` — V8 heap currently in use
- `memHeapTotal` — total V8 heap allocated (headroom paired with `memHeapUsed`)
- `eventLoopDelayP50` — median event loop delay (baseline latency)
- `eventLoopDelayP99` — 99th percentile event loop delay (tail latency / spikes)
- `eventLoopUtilization` — fraction of time the event loop was active
- `uptime` — process uptime (detect restarts/crashes)

Default off (opt-in):

- `cpuTime` — raw user/system CPU time in seconds
- `memExternal` — external/ArrayBuffer memory (relevant for native addons)
- `eventLoopDelayMin` / `eventLoopDelayMax` / `eventLoopDelayMean` / `eventLoopDelayP90`

#### cpuTime?

> `optional` **cpuTime?**: `boolean`

#### cpuUtilization?

> `optional` **cpuUtilization?**: `boolean`

#### eventLoopDelayMax?

> `optional` **eventLoopDelayMax?**: `boolean`

#### eventLoopDelayMean?

> `optional` **eventLoopDelayMean?**: `boolean`

#### eventLoopDelayMin?

> `optional` **eventLoopDelayMin?**: `boolean`

#### eventLoopDelayP50?

> `optional` **eventLoopDelayP50?**: `boolean`

#### eventLoopDelayP90?

> `optional` **eventLoopDelayP90?**: `boolean`

#### eventLoopDelayP99?

> `optional` **eventLoopDelayP99?**: `boolean`

#### eventLoopUtilization?

> `optional` **eventLoopUtilization?**: `boolean`

#### memExternal?

> `optional` **memExternal?**: `boolean`

#### memHeapTotal?

> `optional` **memHeapTotal?**: `boolean`

#### memHeapUsed?

> `optional` **memHeapUsed?**: `boolean`

#### memRss?

> `optional` **memRss?**: `boolean`

#### uptime?

> `optional` **uptime?**: `boolean`

---

### collectionIntervalMs?

> `optional` **collectionIntervalMs?**: `number`

Defined in: node*modules/.pnpm/@sentry+node-core@10.71.0*@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/integrations/nodeRuntimeMetrics.d.ts:49

How often to collect metrics, in milliseconds.
Minimum allowed value is 1000ms.

#### Default

```ts
30000;
```

#### Minimum

1000
