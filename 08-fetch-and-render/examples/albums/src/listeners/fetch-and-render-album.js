import { chooseAlbum } from '../handlers/choose-album.js';

export const fetchAndRenderAlbum = (id = '') => {
  document.getElementById(id).addEventListener('click', chooseAlbum);
};
