import { renderPhoto } from './render-photo.js';

/**
 * Document me!
 *
 * @returns
 */
export const renderAlbum = (album = {}, photos = []) => {
  const container = document.createElement('div');
  container.id = `album-${album.id}-${album.title.split(' ').join('-')}`;

  const titleEl = document.createElement('h2');
  titleEl.innerHTML = album.title;
  container.appendChild(titleEl);

  const idEl = document.createElement('p');
  idEl.innerHTML = 'album: ' + album.id;
  container.appendChild(idEl);

  const userEl = document.createElement('p');
  userEl.innerHTML = 'user: ' + album.id;
  container.appendChild(userEl);

  const renderedPhotos = photos.map(renderPhoto).reduce((all, next) => {
    all.appendChild(next);
    return all;
  }, document.createElement('div'));
  container.appendChild(renderedPhotos);

  return container;
};
