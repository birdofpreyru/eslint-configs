// This file tests various sorting orders imposed by Perfectionist rules.

/* eslint-disable import/no-unresolved, no-unused-vars */
import Something from 'some-package';
import InternalThing from 'some-package/sub-path';
import DifferentThing from 'some-package-but-different';

import AnotherThing from '@scoped/package';

import SvgAsset from 'assets/image.svg';

import ScssTheme from 'themes/some.scss';

import A from '../parent-package';

import B from './sibling-package';

import LocalSvgImage from './image.svg';

import LocalScss from './style.scss';
/* eslint-enable import/no-unresolved */

const someObject = {
  someKey: 'value',
  someKeyWithSuffix: 'another-value',
};
/* eslint-enable no-unused-vars */
