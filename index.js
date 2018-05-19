import React from 'react';
import { AppRegistry, Platform, View } from 'react-native';
import { render } from 'react-dom'; //get rid of react-dom
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from './client/components/App';
import reducer from './client/reducers/reducer';

// const store = createStore(reducer, applyMiddleware(thunkMiddleware))
function configureStore(preloadedState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware))
  return createStore(reducer, preloadedState, enhancer)
}

const store = configureStore();

const AppWrapper = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

AppRegistry.registerComponent('myapp', () => AppWrapper);