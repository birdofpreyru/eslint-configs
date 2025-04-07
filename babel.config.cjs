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
