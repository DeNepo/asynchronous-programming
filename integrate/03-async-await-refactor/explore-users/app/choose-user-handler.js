import { User } from './user.js';

export const chooseUserHandler = (event) => {
  const userId = event.target.form.userId.value;

  fetch('https://jsonplaceholder.typicode.com/users/' + userId)
    .then(res => res.json())
    .then(userData => {
      const newAlbum = new User(userData);
      return newAlbum.populate();
    })
    .then(userInstance => {
      console.log(userInstance);
      const view = userInstance.render();
      document.getElementById('root').innerHTML = '';
      document.getElementById('root').appendChild(view);
    })
    .catch(err => console.error(err));
};
