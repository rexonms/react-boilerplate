import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './StatefulComponent.scss';

const propTypes = {
  beforeText: PropTypes.string.isRequired,
  afterText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

const defaultProps = {};

class StatefulComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.beforeText,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler() {
    this.setState({
      label: this.props.afterText,
    });
  }
  render() {
    return (
      <div className={`${styles.container}`}>
        {this.state.label}
        <button onClick={this.onClickHandler}>{this.props.buttonText}</button>
      </div>
    );
  }
}

StatefulComponent.propTypes = propTypes;
StatefulComponent.defaultProps = defaultProps;

export default StatefulComponent;
