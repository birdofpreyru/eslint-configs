/* global module */

// NOTE: For now we keep it CJS, as ES modules support in Babel config is still
// expertimentary.
// eslint-disable-next-line import/no-commonjs
module.exports = {
  presets: [
    ['@babel/env', {
      modules: 'cjs',
      targets: 'defaults',
    }],
    ['@babel/react', { runtime: 'automatic' }],
    '@babel/typescript',
  ],
};
