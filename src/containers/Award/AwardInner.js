import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from '../../components/Title/index';
import './style.scss';
import { setAnalyticsEvent } from '../../utils/ga';
import Icon from '../../components/Icons/Awards/index';

class AwardInner extends Component {
  constructor() {
    super();
    this.state = {};
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler(x, y) {
    console.log(this.state);
    console.log(`m clicked with value ${x} ${y}`);
  }
  render() {
    const { translations } = this.props.award.data;
    return (
      <div className="awards">
        <Title label={translations.message} />
        <div className="icon">
          <Icon name="wheelArachnid" />
        </div>
        <button
          ref={(button) => { this.bt = button; }}
          style={{
            margin: 'auto',
            textAlign: 'center',
            border: '1px solid #333',
            borderRadius: '5px',
            color: '#fff',
            padding: '10px',
            backgroundColor: '#999',
          }}
          type="button"
          onClick={() => {
            setAnalyticsEvent({
              category: 'Event Category',
              action: 'Event Action',
              label: 'Event label',
              func: () => { this.onClickHandler('something', 'and something'); },
            });
          }}
        >
          GA Event Test
        </button>
      </div>
    );
  }
}

AwardInner.defaultProps = {
  award: {
    data: {
      translations: {},
    },
  },
};

AwardInner.propTypes = {
  award: PropTypes.shape({
    data: PropTypes.shape({
      translations: PropTypes.shape({}),
    }),
  }),
};

export default AwardInner;
