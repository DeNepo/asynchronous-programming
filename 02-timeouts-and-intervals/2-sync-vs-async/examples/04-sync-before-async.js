import { labeledLogger } from '../../../lib/labeled-logger.js';
import { synchronousTimeout } from '../../../lib/synchronous-timeout.js';

const { log } = labeledLogger();

/* Sync before Async

  what happens if we call the setTimeouts before the synchronousTimeouts?

*/

log('- begin synchronous 1000 ms');
synchronousTimeout(log, 1000, '- end synchronous 1000 ms');

log('- begin synchronous 500 ms');
synchronousTimeout(log, 500, '- end synchronous 500 ms');

log('- begin synchronous 0 ms');
synchronousTimeout(log, 0, '- end synchronous 0 ms');

log('+ schedule async 1000 ms');
setTimeout(log, 1000, '+ execute async  1000 ms');

log('+ schedule async 500 ms');
setTimeout(log, 500, '+ execute async  500 ms');

log('+ schedule async 0 ms');
setTimeout(log, 0, '+ execute async  0 ms');

log('= = = =  the call stack is empty  = = = =');
