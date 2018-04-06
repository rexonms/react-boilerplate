import { GET_AWARD_DATA } from '../types/Award';

export default function (state = {}, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GET_AWARD_DATA:
      newState.data = action.payload;
      break;
    default:
      return newState;
  }
  return newState;
}
