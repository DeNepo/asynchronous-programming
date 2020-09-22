import { Todo } from './todo.js';

export class User {

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
    return fetch('https://jsonplaceholder.typicode.com/users/' + this.id + '/todos')
      .then(res => res.json())
      .then(todos => {
        this.todos = todos
          .map(todo => new Todo(todo));
        this.populated = true;
        return this;
      })
      .catch(err => console.error(err));
  }

  render() {
    const container = document.createElement('div');
    container.id = 'user-' + this.id;

    const usernameEl = document.createElement('h1');
    usernameEl.innerHTML = this.username;
    container.appendChild(usernameEl);

    const nameEl = document.createElement('p');
    nameEl.innerHTML = 'name: ' + this.name;
    container.appendChild(nameEl);

    const emailEl = document.createElement('p');
    emailEl.innerHTML = 'email: ' + this.email;
    container.appendChild(emailEl);

    const websiteEl = document.createElement('p');
    websiteEl.innerHTML = 'website: ' + this.website;
    container.appendChild(websiteEl);

    const renderedTodos = this.todos
      .map(todo => todo.render())
      .reduce((all, next) => {
        all.appendChild(next);
        return all;
      }, document.createElement('div'));
    renderedTodos.id = 'comments';
    container.appendChild(renderedTodos);

    return container;
  }

}
