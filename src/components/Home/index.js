import React from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';

import Title from '../lib/Title/';
import ContestDetails from '../features/ContestDetails';
import Routes from '../features/Routes';
import LoadingBars from '../lib/Loading/LoadingBars/index';
import Styles from './Home.scss';

const loading = () => <LoadingBars />;
const PreviousContest = Loadable({
  loader: () => import('./../../containers/PreviousContestContainer/'),
  loading,
});
const propTypes = {
  title: PropTypes.string.isRequired,
  programDetails: PropTypes.shape({}).isRequired,
  socialShare: PropTypes.shape({}).isRequired,
  mainNav: PropTypes.shape({}).isRequired,
};
const defaultProps = {};

const Home = props => (
  <div className={`${Styles.container}`}>
    <Title title={props.title} />
    <div className={`${Styles.content} ${Styles['tsla-flex']}`}>
      <div className={Styles.paneLeft}>
        <ContestDetails data={props.programDetails} />
      </div>
      <div className={Styles.paneRight}>
        <Routes data={props.mainNav} />
        <PreviousContest />
      </div>
    </div>
    <div className={Styles.paneBottom}>
    </div>

  </div>
);

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
