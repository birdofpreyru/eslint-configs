import { defineConfig } from 'eslint/config';

import jsxA11y from 'eslint-plugin-jsx-a11y';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default defineConfig([{
  name: 'dr.pogodin/react',

  extends: [react.configs.flat.recommended, jsxA11y.flatConfigs.recommended],
  files: ['**/*.jsx', '**/*.tsx'],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    perfectionist,
    react,
  },
  settings: {
    react: {
      version: '19',
    },
  },

  rules: {
    // Rules provided by "eslint-plugin-perfectionist"
    'perfectionist/sort-jsx-props': 'error',

    // Rules provided by "eslint-plugin-jsx-a11y".
    'jsx-a11y/anchor-ambiguous-text': 'error',
    'jsx-a11y/control-has-associated-label': 'error',
    'jsx-a11y/lang': 'error',
    'jsx-a11y/no-aria-hidden-on-focusable': 'error',

    // Rules provided by "eslint-plugin-react" (and not enabled by its recommended
    // config).
    'react/button-has-type': 'error',
    'react/checked-requires-onchange-or-readonly': 'error',
    'react/destructuring-assignment': 'error',
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'react/hook-use-state': 'error',
    'react/iframe-missing-sandbox': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-curly-newline': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-fragments': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-depth': ['warn', { max: 10 }],
    'react/jsx-no-bind': ['error', {
      allowArrowFunctions: true,
    }],
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-spread-multi': 'error',
    'react/jsx-props-no-spreading': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-danger': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-namespace': 'error',
    'react/no-object-type-as-default-prop': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unknown-property': ['error', {
      ignore: ['styleName'],
    }],
    'react/no-unsafe': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-class-component-methods': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-stateless-function': 'error',

    // NOTE: Starting with React 19, propTypes type-checks are deprecated,
    // and if TypeScript is used (as it is recommended now), it will take care
    // of prop types validations anyway.
    'react/prop-types': 'off',

    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
  },
}, {
  files: ['**/*.jsx'],
  name: 'dr.pogodin/react/jsx',
  rules: {
    // This is our preferred naming scheme for pure JSX code (i.e., non-TypeScript).
    'react/function-component-definition': ['error', {
      namedComponents: 'function-declaration',
      unnamedComponents: 'arrow-function',
    }],
  },
}, {
  name: 'dr.pogodin/react/global',
  plugins: {
    react,
    'react-hooks': reactHooks,
  },
  rules: {
    'react/jsx-filename-extension': ['error', {
      allow: 'as-needed',
      extensions: ['.jsx', '.tsx'],
    }],

    // Rules provided by eslint-plugin-react-hooks; they should be applied to
    // all files, as hooks do not have to live exclusively in .jsx / .tsx files
    // alongside JSX syntax!
    'react-hooks/component-hook-factories': 'error',
    'react-hooks/config': 'error',
    'react-hooks/error-boundaries': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/gating': 'error',
    'react-hooks/globals': 'error',
    'react-hooks/immutability': 'error',
    'react-hooks/incompatible-library': 'error',
    'react-hooks/preserve-manual-memoization': 'error',
    'react-hooks/purity': 'error',
    'react-hooks/refs': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/set-state-in-effect': 'error',
    'react-hooks/set-state-in-render': 'error',
    'react-hooks/static-components': 'error',
    'react-hooks/unsupported-syntax': 'error',
    'react-hooks/use-memo': 'error',
  },
}]);
