import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Froms/Button/index';
import Styles from './Home.scss';
import InputEmail from '../../components/Froms/Input/Email/index';

class HomeInner extends Component {
  constructor() {
    super();
    this.state = {};
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler() {
    this.props.saveUserEmailAddressOnLocalHost(this.state.email);
  }

  render() {
    console.log(this.props)
    return (
      <div className={Styles.container}>
        <InputEmail
          label="Input your email"
          value="rexonms@gamil.com"
          onChange={() => {}}
          onBlur={
            (email) => {
              this.setState({ email })}
          }
        />
        <Button name="Submit" onClick={this.onClickHandler}/>
      </div>
    );
  }
}

HomeInner.defaultProps = {
  home: {
    data: {
      translations: {},
    },
  },
};

HomeInner.propTypes = {
  home: PropTypes.shape({
    data: PropTypes.shape({
      translations: PropTypes.shape({}),
    }),
  }),
};

export default HomeInner;
