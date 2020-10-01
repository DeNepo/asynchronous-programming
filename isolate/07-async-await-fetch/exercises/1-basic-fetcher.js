'use strict';

const log = labeledLogger('basic fetcher');
const expect = chai.expect;

// refactor this fetching function to async/await

const basicFetcher = (path = '') => {
  const url = window.location.origin + '/isolate/fake-api' + path;
  log(url);

  return fetch(url)
    .then(response => {
      if (!response.ok || response.status !== 200) {
        throw new Error('response is not ok');
      };

      return response.json();
    });
};


// these tests all work!

basicFetcher('/json-types.json')
  .then((jsonTypes) => { // do something with data
    log('JSON Types:', jsonTypes);
    return jsonTypes.strings;
  })
  .then((strings) => { // run the test
    log('strings: ', strings);
    it('should be the strings from json-types.json', () => {
      expect(strings).to.deep.equal([
        "only double quotes!",
        "there is no 'undefined' in JSON",
        ""
      ]);
    });
    console.log('');
  })
  .catch(err => log(err));


basicFetcher('/food/dry/nuts.json')
  .then((nuts) => {
    log('nuts:', nuts);
    return nuts[1];
  })
  .then((brazilNut) => {
    log('brazilNut: ', brazilNut);
    it('this one is also a country', () => {
      expect(brazilNut).to.equal('brazil');
    });
    console.log('');
  })
  .catch(err => log(err));


basicFetcher('/animals/worms.json')
  .then((worms) => {
    log('worms:', worms);
    const siberianWorms = {};
    for (let kind in worms) {
      if (worms[kind].includes('siberia')) {
        siberianWorms[kind] = worms[kind];
      }
    }
    return siberianWorms;
  })
  .then((wormsTypes) => {
    log('wormsTypes: ', wormsTypes);
    it('these worms can be found in Siberia', () => {
      expect(wormsTypes).to.deep.equal({
        striped: [
          "siberia",
          "europe",
          "antarctica",
          "pacific islands",
          "indian subcontinent"
        ],
        wavy: [
          "siberia",
          "south america"
        ]
      });
    });
    console.log('');
  })
  .catch(err => log(err));



log('--- end of synchronous tasks ---');
