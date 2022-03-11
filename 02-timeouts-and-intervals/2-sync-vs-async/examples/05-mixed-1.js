import { labeledLogger } from '../../../lib/labeled-logger.js';
import { synchronousTimeout } from '../../../lib/synchronous-timeout.js';

const { log } = labeledLogger();

const callback1 = () => {
  log('- end synchronous 1000 ms');
};
log('- begin synchronous 1000 ms');
synchronousTimeout(callback1, 1000);

const callback2 = () => {
  log('- end synchronous 0 ms');
};
log('- begin synchronous 0 ms');
synchronousTimeout(callback2, 0);

const callback3 = () => {
  log('+ execute async  1000 ms');
};
log('+ schedule async 1000 ms');
setTimeout(callback3, 1000);

const callback4 = () => {
  log('+ execute async  0 ms');
};
log('+ schedule async 0 ms');
setTimeout(callback4, 0);

log('= = = =  the call stack is empty  = = = =');
