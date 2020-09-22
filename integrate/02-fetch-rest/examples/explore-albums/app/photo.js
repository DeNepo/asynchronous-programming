export class Photo {

  albumId = NaN;
  id = NaN;
  title = '';
  url = '';
  thumbnailUrl = '';

  constructor(photoData) {
    Object.assign(this, photoData);
  }

  render() {
    const container = document.createElement('div');
    container.id = 'photo-' + this.id;
    container.style.borderTop = 'solid black 1px';

    const titleEl = document.createElement('h2');
    titleEl.innerHTML = this.title;
    container.appendChild(titleEl);

    const imgEl = document.createElement('img');
    imgEl.alt = this.title;
    imgEl.src = this.thumbnailUrl;
    container.appendChild(imgEl);

    return container;
  }

}
