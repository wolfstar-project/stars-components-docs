// Versions are read from `data/packages.generated.json`, written by `scripts/fetch-docs-data.mjs`
// (predev/prebuild) from each package's live `package.json` so the cards never drift after a release,
// without vendoring the source repos as git submodules.
import versionsJson from '../../data/packages.generated.json';

const versions = versionsJson as Record<string, string>;

export interface PackageInfo {
	category: 'Core framework' | 'Infrastructure' | 'Shared pieces' | 'Platform helpers' | 'Plugins';
	description: string;
	name: string;
	path: string;
	version: string;
}

export const packages: PackageInfo[] = [
	{
		name: '@wolfstar/http-framework',
		path: 'http-framework',
		version: versions['http-framework'],
		category: 'Core framework',
		description: 'Build Discord bots around fast, HTTP-only interactions.'
	},
	{
		name: '@wolfstar/create-http-framework',
		path: 'create-http-framework',
		version: versions['create-http-framework'],
		category: 'Core framework',
		description: 'Scaffold a production-ready HTTP Framework bot.'
	},
	{
		name: '@wolfstar/http-framework-i18n',
		path: 'http-framework-i18n',
		version: versions['http-framework-i18n'],
		category: 'Core framework',
		description: 'Add typed i18next translations to HTTP Framework interactions.'
	},
	{
		name: '@wolfstar/i18next-backend',
		path: 'i18next-backend',
		version: versions['i18next-backend'],
		category: 'Core framework',
		description: 'Load and merge i18next resources from the filesystem.'
	},
	{
		name: '@wolfstar/http-framework-test-utils',
		path: 'http-framework-test-utils',
		version: versions['http-framework-test-utils'],
		category: 'Core framework',
		description: 'Test interactions with fixtures, a harness, and Vitest matchers.'
	},
	{
		name: '@wolfstar/env-utilities',
		path: 'env-utilities',
		version: versions['env-utilities'],
		category: 'Infrastructure',
		description: 'Load, type, and parse environment variables safely.'
	},
	{
		name: '@wolfstar/logger',
		path: 'logger',
		version: versions['logger'],
		category: 'Infrastructure',
		description: 'Use a lightweight logger with level and color support.'
	},
	{
		name: '@wolfstar/safe-fetch',
		path: 'safe-fetch',
		version: versions['safe-fetch'],
		category: 'Infrastructure',
		description: 'Wrap native fetch responses in Result values.'
	},
	{
		name: '@wolfstar/start-banner',
		path: 'start-banner',
		version: versions['start-banner'],
		category: 'Infrastructure',
		description: 'Render consistent, ANSI-aware startup banners.'
	},
	{
		name: '@wolfstar/shared-http-pieces',
		path: 'shared-http-pieces',
		version: versions['shared-http-pieces'],
		category: 'Shared pieces',
		description: 'Reuse commands and error listeners across Star Network bots.'
	},
	{
		name: '@wolfstar/shared-influx-pieces',
		path: 'shared-influx-pieces',
		version: versions['shared-influx-pieces'],
		category: 'Shared pieces',
		description: 'Collect interaction metrics through reusable Influx pieces.'
	},
	{
		name: '@wolfstar/influx-utilities',
		path: 'influx-utilities',
		version: versions['influx-utilities'],
		category: 'Platform helpers',
		description: 'Work with a single InfluxDB organization through a small client.'
	},
	{
		name: '@wolfstar/reddit-helpers',
		path: 'reddit-helpers',
		version: versions['reddit-helpers'],
		category: 'Platform helpers',
		description: 'Fetch and normalize Reddit posts for Star bots.'
	},
	{
		name: '@wolfstar/twitch-helpers',
		path: 'twitch-helpers',
		version: versions['twitch-helpers'],
		category: 'Platform helpers',
		description: 'Call Twitch Helix and validate EventSub requests.'
	},
	{
		name: '@wolfstar/weather-helpers',
		path: 'weather-helpers',
		version: versions['weather-helpers'],
		category: 'Platform helpers',
		description: 'Fetch weather data and convert common units.'
	},
	{
		name: '@wolfstar/plugin-api',
		path: 'plugin-api',
		version: versions['plugin-api'],
		category: 'Plugins',
		description: 'Expose a standalone REST API server alongside HTTP Framework interactions.'
	},
	{
		name: '@wolfstar/plugin-i18next',
		path: 'plugin-i18next',
		version: versions['plugin-i18next'],
		category: 'Plugins',
		description: 'Add i18next-powered internationalization to HTTP Framework interactions.'
	},
	{
		name: '@wolfstar/plugin-subcommands-advanced',
		path: 'plugin-subcommands-advanced',
		version: versions['plugin-subcommands-advanced'],
		category: 'Plugins',
		description: 'Modularize slash subcommands into separate command classes.'
	}
];
