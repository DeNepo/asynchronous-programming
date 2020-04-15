const path = '/todos/40';
const start = Date.now();
const assertMsg = (name) => `${path}, ${Date.now() - start} ms., ${name}`;
const baseURL = 'https://jsonplaceholder.typicode.com';

fetch(baseURL + path)
  .then(res => res.json())
  .then(data => {
    console.log(assertMsg('requested data:'), data);
    console.assert(data.userId === 2, assertMsg('.userId'));
    console.assert(data.id === 40, assertMsg('.id'));
    console.assert(data.title === 'totam atque quo nesciunt', assertMsg('.title'));
    console.assert(data.completed === true, assertMsg('.completed'));
  })
  .catch(err => console.error(err));

