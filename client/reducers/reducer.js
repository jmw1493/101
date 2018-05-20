import * as types from '../actions/actionTypes';

const initialState = {
  photos: [],
  indexOfSelectedPhoto: 0,
  mainPage: true,
  position: 0
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case types.DELIVER_PHOTOS:
      return Object.assign({}, state, {photos: action.photos})
    case types.SELECT_PHOTO:
      console.log('reducer - action.photoID: ' + action.photoID)
      let selectedPhotoIndex = state.photos.map((photo) => photo.id).indexOf(action.photoID);
      console.log('reducer - selectedPhotoIndex: ' + selectedPhotoIndex)
      return Object.assign({}, state, {
        indexOfSelectedPhoto: selectedPhotoIndex,
        position: action.position, 
        mainPage: false
      })
    case types.UPDATE_POSITION:
      return Object.assign({}, state, {position: action.position})
    case types.GO_BACK:
      return Object.assign({}, state, {mainPage: true})
    default:
      return state;
  }
};

export default reducer;