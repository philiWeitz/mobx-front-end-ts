/* global describe, it, expect */

import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import { Hello } from '../src/components';


declare const it: any;
declare const expect: any;
declare const describe: any;


describe('example test', () => {

  it('should run a TS test', () => {
    expect(1).toBe(1);
  });

  it('should perform a snapshot test', () => {
    const wrapper = shallow(
      <Hello />,
    );
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });

});
