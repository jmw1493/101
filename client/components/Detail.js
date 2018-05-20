import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView, TouchableHighlight
} from 'react-native';
import SearchContainer from '../containers/SearchContainer'
import MainContainer from '../containers/MainContainer'

//image -> props.photos[props.index].webformatURL
//user -> props.photos[props.index].user
//image tags -> props.photos[props.index].tags
//resolution -> 
const Detail = (props) => (
  <ScrollView>
    <Image 
      source={{
        uri: props.photo.webformatURL
      }}
      style={{height: 200}}
    />
    <Text>User: {props.photo.user}</Text>
    <Text>Image tags: {props.photo.tags}</Text>
    <Button title="Go Back" onPress={props.goBack}/>
  </ScrollView>
);

export default Detail;