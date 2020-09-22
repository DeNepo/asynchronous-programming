import { Comment } from './comment.js';

export class Post {

  userId = null;
  id = null;
  title = '';
  body = '';
  populated = false;
  comments = [];

  constructor(albumData) {
    Object.assign(this, albumData);
  }

  populate() {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + this.id + '/comments')
      .then(res => res.json())
      .then(comments => {
        this.comments = comments
          .map(comment => new Comment(comment));
        this.populated = true;
        return this;
      })
      .catch(err => console.error(err));
  }

  render() {
    const container = document.createElement('div');
    container.id = 'post-' + this.id;

    const titleEl = document.createElement('h1');
    titleEl.innerHTML = this.title;
    container.appendChild(titleEl);

    const userEl = document.createElement('code');
    userEl.innerHTML = 'posted by user: ' + this.userId;
    container.appendChild(userEl);

    const bodyEl = document.createElement('p');
    bodyEl.innerHTML = this.body;
    container.appendChild(bodyEl);

    const renderedComments = this.comments
      .map(comment => comment.render())
      .reduce((all, next) => {
        all.appendChild(next);
        return all;
      }, document.createElement('div'));
    renderedComments.id = 'comments';
    container.appendChild(renderedComments);

    return container;
  }

}
