import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Test.scss';

const defaultProps = {
  bulbState: true,
  buttonLabelOn: 'Off',
  buttonLabelOff: 'On',
};
const propTypes = {
  /** Default state of the light bulb */
  bulbState: PropTypes.bool,
  /** Button label when bulb is turned on */
  buttonLabelOn: PropTypes.string,
  /** Button label when bulb is turned off */
  buttonLabelOff: PropTypes.string,
};

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bulbState: props.bulbState,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.getBulbClass = this.getBulbClass.bind(this);
    this.getButtonLabel = this.getButtonLabel.bind(this);
  }
  onClickHandler() {
    this.setState({
      bulbState: !this.state.bulbState,
    });
  }
  getBulbClass() {
    return this.state.bulbState === true ? styles.bulbOn : styles.bulbOff;
  }
  getButtonLabel() {
    return this.state.bulbState === true ? this.props.buttonLabelOn : this.props.buttonLabelOff;
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <div className={`${styles.bulb} ${this.getBulbClass()}`} />
        </div>
        <button
          className={styles.button}
          onClick={this.onClickHandler}
        >
          {this.getButtonLabel()}
        </button>
      </div>
    );
  }
}

Test.defaultProps = defaultProps;
Test.propTypes = propTypes;

export default Test;
