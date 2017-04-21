import axios from 'axios';

export const SET_TO_TRUE = 'SET_TO_TRUE';
export const SET_TO_FALSE = 'SET_TO_FALSE';

export const setTrue = (queries) => ({ type: SET_TO_TRUE, receivedQueries: queries});
export const setFalse = () => ({ type: SET_TO_FALSE});

export const logInUser = (type, email, password) => {
    return (dispatch) => {
        //because signup/login take same parameters, call both from here to keep code DRY
        axios.post(`/api/user/${type}`, {
          email: email,
          password: password
        })
        .then((res) => {
          if (res.status === 200){
            axios.get('/api/user/queries')
            .then((response) => response.data)
            .then((queries) => {
              dispatch(setTrue(queries));
            });
          }
        })
        .catch(function (err) {
            console.error(err);
        });
    };
};

export const logOutUser = () => {
  return (dispatch) => {
    axios.get('/api/user/logout')
    .then((res) => {
      if (res.status === 200){
        dispatch(setFalse());
      }
    })
    .catch(function (err) {
            console.error(err);
        });
  };
};

const userReducer = (state = {isLoggedIn: 'false', queries: []}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {

    case SET_TO_TRUE:
      newState.isLoggedIn = 'true';
      newState.queries = action.receivedQueries;
      return newState;

    case SET_TO_FALSE:
      newState.isLoggedIn = 'false';
      newState.queries = [];
      return newState;

    default:
      return state;
  }
};

export default userReducer;
