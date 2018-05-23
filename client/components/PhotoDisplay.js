import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import Photo from './Photo'


export default class PhotoDisplay extends Component {
  constructor(props) {
    super(props);
    this.scrollView = React.createRef()
  }

  componentDidMount() {
    this.scrollView.current.scrollTo({y: this.props.position, animated: false}); //trying this for android
  }

  handleScroll = (event) => {
    this.props.updatePosition(event.nativeEvent.contentOffset.y);
    const totalHeight = event.nativeEvent.contentSize.height;;
    const currentHeight = event.nativeEvent.contentOffset.y;
    if (currentHeight / totalHeight >= 0.75) this.props.getPhotos(this.props.search, this.props.apiPageNum + 1);
  }

  render() {
    return (
      <ScrollView 
        style={styles.photoView}
        ref={this.scrollView}
        //if I need to console.log things in Android, I have to install adb
        onMomentumScrollEnd={this.handleScroll} 
        onScrollEndDrag={this.handleScroll} //necessary because the above doesn't work if user keeps finger on screen as he/she drags

        // contentOffset={{y: this.props.position}} //not available in android!, but all we need for RN, don't need refs
      >

        {(this.props.loading && this.props.apiPageNum === 1) ? <Text>Loading...</Text> : null}
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


