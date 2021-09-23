import { labeledLogger } from '/browser/lib/labeled-logger.js';
import { synchronousTimeout } from '/browser/lib/synchronous-timeout.js';

const log = labeledLogger();

const callback1 = () => {
  log('+ execute async  1000 ms'); // 9
};
log('+ schedule async 1000 ms'); // 1
setTimeout(callback1, 1000);

const callback2 = () => {
  log('- end synchronous 500 ms'); // 3
};
log('- begin synchronous 500 ms'); // 2
synchronousTimeout(callback2, 500);

const callback3 = () => {
  log('+ execute async  0 ms'); // 8
};
log('+ schedule async 0 ms'); // 4
setTimeout(callback3, 0);

const callback4 = () => {
  log('- end synchronous 0 ms'); // 6
};
log('- begin synchronous 0 ms'); // 5
synchronousTimeout(callback4, 0);

log('= = = =  the call stack is empty  = = = ='); // 7
