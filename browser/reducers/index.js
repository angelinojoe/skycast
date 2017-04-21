import { combineReducers } from 'redux';
import forecastReducer from './forecast';
import queriesReducer from './queries';
import userReducer from './user';

const rootReducer = combineReducers({
  currentForecast: forecastReducer,
  usersQueries: queriesReducer,
  isUserLoggedIn: userReducer
});

export default rootReducer;
