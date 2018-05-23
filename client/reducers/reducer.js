import * as types from '../actions/actionTypes';
import { Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');
let orientation = (height > width) ? 'portrait' : 'landscape';

const initialState = {
  photos: [],
  search: '', //the search query entered by the user
  indexOfSelectedPhoto: 0, //used to get specific photo info when specific photo is clicked
  mainPage: true, //true -> renders main page; false -> renders detail page
  position: 0, //keeps track of content offset in y-direction so user doesn't lose their place
  orientation: orientation,
  initialRender: true, //bool so the app doesn't display <Text>loading...</Text> before the first query
  loading: false, //if true, displays <Text>loading...</Text>
  apiPageNum: 0 //Pixabay API has a 'page' query parameter that we must specify
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case types.DELIVER_PHOTOS:
      let position = (state.search === action.search) ? state.position : 0;
      return Object.assign({}, state, {
        photos: state.photos.concat(action.photos),
        search: action.search,
        mainPage: true,
        position: position,
        initialRender: false,
        loading: false,
        apiPageNum: action.apiPageNum
      })
    case types.SELECT_PHOTO:
      let selectedPhotoIndex = state.photos.map((photo) => photo.id).indexOf(action.photoID);
      return Object.assign({}, state, {
        indexOfSelectedPhoto: selectedPhotoIndex,
        mainPage: false,
      })
    case types.UPDATE_POSITION:
      return Object.assign({}, state, {
        position: action.position,
      })
    case types.ROTATE:
      return Object.assign({}, state, {
        orientation: action.orientation
      })
    case types.LOADING:
      return Object.assign({}, state, {
        loading: action.bool
      })
    case types.GO_BACK:
      return Object.assign({}, state, {mainPage: true})
    default:
      return state;
  }
};

export default reducer;