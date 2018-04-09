import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from '../Input.scss';

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return (
      <div className={styles.container}>
        <label htmlFor={this.props.label} className={styles.label}>
          {this.props.label}
          <input
            className={styles.input}
            name={this.props.label}
            value={this.state.value}
            onChange={this.onChangeHandler}
            onBlur={this.props.onBlur(this.state.value)}
          />
        </label>
      </div>
    );
  }
}

Input.defaultProps = {
  value: '',
}

Input.propTypes = {
  /** Label for the input box */
  label: PropTypes.string.isRequired,
  /** Pre filled value for the input box, if applicable */
  value: PropTypes.string,
  /** information that needs to be stored on user exits the input box **/
  onBlur: PropTypes.func.isRequired,
}

export default Input;
