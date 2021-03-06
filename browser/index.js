'use strict';

import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import {clearForecast} from './reducers/forecast';

const resetForecast = () => {
  store.dispatch(clearForecast());
};

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" onEnter={resetForecast} component={HomeContainer} />
      <Route path="/login" component={LoginContainer} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
