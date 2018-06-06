import translation from './translations';
// Actions
const SET_PREVIOUS_PROGRAMS_CONTAINER_INITIAL_ARGUMENTS = 'app/PreviousContestContainer/SET_PREVIOUS_PROGRAMS_CONTAINER_INITIAL_ARGUMENTS';
const SET_PREVIOUS_PROGRAMS_CONTAINER_DATA = 'app/PreviousContestContainer/SET_PREVIOUS_PROGRAMS_CONTAINER_DATA';


// Reducers
const PreviousContestContainerReducers = (state = {}, action = {}) => {
  switch (action.type) {
    case SET_PREVIOUS_PROGRAMS_CONTAINER_INITIAL_ARGUMENTS:
      return Object.assign({}, state, {
        initialArguments: action.payload,
      });
    case SET_PREVIOUS_PROGRAMS_CONTAINER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

// Action Creators

// Side effects
export const getPreviousContestContainerData = () => (
  dispatch => (
    setTimeout(() => {
      dispatch({
        type: SET_PREVIOUS_PROGRAMS_CONTAINER_DATA,
        payload: translation,
      });
    }, 1000)
  )
);

export default PreviousContestContainerReducers;
