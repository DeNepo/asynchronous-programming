const path = '/todos/1';
const start = Date.now();
const assertMsg = (name) => `${path}, ${Date.now() - start} ms., ${name}`;
const baseURL = 'https://jsonplaceholder.typicode.com';

fetch(baseURL + path)
  .then(res => res.json())
  .then(data => {
    console.log(assertMsg('requested data:'), data);
    console.assert(data.userId === 1, assertMsg('.userId'));
    console.assert(data.id === 1, assertMsg('.id'));
    console.assert(data.title === 'delectus aut autem', assertMsg('.title'));
    console.assert(data.completed === false, assertMsg('.completed'));
  })
  .catch(err => console.error(err));

