import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import { Routes } from './routes';
import store from './app/store'

import { Header } from './components/Header'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  </Provider>
);

export { App }
