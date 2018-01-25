import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './rootStore';

render(
  // Provider will wrap the store component so every component in the App has access to those states
  // the syntax to write to access the current states are 
  // store.city, store.cityInformation, store.searchHistory
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
