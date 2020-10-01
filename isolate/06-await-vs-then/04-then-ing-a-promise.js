'use strict';

const log = labeledLogger('thening a promise');


const thenPromise = (number) => {

  log('number:', number);

  const isEvenExecutor = (resolve, reject) => {
    if (number % 2 === 0) {
      resolve('even number');
    } else {
      reject('odd number');
    }
  };

  const isEvenPromise = new Promise(isEvenExecutor);

  log('isEvenPromise:', isEvenPromise);

  isEvenPromise
    .then(resolved => {
      log('resolved:', resolved);
    })
    .catch(rejected => {
      log('rejected:', rejected);
    });

};


thenPromise(1);

thenPromise(2);



log('--- end of synchronous tasks ---');
