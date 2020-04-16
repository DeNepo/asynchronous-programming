window.onload = () => {
  document.getElementById('choose-album-button')
    .onclick = (event) =>
      fetch('https://jsonplaceholder.typicode.com/albums/' + event.target.form.albumId.value)
        .then(res => res.json())
        .then(albumData => {
          const newAlbum = new Album(albumData)
          return newAlbum.populate();
        })
        .then(albumInstance => {
          console.log(albumInstance);
          const view = albumInstance.render();
          document.getElementById('root').innerHTML = '';
          document.getElementById('root').appendChild(view);
        })
        .catch(err => console.error(err));
};
