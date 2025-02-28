import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwind(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		} as any)
	]
});
