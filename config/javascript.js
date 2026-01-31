// Base configuration for all JavaScript and TypeScript files.

import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';

import perfectionist from 'eslint-plugin-perfectionist';
import { Alphabet } from 'eslint-plugin-perfectionist/alphabet';

import babelParser from '@babel/eslint-parser';
import babelPlugin from '@babel/eslint-plugin';
import js from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';

export function newJsConfig({ noPerf } = {}) {
  const extentions = [
    'js/recommended',
    '@stylistic/recommended',
    importPlugin.flatConfigs.recommended,
  ];

  const rules = {
    // These rules are provided by "@babel/eslint-plugin", and they require
    // to disable (to not enable) their counterparts from ESLint core.
    '@babel/new-cap': 'error',
    '@babel/no-invalid-this': 'error',

    'no-undef': 'off',
    '@babel/no-undef': 'error',

    '@babel/no-unused-expressions': 'error',

    '@babel/object-curly-spacing': ['error', 'always'],
    '@stylistic/object-curly-spacing': 'off',

    '@babel/semi': 'error',

    // Rules provided by "eslint-plugin-import".
    'import/dynamic-import-chunkname': 'error',
    'import/enforce-node-protocol-usage': ['error', 'always'],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'warn',
    'import/no-commonjs': 'warn',
    'import/no-cycle': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: false,
      optionalDependencies: false,
    }],
    'import/no-import-module-exports': 'warn',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-relative-packages': 'error',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': ['error', {
      allow: ['**/*.css', '**/*.scss'],
    }],
    'import/no-unused-modules': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',

    // These rules are provided by "@stylistic/eslint-plugin",
    // and (re-)configured for our taste, somewhat differently from
    // defaults of "@stylistic/recommended".
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/array-element-newline': ['error', 'consistent'],
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/curly-newline': ['error', {
      consistent: true,
      minElements: 4,
    }],
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/function-call-spacing': 'error',
    '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
    '@stylistic/implicit-arrow-linebreak': 'error',
    '@stylistic/indent': ['error', 2, {
      SwitchCase: 1,
    }],
    '@stylistic/jsx-child-element-spacing': 'error',

    // This rule is quite annoying at times, better switch it off and let
    // developer to buitify his code as needed in each situation.
    '@stylistic/jsx-one-expression-per-line': 'off',

    '@stylistic/jsx-pascal-case': 'error',
    '@stylistic/jsx-self-closing-comp': 'error',
    '@stylistic/linebreak-style': 'error',
    '@stylistic/lines-around-comment': ['error', {
      allowBlockStart: true,
      allowClassStart: true,
      allowObjectStart: true,
      allowTypeStart: true,
    }],
    '@stylistic/max-len': ['error', {
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    '@stylistic/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
    }],
    '@stylistic/multiline-ternary': 'off',
    '@stylistic/no-confusing-arrow': 'error',
    '@stylistic/no-extra-parens': ['error', 'all', {
      ignoreJSX: 'multi-line',
      ignoredNodes: [
        // NOTE: Replaces the deprecated "enforceForArrowConditionals": option.
        'ArrowFunctionExpression[body.type=ConditionalExpression]',
      ],
      nestedBinaryExpressions: false,
      returnAssign: false,
    }],
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
    '@stylistic/nonblock-statement-body-position': 'error',
    '@stylistic/object-curly-newline': ['error', {
      consistent: true,
      minProperties: 4,
    }],
    '@stylistic/object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],
    '@stylistic/one-var-declaration-per-line': 'error',
    '@stylistic/operator-linebreak': ['error', 'before'],
    '@stylistic/padded-blocks': ['error', 'never'],
    '@stylistic/padding-line-between-statements': 'error',
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/quotes': ['error', 'single', {
      avoidEscape: true,
    }],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/semi-style': 'error',
    '@stylistic/space-before-function-paren': ['error', {
      named: 'never',
    }],
    '@stylistic/switch-colon-spacing': 'error',
    '@stylistic/wrap-regex': 'error',

    // These rules are provided by ESLint core, and they are not included by
    // by default into "js/recommended" config we extend.
    'arrow-body-style': 'error',
    'block-scoped-var': 'error',
    camelcase: 'error',
    'class-methods-use-this': 'error',
    complexity: 'error',
    'consistent-return': 'error',
    'consistent-this': 'error',
    curly: ['error', 'multi-line'],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'func-name-matching': 'error',
    'func-names': ['error', 'never'],
    'func-style': ['error', 'declaration', {
      allowArrowFunctions: true,
    }],
    'guard-for-in': 'error',
    'logical-assignment-operators': 'error',
    'max-nested-callbacks': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-console': 'error',
    'no-constructor-return': 'error',
    'no-continue': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implicit-coercion': ['error', {
      boolean: false,
    }],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inner-declarations': ['error', 'both'],
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-object-constructor': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', {
      props: true,
    }],
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-unassigned-vars': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable-loop': 'error',
    'no-use-before-define': 'error',
    'no-useless-assignment': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-warning-comments': 'warn',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'operator-assignment': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: ['error', 'as-needed'],
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'require-yield': 'error',
    'symbol-description': 'error',
    'unicode-bom': 'error',
    yoda: 'error',
  };

  const settings = {
    'import/resolver': {
      node: true,
      typescript: true,
    },
  };

  if (noPerf) {
    // Without Perfectionist. These rules are similar to those Perfectionist
    // provides, but they are provided by other plugins, and we used them in
    // older config versions, thus we keep enabling them for the legacy,
    // "no Perfectionist" config variant.
    rules['import/order'] = ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    }];
    rules['sort-keys'] = ['error', 'asc', {
      allowLineSeparatedGroups: true,
    }];
  } else {
    // With Perfectionist.
    // eslint-disable-next-line import/no-named-as-default-member
    extentions.push(perfectionist.configs['recommended-custom']);

    const alphabet = Alphabet.generateRecommendedAlphabet()
      .sortByNaturalSort()
      .placeAllWithCaseBeforeAllWithOtherCase('uppercase')
      .placeCharacterBefore({ characterAfter: '-', characterBefore: '/' })
      .placeCharacterAfter({ characterAfter: '@', characterBefore: 'z' })
      .getCharacters();

    settings.perfectionist = {
      alphabet,
      ignoreCase: false,
      newlinesBetween: 'ignore',
      newlinesInside: 'ignore',
      partitionByNewLine: true,
    };

    rules['perfectionist/sort-imports'] = ['error', {
      alphabet,
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'style',
        'unknown',
      ],
      newlinesBetween: 1,
      newlinesInside: 'ignore',
      partitionByNewLine: false,
      type: 'custom',
    }];
  }

  return defineConfig([{
    extends: extentions,
    languageOptions: {
      parser: babelParser,
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error',
    },
    name: 'dr.pogodin/javascript',
    plugins: {
      js,
      '@babel': babelPlugin,
      '@stylistic': stylisticPlugin,
    },
    rules,
    settings,
  }]);
}

export const javascriptNoPerf = newJsConfig({ noPerf: true });

export default newJsConfig();
