'use strict';

const log = labeledLogger('thening');


const thening = (string) => {

  log('thening: logged immediately -', string);

  const reversed = string.split('').reverse().join('');

  Promise.resolve(reversed)
    .then(reversedString => {
      log('thening: logged asynchronously 1 -', reversedString);
      return reversedString.toUpperCase();
    })
    .then(reversedBig => {
      log('thening: logged asynchronously 2 -', reversedBig);
    });
};



thening('tables');

thening('do geese see god');




log('--- end of synchronous tasks ---');
