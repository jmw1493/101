import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Image, TouchableHighlight } from 'react-native';


export default class PhotoDisplay extends Component {
  constructor(props) {
    super(props);
  }

  handleScroll = (event) => {
    this.props.updatePosition(event.nativeEvent.contentOffset.y)
  }

  render() {
    return (
      <ScrollView 
        style={styles.photoView}
        ref='_scrollView'
        onMomentumScrollEnd={this.handleScroll}
        contentOffset={{y: this.props.position}}
      >
        <View style={styles.viewContainer}>
          {this.props.photos.map((photo, i) => (
            <TouchableHighlight 
              key={photo.id} 
              onPress={() => {
                return this.props.selectPhoto(photo.id)
              }} 
              underlayColor='blue'
              style={styles.photoContainer}
            >
              <Image 
                source={{
                  uri: photo.webformatURL
                }}
                style={styles.photo}
              />
            </TouchableHighlight>
          ))}
        </View>  
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  photoView: {
    height: '100%',
  },
  viewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  photoContainer: {
    width: "50%",
    height: 150,
  },
  photo: {
    flex: 1,
  }
});


