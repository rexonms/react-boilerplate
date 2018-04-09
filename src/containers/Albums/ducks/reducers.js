import { SET_ALBUMS_DATA } from './types';

export default function (state = {}, action) {
  switch (action.type) {
    case SET_ALBUMS_DATA:
      return Object.assign({}, state, {
        data: action.payload,
      });
    default:
      return state;
  }
}
