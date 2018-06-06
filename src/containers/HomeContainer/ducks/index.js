import translation from './translations';
// Actions
const SET_HOME_CONTAINER_INITIAL_ARGUMENTS = 'app/HomeContainer/SET_HOME_CONTAINER_INITIAL_ARGUMENTS';
const SET_HOME_CONTAINER_DATA = 'app/HomeContainer/SET_HOME_CONTAINER_DATA';


// Reducers
const HomeContainerReducers = (state = {}, action = {}) => {
  switch (action.type) {
    case SET_HOME_CONTAINER_INITIAL_ARGUMENTS:
      return Object.assign({}, state, {
        initialArguments: action.payload,
      });
    case SET_HOME_CONTAINER_DATA:
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
  type: SET_HOME_CONTAINER_INITIAL_ARGUMENTS,
  payload: initialArguments,
});

// Side effects
export const getHomeContainerData = () => (
  dispatch => (
    setTimeout(() => {
      dispatch({
        type: SET_HOME_CONTAINER_DATA,
        payload: translation,
      });
    }, 1000)
  )
);

export default HomeContainerReducers;
