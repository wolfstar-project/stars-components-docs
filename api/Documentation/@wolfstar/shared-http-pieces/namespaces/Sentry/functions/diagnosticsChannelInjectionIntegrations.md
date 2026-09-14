[@wolfstar/website](../../../../../../index.md) / [Documentation](../../../../../index.md) / [@wolfstar/shared-http-pieces](../../../index.md) / [Sentry](../index.md) / diagnosticsChannelInjectionIntegrations

# Function: diagnosticsChannelInjectionIntegrations()

> **diagnosticsChannelInjectionIntegrations**(): `object`

Defined in: node*modules/.pnpm/@sentry+node@10.71.0*@opentelemetry+core@2.10.0_supports-color@7.2.0/node_modules/@sentry/node/build/types/sdk/experimentalUseDiagnosticsChannelInjection.d.ts:3

## Returns

`object`

### amqplibIntegration

> `readonly` **amqplibIntegration**: () => `Integration` & `object`

#### Returns

`Integration` & `object`

### anthropicIntegration

> `readonly` **anthropicIntegration**: (`options?`) => `Integration` & `object`

#### Parameters

##### options?

`AnthropicAiOptions`

#### Returns

`Integration` & `object`

### awsIntegration

> `readonly` **awsIntegration**: () => `Integration` & `object`

#### Returns

`Integration` & `object`

### expressIntegration

> `readonly` **expressIntegration**: (`options?`) => `Integration` & `object`

#### Parameters

##### options?

`ExpressIntegrationOptions`

#### Returns

`Integration` & `object`

### firebaseIntegration

> `readonly` **firebaseIntegration**: () => `Integration` & `object`

#### Returns

`Integration` & `object`

### genericPoolIntegration

> `readonly` **genericPoolIntegration**: () => `Integration` & `object`

#### Returns

`Integration` & `object`

### googleGenAIIntegration

> `readonly` **googleGenAIIntegration**: (`options?`) => `Integration` & `object`

#### Parameters

##### options?

`GoogleGenAIOptions`

#### Returns

`Integration` & `object`

### graphqlIntegration

> `readonly` **graphqlIntegration**: (`options?`) => `Omit`\<`Integration` & `object`, `"name"` \| `"setupOnce"`\> & `object`

#### Parameters

##### options?

`GraphqlDiagnosticChannelsOptions`

#### Returns

`Omit`\<`Integration` & `object`, `"name"` \| `"setupOnce"`\> & `object`

### hapiIntegration

> `readonly` **hapiIntegration**: () => `Integration` & `object`

#### Returns

`Integration` & `object`

### kafkajsIntegration

> `readonly` **kafkajsIntegration**: () => `Integration` & `object`

#### Returns

`Integration` & `object`

### koaIntegration

> `readonly` **koaIntegration**: (`options?`) => `Integration` & `object`

#### Parameters

##### options?

`KoaChannelIntegrationOptions`

#### Returns

`Integration` & `object`

### langChainIntegration

> `readonly` **langChainIntegration**: (`options?`) => `Integration` & `object`

#### Parameters

##### options?

`LangChainOptions`

#### Returns

`Integration` & `object`

### langGraphIntegration

> `readonly` **langGraphIntegration**: (`options?`) => `Integration` & `object`

#### Parameters

##### options?

`LangGraphOptions`

#### Returns

`Integration` & `object`

### lruMemoizerIntegration

> `readonly` **lruMemoizerIntegration**: () => `Integration` & `object`

#### Returns

`Integration` & `object`

### mongoIntegration

> `readonly` **mongoIntegration**: () => `Integration` & `object`

#### Returns

`Integration` & `object`

### mongooseIntegration

> `readonly` **mongooseIntegration**: () => `Integration` & `object`

#### Returns

`Integration` & `object`

### mysql2Integration

> `readonly` **mysql2Integration**: () => `Integration` & `object`

#### Returns

`Integration` & `object`

### mysqlIntegration

> `readonly` **mysqlIntegration**: () => `Integration` & `object`

#### Returns

`Integration` & `object`

### openaiIntegration

> `readonly` **openaiIntegration**: (`options?`) => `Integration` & `object`

#### Parameters

##### options?

`OpenAiOptions`

#### Returns

`Integration` & `object`

### postgresIntegration

> `readonly` **postgresIntegration**: (`options?`) => `Integration` & `object`

#### Parameters

##### options?

###### ignoreConnectSpans?

`boolean`

#### Returns

`Integration` & `object`

### postgresJsIntegration

> `readonly` **postgresJsIntegration**: (`options?`) => `Integration` & `object`

#### Parameters

##### options?

`PostgresJsChannelIntegrationOptions`

#### Returns

`Integration` & `object`

### tediousIntegration

> `readonly` **tediousIntegration**: () => `Integration` & `object`

#### Returns

`Integration` & `object`

### vercelAiIntegration

> `readonly` **vercelAiIntegration**: (`options?`) => `Integration` & `object`

#### Parameters

##### options?

`VercelAiOptions`

#### Returns

`Integration` & `object`
