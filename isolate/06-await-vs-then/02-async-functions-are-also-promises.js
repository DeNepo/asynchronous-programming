'use strict';

/* async functions are secretly promises

  an error inside an async function is an error in a promise

*/


Promise.resolve('in a then')
  .then(message => {
    throw new Error(message);
  });



const throwAnError = async (message) => {
  throw new Error(message);
};
throwAnError('in an async function');
