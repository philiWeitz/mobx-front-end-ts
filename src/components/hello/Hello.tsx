
import * as React from 'react';
import * as style from './styles.scss';

export default class Hello extends React.Component {
  render() {
    return (
      <div className={style.page}>
        <h1>Hello World Component!</h1>
        <p>hello</p>
      </div>
    );
  }
}
