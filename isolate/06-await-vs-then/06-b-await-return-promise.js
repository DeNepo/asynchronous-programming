'use strict';

const log = labeledLogger('await: return promise');

const awaitReturnPromise = async param => {
  log('number:', param);

  if (typeof param !== 'number') {
    throw new TypeError('param is not a number');
  }

  if (param % 2 === 0) {
    return 'even number';
  } else {
    return 'odd number';
  }
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
