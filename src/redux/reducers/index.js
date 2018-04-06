import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import home from './Home';
import award from './Award';
import leaderboard from './Leaderboard';

const reducers = combineReducers({
  home,
  award,
  leaderboard,
  routing: routerReducer,
});

export default reducers;
