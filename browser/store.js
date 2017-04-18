import { createStore, applyMiddleware } from 'redux';
import dummyReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  dummyReducer,
  composeWithDevTools(
  applyMiddleware(
    createLogger(),
    thunkMiddleware
    )
  )
);

export default store;
