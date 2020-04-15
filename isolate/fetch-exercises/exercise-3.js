const title = 'exercise 3';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;
const url = 'https://jsonplaceholder.typicode.com/photos/81';

console.log(title + ', fetching:', url);
console.assert(url !== 'https://jsonplaceholder.typicode.com/photos', assertMsg('Test 1'));

fetch(url)
  .then(res => res.json())
  .then(photo => {
    const test2 = photo.albumID === 2;
    const test3 = photo.id === 81;
    const test4 = photo.title === 'error magni fugiat dolorem impedit molestiae illo ullam debitis';
    console.assert(test2, assertMsg('.albumId'));
    console.assert(test3, assertMsg('.id'));
    console.assert(test4, assertMsg('.title'));
  })
  .catch(err => console.error(err));
