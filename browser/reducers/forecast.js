import axios from 'axios';

export const GET_FORECAST = 'GET_FORECAST';
export const CLEAR_FORECAST = 'CLEAR_FORECAST';
export const getForecast = (forecast) => ({ type: GET_FORECAST, receivedForecast: forecast});
export const clearForecast = () => ({ type: CLEAR_FORECAST});

//thunk action creators
export const fetchForecast = (address) => {
    return (dispatch) => {
        axios.get(`/api/location/${address}`)
        .then((res) => res.data)
        .then((albums) => {
            dispatch(getForecast(albums));
        })
        .catch(function (err) {
            console.error(err);
        });
    };
};

const forecastReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {

    case GET_FORECAST:
      newState = action.receivedForecast;
      return newState;

    case CLEAR_FORECAST:
      newState = {};
      return newState;

    default:
      return state;
  }
};

export default forecastReducer;
