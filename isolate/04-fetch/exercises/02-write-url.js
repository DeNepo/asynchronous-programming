'use strict';


const log = labeledLogger('2. Write URL');
const expect = chai.expect;

const origin = window.location.origin;
const path = _;
const requestURL = origin + path;
log("requestURL: ", requestURL);



const parseResponse = (response) => {
  const parsedResponse = response.json();
  log('response: ', response, '\n',
    'parsed: ', parsedResponse);
  return parsedResponse;
};

const separateBrazilNut = (nuts) => {
  log('nuts:', nuts);
  return nuts[1];
};

const testNut = (brazilNut) => {
  log('brazilNut: ', brazilNut);
  it('this one is also a country', () => {
    expect(brazilNut).to.equal('brazil');
  });
};

const handleRejection = (err) => {
  log(err);
};


// careful, these might not be right
fetch(requestURL)
  .then(parseResponse())
  .then(separateBrazilNut())
  .then(testNut())
  .catch(handleRejection());





log('end of synchronous tasks');


