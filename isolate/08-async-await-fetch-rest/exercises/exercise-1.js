'use strict';


const log = labeledLogger('Exercise 1');
const expect = chai.expect;



const fetchPhotoWithTitle = async (title = '') => {
  const titleParam = 'title=' + title;
  const encodedTitleParam = _(titleParam);
  const URL = _;
  log(URL);

  const response = await fetch(URL);
  if (_) {
    _;
  }

  const data = await response.json();
  const firstMatchingEntry = data[0];
  return firstMatchingEntry;

};


const testPhoto = (title) => {
  return (photo) => {
    log("title:", title);
    it(`Photo should have title "${title}"`, () => {
      expect(photo.title).to.equal(title);
    });
    console.log('');
  }
};

const title1 = 'error magni fugiat dolorem impedit molestiae illo ullam debitis';
const testPhoto1 = testPhoto(title1);
fetchPhotoWithTitle(title1)
  .then(photo => testPhoto1(photo))
  .catch(err => testPhoto1(err));


const title2 = 'dignissimos et quo omnis';
const testPhoto2 = testPhoto(title2);
fetchPhotoWithTitle(title2)
  .then(photo => testPhoto2(photo))
  .catch(err => testPhoto2(err));


const title3 = 'possimus a et soluta';
const testPhoto3 = testPhoto(title3);
fetchPhotoWithTitle(title3)
  .then(photo => testPhoto3(photo))
  .catch(err => testPhoto3(err));




log('... end of synchronous tasks ...');
