import { GET_HOME_DATA } from '../types/Home';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_HOME_DATA:
      return Object.assign({}, state, {
        data: action.payload,
      });
    default:
      return state;
  }
}
