import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.scss';

const Header = () => (
  <ul className={styles.container}>
    <li><Link href="/" to="/">home</Link></li>
    <li><Link href="/award" to="/award">award</Link></li>
    <li><Link href="/leaderboard" to="/leaderboard">leaderboard</Link></li>
  </ul>
);

export default Header;
