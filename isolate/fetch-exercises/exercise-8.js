const title = 'exercise 8';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

// complete the URL to pass the asserts
const url = 'https://jsonplaceholder.typicode.com/_/_/_';

// this code works
console.log(title + ', fetching:', url);
fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(assertMsg('fetched data:'), data);

    const test1 = Array.isArray(data);
    const test2 = data.length === 10;
    const test3 = data.every(album => album.userId === 1);
    const test4 = data.every(album =>
      album.hasOwnProperty('userId')
      && album.hasOwnProperty('id')
      && album.hasOwnProperty('title'));

    console.assert(test1, assertMsg('Test 1'));
    console.assert(test2, assertMsg('Test 2'));
    console.assert(test3, assertMsg('Test 3'));
    console.assert(test4, assertMsg('Test 4'));
  })
  .catch(err => console.error(err));

