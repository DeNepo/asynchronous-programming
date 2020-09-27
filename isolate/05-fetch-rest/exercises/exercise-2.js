'use strict';


const log = labeledLogger('Exercise 2');
const expect = chai.expect;

const origin = 'https://jsonplaceholder.typicode.com';
const path = _;
log('path: ', path);


const parseResponse = (response) => {
  log('response: ', response);
  return response.json();
};

const testData = (data) => {
  log('data: ', data);
  it('should be this photo', () => {
    expect(data).to.deep.equal({
      albumId: 2,
      id: 81,
      title: 'error magni fugiat dolorem impedit molestiae illo ullam debitis',
      url: 'https://via.placeholder.com/600/31a74c',
      thumbnailUrl: 'https://via.placeholder.com/150/31a74c'
    });
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
