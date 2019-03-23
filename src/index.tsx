/* global document */

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import stores from './mobx/stores';
import Provider from './mobx/provider';


ReactDOM.render(
  <Provider stores={stores} />,
  document.getElementById('root'),
);
