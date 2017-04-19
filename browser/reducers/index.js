import { combineReducers } from 'redux';
import forecastReducer from './forecast';

const rootReducer = combineReducers({
  currentForecast: forecastReducer
});

export default rootReducer;
