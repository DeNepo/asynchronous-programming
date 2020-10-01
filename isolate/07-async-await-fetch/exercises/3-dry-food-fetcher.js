'use strict';

const log = labeledLogger('dry food fetcher');
const expect = chai.expect;

// refactor this function to use async/await

const dryFoodSearch = (type = '', query = '') => {
  const url = `${window.location.origin}/isolate/fake-api/food/dry/${type}.json`;
  log(url);

  return fetch(url)
    .then(response => {
      if (!response.ok || response.status !== 200) {
        throw new Error('response is not ok');
      };

      return response.json();
    })
    .then(dryFood => {
      const filtered = dryFood
        .filter(food => food.includes(query));
      return filtered;
    });
};


// these tests all work!

const testGrainsWithL = (grainsWithL) => {
  log('grainsWithL: ', grainsWithL);
  it('should be the grains with "l"', () => {
    expect(grainsWithL).to.deep.equal([
      'barley',
      'millet',
      'bulgar'
    ]);
  });
  console.log('');
};
dryFoodSearch('grains', 'l')
  .then(data => testGrainsWithL(data))
  .catch(err => log(err));


const testGrainsWithLe = (grainsWithLe) => {
  log('grainsWithLe: ', grainsWithLe);
  it('should be the grains with "le"', () => {
    expect(grainsWithLe).to.deep.equal([
      'barley',
      'millet',
    ]);
  });
  console.log('');
};
dryFoodSearch('grains', 'le')
  .then(data => testGrainsWithLe(data))
  .catch(err => log(err));


const testNutsWithPeanut = (nutsWithPeanut) => {
  log('nutsWithPeanut: ', nutsWithPeanut);
  it('should be no peanuts', () => {
    expect(nutsWithPeanut).to.deep.equal([]);
  });
  console.log('');
};
dryFoodSearch('nuts', 'peanut')
  .then(data => testNutsWithPeanut(data))
  .catch(err => log(err));


const testNutsWithA = (nutsWithA) => {
  log('nutsWithA: ', nutsWithA);
  it('should be the nuts with "a"', () => {
    expect(nutsWithA).to.deep.equal([
      "pecan",
      "brazil",
      "acorn",
      "pistachio"
    ]);
  });
  console.log('');
};
dryFoodSearch('nuts', 'a')
  .then(data => testNutsWithA(data))
  .catch(err => log(err));




log('--- end of synchronous tasks ---');
