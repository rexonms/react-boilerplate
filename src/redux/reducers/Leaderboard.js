import { GET_LEADERBOARD_DATA } from '../types/Leaderboard';

export default function (state = {}, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GET_LEADERBOARD_DATA:
      newState.data = action.payload;
      break;
    default:
      return newState;
  }
  return newState;
}
