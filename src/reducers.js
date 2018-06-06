import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import HomeContainerReducers from './containers/HomeContainer/ducks/';
import EatingContainerReducers from './containers/EatingContainer/ducks/';
import CreditContainerReducers from './containers/CreditContainer/ducks/';
import PreviousContestReducers from './containers/PreviousContestContainer/ducks/';

const createReducer = asyncReducers => (
  combineReducers({
    home: HomeContainerReducers,
    credit: CreditContainerReducers,
    eating: EatingContainerReducers,
    previousContest: PreviousContestReducers,
    routing: routerReducer,
    ...asyncReducers,
  })
);

export default createReducer;
