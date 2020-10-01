'use strict';


const log = labeledLogger('Exercise 3');
const expect = chai.expect;


// hint: ctr-f "q" -> https://github.com/typicode/json-server

const searchResources = async (resourceType = '', query = '') => {



};




const test1 = (comment) => {
  log('comment:', comment);
  it('should have length 1', () => {
    expect(comment.length).to.equal(1);
  });
  it('entry should have id 10', () => {
    expect(comment[0].id).to.equal(10);
  });
  console.log('');
};
searchResources('comments', 'non\naut')
  .then(data => test1(data))
  .catch(err => log(err));


const test2 = (users) => {
  log('users:', users);
  it('should have length 3', () => {
    expect(users.length).to.equal(3);
  });
  it('second user has id 3', () => {
    expect(users[1].id).to.equal(3);
  });
  console.log('');
};
searchResources('users', '.net')
  .then(data => test2(data))
  .catch(err => log(err));



const test3 = (posts) => {
  log('posts:', posts);
  it('should have length 0', () => {
    expect(posts.length).to.equal(0);
  });
  console.log('');
};
searchResources('posts', 'HYF')
  .then(data => test3(data))
  .catch(err => log(err));



log('... end of synchronous tasks ...');
