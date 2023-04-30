import { Plugin } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import svgr from 'vite-plugin-svgr';
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	async viteFinal(config) {
    (config.plugins as Array<Plugin>).push(svgr());
    return config;
  },
};
export default config;
