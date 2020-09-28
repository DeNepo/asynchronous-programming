'use strict';

// exercises 5 & 6 are a pair, they both have the same tests
//  exercise 5 asks you to manipulate fetched data to pass the asserts
//  exercise 6 asks you to pass the same asserts using url params

const log = labeledLogger('Exercise 6');
const expect = chai.expect;

const origin = 'https://jsonplaceholder.typicode.com';
const path = _;
log('path: ', path);


const parseResponse = (response) => {
  log('response: ', response);
  return response.json();
};

const testData = (actual) => {
  log('actual: ', actual);

  it('should have 10 posts', () => {
    expect(actual.length).to.equal(10);
  });
  it('all should have userId 8', () => {
    const allHaveUserId8 = actual.every(post => post.userId === 8);
    expect(allHaveUserId8).to.be.true;
  });
};

const handleRejection = (err) => {
  log(err);
};



fetch(origin + path)
  .then(res => parseResponse(res))
  .then(data => testData(data))
  .catch(err => handleRejection(err));



log('end of synchronous tasks');
