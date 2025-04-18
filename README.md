# ESLint Configs

[![Latest NPM Release](https://img.shields.io/npm/v/@dr.pogodin/eslint-configs.svg)](https://www.npmjs.com/package/@dr.pogodin/eslint-configs)
[![NPM monthly downloads](https://img.shields.io/npm/dm/@dr.pogodin/eslint-configs)](https://www.npmjs.com/package/@dr.pogodin/eslint-configs)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/birdofpreyru/eslint-configs/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/birdofpreyru/eslint-configs)
[![GitHub Repo stars](https://img.shields.io/github/stars/birdofpreyru/eslint-configs?style=social)](https://github.com/birdofpreyru/eslint-configs)
[![Dr. Pogodin Studio](https://raw.githubusercontent.com/birdofpreyru/eslint-configs/master/.README/logo-dr-pogodin-studio.svg)](https://dr.pogodin.studio/docs/eslint-configs)

[ESLint] configurations for JavaScript, TypeScript and/or React projects.
This project is invisioned as a replacement for AirBnB ESLint configurations
([eslint-config-airbnb]), which are no longer maintained by AirBnB. Our aims are:

- Code style and rules similar to that of the original AirBnB configs +
  Some opinionated improvements on top them.

- Timely support of the latest ESLint and plugin releases.

[![Sponsor](https://raw.githubusercontent.com/birdofpreyru/eslint-configs/master/.README/sponsor.svg)](https://github.com/sponsors/birdofpreyru)

## Content
- [Getting Started]
- [Provided Configs]
  - [`configs.javascript`]
  - [`configs.jest`]
  - [`configs.react`]
  - [`configs.typescript`]

## Getting Started
[Getting Started]: #getting-started

- We assume that [Babel] is properly installed and configured in the host
  project &mdash; some plugins we enable depend on that, and as of now we do not
  provide options to optionally disable them for non-[Babel] host projects.

- Install this package and ESLint as developement dependencies:
  ```sh
  npm install --save-dev eslint @dr.pogodin/eslint-configs
  ```

- Add necessary configurations into your flat ESLint config file, for example
  (also see [Provided Configs] section below for further details):
  ```js
  // eslint.config.mjs

  /* eslint-disable import/no-extraneous-dependencies */

  // defineConfig() is an optional helper provided by ESLint
  import { defineConfig } from 'eslint/config';

  import eslintConfigs from '@dr.pogodin/react-utils';

  export default defineConfig([{
    // Global ignore rules: an array of path patterns to be ignored by ESLint
    // for all other objects included into this configuration, in addition to
    // "**/node_modules/" and ".git/" paths which are always ignored; see:
    // https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores 
    ignores: ['build/'],
  }, {
    // This object opts-in for JavaScript, TypeScript, and React code checks
    // inside the project, with exception for a folder with tests, which is
    // checked by different rules below.
    extends: [
      eslintConfigs.configs.javascript,
      eslintConfigs.configs.typescript,
      eslintConfigs.configs.react,
    ],
    ignores: ['__tests__/**'],
  }, {
    // This is a separate set of rules for a folder with Jest-based unit tests.
    extends: [
      eslintConfigs.configs.javascript,
      eslintConfigs.configs.typescript,
      eslintConfigs.configs.react,
      eslintConfigs.configs.jest,
    ],
    files: ['__tests__/**'],
  }]);
  ```

## Provided Configs
[Provided Configs]: #provided-configs

This package provides the following base configurations, that are meant to be
combined and extended as necessary for the needs of host projects.

### `configs.javascript`
[`configs.javascript`]: #configsjavascript

Intended for JavaScript code, it applies to the files [ESLint] considers as
JavaScript by default: `**/*.js`, `**/*.cjs`, `**/*.mjs`; and it applies to
them the following rule sets:

- [ESLint Core Rules](https://eslint.org/docs/latest/rules) &mdash;
  the `recommended` rule set, with minor overrides, and many additional rules
  enabled.

- [@babel/eslint-plugin](https://www.npmjs.com/package/@babel/eslint-plugin) &mdash;
  all rules enabled, with minor overrides of their default settings.

- [@stylistic/eslint-plugin](https://eslint.style/rules) &mdash;
  the `recommended` rule set, with minor overrides, and many additional rules
  enabled.

- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) &mdash;
  the `recommended` rule set, with minor overrides, and many additional rules
  enabled.

### `configs.jest`
[`configs.jest`]: #configsjest

Intended for [Jest](https://jestjs.io)-based unit test code, it applies to all
files (assuming the consumer himself will configure the correct paths to apply
it to); and it applies to them the following rule sets:

- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest) &mdash;
  the `recommended` and `style` rule sets, with a bunch of additional rules
  enabled.

### `configs.react`
[`configs.react`]: #configsreact

Intended for React code, it applies to `**/*.jsx` and `**/*.tsx` files;
and it applies to them the following rule sets:

- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) &mdash;
  the `recommended` rule set, and a few additional rules enabled.

- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) &mdash;
  the `recommended` rule set, with minor overrides, and many additional rules
  enabled.

- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) &mdash;
  all rules enabled.

Additionally, it applies to all other files matched by any other [ESLint]
configuration object, to forbid using JSX syntax in files with extensions
different from `.jsx` or `.tsx`.

### `configs.typescript`
[`configs.typescript`]: #configstypescript

Intended for TypeScript code, it applies to `**/*.ts` and `**/*.tsx` files;
and it applies to them the following rule sets:

- Everything from our [`configs.javascript`], with minor necessary overrides.

- [typescript-eslint](https://typescript-eslint.io/rules) &mdash;
  the `recommendedTypeChecked` and `stylisticTypeChecked` rule sets, with minor
  overrides, and many additional rules enabled.

[Babel]: https://babeljs.io
[ESLint]: https://eslint.org
[eslint-config-airbnb]: https://www.npmjs.com/package/eslint-config-airbnb