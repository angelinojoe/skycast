'use strict';

import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import '../public/stylesheets/index.scss';
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/"  />
    </Router>
  </Provider>,
  document.getElementById('app')
);
