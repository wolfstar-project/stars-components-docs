[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / ClientEvents

# Interface: ClientEvents

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:30](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L30)

## Properties

### autocompleteError

> **autocompleteError**: \[`unknown`, [`ClientEventAutocompleteContext`](ClientEventAutocompleteContext.md)\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:54](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L54)

---

### autocompleteFinish

> **autocompleteFinish**: \[[`ClientEventAutocompleteContext`](ClientEventAutocompleteContext.md)\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:55](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L55)

---

### autocompleteRun

> **autocompleteRun**: \[[`ClientEventAutocompleteContext`](ClientEventAutocompleteContext.md)\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:52](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L52)

---

### autocompleteSuccess

> **autocompleteSuccess**: \[[`ClientEventAutocompleteContext`](ClientEventAutocompleteContext.md), `unknown`\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:53](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L53)

---

### commandError

> **commandError**: \[`unknown`, [`ClientEventCommandContext`](ClientEventCommandContext.md)\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:50](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L50)

---

### commandFinish

> **commandFinish**: \[[`ClientEventCommandContext`](ClientEventCommandContext.md)\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:51](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L51)

---

### commandMethodUnknown

> **commandMethodUnknown**: \[[`ClientEventCommandContext`](ClientEventCommandContext.md)\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:47](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L47)

---

### commandNameMissing

> **commandNameMissing**: \[`APIApplicationCommandAutocompleteInteraction`, `ServerResponse`\<`IncomingMessage`\>\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:45](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L45)

---

### commandNameUnknown

> **commandNameUnknown**: \[`APIApplicationCommandAutocompleteInteraction` \| `APIApplicationCommandInteraction`, `ServerResponse`\<`IncomingMessage`\>\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:46](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L46)

---

### commandRun

> **commandRun**: \[[`ClientEventCommandContext`](ClientEventCommandContext.md)\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:48](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L48)

---

### commandSuccess

> **commandSuccess**: \[[`ClientEventCommandContext`](ClientEventCommandContext.md), `unknown`\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:49](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L49)

---

### error

> **error**: \[`unknown`\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:31](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L31)

---

### interactionHandlerError

> **interactionHandlerError**: \[`unknown`, [`ClientEventInteractionHandlerContext`](ClientEventInteractionHandlerContext.md)\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:60](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L60)

---

### interactionHandlerFinish

> **interactionHandlerFinish**: \[[`ClientEventInteractionHandlerContext`](ClientEventInteractionHandlerContext.md)\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:61](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L61)

---

### interactionHandlerNameInvalid

> **interactionHandlerNameInvalid**: \[`APIMessageComponentInteraction` \| `APIModalSubmitInteraction`, `ServerResponse`\<`IncomingMessage`\>\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:56](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L56)

---

### interactionHandlerNameUnknown

> **interactionHandlerNameUnknown**: \[`APIMessageComponentInteraction` \| `APIModalSubmitInteraction`, `ServerResponse`\<`IncomingMessage`\>\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:57](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L57)

---

### interactionHandlerRun

> **interactionHandlerRun**: \[[`ClientEventInteractionHandlerContext`](ClientEventInteractionHandlerContext.md)\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:58](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L58)

---

### interactionHandlerSuccess

> **interactionHandlerSuccess**: \[[`ClientEventInteractionHandlerContext`](ClientEventInteractionHandlerContext.md), `unknown`\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:59](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L59)

---

### pluginLoaded

> **pluginLoaded**: \[[`PluginHook`](../enumerations/PluginHook.md), `string`\]

Defined in: [packages/http-framework/src/lib/ClientEvents.ts:44](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/ClientEvents.ts#L44)

Emitted after a plugin hook runs, providing the hook's [PluginHook](../enumerations/PluginHook.md) and the plugin's name
(or `undefined` when the registering plugin did not provide one).

#### Remarks

The `PreGenericsInitialization`, `PreInitialization`, and `PostInitialization` hooks run
synchronously inside the `Client` constructor, so their emissions fire before `new Client()`
returns. A listener attached afterwards cannot observe them (not even one added by a subclass,
whose constructor body only runs after `super()` has already executed those hooks), so only the
`PreLoad` (during `Client#load`) and `PostListen` (during `Client#listen`) emissions are
observable. To react to the constructor-phase hooks, use the plugin hooks themselves.
