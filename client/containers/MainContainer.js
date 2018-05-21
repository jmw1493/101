import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Dimensions, StyleSheet } from 'react-native';
import Main from '../components/Main'
import { selectPhoto, goBack, updatePosition, rotate } from '../actions/actions';

const mapStateToProps = state => ({
  photos: state.photos,
  index: state.indexOfSelectedPhoto,
  position: state.position,
  mainPage: state.mainPage,
  orientation: state.orientation
});

const mapDispatchToProps = dispatch => ({
  selectPhoto: (photoID) => dispatch(selectPhoto(photoID)),
  goBack: () => dispatch(goBack()),
  updatePosition: (position) => dispatch(updatePosition(position)),
  rotate: (orientation) => dispatch(rotate(orientation))
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
