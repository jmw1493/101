import * as types from './actionTypes'

// export const receivePhotos = (json) => ({
//   type: types.RECEIVE_PHOTOS,
//   photos: json.data.children.map(child => child.data)
// })
export const goBack = () => ({
  type: types.GO_BACK
})

export const selectPhoto = (photo) => ({
  type: types.SELECT_PHOTO,
  photo
})

const deliverPhotos = (photos) => ({
  type: types.DELIVER_PHOTOS,
  photos
})

function fetchPhotos(search) {
  console.log(search)
  const API_Key = '9018030-ff43f446a20beb47e7c302b8a'
  const baseURL = `https://pixabay.com/api/?key=${API_Key}&q=`
  // var find = 'abc';
  const re = new RegExp(' ', 'g');
  // let searchURL = search.replace(re, '+');
  // let searchURL = search.replace(' ', '+')
  let searchURL = 'dogs'
  const specsURL = '&image_type=photo&pretty=true&per_page=200'
  const url = baseURL + searchURL + specsURL
  return fetch(url)
}

export const requestPhotos = (search) => {
  return (dispatch) => {
    return fetchPhotos(search)
      .then(res => res.json())
      .then((photos, err) => {
        // if (err) return ... dispatch an error action that renders something else
        dispatch(deliverPhotos(photos.hits))
      })
  }
}