const path = require('node:path');

module.exports = {
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
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
			plugins: ['jest'],
		},
	],
};
