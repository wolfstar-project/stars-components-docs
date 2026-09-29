/**
 * Package-manager switcher for install commands.
 *
 * Usage in MDX:
 *   import { InstallPackage } from '/snippets/install-package.jsx';
 *
 *   <InstallPackage packages="@wolfstar/logger" />
 *   <InstallPackage packages={['@wolfstar/logger', '@wolfstar/shared']} />
 *   <InstallPackage packages="typescript" type="dev" />
 *   <InstallPackage packages="@wolfstar/cli" type="exec" />
 *
 * `type`: "add" (default) | "dev" (dev dependency) | "exec" (run a CLI once, no install).
 * The selected package manager is remembered across pages (localStorage).
 */
export const InstallPackage = ({ packages, type = 'add' }) => {
	const list = (Array.isArray(packages) ? packages : String(packages).split(/\s+/)).filter(Boolean);
	const pkgs = list.join(' ');
	const npmPkgs = list.map((name) => `npm:${name}`).join(' ');

	// `null` = the manager has no equivalent for that mode, so its tab is hidden.
	const managers = [
		{ id: 'npm', add: `npm install ${pkgs}`, dev: `npm install -D ${pkgs}`, exec: `npx ${pkgs}` },
		{ id: 'pnpm', add: `pnpm add ${pkgs}`, dev: `pnpm add -D ${pkgs}`, exec: `pnpm dlx ${pkgs}` },
		{ id: 'yarn', add: `yarn add ${pkgs}`, dev: `yarn add -D ${pkgs}`, exec: `yarn dlx ${pkgs}` },
		{ id: 'bun', add: `bun add ${pkgs}`, dev: `bun add -d ${pkgs}`, exec: `bunx ${pkgs}` },
		{ id: 'deno', add: `deno add ${npmPkgs}`, dev: `deno add -D ${npmPkgs}`, exec: `deno run -A ${npmPkgs}` },
		{ id: 'upm', add: `upm add ${pkgs}`, dev: null, exec: null },
		{ id: 'aube', add: `aube add ${pkgs}`, dev: `aube add -D ${pkgs}`, exec: `aube dlx ${pkgs}` },
		{ id: 'vp', add: `vp add ${pkgs}`, dev: `vp add -D ${pkgs}`, exec: `vp dlx ${pkgs}` },
		{ id: 'nub', add: `nub add ${pkgs}`, dev: `nub add -D ${pkgs}`, exec: `nub dlx ${pkgs}` },
		{ id: 'ni', add: `ni ${pkgs}`, dev: `ni -D ${pkgs}`, exec: `nlx ${pkgs}` },
		{ id: 'vlt', add: `vlt install ${pkgs}`, dev: `vlt install -D ${pkgs}`, exec: `vlx ${pkgs}` }
	]
		.map((manager) => ({ id: manager.id, command: manager[type] }))
		.filter((manager) => manager.command);

	const STORAGE_KEY = 'ws-install-package-manager';
	const [selected, setSelected] = useState(managers[0].id);
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		try {
			const stored = window.localStorage.getItem(STORAGE_KEY);
			if (stored) setSelected(stored);
		} catch {}
	}, []);

	const active = managers.find((manager) => manager.id === selected) ?? managers[0];

	const select = (id) => {
		setSelected(id);
		setCopied(false);
		try {
			window.localStorage.setItem(STORAGE_KEY, id);
		} catch {}
	};

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(active.command);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch {}
	};

	return (
		<div className="ws-install">
			<div className="ws-install-tabs" role="tablist" aria-label="Package manager">
				{managers.map((manager) => (
					<button
						key={manager.id}
						type="button"
						role="tab"
						aria-selected={manager.id === active.id}
						className="ws-install-tab"
						onClick={() => select(manager.id)}
					>
						{manager.id}
					</button>
				))}
			</div>
			<div className="ws-install-body">
				<code className="ws-install-command">
					<span className="ws-install-prompt" aria-hidden="true">
						${' '}
					</span>
					{active.command}
				</code>
				<button type="button" className="ws-install-copy" onClick={copy} aria-label="Copy command">
					{copied ? 'Copied' : 'Copy'}
				</button>
			</div>
		</div>
	);
};
