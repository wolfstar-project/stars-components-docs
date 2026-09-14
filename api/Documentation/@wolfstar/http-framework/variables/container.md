[@wolfstar/website](../../../../index.md) / [Documentation](../../../index.md) / [@wolfstar/http-framework](../index.md) / container

# Variable: container

> `const` **container**: `Container`

Defined in: node_modules/.pnpm/@sapphire+pieces@4.4.1/node_modules/@sapphire/pieces/dist/esm/index.d.mts:834

The injected variables that will be accessible to any place. To add an extra property, simply add a property with a
regular assignment, and it will be available in all places simultaneously.

## Examples

```typescript
// Add a reference for the version:
import { container } from '@sapphire/pieces';

container.version = '1.0.0';

// Can be placed anywhere in a TypeScript file, for JavaScript projects,
// you can create an `augments.d.ts` and place the code there.
declare module '@sapphire/pieces' {
	interface Container {
		version: string;
	}
}

// In any piece, core, plugin, or custom:
export class UserCommand extends Command {
	public messageRun(message, args) {
		// The injected version is available here:
		const { version } = this.container;

		// ...
	}
}
```

```typescript
// In a plugin's context, e.g. API:
class Api extends Plugin {
	static [postInitialization]() {
		const server = new Server(this);
		container.server = server;

		// ...
	}
}

declare module '@sapphire/pieces' {
	interface Container {
		server: Server;
	}
}

// In any piece, even those that aren't routes nor middlewares:
export class UserRoute extends Route {
	public [methods.POST](message, args) {
		// The injected server is available here:
		const { server } = this.container;

		// ...
	}
}
```
