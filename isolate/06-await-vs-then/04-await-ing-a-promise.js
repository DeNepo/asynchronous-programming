'use strict';

const log = labeledLogger('awaiting a promise');


const awaitPromise = async (number) => {

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

  try {
    const resolved = await isEvenPromise;
    log('resolved:', resolved);
  } catch (rejected) {
    log('rejected:', rejected);
  };

};


awaitPromise(1);

awaitPromise(2);



log('--- end of synchronous tasks ---');
