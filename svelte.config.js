import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').mdsvexConfig} */
const mdsvexConfig = {
	extensions: ['.md'],
	

}
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter()
	}

};

export default config;
