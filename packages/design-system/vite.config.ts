import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [react(), dts({ include: ['src'], outDir: 'dist' })],
	build: {
		lib: {
			name: 'build',
			entry: path.resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
		},
		copyPublicDir: false,
		rollupOptions: {
			preserveEntrySignatures: 'strict',
			output: {
				dir: 'dist',
				format: 'es',
				entryFileNames: 'index.js',
			},
		},
	},
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@views': path.resolve(__dirname, './src/views'),
		},
	},
});
