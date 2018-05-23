import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Dimensions, StyleSheet } from 'react-native';
import Main from '../components/Main'
import { selectPhoto, goBack, updatePosition, rotate, requestPhotos } from '../actions/actions';

const mapStateToProps = state => ({
  photos: state.photos,
  index: state.indexOfSelectedPhoto,
  position: state.position,
  mainPage: state.mainPage,
  orientation: state.orientation,
  initialRender: state.initialRender,
  loading: state.loading,
  apiPageNum: state.apiPageNum,
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  selectPhoto: (photoID) => dispatch(selectPhoto(photoID)),
  goBack: () => dispatch(goBack()),
  updatePosition: (position) => dispatch(updatePosition(position)),
  rotate: (orientation) => dispatch(rotate(orientation)),
  getPhotos: (text, apiPageNum) => dispatch(requestPhotos(text, apiPageNum))
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Dimensions.addEventListener('change', () => {
      this.props.rotate(this.getOrientation())
    });
  }

  getOrientation = () => {
    const { height, width } = Dimensions.get('window');
    return (height > width) ? 'portrait' : 'landscape'
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Main {...this.props}/>
      </View>
    );
  } 
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '85%',
    justifyContent: "center",
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
