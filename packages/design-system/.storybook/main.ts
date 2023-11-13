import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
	stories: [
		/**
		 * MDX now is manager by `@mdx-js/rollup`.
		 *
		 * @see https://mdxjs.com/packages/rollup
		 */
		'../src/**/*.mdx',
		/**
		 * Only `stories` can find by Storybook.
		 */
		'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: [
		getAbsolutePath('@storybook/addon-docs'),
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@storybook/addon-onboarding'),
		getAbsolutePath('@storybook/addon-interactions'),
		getAbsolutePath('@atlaskit/storybook-addon-design-system'),
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
		options: {},
	},
};

export default config;
