import { typicodeResource } from '../api-calls/typicode-resource.js';

import { renderAlbum } from '../components/render-album.js';
import { fourOhFour } from '../components/four-oh-four.js';
import { otherError } from '../components/other-error.js';

export const chooseAlbum = async (event) => {
  const albumId = event.target.form.albumId.value;

  const root = document.getElementById('root');
  root.innerHTML = '';

  try {
    const albumPromise = typicodeResource('albums', albumId);
    const photosPromise = typicodeResource('albums', albumId, 'photos');

    const [album, photos] = await Promise.all([albumPromise, photosPromise]);

    const albumElement = renderAlbum(album, photos);

    root.appendChild(albumElement);
  } catch (err) {
    console.error(err);

    const errorElement = err.message.includes('HTTP error! status: 404')
      ? fourOhFour(albumId)
      : otherError(albumId);

    root.appendChild(errorElement);
  }
};
