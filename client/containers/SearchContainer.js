import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { requestPhotos } from '../actions/actions'
// import requestPhotos from '../actions/actions'


// So I'm thinking for SearchContainer, we map dispatch to props, pass to <Search>, and when we submit search triggers fxn that updates state (RECEIVE_PHOTOS) - should be fetch req in a constructor method, and after result, call the action RECEIVE_PHOTOS
    // See https://redux.js.org/basics/example-todo-list#reducers for how to avoid that passing ^^  
// Then in MainContainer we pull the results of the updated state -> photos: [...] b/c we can mapStateToProps

// const mapStateToProps = state => ({
//   // photos: state.photos
// });

const mapDispatchToProps = dispatch => ({
  search: text => dispatch(requestPhotos(text))
});

// search = () => {
//   let baseURL = 'https://pixabay.com/api/?key=9018030-ff43f446a20beb47e7c302b8a&q=';
//   let specsURL = '&image_type=photo&pretty=true'
//   //let searchInput = doc.GEBID('search-input')
//   //replace ' ' w/ '+'
//   fetch('https://pixabay.com/api/?key=9018030-ff43f446a20beb47e7c302b8a&q=yellow+flowers&image_type=photo&pretty=true')
// }

class SearchContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    return(
      <View>
        <Search search={this.props.search}/>
      </View>
    )
  }

}

export default connect(null, mapDispatchToProps)(SearchContainer);
// export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);