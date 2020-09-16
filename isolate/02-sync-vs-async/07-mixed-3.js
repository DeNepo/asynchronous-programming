'use strict';

const log = labeledLogger('mixed 3');



const synchronousTimeout = function (callback, delay) {
  const end = Date.now() + delay;
  let now = Date.now();
  while (now < end) {
    now = Date.now();
  };
  const callBackArgs = Array.from(arguments).slice(2);
  callback(...callBackArgs);
};



log('+ schedule async 1000 ms');
setTimeout(log, 1000, '+ execute async  1000 ms');

log('- begin sync 1000 ms');
synchronousTimeout(log, 1000, '- end sync 1000 ms');

log('+ schedule async 500 ms');
setTimeout(log, 500, '+ execute async  500 ms');

log('- begin sync 500 ms');
synchronousTimeout(log, 500, '- end sync 500 ms');

log('+ schedule async 0 ms');
setTimeout(log, 0, '+ execute async  0 ms');

log('- begin sync 0 ms');
synchronousTimeout(log, 0, '- end sync 0 ms');
