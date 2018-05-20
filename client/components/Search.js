import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

 const Search = (props) => {
   return (
    <View style={styles.header}>
      <TextInput 
        style={styles.input}
        placeholder='Enter Text'
        onSubmitEditing={(event) => props.search(event.nativeEvent.text)}
      />
    </View>
 )}

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  input: {
    height: 40,
    width: 300,
    backgroundColor: "white",
    marginTop: 50
  }
});

export default Search