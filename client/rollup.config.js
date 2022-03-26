import resolve from 'rollup-plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

module.exports = /** @type {import('rollup').RollupOptions} */ ({
	input: `${__dirname}/src/index.ts`,
	output: {
		dir: `${__dirname}/dest/`,
		sourcemap: true,
	},
	plugins: [
		typescript({ exclude: ['dest/**/*'], include: [`${__dirname}`, `${__dirname}/../models/`] }),
		resolve(),
	],
});
