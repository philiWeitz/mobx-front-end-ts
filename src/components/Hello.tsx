
import * as React from 'react';
import { transNameSpace } from '../util/i18n';

const t = transNameSpace('other-name-space');


export default class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>{t('hello')}</p>
      </div>
    );
  }
}
