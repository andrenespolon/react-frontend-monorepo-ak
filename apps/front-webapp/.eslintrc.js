const path = require('node:path');

module.exports = {
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: path.resolve(__dirname),
		sourceType: 'module',
	},
	extends: 'next/core-web-vitals',
};
