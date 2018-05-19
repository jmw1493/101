/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import SearchContainer from '../containers/SearchContainer'
import MainContainer from '../containers/MainContainer'



const App = () => (
  <View>
    <SearchContainer/>
    <MainContainer/>
  </View>
);

export default App;