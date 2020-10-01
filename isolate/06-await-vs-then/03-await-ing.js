'use strict';

const log = labeledLogger('awaiting');


const awaiting = async (string) => {

  log('awaiting: logged immediately -', string);

  const reversedString = await string.split('').reverse().join('');;

  log('awaiting: logged asynchronously 1 -', reversedString);

  const reversedBig = await reversedString.toUpperCase();

  log('awaiting: logged asynchronously 2 -', reversedBig);
};



awaiting('tables');

awaiting('do geese see god');





log('--- end of synchronous tasks ---');
