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
          search={props.search}
          position={props.position}
          selectPhoto={props.selectPhoto} 
          updatePosition={props.updatePosition}
          orientation={props.orientation}
          initialRender={props.initialRender}
          loading={props.loading}
          getPhotos={props.getPhotos}
          apiPageNum={props.apiPageNum}
        />
      :
        <Detail 
          photo={props.photos[props.index]} 
          goBack={props.goBack}
          orientation={props.orientation}
          loading={props.loading}
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