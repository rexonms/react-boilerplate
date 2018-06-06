import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './PreviousContest.scss';
import TogglerArrow from '../../lib/TogglerArrow';

const propTypes = {
  title: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
};
const defaultProps = {};

class PreviousContest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler(expanded) {
    this.setState({ expanded: !expanded });
  }
  render() {
    return (
      <div className={`${Styles.container}`}>
        <div className={Styles.header}>
          <h4>{this.props.title}</h4>
          <TogglerArrow
            expanded={this.state.expanded}
            onClickHandler={expanded => this.onClickHandler(expanded)}
          />
          <button
            onClick={() => this.onClickHandler(this.state.expanded)}
            className={Styles.button}
          />
        </div>
        {!!this.state.expanded &&
          <p>Show the table </p>
        }
      </div>
    );
  }
}

PreviousContest.propTypes = propTypes;
PreviousContest.defaultProps = defaultProps;

export default PreviousContest;
