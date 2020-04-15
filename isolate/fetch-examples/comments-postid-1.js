const path = '/comments?postId=1';
const start = Date.now();
const assertMsg = (name) => `${path}, ${Date.now() - start} ms., ${name}`;
const baseURL = 'https://jsonplaceholder.typicode.com';

fetch(baseURL + path)
  .then(res => res.json())
  .then(data => {
    console.log(assertMsg('requested data:'), data);
    data.forEach((comment, index) => {
      console.assert(comment.postId === 1, assertMsg('entry ' + index));
    });
  })
  .catch(err => console.error(err));

