import React from 'react';

import Styles from './LoadingBars.scss';

const propTypes = {};

const defaultProps = {};

const LoadingBars = () => (
  <div className={Styles.spinner}>
    <div />
    <div className={Styles.rect2} />
    <div className={Styles.rect3} />
    <div className={Styles.rect4} />
    <div className={Styles.rect5} />
  </div>
);

LoadingBars.defaultProps = defaultProps;
LoadingBars.propTypes = propTypes;

export default LoadingBars;
