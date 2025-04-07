# ESLint Configs

[![Latest NPM Release](https://img.shields.io/npm/v/@dr.pogodin/eslint-configs.svg)](https://www.npmjs.com/package/@dr.pogodin/eslint-configs)
[![NPM monthly downloads](https://img.shields.io/npm/dm/@dr.pogodin/eslint-configs)](https://www.npmjs.com/package/@dr.pogodin/eslint-configs)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/birdofpreyru/eslint-configs/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/birdofpreyru/eslint-configs)
[![GitHub Repo stars](https://img.shields.io/github/stars/birdofpreyru/eslint-configs?style=social)](https://github.com/birdofpreyru/eslint-configs)
[![Dr. Pogodin Studio](https://raw.githubusercontent.com/birdofpreyru/eslint-configs/master/.README/logo-dr-pogodin-studio.svg)](https://dr.pogodin.studio/docs/eslint-configs)

ESLint configurations for TypeScript and/or React projects. This project is
invisioned as a replacement of AirBnB ESLint Configs, which are completely
neglected by AirBnB lately, and are deaf to well justified complaigns of users.
Thus, the aims of this project are:

- Code style similar to that of AirBnB configs + Some opionated improvements on
  top of them.

- Support of the latest ESLint releases.

- Timely upgrades of dependencies.

[![Sponsor](https://raw.githubusercontent.com/birdofpreyru/eslint-configs/master/.README/sponsor.svg)](https://github.com/sponsors/birdofpreyru)

## Getting Started

**BEWARE:** These early releases are the very first take on the problem, to get
things moving. It is definitely needs more attention both to the configurations,
and to their necessary customization options, and for the config variants
necessary for different kinds of projects and use cases.

For now, if you want to try on your own risk, you can install the package as
```sh
npm install --save-dev @dr.pogodin/eslint-configs
```

Then use it in your ESLint config:
```js
// eslint.config.mjs

import base from '@dr.pogodin/eslint-configs/react-ts';
// or import from '@dr.pogodin/eslint-config/typescript'; for non-react projects.

export default base;
// or you may further tune imported "base" config to your project needs.
```

These configs assume that Babel is configured in the host project to transpile
TypeScript code into JS.
