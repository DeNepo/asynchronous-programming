import { Photo } from './photo.js';

export class Album {

  id = null;
  userId = null;
  title = '';
  populated = false;
  photos = [];

  constructor(albumData) {
    Object.assign(this, albumData);
  }

  populate() {
    return fetch('https://jsonplaceholder.typicode.com/albums/' + this.id + '/photos')
      .then(res => res.json())
      .then(photos => {
        this.photos = photos
          .map(photo => new Photo(photo));
        this.populated = true;
        return this;
      })
      .catch(err => console.error(err));
  }

  render() {
    const container = document.createElement('div');
    container.id = 'album ' + this.id + ': ' + this.title;

    const titleEl = document.createElement('h2');
    titleEl.innerHTML = this.title;
    container.appendChild(titleEl);

    const idEl = document.createElement('p');
    idEl.innerHTML = 'album: ' + this.id;
    container.appendChild(idEl);

    const userEl = document.createElement('p');
    userEl.innerHTML = 'user: ' + this.userId;
    container.appendChild(userEl);

    const renderedPhotos = this.photos
      .map(photo => photo.render())
      .reduce((all, next) => {
        all.appendChild(next);
        return all;
      }, document.createElement('div'));
    renderedPhotos.id = 'photos';
    container.appendChild(renderedPhotos);

    return container;
  }

}
