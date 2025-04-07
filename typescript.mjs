import babelParser from '@babel/eslint-parser';
import babelPlugin from '@babel/eslint-plugin';
import pluginJest from 'eslint-plugin-jest';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import pluginJs from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';

export default tseslint.config(
  { ignores: ['__coverage__', 'build/'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: babelParser,
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error',
    },
    plugins: {
      '@babel': babelPlugin,
    },
    settings: {
      'import/resolver': {
        node: true,
        typescript: true,
      },
    },
  },

  importPlugin.flatConfigs.recommended,

  pluginJs.configs.recommended,

  stylisticPlugin.configs.all,

  {
    rules: {
      '@babel/new-cap': 'error',
      '@babel/no-invalid-this': 'error',
      '@babel/no-undef': 'error',
      '@babel/no-unused-expressions': 'error',

      '@stylistic/object-curly-spacing': 'off',
      '@babel/object-curly-spacing': ['error', 'always'],

      '@babel/semi': 'error',
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/array-element-newline': ['error', 'consistent'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
      '@stylistic/indent': ['error', 2, {
        SwitchCase: 1,
      }],
      '@stylistic/lines-around-comment': ['error', {
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowTypeStart: true,
      }],
      '@stylistic/max-len': ['error', {
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
      '@stylistic/multiline-comment-style': 'off',
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/no-extra-parens': ['error', 'all', {
        enforceForArrowConditionals: false,
        ignoreJSX: 'multi-line',
        nestedBinaryExpressions: false,
        returnAssign: false,
      }],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
      '@stylistic/object-curly-newline': ['error', {
        consistent: true,
        minProperties: 4,
      }],

      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true,
      }],
      '@stylistic/operator-linebreak': ['error', 'before'],
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/space-before-function-paren': ['error', {
        named: 'never',
      }],
      'import/no-cycle': 'error',
      'import/no-extraneous-dependencies': 'error',

      'no-use-before-define': 'error',
    },
  },

  {
    // TypeScript-specific configuration.
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    rules: {
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-inferrable-types': 'off',

      // TODO: Its current implementation seems to give false positive.
      '@typescript-eslint/no-invalid-void-type': 'off',

      // NOTE: According to its documentation
      // "@typescript-eslint/no-unused-vars"
      // requires to disable "no-unused-vars".
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',

      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/unbound-method': 'off',
    },
  },

  {
    files: ['__tests__/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    // TODO: Is this "extends" really necessary?
    extends: [pluginJest.configs['flat/recommended']],
    rules: {
      'jest/unbound-method': 'error',
    },
  },
);
