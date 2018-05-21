import React, { Component } from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import Detail from './Detail';
import PhotoDisplay from './PhotoDisplay';

export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <Image 
        defaultSource={require('../../img/spinner.gif')}
        source={{uri: this.props.photo.webformatURL}} 
        style={styles.photo}
      />
    );
  }
}

const styles = StyleSheet.create({
  photo: {
    flex: 1,
  }
});

// export default Photo;