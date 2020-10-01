'use strict';

const log = labeledLogger('then: return promise');


const thenReturnPromise = (param) => {

  log('number:', param);

  const isEvenExecutor = (resolve, reject) => {
    if (typeof param !== 'number') {
      reject(new TypeError('param is not a number'));
    }

    if (param % 2 === 0) {
      resolve('even number');
    } else {
      resolve('odd number');
    }
  };

  return new Promise(isEvenExecutor)
    .then(isEvenResult => {
      return isEvenResult === 'even number'
        ? true
        : false;
    });
};


thenReturnPromise(1)
  .then(isEven => log('1:', isEven))
  .catch(err => log(err));


thenReturnPromise(2)
  .then(isEven => log('2:', isEven))
  .catch(err => log(err));


thenReturnPromise('a string')
  .then(isEven => log('a string:', isEven))
  .catch(err => log(err));



log('--- end of synchronous tasks ---');
