import { labeledLogger } from '/browser/lib/labeled-logger.js';
import { synchronousTimeout } from '/browser/lib/synchronous-timeout.js';

const log = labeledLogger();

const callback1 = () => {
  log('+ execute async  1000 ms'); // 9
};
log('+ schedule async 1000 ms'); // 1 
setTimeout(callback1, 1000, '+ execute async  1000 ms');

const callback2 = () => {
  log('+ execute async  0 ms'); // 8
};
log('+ schedule async 0 ms'); // 2
setTimeout(callback2, 0, '+ execute async  0 ms');

const callback3 = () => {
  log('- end synchronous 500 ms'); // 4
};
log('- begin synchronous 500 ms'); // 3
synchronousTimeout(callback3, 500, '- end synchronous 500 ms');

const callback4 = () => {
  log('- end synchronous 0 ms'); // 6
};
log('- begin synchronous 0 ms'); // 5
synchronousTimeout(callback4, 0, '- end synchronous 0 ms');

log('= = = =  the call stack is empty  = = = ='); // 7
