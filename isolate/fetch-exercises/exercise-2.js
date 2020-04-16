const title = 'exercise 2';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

// complete the URL to pass the assertions
const url = 'https://jsonplaceholder.typicode.com/_';

// the following code is correct
console.log(title + ', fetching:', url);
fetch(url)
  .then(res => res.json())
  .then(photo => {
    console.log(assertMsg('requested photo:'), photo);
    const test2 = photo.albumId === 2;
    const test3 = photo.id === 81;
    const test4 = photo.title === 'error magni fugiat dolorem impedit molestiae illo ullam debitis';
    console.assert(test2, assertMsg('.albumId'));
    console.assert(test3, assertMsg('.id'));
    console.assert(test4, assertMsg('.title'));
  })
  .catch(err => console.error(err));
