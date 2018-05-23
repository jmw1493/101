import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: ''
    }
  }

  render() {
    const whichStyle = this.props.orientation === 'portrait' ? portraitStyles : landscapeStyles;
    return (
      <View style={whichStyle.searchWrapper}>
        <TextInput 
          style={whichStyle.input}
          placeholder='Enter Text'
          onChangeText={(text) => this.setState({typing: text})}
          onSubmitEditing={(event) => this.props.getPhotos(event.nativeEvent.text, 1)}
        />
        <TouchableOpacity style={whichStyle.submit} onPress={() => this.props.getPhotos(this.state.typing, 1)}>
          <Text style={whichStyle.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const portraitStyles = StyleSheet.create({
  searchWrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: "white",
    marginBottom: '4%',
    padding: 0,
    borderRadius: 5
  },
  submit: {
    height: 45,
    width: 70,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '4%',
    backgroundColor: '#4987ed',
    padding: 0
  },
  text: {
    color: 'white',
    marginBottom: 10,
  }
});

const landscapeStyles = StyleSheet.create({
  searchWrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  input: {
    height: 40,
    width: 450,
    backgroundColor: "white",
    marginBottom: 5,
    borderRadius: 5
  },
  submit: {
    height: 40,
    width: 70,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4987ed',
    marginBottom: 5,
  },
  text: {
    color: 'white',
  }
});
