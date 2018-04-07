import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from '../../components/Title/';
import Paragraph from '../../components/Typography/Paragraph/';
// import './styles.scss';

class HomeInner extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { translations } = this.props.home.data;
    return (
      <div className="home">
       welcome
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
