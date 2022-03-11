import { labeledLogger } from '../../../lib/labeled-logger.js';
import { synchronousTimeout } from '../../../lib/synchronous-timeout.js';

const { log } = labeledLogger();

const callback1 = () => {
  log('+ execute async  1000 ms');
};
log('+ schedule async 1000 ms');
setTimeout(callback1, 1000, '+ execute async  1000 ms');

const callback2 = () => {
  log('+ execute async  0 ms');
};
log('+ schedule async 0 ms');
setTimeout(callback2, 0, '+ execute async  0 ms');

const callback3 = () => {
  log('- end synchronous 500 ms');
};
log('- begin synchronous 500 ms');
synchronousTimeout(callback3, 500, '- end synchronous 500 ms');

const callback4 = () => {
  log('- end synchronous 0 ms');
};
log('- begin synchronous 0 ms');
synchronousTimeout(callback4, 0, '- end synchronous 0 ms');

log('= = = =  the call stack is empty  = = = =');
