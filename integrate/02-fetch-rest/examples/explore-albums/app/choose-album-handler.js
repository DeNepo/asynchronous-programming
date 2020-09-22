import { Album } from './album.js';

export const chooseAlbumHandler = (event) => {
  const albumId = event.target.form.albumId.value;

  fetch('https://jsonplaceholder.typicode.com/albums/' + albumId)
    .then(res => res.json())
    .then(albumData => {
      const newAlbum = new Album(albumData);
      return newAlbum.populate();
    })
    .then(albumInstance => {
      console.log(albumInstance);
      const view = albumInstance.render();
      document.getElementById('root').innerHTML = '';
      document.getElementById('root').appendChild(view);
    })
    .catch(err => console.error(err));
};
