import React from 'react';
import { Provider } from 'react-redux';

// Internationalization
import { LocaleProvider } from 'antd';
// import ptBR from 'antd/lib/locale-provider/pt_BR';
import enUs from 'antd/lib/locale-provider/en_US';

import 'antd/dist/antd.css';

import store from './redux/store';
import Main from './pages/Main';

const App = () => (
  <Provider store={store}>
    <LocaleProvider locale={enUs}>
      <Main />
    </LocaleProvider>
  </Provider>
);

export default App;
