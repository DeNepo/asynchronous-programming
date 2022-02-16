import { labeledLogger } from '../../../lib/labeled-logger.js';
import { delayedValue } from '../../../lib/delayed-value.js';

const { log } = labeledLogger();
const slowString = delayedValue(log);

/* parallel

  parallel tasks are happening at the same time
  they do not need to wait for each other
  each message will be logged as soon as it's delay is over

  the first message has a random delay, you don't know when it will be logged!
  but you do know the last 3 messages to be logged in order after their delays:
    1000 ms -> 'hello'
    2000 ms -> '...'
    3000 ms -> 'good bye'

*/

slowString('random delay').then(log);

slowString('good bye', 3000).then(log);

slowString('...', 2000).then(log);

slowString('hello', 1000).then(log);

log('=== === === the callstack is empty === === ===');
