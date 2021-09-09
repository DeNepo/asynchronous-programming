import { chooseAlbum } from './handlers.js';

export const chooseAlbumListener = () => {
  document
    .getElementById('choose-album-button')
    .addEventListener('click', chooseAlbum);
};
