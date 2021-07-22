import { typicodeResource } from './api-calls.js';
import { renderAlbum } from './components.js';
import { state } from './data.js';

export const chooseAlbum = async event => {
  const albumId = event.target.form.albumId.value;

  try {
    // parallel fetching, photos and album are fetched at the same time
    const [album, photos] = await Promise.all([
      typicodeResource('albums', albumId),
      typicodeResource('albums', albumId, 'photos'),
    ]);
    // // sequential fetching, photos are only fetched after album is complete
    // const album = await typicodeResource('albums', albumId);
    // const photos = await typicodeResource('albums', albumId, 'photos');

    state.album = album;
    state.photos = photos;
    console.log(state);

    const albumElement = renderAlbum();

    document.getElementById('root').innerHTML = '';
    document.getElementById('root').appendChild(albumElement);
  } catch (err) {
    console.error(err);

    if (err.message.includes('HTTP error! status: 404')) {
      document.getElementById('root').innerHTML = `<pre>

    there is no album with id ${albumId}. try a number between 1 and 100.</pre>`;
    } else {
      document.getElementById('root').innerHTML = `<pre>

    oops! something went wrong fetching the album with id ${albumId}, try again?</pre>`;
    }
  }
};
