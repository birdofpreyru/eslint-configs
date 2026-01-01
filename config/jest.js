import { defineConfig } from 'eslint/config';
import pluginJest from 'eslint-plugin-jest';

export default defineConfig([{
  name: 'dr.pogodin/jest',

  extends: [
    pluginJest.configs['flat/recommended'],
    pluginJest.configs['flat/style'],
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: false,
    }],

    'jest/max-nested-describe': 'error',
    'jest/no-conditional-in-test': 'error',
    'jest/no-confusing-set-timeout': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-error-equal': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/no-unnecessary-assertion': 'error',
    'jest/no-unneeded-async-expect-function': 'error',
    'jest/no-untyped-mock-factory': 'error',
    'jest/padding-around-after-all-blocks': 'error',
    'jest/padding-around-after-each-blocks': 'error',
    'jest/padding-around-before-all-blocks': 'error',
    'jest/padding-around-before-each-blocks': 'error',
    'jest/padding-around-describe-blocks': 'error',
    'jest/padding-around-test-blocks': 'error',
    'jest/prefer-called-with': 'error',
    'jest/prefer-comparison-matcher': 'error',
    'jest/prefer-each': 'error',
    'jest/prefer-equality-matcher': 'error',
    'jest/prefer-expect-resolves': 'error',
    'jest/prefer-hooks-in-order': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-jest-mocked': 'error',
    'jest/prefer-mock-promise-shorthand': 'error',
    'jest/prefer-mock-return-shorthand': 'error',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-have-been-called': 'error',
    'jest/prefer-to-have-been-called-times': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-to-throw-message': 'error',
    'jest/valid-expect-with-promise': 'error',
    'jest/valid-mock-module-path': 'error',

    'no-console': 'off',

    '@typescript-eslint/unbound-method': 'off',
  },
}]);
