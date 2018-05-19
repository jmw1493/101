import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';

const PhotosDisplay = (props) =>( 
  //scrollable view
  <ScrollView style={styles.main}>
    {props.photos.map((photo, i) => (
      //console log here
      <Image 
        key={i}
        source={{
          uri: photo.webformatURL
        }}
        style={{height: 200}}
      />
      //or render text w/ url just to see if works
    ))}
  </ScrollView>
)

const styles = StyleSheet.create({
  // main: {
  //   height: 600,
  //   backgroundColor: "blue"
  // }
});

export default PhotosDisplay