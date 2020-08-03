import React from 'react';
import { Provider } from 'react-redux';

import Store from './src/Store';
import Routes from './src/routes';

export default function App() {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
}
