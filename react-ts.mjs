import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

import base from './typescript.mjs';

export default [
  ...base,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    settings: {
      react: { version: '19' },
    },
  },

  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],

  // TODO: This does not work because a bug in eslint-plugin-react-hooks:
  // https://github.com/facebook/react/issues/32431
  // thus, the workaround below.
  // reactHooks.configs.recommended
  {
    plugins: { 'react-hooks': reactHooks },
    rules: { ...reactHooks.configs.recommended.rules },
  },

  {
    rules: {
      'react/function-component-definition': ['error', {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      }],
      'react-hooks/exhaustive-deps': 'error',
      'react/prop-types': 'off',
    },
  },
];
