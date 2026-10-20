import { defineConfig } from 'eslint/config';
import tsEsLint from 'typescript-eslint';

import { newJsConfig } from './javascript.js';

function newConfig({ noPerf } = {}) {
  const jsConfig = newJsConfig({
    noPerf,
    perfectionistTsConfig: {
      rootDir: '.',
    },
  });

  const extentions = [
    jsConfig,
    tsEsLint.configs.strictTypeChecked,
    tsEsLint.configs.stylisticTypeChecked,
  ];

  const rules = {
    // TypeScript takes care of the same, in a better way.
    '@babel/new-cap': 'off',
    '@babel/no-undef': 'off',

    // It does not support type imports, and TypeScript itself does necessary
    // checks for imports anyway.
    'import/named': 'off',

    '@typescript-eslint/array-type': ['error', {
      default: 'array-simple',
    }],
    '@typescript-eslint/class-methods-use-this': 'error',
    '@typescript-eslint/consistent-return': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-deprecated': 'warn',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',

    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-redeclare': 'error',

    // NOTE: The core rule variant reports incorrect errors on TypeScript
    // code, thus disabled.
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    // NOTE: Disables the base rule as it can report incorrect errors.
    'no-unused-private-class-members': 'off',
    '@typescript-eslint/no-unused-private-class-members': 'error',

    // NOTE: Disables the base rule as it can report incorrect errors.
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',

    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/parameter-properties': ['error', {
      prefer: 'parameter-property',
    }],

    // NOTE: The core variant of this rule, disabled below, does not work
    // correctly for TypeScript code in some edge cases.
    'prefer-destructuring': 'off',
    '@typescript-eslint/prefer-destructuring': 'error',

    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/strict-void-return': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/typedef': 'error',
  };

  if (!noPerf) {
    rules['adjacent-overload-signatures'] = 'off';
  }

  return defineConfig(
    {
      name: 'dr.pogodin/typescript',

      extends: extentions,
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
        parserOptions: {
          projectService: true,
        },
      },
      rules,
    },
  );
}

export const typescriptNoPerf = newConfig({ noPerf: true });

export default newConfig();
