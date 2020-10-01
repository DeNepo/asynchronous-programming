import { Post } from './post.js';

export const choosePostHandler = (event) => {
  const postId = event.target.form.postId.value;

  fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
    .then(res => res.json())
    .then(postData => {
      const newAlbum = new Post(postData);
      return newAlbum.populate();
    })
    .then(postInstance => {
      console.log(postInstance);
      const view = postInstance.render();
      document.getElementById('root').innerHTML = '';
      document.getElementById('root').appendChild(view);
    })
    .catch(err => console.error(err));
};
