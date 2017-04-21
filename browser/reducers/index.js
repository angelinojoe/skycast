import { combineReducers } from 'redux';
import forecastReducer from './forecast';
import userReducer from './user';

const rootReducer = combineReducers({
  currentForecast: forecastReducer,
  userQueries: userReducer
});

export default rootReducer;
