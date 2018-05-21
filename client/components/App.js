import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchContainer from '../containers/SearchContainer';
import MainContainer from '../containers/MainContainer';

const App = () => (
  <View>
    <SearchContainer/>
    <MainContainer/>
  </View>
);

const styles = StyleSheet.create({
  app: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0
  }
});

export default App;