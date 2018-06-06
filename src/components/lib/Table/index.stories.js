import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Table from './index';

const stories = storiesOf('components/lib/Table', module);
const tablePropsMin = {
  tableHead: [
    { id: 'h0', trTh: 'Name' },
    { id: 'h1', trTh: 'Type' },
    { id: 'h2', trTh: 'Status' },
  ],
  tableBody: [
    { id: 'd0', trTd: ['Jackson Hendricks Johnson', 'Automative', 'Ordered'] },
  ],
};
export const tablePropsStandard = {
  tableHead: [
    { id: 'h0', trTh: 'Name' },
    { id: 'h1', trTh: 'Type' },
    { id: 'h2', trTh: 'Status' },
  ],
  tableBody: [
    { id: 'd0', trTd: ['Jackson Hendricks Johnson', 'Automative', 'Ordered'] },
    { id: 'd1', trTd: ['Joe Doe', 'Solar', 'Delivered'] },
    { id: 'd2', trTd: ['Joe Landon', 'Solar', 'In Progress'] },
  ],
};
const tablePropsMax = {
  tableHead: [
    { id: 'h0', trTh: 'Name' },
    { id: 'h1', trTh: 'Type' },
    { id: 'h2', trTh: 'Status' },
  ],
  tableBody: [
    { id: 'd0', trTd: ['Jackson Hendricks Johnson', 'Automative', 'Ordered'] },
    { id: 'd1', trTd: ['Joe Doe', 'Solar', 'Delivered'] },
    { id: 'd2', trTd: ['Joe Landon', 'Solar', 'In Progress'] },
    { id: 'd3', trTd: ['Jenny', 'Automative', 'In Progress'] },
    { id: 'd4', trTd: ['Joe Landon', 'Automative', 'In Progress'] },
    { id: 'd5', trTd: ['Jackson Hendricks Johnson', 'Automative', 'Ordered'] },
    { id: 'd6', trTd: ['Jack', 'Solar', 'Delivered'] },
    { id: 'd7', trTd: ['Jill', 'Solar', 'In Progress'] },
    { id: 'd8', trTd: ['Jennny', 'Automative', 'In Progress'] },
    { id: 'd9', trTd: ['Joe Landon', 'Automative', 'In Progress'] },
  ],
};

stories.addDecorator(withKnobs);
stories.addDecorator(story => (
  <div style={{ width: '600px' }}>
    {story()}
  </div>
));

stories.add('Table', withInfo(`
  A table component that displays data
  ~~~js
    <Table {tableData} />
  ~~~
`)(() => <Table tableData={tablePropsMax} />));
