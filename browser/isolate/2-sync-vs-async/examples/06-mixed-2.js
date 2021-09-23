import { labeledLogger } from '/browser/lib/labeled-logger.js';
import { synchronousTimeout } from '/browser/lib/synchronous-timeout.js';

const log = labeledLogger();

const callback1 = () => {
  log('- end synchronous 0 ms'); // 2
};
log('- begin synchronous 0 ms'); // 1
synchronousTimeout(callback1, 0);

const callback2 = () => {
  log('+ execute async  0 ms'); // 8
};
log('+ schedule async 0 ms'); // 3
setTimeout(callback2, 0);

const callback3 = () => {
  log('- end synchronous 500 ms'); // 5
};
log('- begin synchronous 500 ms'); // 4
synchronousTimeout(callback3, 500);

const callback4 = () => {
  log('+ execute async  1000 ms'); // 9
};
log('+ schedule async 1000 ms'); // 6
setTimeout(callback4, 1000);

log('= = = =  the call stack is empty  = = = ='); // 7
