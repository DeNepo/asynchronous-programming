'use strict';

const log = labeledLogger('wet food fetcher');
const expect = chai.expect;

// write this function to replace the first two .thens of the three fetches below

const wetFoodSearch = async (type = '', value) => {

};


// these API calls work, but are very repetitive
// your goal is to refactor the first to .thens of each fetch
//  refactor them into the empty async function above

fetch(window.location.origin + '/isolate/fake-api/food/wet/soups.json')
  .then(response => {
    if (!response.ok || response.status !== 200) {
      throw new Error('response was not ok');
    }
    return response.json();
  })
  .then(soups => {
    const trueSoups = {};
    for (const soup in soups) {
      if (soups[soup] === true) {
        trueSoups[soup] = true;
      }
    }
    return trueSoups;
  })
  .then((trueSoups) => {
    log('trueSoups: ', trueSoups);
    it('should be the soups with value true', () => {
      expect(trueSoups).to.deep.equal({
        "pea": true,
        "lentil": true
      });
    });
    console.log('');
  })
  .catch(err => log(err));



fetch(window.location.origin + '/isolate/fake-api/food/wet/mush.json')
  .then(response => {
    if (!response.ok || response.status !== 200) {
      throw new Error('response was not ok');
    }
    return response.json();
  })
  .then(mushes => {
    const nullMush = {};
    Object.keys(mushes).forEach(mush => {
      if (mushes[mush] === null) {
        nullMush[mush] = null;
      }
    });
    return nullMush;
  })
  .then((nullMush) => {
    log('nullMush: ', nullMush);
    it('should be the mush with value null', () => {
      expect(nullMush).to.deep.equal({
        "purple": null
      });
    });
    console.log('');
  })
  .catch(err => log(err));



fetch(window.location.origin + '/isolate/fake-api/food/wet/mush.json')
  .then(response => {
    if (!response.ok || response.status !== 200) {
      throw new Error('response was not ok');
    }
    return response.json();
  })
  .then(mushes => {
    const falseMush = Object.entries(mushes)
      .filter(mushEntry => mushEntry[1] === false)
      .reduce((acc, next) => {
        if (next[1] === false) {
          acc[next[0]] = next[1];
        }
        return acc;
      }, {});
    return falseMush;
  })
  .then((falseMush) => {
    log('falseMush: ', falseMush);
    it('should be the mush with value false', () => {
      expect(falseMush).to.deep.equal({
        "green": false,
        "black": false,
        "magenta": false,
        "white": false,
      });
    });
    console.log('');
  })
  .catch(err => log(err));





log('--- end of synchronous tasks ---');
