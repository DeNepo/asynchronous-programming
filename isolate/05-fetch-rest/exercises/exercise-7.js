'use strict';


const log = labeledLogger('Exercise 7');
const expect = chai.expect;

const origin = 'https://jsonplaceholder.typicode.com';
const path = '/users';
log('path: ', path);


const parseResponse = (response) => {
  log('response: ', response);
  return response.json();
};

const processData = (data) => {
  log('data: ', data);
  // write the rest ...

};

const testData = (actual) => {
  log('actual: ', actual);

  it('should have 10 users', () => {
    expect(actual.length).to.equal(10);
  });
  for (let i = 0; i < actual.length; i++) {
    const user = actual[i];
    it(`user ${i} has the correct keys`, () => {
      const userKeys = Object.keys(user);
      expect(userKeys).to.have.members(['id', 'name', 'userName']);
    });
  };
};

const handleRejection = (err) => {
  log(err);
};



fetch(origin + path)
  .then(res => parseResponse(res))
  .then(data => processData(data))
  .then(processedData => testData(processedData))
  .catch(err => handleRejection(err));



log('end of synchronous tasks');
