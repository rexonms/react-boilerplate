import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './styles.scss';

const timeout = parseInt(styles.animationTimeMs, 10);

const PageTransitionGroup = props => (
  <TransitionGroup component="page-transition" class="page-transition">
    <CSSTransition
      key={props.currentLocationPathName}
      timeout={timeout}
      classNames="slide-in-from-left"
      mountOnEnter
      unmountOnExit
    >
      <React.Fragment>
        {props.children}
      </React.Fragment>
    </CSSTransition>
  </TransitionGroup>
);

PageTransitionGroup.propTypes = {
  children: PropTypes.shape().isRequired,
  currentLocationPathName: PropTypes.string.isRequired,
};

export default PageTransitionGroup;
