import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import DateFormatter from '../index';
import Styles from '../DateFormatter.scss';

describe('DateFormatter Component', () => {
  let wrapper;
  const props = {
    timestamp: 1527633993,
  };
  const YMD = '18/05/29';
  const DMY = '29/05/18';
  const MDY = '05/29/18';

  beforeEach(() => {
    wrapper = shallow(<DateFormatter {...props} />);
  });

  it('renders matchs previous snapshot', () => {
    const tree = renderer.create(<DateFormatter timestamp={1527633993} country="US"  />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with proper className', () => {
    expect(wrapper.exists(Styles.container)).toBe(true);
  });

  it('renders with only time stamp', () => {
    expect(wrapper.text()).toBe(MDY);
  });

  it('formats CA date correctly ', () => {
    props.country = 'CA';
    wrapper = shallow(<DateFormatter {...props} />);
    expect(wrapper.text()).toBe(YMD);
  });

  it('formats CN date correctly ', () => {
    props.country = 'CN';
    wrapper = shallow(<DateFormatter {...props} />);
    expect(wrapper.text()).toBe(YMD);
  });

  it('formats DE date correctly ', () => {
    props.country = 'DE';
    wrapper = shallow(<DateFormatter {...props} />);
    expect(wrapper.text()).toBe(DMY);
  });

  it('formats AS date correctly ', () => {
    props.country = 'AS';
    wrapper = shallow(<DateFormatter {...props} />);
    expect(wrapper.text()).toBe(MDY);
  });

  it('formats IT date correctly ', () => {
    props.country = 'IT';
    wrapper = shallow(<DateFormatter {...props} />);
    expect(wrapper.text()).toBe(DMY);
  });

  it('renders with properly for YYYY format', () => {
    const output = '05/29/2018';
    props.yearFormat = 'YYYY';
    props.country = 'US';
    wrapper = shallow(<DateFormatter {...props} />);
    expect(wrapper.text()).toBe(output);
  });

});
