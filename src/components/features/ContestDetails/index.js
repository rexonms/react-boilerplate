import React from 'react';
import PropTypes from 'prop-types';

import Styles from './ContestDetails.scss';

const propTypes = {
  data: PropTypes.shape({
    /** Title of the program details */
    title: PropTypes.string.isRequired,
    /** Array of programs */
    programs: PropTypes.arrayOf(PropTypes.shape({
      /** Eating Contest icon */
      icon: PropTypes.string.isRequired,
      /** Description of the program */
      description: PropTypes.string.isRequired,
    })).isRequired,
    link: PropTypes.shape({
      /** link label */
      label: PropTypes.string.isRequired,
      /** link href */
      href: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
const defaultProps = {};

const ContestDetails = ({ data }) => (
  <div className={`${Styles.container}`}>
    <h4>{data.title}</h4>
    <div className={Styles.programDetails}>
      {data.programs.map(program => (
        <div key={program.id} className={Styles.program}>
          <div className={Styles.icon}>
            <span className={Styles[program.icon]} />
          </div>
          <p>{program.description}</p>
        </div>
      ))}
    </div>
    <div className={Styles.viewAll}>
      <a href={data.link.href} target="_blank">{data.link.label}</a>
    </div>
  </div>
);

ContestDetails.propTypes = propTypes;
ContestDetails.defaultProps = defaultProps;

export default ContestDetails;
