import axios from 'axios';

export const SET_TO_TRUE = 'SET_TO_TRUE';
export const SET_TO_FALSE = 'SET_TO_FALSE';

export const setTrue = () => ({ type: SET_TO_TRUE});
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
            dispatch(setTrue());
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

const userReducer = (state = 'false', action) => {
  console.log(action);
  switch (action.type) {

    case SET_TO_TRUE:
      return 'true';

    case SET_TO_FALSE:
      return 'false';

    default:
      return state;
  }
};

export default userReducer;
