import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';

module.exports = /** @type {import('rollup').RollupOptions} */ ({
	input: `${__dirname}/src/index.ts`,
	output: {
		dir: `${__dirname}/dest/`,
		sourcemap: true,
	},
	plugins: [
		svelte({ preprocess: autoPreprocess() }),
		css(),
		typescript({ exclude: ['dest/**/*'], include: [`${__dirname}`, `${__dirname}/../models/`] }),
		resolve(),
	],
});
