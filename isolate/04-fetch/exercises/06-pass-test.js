'use strict';


// what data in which .json file sums to 0?


const log = labeledLogger('6. Pass Test');
const expect = chai.expect;

const origin = window.location.origin;
const path = _;
const requestURL = origin + path;
log("requestURL: ", requestURL);




const sumNumbers = (data) => {
  // write me!
};

const handleRejection = (err) => {
  log(err);
};

const testSum = (sum) => {
  log('sum: ', sum);
  it('sum should be 3', () => {
    expect(sum).to.equal(3);
  });
};

const parseResponse = (response) => {
  const parsedResponse = response.json();
  log('response: ', response, '\n',
    'parsed: ', parsedResponse);
  return parsedResponse;
};




// something is missing ....





log('end of synchronous tasks');


