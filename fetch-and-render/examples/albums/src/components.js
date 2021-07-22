import { state } from './data.js';

/**
 * Document me!
 *
 * @param {_} photo
 * @returns
 */
const renderPhoto = (photo = {}) => {
  const container = document.createElement('div');
  container.id = 'photo-' + photo.id;
  container.className = 'photo';

  const titleEl = document.createElement('h2');
  titleEl.innerHTML = photo.title;
  container.appendChild(titleEl);

  const imgEl = document.createElement('img');
  imgEl.alt = photo.title;
  imgEl.src = photo.thumbnailUrl;
  container.appendChild(imgEl);

  return container;
};

/**
 * Document me!
 *
 * @returns
 */
export const renderAlbum = () => {
  const { album, photos } = state;

  const container = document.createElement('div');
  container.id = 'album ' + album.id + ': ' + album.title;

  const titleEl = document.createElement('h2');
  titleEl.innerHTML = album.title;
  container.appendChild(titleEl);

  const idEl = document.createElement('p');
  idEl.innerHTML = 'album: ' + album.id;
  container.appendChild(idEl);

  const userEl = document.createElement('p');
  userEl.innerHTML = 'user: ' + album.id;
  container.appendChild(userEl);

  const renderedPhotos = photos
    .map(photo => renderPhoto(photo))
    .reduce((all, next) => {
      all.appendChild(next);
      return all;
    }, document.createElement('div'));
  renderedPhotos.id = 'photos';
  container.appendChild(renderedPhotos);

  return container;
};
