const dev = (process.env.NODE_ENV || 'development') === 'development';
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: {
			default: true
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		paths: {
			base: dev ? '' : '/concept-tool',
		},
		appDir: 'internal',
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	]
}

export default config;
