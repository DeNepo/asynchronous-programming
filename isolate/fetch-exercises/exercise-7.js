const title = 'exercise 7';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;
const url = 'https://jsonplaceholder.typicode.com/users';

console.log(title + ', fetching:', url);
fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(assertMsg('requested data:'), data);
    // write me!
  })
  .then(simplifiedUsers => {
    const test1 = simplifiedUsers.length === 10;
    const test2 = simplifiedUsers.every(simplifiedUser =>
      Object.keys(simplifiedUser).length === 3);
    const test3 = simplifiedUsers.every(simplifiedUser =>
      simplifiedUser.hasOwnProperty('id')
      && simplifiedUser.hasOwnProperty('name')
      && simplifiedUser.hasOwnProperty('username'));
    console.assert(test1, assertMsg('Test 1'));
    console.assert(test2, assertMsg('Test 2'));
    console.assert(test3, assertMsg('Test 3'));
  })
  .catch(err => console.error(err));

