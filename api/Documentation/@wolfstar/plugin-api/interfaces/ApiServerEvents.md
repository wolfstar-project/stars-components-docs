[@wolfstar/website](../../../../index.md) / [Documentation](../../../index-1.md) / [@wolfstar/plugin-api](../index.md) / ApiServerEvents

# Interface: ApiServerEvents

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:24](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L24)

## Properties

### error

> **error**: \[`Error`\]

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:25](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L25)

---

### middlewareError

> **middlewareError**: \[`unknown`, [`ApiRequest`](../classes/ApiRequest.md), [`ApiResponse`](../classes/ApiResponse.md)\]

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:31](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L31)

---

### request

> **request**: \[[`ApiRequest`](../classes/ApiRequest.md), [`ApiResponse`](../classes/ApiResponse.md)\]

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:26](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L26)

---

### routeError

> **routeError**: \[`unknown`, [`ApiRequest`](../classes/ApiRequest.md), [`ApiResponse`](../classes/ApiResponse.md)\]

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:30](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L30)

---

### routerBranchMethodNotAllowed

> **routerBranchMethodNotAllowed**: \[[`ApiRequest`](../classes/ApiRequest.md), [`ApiResponse`](../classes/ApiResponse.md)\]

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:28](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L28)

---

### routerBranchNotFound

> **routerBranchNotFound**: \[[`ApiRequest`](../classes/ApiRequest.md), [`ApiResponse`](../classes/ApiResponse.md)\]

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:27](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L27)

---

### routerFound

> **routerFound**: \[[`ApiRequest`](../classes/ApiRequest.md), [`ApiResponse`](../classes/ApiResponse.md)\]

Defined in: [packages/plugin-api/src/lib/http/ApiServer.ts:29](https://github.com/wolfstar-project/plugins/blob/6c31c6b28f1fa46a3e91b16a32e96acdae84fde4/packages/plugin-api/src/lib/http/ApiServer.ts#L29)
