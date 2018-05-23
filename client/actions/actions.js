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
});

const deliverPhotos = (search, photos, apiPageNum) => ({
  type: types.DELIVER_PHOTOS,
  search,
  photos,
  apiPageNum
});

function fetchPhotos(search, apiPageNum) {
  const API_Key = '9018030-ff43f446a20beb47e7c302b8a';
  const baseURL = `https://pixabay.com/api/?key=${API_Key}&q=`;
  const re = new RegExp(' ', 'g');
  let searchURL = search.replace(re, '+');
  const specsURL = `&image_type=photo&page=${apiPageNum}&per_page=100`;
  const url = baseURL + searchURL + specsURL;
  return fetch(url);
}

export const requestPhotos = (search, apiPageNum) => {
  return (dispatch) => {
    dispatch(loading('true'))
    return fetchPhotos(search, apiPageNum)
      .then(res => {
        if (res.ok) return res.json();
        throw [];
      })
      .then((photos) => dispatch(deliverPhotos(search, photos.hits, apiPageNum))
      )
      .catch(err => {
        return console.log('no more photos available')
      })
  };
};