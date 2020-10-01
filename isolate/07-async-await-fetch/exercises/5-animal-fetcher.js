'use strict';

const log = labeledLogger('animal fetcher');
const expect = chai.expect;

// write this function to pass the tests below

const animalFetcher = async (animal = '', query = '') => {

};


// these tests work, write the function to pass them!

const testAmericanFungi = (americanFungi) => {
  log('americanFungi: ', americanFungi);
  it('fungi found in an america', () => {
    expect(americanFungi).to.deep.equal([
      'spotted',
      'striped',
      'wavy'
    ]);
  });
  console.log('');
}
animalFetcher('fungi', 'america')
  .then(data => testAmericanFungi(data))
  .catch(err => log(err));


const testSpaceFungi = (spaceFungi) => {
  log('spaceFungi: ', spaceFungi);
  it('fungi found in space', () => {
    expect(spaceFungi).to.deep.equal([
      'spotted',
      'striped',
      'lumpy',
      'wavy'
    ]);
  });
  console.log('');
};
animalFetcher('fungi', ' ')
  .then(data => testSpaceFungi(data))
  .catch(err => log(err));


const testAntarcticanWorms = (antarcticanWorms) => {
  log('antarcticanWorms: ', antarcticanWorms);
  it('worms found in antarctica', () => {
    expect(antarcticanWorms).to.deep.equal([
      'striped',
    ]);
  });
  console.log('');
};
animalFetcher('worms', 'antarctica')
  .then(data => testAntarcticanWorms(data))
  .catch(err => log(err));


const testFoonianWorms = (foonianWorms) => {
  log('foonianWorms: ', foonianWorms);
  it('worms found in foon', () => {
    expect(foonianWorms).to.deep.equal([]);
  });
  console.log('');
};
animalFetcher('worms', 'foon')
  .then(data => testFoonianWorms(data))
  .catch(err => log(err));






log('--- end of synchronous tasks ---');
