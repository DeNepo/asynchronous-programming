import { fetchAlbum } from './business-logic.js';
import { renderAlbum } from './components.js';

export const chooseAlbum = async (event) => {
  const albumId = event.target.form.albumId.value;

  try {
    const { album, photos } = await fetchAlbum(albumId);

    const albumElement = renderAlbum(album, photos);

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
