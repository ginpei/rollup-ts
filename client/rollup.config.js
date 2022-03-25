import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';

const pageEntryPaths = [
	'home',
];

module.exports = pageEntryPaths.map((entryPath) => /** @type {import('rollup').RollupOptions} */ ({
	input: `${__dirname}/src/pages/${entryPath}/index.ts`,
	output: {
		dir: `${__dirname}/dest/assets/${entryPath}`,
		sourcemap: true,
	},
	plugins: [
		svelte({ preprocess: autoPreprocess() }),
		css(),
		typescript({ exclude: ['dest/**/*'], include: [`${__dirname}`, `${__dirname}/../models/`] }),
		resolve(),
	],
}));