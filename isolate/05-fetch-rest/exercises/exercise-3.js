'use strict';


const log = labeledLogger('Exercise 3');
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
  it('should have 10 albums', () => {
    expect(actual.length).to.equal(10);
  });
  it('should all have userId 9', () => {
    const allHaveUserId9 = actual.every(album => album.userId === 9);
    expect(allHaveUserId9).to.be.true;
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
