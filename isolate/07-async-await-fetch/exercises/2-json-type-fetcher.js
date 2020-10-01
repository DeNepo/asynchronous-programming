'use strict';

const log = labeledLogger('json type fetcher');
const expect = chai.expect;

// refactor this fetching function to async/await

const jsonTypeFetcher = (type = '') => {
  const url = window.location.origin + '/isolate/fake-api/json-types.json';

  return fetch(url)
    .then(response => {
      if (!response.ok || response.status !== 200) {
        throw new Error('response is not ok');
      };

      return response.json();
    })
    .then(jsonTypes => {
      const selectedType = jsonTypes[type];
      if (selectedType === undefined) {
        throw new ReferenceError(`no type "${type}"`);
      }

      return selectedType;
    });
};


// these tests all work!

const testStrings = (strings) => {
  log('strings: ', strings);
  it('should be the strings from json-types.json', () => {
    expect(strings).to.deep.equal([
      "only double quotes!",
      "there is no 'undefined' in JSON",
      ""
    ]);
  });
  console.log('');
};
jsonTypeFetcher('strings')
  .then(data => testStrings(data))
  .catch(err => log(err));


const testObject = (object) => {
  log('object: ', object);
  it('should be the object from json-types.json', () => {
    expect(object).to.deep.equal({
      "aNumber": 1,
      "aBoolean": true,
      "aString": "hello",
      "null": null
    });
  });
  console.log('');
};
jsonTypeFetcher('object')
  .then(data => testObject(data))
  .catch(err => log(err));


const testNull = (nullValue) => {
  log('nullValue: ', nullValue);
  it('should be null', () => {
    expect(nullValue).to.be.null;
    console.log('');
  });
};
jsonTypeFetcher('null')
  .then(data => testNull(data))
  .catch(err => log(err));



log('--- end of synchronous tasks ---');
