import * as types from './actionTypes';

export const goBack = () => ({
  type: types.GO_BACK
});

export const selectPhoto = (photoID) => ({
  type: types.SELECT_PHOTO,
  photoID
});

export const updatePosition = (position) => ({
  type: types.UPDATE_POSITION,
  position
});

export const rotate = (orientation) => ({
  type: types.ROTATE,
  orientation
});

const loading = (bool) => ({
  type: types.LOADING,
  bool
})

const deliverPhotos = (photos) => ({
  type: types.DELIVER_PHOTOS,
  photos
});

function fetchPhotos(search) {
  const API_Key = '9018030-ff43f446a20beb47e7c302b8a';
  const baseURL = `https://pixabay.com/api/?key=${API_Key}&q=`;
  const re = new RegExp(' ', 'g');
  let searchURL = search.replace(re, '+');
  const specsURL = '&image_type=photo&pretty=true&per_page=200';
  const url = baseURL + searchURL + specsURL;
  return fetch(url);
}

export const requestPhotos = (search) => {
  return (dispatch) => {
    dispatch(loading('true'))
    return fetchPhotos(search)
      .then(res => res.json())
      .then((photos, err) => {
        dispatch(deliverPhotos(photos.hits))
      });
  };
};