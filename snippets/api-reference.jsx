/**
 * Building blocks for the generated API Reference pages (documentation/api/**).
 * The pages are produced by `pnpm generate:api` (scripts/generate-api.mjs); do not edit them by hand.
 *
 * Usage in MDX:
 *   import { ApiHeader, ApiHierarchy, ApiSignature, ApiMember, ApiParams, ApiParam, ApiEnumMembers, ApiSymbolList } from '/snippets/api-reference.jsx';
 *
 * Types are passed as token arrays: a plain string is literal text, a `[text, href]` pair is a link.
 *   ['Promise<', ['Foo', '/documentation/api/pkg/classes/Foo'], '>']
 */
const KIND_LABELS = {
	class: 'Class',
	interface: 'Interface',
	function: 'Function',
	'type-alias': 'Type',
	enum: 'Enum',
	variable: 'Variable',
	namespace: 'Namespace',
	constructor: 'Constructor',
	property: 'Property',
	method: 'Method',
	accessor: 'Accessor',
	package: 'Package'
};

const KIND_GROUPS = [
	['namespace', 'Namespaces'],
	['class', 'Classes'],
	['interface', 'Interfaces'],
	['enum', 'Enumerations'],
	['type-alias', 'Type Aliases'],
	['function', 'Functions'],
	['variable', 'Variables']
];

const Tokens = ({ tokens }) =>
	(tokens ?? []).map((token, index) =>
		typeof token === 'string' ? (
			<span key={index}>{token}</span>
		) : (
			<a key={index} href={token[1]} className="ws-api-type-link">
				{token[0]}
			</a>
		)
	);

const tokensToText = (tokens) => (tokens ?? []).map((token) => (typeof token === 'string' ? token : token[0])).join('');

export const ApiKind = ({ kind }) => <span className={`ws-api-kind ws-api-kind-${kind}`}>{KIND_LABELS[kind] ?? kind}</span>;

export const ApiBadge = ({ name, title }) => (
	<span className={`ws-api-badge ws-api-badge-${String(name).split(' ')[0]}`} title={title}>
		{name}
	</span>
);

const Badges = ({ badges }) =>
	badges && badges.length > 0 ? (
		<span className="ws-api-badges">
			{badges.map((badge) => (
				<ApiBadge key={badge} name={badge} />
			))}
		</span>
	) : null;

const SourceLink = ({ source }) =>
	source ? (
		<a className="ws-api-source" href={source.url} target="_blank" rel="noopener noreferrer" title="View source on GitHub">
			<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
				<path d="M4.72 3.22a.75.75 0 0 1 1.06 1.06L2.06 8l3.72 3.72a.75.75 0 1 1-1.06 1.06L.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25Zm6.56 0a.75.75 0 0 0-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25Z" />
			</svg>
			{source.label}
		</a>
	) : null;

/** Kind chip, modifier badges and the source link shown right under the page title. */
export const ApiHeader = ({ kind, badges, source, packageName, packageHref }) => (
	<div className="ws-api-header">
		<ApiKind kind={kind} />
		<Badges badges={badges} />
		{packageName && (
			<a className="ws-api-package" href={packageHref}>
				{packageName}
			</a>
		)}
		<SourceLink source={source} />
	</div>
);

/** Package name, version and links shown at the top of a package index. */
export const ApiPackageHeader = ({ name, version, guideHref, sourceHref }) => (
	<div className="ws-api-header ws-api-package-header">
		<ApiKind kind="package" />
		<code className="ws-api-package-name">{name}</code>
		{version && <span className="ws-api-version">v{version}</span>}
		{guideHref && (
			<a className="ws-api-package" href={guideHref}>
				Package guide
			</a>
		)}
		{sourceHref && (
			<a className="ws-api-source" href={sourceHref} target="_blank" rel="noopener noreferrer">
				Source
			</a>
		)}
	</div>
);

const HierarchyRow = ({ label, items }) =>
	items && items.length > 0 ? (
		<div className="ws-api-hierarchy-row">
			<span className="ws-api-hierarchy-label">{label}</span>
			<span className="ws-api-hierarchy-items">
				{items.map((item, index) => (
					<code key={index} className="ws-api-chip">
						<Tokens tokens={item} />
					</code>
				))}
			</span>
		</div>
	) : null;

/** Extends / Implements / Extended by / Implemented by chips. Each item is a token array. */
export const ApiHierarchy = ({ extends: extendsTypes, implements: implementsTypes, extendedBy, implementedBy }) => (
	<div className="ws-api-hierarchy">
		<HierarchyRow label="Extends" items={extendsTypes} />
		<HierarchyRow label="Implements" items={implementsTypes} />
		<HierarchyRow label="Extended by" items={extendedBy} />
		<HierarchyRow label="Implemented by" items={implementedBy} />
	</div>
);

