import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

/* Asynchronous delays

  now what happens if we do the same thing with setTimeout?

*/

const callback1 = () => {
  log('+ execute async  1000 ms');
};
log('+ schedule async 1000 ms');
setTimeout(callback1, 1000);

const callback2 = () => {
  log('+ execute async  500 ms');
};
log('+ schedule async 500 ms');
setTimeout(callback2, 500);

const callback3 = () => {
  log('+ execute async  0 ms');
};
log('+ schedule async 0 ms');
setTimeout(callback3, 0);

log('= = = =  the call stack is empty  = = = =');
