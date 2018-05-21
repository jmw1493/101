import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import Photo from './Photo'


export default class PhotoDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.refs._scrollView.scrollTo({y: this.props.position}) //trying this for android
  }

  handleScroll = (event) => {
    this.props.updatePosition(event.nativeEvent.contentOffset.y)
  }

  render() {
    return (
      <ScrollView 
        style={styles.photoView}
        ref='_scrollView' //trying this w/ the method in compDM() but not working, need to console.log things so have to install adb
        onMomentumScrollEnd={this.handleScroll}
        contentOffset={{y: this.props.position} //not available in android!
      >
        (this.props.loading) ? <Text>Loading...</Text> : null
        <View style={styles.viewContainer}>
          {
            (!this.props.photos.length > 0 && !this.props.initialRender)
            ?
            <Text>No images found</Text>
            :
            this.props.photos.map((photo, i) => (
              <TouchableHighlight 
                key={photo.id} 
                onPress={() => {
                  return this.props.selectPhoto(photo.id)
                }} 
                underlayColor='blue'
                style={styles.photoContainer}
              >
                <Photo photo={photo}/>
                {/* <Image source={{uri: photo.webformatURL}} style={styles.photo}/> */}
              </TouchableHighlight>
            ))
          }
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


