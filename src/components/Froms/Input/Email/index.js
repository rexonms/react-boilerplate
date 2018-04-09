import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

import styles from '../Input.scss';

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
    if ( !validator.isEmail(this.state.value)) {
      return this.setState({ isValid: false });
    }
    this.props.onBlur(this.state.value)
  }
  render() {
    return (
      <div className={styles.container}>
        <label htmlFor={this.props.label} className={styles.label}>
          {this.props.label}
          <input
            className={!this.state.isValid ? styles.inputError : ''}
            name={this.props.label}
            value={this.state.value}
            onChange={this.onChangeHandler}
            onBlur={this.onBlurHandler}
          />
        </label>
        <div className={styles.error}>
          {!this.state.isValid && this.props.errorMessage}
        </div>
      </div>
    );
  }
}

InputEmail.defaultProps = {
  value: '',
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
  onChange: PropTypes.func.isRequired,
  /** onBlurHandler that updates the input box state */
  onBlur: PropTypes.func.isRequired,
}

export default InputEmail;
