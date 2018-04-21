import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Router from './pages/Router';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
