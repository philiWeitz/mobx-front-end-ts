
import * as React from 'react';
import * as style from './styles.scss';


interface HelloProps {
  text?: string;
}

const Hello = ({ text } : HelloProps) => {

  const renderContent = () => {
    return (
      <div className={style.page}>
        {text ? text : 'Hello World'}
      </div>
    );
  };

  return renderContent();
};

export default Hello;
