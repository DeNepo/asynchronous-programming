export class Comment {

  postId = NaN;
  id = NaN;
  name = '';
  email = '';
  body = '';

  constructor(photoData) {
    Object.assign(this, photoData);
  }

  render() {
    const container = document.createElement('div');
    container.id = 'comment-' + this.id;
    container.style.borderTop = 'solid black 1px';

    const nameEl = document.createElement('h2');
    nameEl.innerHTML = this.name;
    container.appendChild(nameEl);

    const posterEl = document.createElement('code');
    posterEl.innerHTML = 'comment by: ' + this.email;
    container.appendChild(posterEl);

    const bodyEl = document.createElement('p');
    bodyEl.innerHTML = this.body;
    container.appendChild(bodyEl);

    return container;
  }

}
