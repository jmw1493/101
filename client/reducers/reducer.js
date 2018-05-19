import * as types from '../actions/actionTypes';

const initialState = {
  photos: [],
  indexOfSelectedPhoto: 0,
  mainPage: true
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case types.DELIVER_PHOTOS:
      return Object.assign({}, state, {photos: action.photos})
    case types.SELECT_PHOTO:
      let selectedPhotoIndex = state.photos.map((photo) => photo.id).indexOf(action.photo.id);
      return Object.assign({}, state, {
        indexOfSelectedPhoto: selectedPhotoIndex, 
        mainPage: false
      })
    case types.GO_BACK:
      return Object.assign({}, state, {mainPage: true})
    default:
      return state;
  }
};

export default reducer;