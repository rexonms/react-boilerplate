import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './Tabs.scss';

const propTypes = {
  data: PropTypes.shape({
    selectedRadioValue: PropTypes.string.isRequired,
    radios: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

const defaultProps = {};
class Tabs extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedRadioValue: props.data.selectedRadioValue,
    };
    this.className = Styles.radioContainer;
    this.onClickHandler = this.onClickHandler.bind(this);
    this.getClassName = this.getClassName.bind(this);
  }
  onClickHandler(selectedRadioValue) {
    this.props.onChangeHandler(selectedRadioValue);
    // history.push(`/#/${selectedRadioValue}`);
    this.setState({ selectedRadioValue });
  }
  getClassName(radioValue) {
    return this.state.selectedRadioValue === radioValue
      ? `${this.className} ${Styles.selected}`
      : this.className;
  }

  render() {
    const { data } = this.props;
    return (
      <div className={Styles.container}>
        {data.radios.map(radio => (
          <div key={radio.id} className={this.getClassName(radio.value)}>
            <label htmlFor={radio.id}>
              {radio.label}
              <input
                className={radio.value}
                value={radio.value}
                checked={radio.value === this.state.selectedRadioValue}
                onChange={() => this.onClickHandler(radio.value)}
                type="radio"
              />
            </label>
          </div>
        ))}
      </div>
    );
  }
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
