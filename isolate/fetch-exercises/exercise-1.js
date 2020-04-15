const title = 'exercise 1';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;
const url = 'https://jsonplaceholder.typicode.com/photos';

console.log(title + ', fetching:', url);

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(assertMsg('requested data:'), data);
    // write me
  })
  .then(photo => {
    const test1 = photo.title === 'error magni fugiat dolorem impedit molestiae illo ullam debitis';
    console.assert(test1, assertMsg('Test 1'));
  })
  .catch(err => console.error(err));

