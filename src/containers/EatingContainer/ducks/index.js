import translation from './translations';
// Actions
const SET_REFERRALS_CONTAINER_INITIAL_ARGUMENTS = 'app/EatingContainer/SET_REFERRALS_CONTAINER_INITIAL_ARGUMENTS';
const SET_REFERRALS_CONTAINER_DATA = 'app/EatingContainer/SET_REFERRALS_CONTAINER_DATA';


// Reducers
const EatingContainerReducers = (state = {}, action = {}) => {
  switch (action.type) {
    case SET_REFERRALS_CONTAINER_INITIAL_ARGUMENTS:
      return Object.assign({}, state, {
        initialArguments: action.payload,
      });
    case SET_REFERRALS_CONTAINER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

// Action Creators
export const setInitialArguments = initialArguments => ({
  type: SET_REFERRALS_CONTAINER_INITIAL_ARGUMENTS,
  payload: initialArguments,
});

// Side effects
export const getEatingContainerData = () => (
  dispatch => (
    setTimeout(() => {
      dispatch({
        type: SET_REFERRALS_CONTAINER_DATA,
        payload: translation,
      });
    }, 1000)
  )
);

export default EatingContainerReducers;
