'use strict';

const log = labeledLogger('await: return promise');


const awaitReturnPromise = async (param) => {

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

  const isEvenResult = await new Promise(isEvenExecutor);

  return isEvenResult === 'even number'
    ? true
    : false;
};


awaitReturnPromise(1)
  .then(isEven => log('1:', isEven))
  .catch(err => log(err));


awaitReturnPromise(2)
  .then(isEven => log('2:', isEven))
  .catch(err => log(err));


awaitReturnPromise('a string')
  .then(isEven => log('a string:', isEven))
  .catch(err => log(err));



log('--- end of synchronous tasks ---');
