/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	transpilePackages: [
		'@rfm/data-model',
		'@rfm/design-system',
		'@rfm/utility',
	],
	webpack: config => {
		config.resolve.extensionAlias = {
			'.js': ['.ts', '.tsx', '.js', '.jsx'],
			'.mjs': ['.mts', '.mjs'],
			'.cjs': ['.cts', '.cjs'],
		};
		return config;
	},
	i18n: {
		locales: ['pt-br'],
		defaultLocale: 'pt-br',
	},
	images: {
		domains: ['github.com'],
	},
};

module.exports = nextConfig;
