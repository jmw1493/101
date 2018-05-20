import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableHighlight, Dimensions } from 'react-native';
import Detail from './Detail'

//give state the content offset-y
//when we press an image -> update the offset in redux
//make ref to scrollview (... ref = 'scrollView')
//in componentdidmount -> this.refs.scrollView.scrollTo(position)
//scrollTo({x: 0, y: ...position, animated: false})

//for orientation, can get height of full screen w/ import Dimensions & Dimensions.get
//Dimensions.addEventListener('change', callback)
//find ratio of height so know general position when flipped ... better way?


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      position: this.props.position
    }
  }

  componentDidMount() {
    if (this.props.mainPage) {
      this.refs._scrollView.scrollTo({
        y: this.state.position,
        animated: false
      })
      // this.myRef.getNode().scrollToOffset({
      //   y: this.state.position,
      //   animated: false,
  // });
      //   this.scrollView.scrollTo({
      //     y: this.state.position, //or this.state.position
      //     animated: false
      //   })
    }
  }

  handleScroll = (event) => {
    let offset = event.nativeEvent.contentOffset.y
    console.log('offset: ' + offset)
    this.setState({
      position: offset
    })
  }

  getPosition = () => this.state.position;

  render() {
    return (
      (this.props.mainPage)
      ?
        <ScrollView 
          ref='_scrollView'
          // ref={this.scrollView}
          // onMomentumScrollEnd={(event)=>console.log('scroll event: ' + event.nativeEvent.contentOffset.y)} //tell state/store position
          onMomentumScrollEnd={this.handleScroll}
        >
          {this.props.photos.map((photo, i) => (
            <TouchableHighlight 
              key={photo.id} 
              onPress={() => {
                console.log('result of getposition: ' + this.getPosition())
                let position = this.getPosition()
                return this.props.selectPhoto(photo.id, position)
              }} 
              underlayColor='blue'
            >
              <Image 
                source={{
                  uri: photo.webformatURL
                }}
                style={styles.photo}
              />
            </TouchableHighlight>
          ))}
        </ScrollView>
      :
        <ScrollView>
          <Detail photo={this.props.photos[this.props.index]} goBack={this.props.goBack}/>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    // height: 600,
    // backgroundColor: "blue"
    // flexDirection: "column"
    // overflow: "scroll"
  },
  photo: {
    height: 150,
    // width: 100
  }
});


