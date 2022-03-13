import adapter from '@sveltejs/adapter-node';
import svg from '@poppanator/sveltekit-svg';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),

		vite: {
			ssr: {
				noExternal: ['svelte-hero-icons']
			},
			resolve: {
				alias: {
					$components: resolve('./src/lib/components'),
					$assets: resolve('./src/lib/assets')
				}
			},
			plugins: [
				/**
				 * SVG Plugin
				 * DOC: https://github.com/poppa/sveltekit-svg
				 */
				svg()
			]
		}
	}
};

export default config;
