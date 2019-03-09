import React from 'react';

import { storiesOf } from '@storybook/react';
import { Hello } from '../src/components';

storiesOf('Hello Component', module)
  .add('basic', () => <Hello />)
  .add('with caption', () => <Hello text="My Caption"/>);
