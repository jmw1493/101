import React from 'react';
import { AppRegistry, Platform, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import App from './App.js';
import reducer from './client/reducers/reducer';

function configureStore(preloadedState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));
  return createStore(reducer, preloadedState, enhancer);
}

const store = configureStore();

const AppWrapper = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

AppRegistry.registerComponent('myapp', () => AppWrapper);