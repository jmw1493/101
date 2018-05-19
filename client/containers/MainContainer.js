import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import PhotosDisplay from '../components/PhotosDisplay'
// import requestPhotos from '../actions/actions'

const mapStateToProps = state => ({
  photos: state.photos,
  mainPage: state.mainPage //if mainPage is true, render mainPage (list of photos), otherwise details page of specific photo
});

// const mapDispatchToProps = dispatch => ({

// });

class MainContainer extends Component {
  // constructor(props) {
  //   super(props)
  // }
  // state = { photos: [] };
  // componentDidMount() {
  //   requestPhotos(photos =>
  //     this.setState({ photos: photos })
  //   );
  // }
  render() {
    // return <PhotosDisplay photos={this.state.photos} />;
    return (
      <View>
        <PhotosDisplay photos={(this.props.photos.length) ? this.props.photos : []} />
      </View>
    )
  }
}

// export default MainContainer

export default connect(mapStateToProps)(MainContainer);
// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);