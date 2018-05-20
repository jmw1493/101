import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Main from '../components/Main'
import { selectPhoto, goBack } from '../actions/actions'

const mapStateToProps = state => ({
  photos: state.photos,
  index: state.indexOfSelectedPhoto,
  position: state.position,
  mainPage: state.mainPage //if mainPage is true, render mainPage (list of photos), otherwise details page of specific photo
});

const mapDispatchToProps = dispatch => ({
  selectPhoto: (photoID, position) => dispatch(selectPhoto(photoID)),
  goBack: () => dispatch(goBack())
});

class MainContainer extends Component {
  render() {
    return (
      <View>
        <Main 
          photos={(this.props.photos.length) ? this.props.photos : []} 
          index={this.props.index}
          position={this.props.position}
          mainPage={this.props.mainPage}
          selectPhoto={this.props.selectPhoto} 
          goBack={this.props.goBack}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
