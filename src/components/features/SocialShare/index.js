import React from 'react';
import PropTypes from 'prop-types';

import Styles from './SocialShare.scss';
import Twitter from '../../lib/share/Twitter/index';
import Email from '../../lib/share/Email/index';
import EatingCodeShare from '../../lib/EatingCodeShare/index';

const propTypes = {
  data: PropTypes.shape({
    /** Title of the Social Share */
    title: PropTypes.string.isRequired,
    /** Eating Link */
    eatingLink: PropTypes.string.isRequired,
    /** Tweet message */
    twitter: PropTypes.string.isRequired,
    /** Data required to send email */
    email: PropTypes.shape({}).isRequired,
  }).isRequired,
};

const defaultProps = {};

const SocialShare = ({ data }) => (
  <div className={`${Styles.container}`}>
    <p className={`${Styles.allCaps}`}>{data.title}</p>
    <EatingCodeShare link={data.eatingLink} />
    <div className={Styles.icons}>
      <Twitter tweet={data.twitter} />
      <Email emailData={data.email} />
    </div>
  </div>
);

SocialShare.propTypes = propTypes;
SocialShare.defaultProps = defaultProps;

export default SocialShare;
