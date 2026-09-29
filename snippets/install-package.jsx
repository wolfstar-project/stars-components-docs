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
 * A dropdown (like npmx.dev) picks the package manager, which is remembered across pages (localStorage).
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
	const [open, setOpen] = useState(false);
	const [copied, setCopied] = useState(false);
	const rootRef = useRef(null);

	useEffect(() => {
		try {
			const stored = window.localStorage.getItem(STORAGE_KEY);
			if (stored) setSelected(stored);
		} catch {}
	}, []);

	useEffect(() => {
		if (!open) return;
		const onPointerDown = (event) => {
			if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false);
		};
		const onKeyDown = (event) => {
			if (event.key === 'Escape') setOpen(false);
		};
		document.addEventListener('pointerdown', onPointerDown);
		document.addEventListener('keydown', onKeyDown);
		return () => {
			document.removeEventListener('pointerdown', onPointerDown);
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [open]);

	const active = managers.find((manager) => manager.id === selected) ?? managers[0];

	const select = (id) => {
		setSelected(id);
		setOpen(false);
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
		<div className="ws-install" ref={rootRef}>
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
			<div className="ws-install-select">
				<button
					type="button"
					className="ws-install-trigger"
					aria-haspopup="listbox"
					aria-expanded={open}
					aria-label="Package manager"
					onClick={() => setOpen(!open)}
				>
					<span className="ws-install-badge" aria-hidden="true">
						{active.id.slice(0, 1)}
					</span>
					{active.id}
					<span className={open ? 'ws-install-chevron ws-install-chevron-open' : 'ws-install-chevron'} aria-hidden="true">
						▾
					</span>
				</button>
				{open && (
					<ul className="ws-install-menu" role="listbox" aria-label="Package manager">
						{managers.map((manager) => (
							<li key={manager.id} role="option" aria-selected={manager.id === active.id}>
								<button type="button" className="ws-install-option" onClick={() => select(manager.id)}>
									<span className="ws-install-badge" aria-hidden="true">
										{manager.id.slice(0, 1)}
									</span>
									{manager.id}
									{manager.id === active.id && (
										<span className="ws-install-check" aria-hidden="true">
											✓
										</span>
									)}
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
