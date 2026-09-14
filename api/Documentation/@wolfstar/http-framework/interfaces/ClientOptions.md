[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / ClientOptions

# Interface: ClientOptions

Defined in: [packages/http-framework/src/lib/Client.ts:217](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L217)

## Properties

### authPrefix?

> `optional` **authPrefix?**: `"Bearer"` \| `"Bot"`

Defined in: [packages/http-framework/src/lib/Client.ts:262](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L262)

The prefix to use for authentication in REST calls.

#### Default

```ts
'Bot';
```

#### Since

2.0.0

---

### bodySizeLimit?

> `optional` **bodySizeLimit?**: `number`

Defined in: [packages/http-framework/src/lib/Client.ts:242](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L242)

The body size limit in bytes.

#### Default

```ts
1024 * 1024; // (1 MiB)
```

---

### clientId?

> `optional` **clientId?**: `string`

Defined in: [packages/http-framework/src/lib/Client.ts:255](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L255)

The ID of the client.

#### Default

```ts
process.env.DISCORD_CLIENT_ID ?? Buffer.from(token.split('.')[0], 'base64').toString();
```

---

### discordPublicKey?

> `optional` **discordPublicKey?**: `string`

Defined in: [packages/http-framework/src/lib/Client.ts:224](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L224)

The public key from Discord, available under "General Information" after opening an application from
[Discord's applications](https://discord.com/developers/applications).

#### Default

```ts
process.env.DISCORD_PUBLIC_KEY;
```

---

### discordToken?

> `optional` **discordToken?**: `string`

Defined in: [packages/http-framework/src/lib/Client.ts:231](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L231)

The Discord token used for authenticating requests outside of interaction responses.

#### Default

```ts
process.env.DISCORD_TOKEN;
```

---

### httpReplyOnError?

> `optional` **httpReplyOnError?**: `boolean`

Defined in: [packages/http-framework/src/lib/Client.ts:248](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L248)

Whether to reply with a 500 status code to Discord if an error occurs while processing an interaction.

#### Default

```ts
true;
```

---

### restOptions?

> `optional` **restOptions?**: `Partial`\<`RESTOptions`\>

Defined in: [packages/http-framework/src/lib/Client.ts:236](https://github.com/wolfstar-project/stars-components/blob/f7b31cc0eb5f9a284e64590e28eadbf470e88f64/packages/http-framework/src/lib/Client.ts#L236)

The options to be passed to the underlying REST library.
