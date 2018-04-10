import React from 'react';

import Styles from './LoadingBars.scss';

const propTypes = {};

const defaultProps = {};

const LoadingBars = props => (
  <div className={Styles.spinner}>
    <div></div>
    <div className={Styles.rect2}></div>
    <div className={Styles.rect3}></div>
    <div className={Styles.rect4}></div>
    <div className={Styles.rect5}></div>
  </div>
);

LoadingBars.defaultProps = defaultProps;
LoadingBars.propTypes = propTypes;

export default LoadingBars;
