import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './home/Home';
import NotFound from './notFound/NotFound';

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/naruto" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Main;

