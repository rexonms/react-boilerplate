import React from 'react';
import { shallow } from 'enzyme';

import Table from '../index';
import Styles from '../Table.scss';
import { tablePropsStandard } from '../index.stories';

describe('Table Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Table tableData={tablePropsStandard} />);
    return null;
  });
  it('renders with proper className', () => {
    expect(wrapper.exists(Styles.container)).toBe(true);
  });
  it('renders head component', () => {
    expect(wrapper.exists(Styles.head)).toBe(true);
  });
  it('renders body component', () => {
    expect(wrapper.exists(Styles.body)).toBe(true);
  });
  it('renders body table rows', () => {
    const tableBodyDataCount = tablePropsStandard.tableBody.length;
    expect(wrapper.find(`.${Styles.gridRowBody}`)).toHaveLength(tableBodyDataCount);
  });
});
