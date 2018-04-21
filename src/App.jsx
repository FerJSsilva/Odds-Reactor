import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './pages/Main';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
