// exercises 5 & 6 are a pair, they both have the same tests
//  exercise 5 asks you to manipulate fetched data to pass the asserts
//  exercise 6 asks you to pass the same asserts using url params

const title = 'exercise 5';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;
// the URL is correct
const url = 'https://jsonplaceholder.typicode.com/posts';

console.log(title + ', fetching:', url);
fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(assertMsg('requested data:'), data);
    // write me!
  })
  .then(filteredPosts => {
    const test1 = filteredPosts.length === 10;
    const test2 = filteredPosts.every(post => post.userId === 8);
    console.assert(test1, assertMsg('Test 1'));
    console.assert(test2, assertMsg('Test 2'));
  })
  .catch(err => console.error(err));
