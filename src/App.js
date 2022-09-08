import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store.js';
import Router from './Router.js';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
