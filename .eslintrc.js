module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
		jest: {
			version: 29,
		},
		'import/resolver': {
			typescript: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				alwaysTryTypes: true,
			},
		},
	},
	extends: [
		'airbnb',
		'airbnb-typescript',
		'eslint:recommended',
		'plugin:jest/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		files: ['*.ts', '*.tsx'],
		project: [
			'./tsconfig.eslint.json',
			'./packages/*/tsconfig.json',
			'./apps/*/tsconfig.json',
		],
		tsconfigRootDir: __dirname,
		extraFileExtensions: ['.mdx'],
		extentions: ['.mdx'],
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'prettier',
		'import',
		'eslint-plugin-import-helpers',
		'jest',
	],
	rules: {
		'prettier/prettier': 'error',
		'no-param-reassign': 'off',
		'no-console': ['error'],
		'import/prefer-default-export': 'off',
		'react/prop-types': 'off',
		'react/display-name': 'error',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-fragments': 'off',
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
				allowSeparatedGroups: false,
			},
		],
		'import-helpers/order-imports': [
			'warn',
			{
				newlinesBetween: 'always',
				alphabetize: {
					order: 'asc',
					ignoreCase: false,
				},
				groups: [
					'/^react/',
					'/^next/',
					'/^@atlaskit/',
					'/^@rfm/',
					'module',
					['sibling', 'parent'],
					'index',
					'absolute',
				],
			},
		],
	},
	overrides: [
		{
			files: ['*.js'],
			extends: ['plugin:@typescript-eslint/disable-type-checked'],
		},
	],
};
