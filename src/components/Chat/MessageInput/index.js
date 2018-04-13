import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './MessageInput.scss';

const defaultProps = {
  label: '',
};
const propTypes = {
  /** Label for input box but it's not visible. Added for eslint */
  label: PropTypes.string,
  /** Button label when bulb is turned on */
  sendMessage: PropTypes.func.isRequired,
};

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
  }
  onChangeHandler(e) {
    this.setState({ message: e.target.value });
  }
  onKeyUpHandler(e) {
    if (e.keyCode === 13) {
      this.props.sendMessage(this.state.message);
      this.setState({ message: '' });
    }
  }
  render() {
    return (
      <div className={Styles.container}>
        <label htmlFor={this.props.label} className={Styles.label}>
          <input
            className={Styles.input}
            name={this.props.label}
            value={this.state.message}
            onChange={e => this.onChangeHandler(e)}
            onKeyUp={e => this.onKeyUpHandler(e)} // Required for Jest testing
          />
        </label>
      </div>
    );
  }
}

MessageInput.defaultProps = defaultProps;
MessageInput.propTypes = propTypes;

export default MessageInput;
