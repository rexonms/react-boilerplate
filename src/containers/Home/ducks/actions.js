import axios from 'axios';
import { SET_ALBUMS_DATA } from './types';

export const getAlbumsData = () => {
  return (dispatch => {
    const albums = axios.get('https://jsonplaceholder.typicode.com/albums')
    const photos = axios.get('https://jsonplaceholder.typicode.com/photos')
    Promise.all([albums,photos])
    .then(values => {
      const albums = values[0].data;
      const photos = values[1].data;
      const max = 50;
      const shortList = photos.slice(0, max)
      dispatch(setAlbumData(shortList));
    })
  });
}
export const setAlbumData = (payload) => {
  return({
    type: SET_ALBUMS_DATA,
    payload,
  })
}