import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { View, StyleSheet } from 'react-native';
import { requestPhotos } from '../actions/actions';

const mapStateToProps = state => ({
  orientation: state.orientation,
  apiPageNum: state.apiPageNum
});

const mapDispatchToProps = dispatch => ({
  getPhotos: (text, apiPageNum) => dispatch(requestPhotos(text, apiPageNum))
});

const SearchContainer = (props) => (
  <View style={styles.searchContainer}>
    <Search {...props}/>
  </View>
);

const styles = StyleSheet.create({
  searchContainer: {
    height: '15%',
    width: '100%',
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: 'center',
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);