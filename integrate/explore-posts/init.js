window.onload = () => {
  document.getElementById('choose-post-button')
    .onclick = (event) =>
      fetch('https://jsonplaceholder.typicode.com/posts/' + event.target.form.postId.value)
        .then(res => res.json())
        .then(postData => {
          const newPost = new Post(postData)
          return newPost.populate();
        })
        .then(postInstance => {
          console.log(postInstance);
          const view = postInstance.render();
          document.getElementById('root').innerHTML = '';
          document.getElementById('root').appendChild(view);
        })
        .catch(err => console.error(err));
};
