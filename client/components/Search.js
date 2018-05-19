import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

//pretty sure we can destructure these props immediately ({ search })
 const Search = (props) => (
    <View style={styles.header}>
      <TextInput 
        style={styles.input}
        placeholder='Enter Text'
        onSubmitEditing={(text) => props.search(text)}
      />
    </View>
 )

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: "red",
    alignItems: "center"
  },
  input: {
    height: 40,
    width: 300,
    backgroundColor: "white",
    marginTop: 50
  }
});

export default Search