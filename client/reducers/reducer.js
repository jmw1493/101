import * as types from '../actions/actionTypes';
import { Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');
let orientation = (height > width) ? 'portrait' : 'landscape';

const initialState = {
  photos: [],
  indexOfSelectedPhoto: 0,
  mainPage: true,
  position: 0,
  orientation: orientation,
  initialRender: true,
  loading: false
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case types.DELIVER_PHOTOS:
      return Object.assign({}, state, {
        photos: action.photos,
        mainPage: true,
        position: 0,
        initialRender: false,
        loading: false
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