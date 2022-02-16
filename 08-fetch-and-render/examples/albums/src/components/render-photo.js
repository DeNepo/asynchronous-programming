/**
 * Document me!
 *
 * @param {_} photo
 * @returns
 */
export const renderPhoto = (photo = {}) => {
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