/** A highlighted signature with linked types and a copy button. */
export const ApiSignature = ({ tokens }) => {
	const [copied, setCopied] = useState(false);

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(tokensToText(tokens));
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch {}
	};

	return (
		<div className="ws-api-signature">
			<pre className="ws-api-signature-code">
				<code>
					<Tokens tokens={tokens} />
				</code>
			</pre>
			<button type="button" className="ws-api-copy" onClick={copy} aria-label="Copy signature">
				{copied ? 'Copied' : 'Copy'}
			</button>
		</div>
	);
};

/** Card around one member (property, method, accessor, ...). The heading stays plain markdown above it. */
export const ApiMember = ({ kind, badges, signature, source, inheritedFrom, children }) => (
	<div className={`ws-api-member ws-api-member-${kind}`}>
		<div className="ws-api-member-meta">
			<ApiKind kind={kind} />
			<Badges badges={badges} />
			{inheritedFrom && (
				<span className="ws-api-inherited">
					Inherited from <Tokens tokens={inheritedFrom} />
				</span>
			)}
			<SourceLink source={source} />
		</div>
		{signature && <ApiSignature tokens={signature} />}
		<div className="ws-api-member-body">{children}</div>
	</div>
);

/** Titled group of parameters, type parameters, returns, throws, ... */
export const ApiParams = ({ title, children }) => (
	<div className="ws-api-params">
		{title && <div className="ws-api-params-title">{title}</div>}
		<div className="ws-api-params-list">{children}</div>
	</div>
);

/** One row of an ApiParams group: name, type, flags and a markdown description as children. */
export const ApiParam = ({ name, type, optional, rest, defaultValue, children }) => (
	<div className="ws-api-param">
		<div className="ws-api-param-head">
			{name && (
				<code className="ws-api-param-name">
					{rest ? '...' : ''}
					{name}
					{optional ? '?' : ''}
				</code>
			)}
			{type && (
				<code className="ws-api-param-type">
					<Tokens tokens={type} />
				</code>
			)}
			{defaultValue && (
				<span className="ws-api-param-default">
					default <code>{defaultValue}</code>
				</span>
			)}
		</div>
		{children && <div className="ws-api-param-body">{children}</div>}
	</div>
);

/** Enumeration members as a table: name, value, description. `members` = [{ name, value, id, deprecated, description }]. */
export const ApiEnumMembers = ({ members }) => (
	<div className="ws-api-enum">
		<table className="ws-api-enum-table">
			<thead>
				<tr>
					<th>Member</th>
					<th>Value</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{members.map((member) => (
					<tr key={member.name} id={member.id}>
						<td>
							<code>{member.name}</code>
							{member.deprecated && <ApiBadge name="deprecated" />}
						</td>
						<td>
							<code>{member.value}</code>
						</td>
						<td>{member.description}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

/** Package index: symbols grouped by kind with a client-side filter. `symbols` = [{ name, kind, href, summary, deprecated }]. */
export const ApiSymbolList = ({ symbols }) => {
	const [query, setQuery] = useState('');
	const needle = query.trim().toLowerCase();
	const matches = (symbol) => !needle || symbol.name.toLowerCase().includes(needle) || (symbol.summary ?? '').toLowerCase().includes(needle);
	const groups = KIND_GROUPS.map(([kind, label]) => [kind, label, symbols.filter((symbol) => symbol.kind === kind && matches(symbol))]).filter(
		([, , items]) => items.length > 0
	);

	return (
		<div className="ws-api-symbols">
			<input
				type="search"
				className="ws-api-filter"
				placeholder={`Filter ${symbols.length} symbols`}
				aria-label="Filter symbols"
				value={query}
				onChange={(event) => setQuery(event.target.value)}
			/>
			{groups.length === 0 && <p className="ws-api-empty">No symbols match “{query}”.</p>}
			{groups.map(([kind, label, items]) => (
				<section key={kind} className="ws-api-symbol-group">
					<h3 className="ws-api-symbol-group-title">
						{label} <span className="ws-api-count">{items.length}</span>
					</h3>
					<ul className="ws-api-symbol-grid">
						{items.map((symbol) => (
							<li key={`${kind}-${symbol.name}`}>
								<a href={symbol.href} className="ws-api-symbol">
									<span className="ws-api-symbol-head">
										<ApiKind kind={kind} />
										<span className={symbol.deprecated ? 'ws-api-symbol-name ws-api-deprecated' : 'ws-api-symbol-name'}>
											{symbol.name}
										</span>
									</span>
									{symbol.summary && <span className="ws-api-symbol-summary">{symbol.summary}</span>}
								</a>
							</li>
						))}
					</ul>
				</section>
			))}
		</div>
	);
};
