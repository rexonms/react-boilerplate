import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './ducks/';

import Styles from './Home.scss';
import HeadingScript from '../../components/Typography/HeadingScript/index';
import InputEmail from '../../components/Forms/Input/Email/index';
import Button from '../../components/Forms/Button/index';

class Home extends Component {
  constructor() {
    super();
    this.emailObj = {};
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler() {
    if (this.emailObj.valid) {
      this.props.goToMessageListPage(this.emailObj.email);
    }
  }
  onBlurHandler(emailObj) {
    this.emailObj = emailObj;
  }
  render() {
    return (
      <div className={Styles.container}>
        <HeadingScript text="Welcome"/>
        <div className={Styles.form}>
          <InputEmail
            label="Your Email Address"
            value="rexonms@gmail.com"
            onBlur={(emailObj) => this.onBlurHandler(emailObj)}
          />
          <Button onClick={() => this.onClickHandler()} label="Start"/>
        </div>
      </div>
    )
  }

}

const mapStateToProps = ({ home }) => ({ home });
const mapDispatchToProps = dispatch => (bindActionCreators(actions, dispatch));

Home.defaultProps = {
  home: {},
};

Home.propTypes = {
  home: PropTypes.shape({}),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
