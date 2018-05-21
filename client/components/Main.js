import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Detail from './Detail';
import PhotoDisplay from './PhotoDisplay';

const Main = (props) => (
  <View style={styles.main}>
    {
      (props.mainPage)
      ?
        <PhotoDisplay 
          photos={props.photos}
          position={props.position}
          selectPhoto={props.selectPhoto} 
          updatePosition={props.updatePosition}
          orientation={props.orientation}
        />
      :
        <Detail 
          photo={props.photos[props.index]} 
          goBack={props.goBack}
          orientation={props.orientation}
        />
    }
  </View>
);

const styles = StyleSheet.create({
  main: {
    height: "100%",
  }
});

export default Main;