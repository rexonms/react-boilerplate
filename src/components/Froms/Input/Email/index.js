import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

import Styles from '../Input.scss';

class InputEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      isValid: true,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
  }
  onChangeHandler(e) {
    if (!this.state.valid) {
      this.setState({ isValid: true });
    }
    this.setState({
      value: e.target.value,
    });
  }
  onBlurHandler() {
    const emailIsValid = validator.isEmail(this.state.value)
    if (!emailIsValid) {
      this.setState({ isValid: false });
    }
    this.props.onBlur({
      email: this.state.value,
      valid: emailIsValid,
    })
  }
  render() {
    return (
      <div className={Styles.container}>
        <label htmlFor={this.props.label} className={Styles.label}>
          {this.props.label}
          <input
            className={!this.state.isValid ? Styles.inputError : ''}
            name={this.props.label}
            value={this.state.value}
            onChange={this.onChangeHandler}
            onBlur={this.onBlurHandler}
          />
        </label>
        <div className={Styles.error}>
          {!this.state.isValid && this.props.errorMessage}
        </div>
      </div>
    );
  }
}

InputEmail.defaultProps = {
  value: '',
  onChange: () => {},
  errorMessage: 'Invalid Email address',
}

InputEmail.propTypes = {
  /** Label for the input box */
  label: PropTypes.string.isRequired,
  /** Pre filled value for the input box, if applicable */
  value: PropTypes.string,
  /** Message on error */
  errorMessage: PropTypes.string,
  /** onChangeHandler that updates the input box state */
  onChange: PropTypes.func,
  /** onBlurHandler that updates the input box state */
  onBlur: PropTypes.func.isRequired,
}

export default InputEmail;
