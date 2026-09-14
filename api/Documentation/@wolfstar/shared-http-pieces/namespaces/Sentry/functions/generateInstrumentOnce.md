[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / generateInstrumentOnce

# Function: generateInstrumentOnce()

## Call Signature

> **generateInstrumentOnce**\<`Options`, `InstrumentationClass`\>(`name`, `instrumentationClass`, `optionsCallback`): (`options`) => `InstanceType`\<`InstrumentationClass`\> & `object`

Defined in: node*modules/.pnpm/@sentry+node-core@10.71.0*@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/otel/instrument.d.ts:4

### Type Parameters

#### Options

`Options`

#### InstrumentationClass

`InstrumentationClass` _extends_ (...`args`) => `Instrumentation`

### Parameters

#### name

`string`

#### instrumentationClass

`InstrumentationClass`

#### optionsCallback

(`options`) => `ConstructorParameters`\<`InstrumentationClass`\>\[`0`\]

### Returns

(`options`) => `InstanceType`\<`InstrumentationClass`\> & `object`

## Call Signature

> **generateInstrumentOnce**\<`Options`, `InstrumentationInstance`\>(`name`, `creator`): (`options?`) => `InstrumentationInstance` & `object`

Defined in: node*modules/.pnpm/@sentry+node-core@10.71.0*@opentelemetry+api@1.9.1_@opentelemetry+core@2.10.0_@opentele_7442c4ce560fd457e5b8f798e43d1911/node_modules/@sentry/node-core/build/types/otel/instrument.d.ts:7

### Type Parameters

#### Options

`Options` = `unknown`

#### InstrumentationInstance

`InstrumentationInstance` _extends_ `Instrumentation`\<`InstrumentationConfig`\> = `Instrumentation`\<`InstrumentationConfig`\>

### Parameters

#### name

`string`

#### creator

(`options?`) => `InstrumentationInstance`

### Returns

(`options?`) => `InstrumentationInstance` & `object`
