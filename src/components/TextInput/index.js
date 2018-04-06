import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './TextInput.scss';

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
      <div id={this.props.id} className={styles.container}>
        <label htmlFor={this.props.id} className={styles.label}>
          {this.props.labelText}
          <input
            className={styles.input}
            name={this.props.id}
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={this.onChangeHandler}
          />
        </label>
      </div>
    );
  }
}

Input.defaultProps = {
  value: '',
  placeholder: '',
  onChangeHandler: () => {}
}

Input.propTypes = {
  /** Unique id for the input container */
  id: PropTypes.string.isRequired,
  /** Label for the input box */
  labelText: PropTypes.string.isRequired,
  /** Pre filled value for the input box, if applicable */
  value: PropTypes.string,
  placeholder: PropTypes.string,
  /** onChangeHandler that updates the input box state */
  onChangeHandler: PropTypes.func,
}

export default Input;
