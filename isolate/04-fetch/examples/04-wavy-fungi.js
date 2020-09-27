'use strict';


/* Wavy Fungi

  let's explore the data

*/


const log = labeledLogger('Wavy Fungi');
const expect = chai.expect;

const origin = window.location.origin;
const path = '/asynchronous-programming/isolate/04-fetch/fake-api/animals/fungi.json';
const requestURL = origin + path;
log("requestURL: ", requestURL);



const parseResponse = (response) => {
  const parsedResponse = response.json();
  log('response: ', response, '\n',
    'parsed: ', parsedResponse);
  return parsedResponse;
};
const separateWavyFungi = (fungi) => {
  log('all fungi:', fungi);
  return fungi.wavy;
};
const testWavyFungi = (wavyFungi) => {
  log('wavyFungi: ', wavyFungi);
  it('should separate the wavy fungi', () => {
    expect(wavyFungi).to.deep.equal(['siberia', 'south america'])
  });
};
const handleRejection = (err) => {
  log(err);
};


fetch(requestURL)
  .then(parseResponse)
  .then(separateWavyFungi)
  .then(testWavyFungi)
  .catch(handleRejection);



log('end of synchronous tasks');
