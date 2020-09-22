export class Todo {

  userId = NaN;
  id = NaN;
  title = '';
  completed = undefined;

  constructor(photoData) {
    Object.assign(this, photoData);
  }

  render() {
    const container = document.createElement('div');
    container.id = 'todo-' + this.id;
    container.style.borderTop = 'solid black 1px';

    const checkEl = document.createElement('input');
    checkEl.type = 'checkbox';
    checkEl.checked = this.completed;
    container.appendChild(checkEl);

    const titleEl = document.createElement('code');
    titleEl.innerHTML = this.title;
    container.appendChild(titleEl);

    return container;
  }

}
