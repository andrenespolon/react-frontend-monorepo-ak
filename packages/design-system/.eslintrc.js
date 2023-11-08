const path = require('node:path');

module.exports = {
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: path.resolve(__dirname),
		sourceType: 'module',
	},
	settings: {
		jest: {
			version: 29,
		},
	},
	plugins: ['jest', '@atlaskit/design-system'],
	extends: ['plugin:@atlaskit/design-system/recommended'],
};
