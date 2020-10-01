'use strict';


const log = labeledLogger('Exercise 2');
const expect = chai.expect;




const limitedResource = async (resourceType = '', number = 0) => {

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




const test1 = (users) => {
  log('users:', users);
  it('should have length 5', () => {
    expect(users.length).to.equal(5);
  });
  it('last entry has name "Chelsey Dietrich"', () => {
    expect(users[4].name).to.equal("Chelsey Dietrich");
  });
  console.log('');
};
limitedResource('users', 5)
  .then(data => test1(data))
  .catch(err => log(err));


const test2 = (posts) => {
  log('posts:', posts);
  it('should have length 7', () => {
    expect(posts.length).to.equal(7);
  });
  it('last entry has title "magnam facilis autem"', () => {
    expect(posts[6].title).to.equal("magnam facilis autem");
  });
  console.log('');
};
limitedResource('posts', 7)
  .then(data => test2(data))
  .catch(err => log(err));



const test3 = (photos) => {
  log('photos:', photos);
  it('should have length 2', () => {
    expect(photos.length).to.equal(2);
  });
  it('last entry has url "https://via.placeholder.com/600/771796"', () => {
    expect(photos[1].url).to.equal("https://via.placeholder.com/600/771796");
  });
  console.log('');
};
limitedResource('photos', 2)
  .then(data => test3(data))
  .catch(err => log(err));




log('... end of synchronous tasks ...');
