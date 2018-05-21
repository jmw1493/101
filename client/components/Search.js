import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

 const Search = (props) => {
  const whichStyle = props.orientation === 'portrait' ? portraitStyles : landscapeStyles;
  return (
    <View style={whichStyle.searchWrapper}>
      <TextInput 
        style={whichStyle.input}
        placeholder='Enter Text'
        onSubmitEditing={(event) => props.search(event.nativeEvent.text)}
      />
    </View>
  );
};

const portraitStyles = StyleSheet.create({
  searchWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  input: {
    height: '40%',
    width: '80%',
    backgroundColor: "white",
    marginBottom: '4%',
  }
});

const landscapeStyles = StyleSheet.create({
  searchWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  input: {
    height: '65%',
    width: '70%',
    backgroundColor: "white",
    marginBottom: '1.5%'
  }
});

export default Search;