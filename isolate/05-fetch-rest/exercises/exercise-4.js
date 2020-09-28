'use strict';


const log = labeledLogger('Exercise 4');
const expect = chai.expect;

const origin = 'https://jsonplaceholder.typicode.com';
const path = '/posts';
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

  it('should have 14 posts', () => {
    expect(actual.length).to.equal(14);
  });
  it('all bodies should include "magnam"', () => {
    const allHaveMagnam = actual.every(post => post.body.includes('magnam'));
    expect(allHaveMagnam).to.be.true;
  });
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
