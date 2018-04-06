import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from '../../components/Title/';
import Paragraph from '../../components/Paragraph/';
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
        <Title label={translations.message} />
        <Paragraph label={translations.descriptionA} />
        <Paragraph label={translations.descriptionB} />
        <Paragraph label={translations.descriptionC} />
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
