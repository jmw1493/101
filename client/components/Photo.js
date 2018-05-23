import React, { Component } from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import Detail from './Detail';
import PhotoDisplay from './PhotoDisplay';

const Photo = (props) => (
  <Image 
    defaultSource={require('../../img/spinner.gif')}
    source={{uri: props.photo.webformatURL}} 
    style={styles.photo}
  />
)

const styles = StyleSheet.create({
  photo: {
    flex: 1,
  }
});

export default Photo