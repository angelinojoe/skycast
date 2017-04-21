import axios from 'axios';

export const GET_USER_QUERIES = 'GET_USER_QUERIES';
export const CLEAR_USER = 'CLEAR_USER';

export const getUserQueries = (queries) => ({ type: GET_USER_QUERIES, receivedQueries: queries});
export const clearUser = () => ({ type: CLEAR_USER});

//thunk action creators
export const fetchQueries = () => {
    return (dispatch) => {
        axios.get(`/api/user/queries`)
        .then((res) => res.data)
        .then((queries) => {
            dispatch(getUserQueries(queries));
        })
        .catch(function (err) {
            console.error(err);
        });
    };
};

const queriesReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {

    case GET_USER_QUERIES:
      newState = action.receivedQueries;
      return newState;

    case CLEAR_USER:
      newState = {};
      return newState;

    default:
      return state;
  }
};

export default queriesReducer;
