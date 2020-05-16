import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes';

const ROOT = document.querySelector('[data-js="root"]');

render(
  <Provider store={store}>
    <Routes />
  </Provider>, ROOT);

if (process.env.NODE_ENV === 'development') {
  (module).hot.accept('./routes', render);
}