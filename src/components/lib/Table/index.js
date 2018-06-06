import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Table.scss';

const propTypes = {
  /** Table head items */
  tableData: PropTypes.shape({
    tableHead: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      trTh: PropTypes.string.isRequired,
    })).isRequired,
    tableBody: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      trTd: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
  }).isRequired,
};

const defaultProps = {};

const Table = props => (
  <div className={`${Styles.container}`}>
    <div className={`${Styles.head} ${Styles.grid}`} data-test="head">
      <div className={Styles.gridRow}>
        {props.tableData.tableHead.map(item => (
          <div key={item.id} data-test={item.trTh}>
            <p className={Styles['tsla-microcopy']}>{item.trTh}</p>
          </div>
        ))}
      </div>
    </div>
    <div className={Styles.body}>
      <div className={Styles.grid} data-test="body">
        {props.tableData.tableBody.map(item => (
          <div key={item.id} className={`${Styles.gridRow} ${Styles.gridRowBody}`} data-test={item.id}>
            {item.trTd.map(td => (
              <div key={td}>
                <p>{td}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
