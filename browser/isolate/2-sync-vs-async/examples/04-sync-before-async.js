import { labeledLogger } from '/browser/lib/labeled-logger.js';
import { synchronousTimeout } from '/browser/lib/synchronous-timeout.js';

const log = labeledLogger();

/* Sync before Async

  what happens if we call the setTimeouts before the synchronousTimeouts?

*/

log('- begin synchronous 1000 ms'); // 1
synchronousTimeout(log, 1000, '- end synchronous 1000 ms'); // 2

log('- begin synchronous 500 ms'); // 3
synchronousTimeout(log, 500, '- end  synchronous 500 ms'); // 4

log('- begin synchronous 0 ms'); // 5
synchronousTimeout(log, 0, '- end synchronous 0 ms'); // 6

log('+ schedule async 1000 ms'); // 7
setTimeout(log, 1000, '+ execute async  1000 ms'); //13

log('+ schedule async 500 ms'); // 8
setTimeout(log, 500, '+ execute async  500 ms'); // 12

log('+ schedule async 0 ms'); // 9
setTimeout(log, 0, '+ execute async  0 ms'); // 11

log('= = = =  the call stack is empty  = = = ='); // 10
