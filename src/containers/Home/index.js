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
    const { home } = this.props;
    return (
      <div className={Styles.container}>
        <HeadingScript text={home.headingText} />
        <div className={Styles.form}>
          <InputEmail
            label={home.form.inputLabel}
            value={home.form.value}
            onBlur={emailObj => this.onBlurHandler(emailObj)}
          />
          <Button onClick={this.onClickHandler} label={home.form.buttonLabel} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ home }) => ({ home });
const mapDispatchToProps = dispatch => (bindActionCreators(actions, dispatch));

Home.defaultProps = {
  home: {},
};

Home.propTypes = {
  home: PropTypes.shape({
    headingText: PropTypes.string,
    form: PropTypes.shape({
      inputLabel: PropTypes.string,
      value: PropTypes.string,
      buttonLabel: PropTypes.string,
    }),
  }),
  goToMessageListPage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
