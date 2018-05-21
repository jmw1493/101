import React from 'react';
import { Text, Image, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const Detail = (props) => {
  const whichStyle = props.orientation === 'portrait' ? portraitStyles : landscapeStyles;  
  return (
    <ScrollView style={whichStyle.detail}>
      <TouchableOpacity style={whichStyle.button} onPress={props.goBack}>
        <Text style={whichStyle.text}>Go Back</Text>
      </TouchableOpacity>
      <View style={whichStyle.detailWrapper}>
        <View style={whichStyle.imageSection}>
          <Image 
            source={{uri: props.photo.webformatURL}}
            style={whichStyle.image}
            resizeMode="contain"
          />
        </View>
        <View style={whichStyle.infoSection}>
          <Text style={whichStyle.info}>User: {props.photo.user}</Text>
          <Text style={whichStyle.info}>Image tags: {props.photo.tags}</Text>
          <Text style={whichStyle.info}>Resolution: {props.photo.webformatWidth}x{props.photo.webformatHeight}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const portraitStyles = StyleSheet.create({
  detail: {
    backgroundColor: 'black',
    height: '100%',
  },
  button: {
    width: '100%',
    height: 40,
    justifyContent: 'flex-end',
    margin: 0,
    paddingBottom: 5
  },
  text: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'center',
  },
  imageSection: {
    height: 250,
    marginTop: 10,
    marginBottom: 10
  },
  image: {
    flex: 1,
  },
  info: {
    color: 'white',
    marginTop: 10,
    marginLeft: 5
  },
});

const landscapeStyles = StyleSheet.create({
  detail: {
    height: '100%',
    backgroundColor: 'black',
  },
  button: {
    alignSelf: 'center',
    top: 0,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    marginBottom: 5
  },
  detailWrapper: {
    flexDirection: 'row',
    height: '90%',
  },
  imageSection: {
    width: '45%',
    marginLeft: '3.5%',
    marginRight: '1.5%',
  },
  image: {
    flex: 1,    
  },
  infoSection: {
    width: '45%',
    marginLeft: '1.5%',
    marginRight: '3.5%'
  },
  info: {
    color: 'white',
    lineHeight: 20,
    marginTop: 15,
    marginLeft: 5
  },
  text: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'center',
  }
});

export default Detail;