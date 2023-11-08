import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => ({
	plugins: [dts({ include: ['src'], outDir: 'dist' })],
	define: {
		'process.env': Object.entries(loadEnv(mode, process.cwd())).reduce(
			(prev, [key, val]) => {
				return {
					...prev,
					[key]: val,
				};
			},
			{}
		),
	},
	build: {
		lib: {
			name: 'src',
			entry: path.resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
		},
		copyPublicDir: false,
		rollupOptions: {
			output: {
				dir: 'dist',
				entryFileNames: 'index.js',
			},
		},
	},
	resolve: {},
}));
