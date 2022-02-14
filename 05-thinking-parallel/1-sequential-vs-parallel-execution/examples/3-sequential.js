import { labeledLogger } from '../../../lib/labeled-logger.js';
import { delayedValue } from '../../../lib/delayed-value.js';

const { log } = labeledLogger();
const slowString = delayedValue(log);

/* sequential

  sequential tasks need to wait for each other
  before starting a new task, the previous task needs to finish

  you know the 'random delay' message will be logged first, just not when!
  you know the rest of the messages will be logged in this order:
    random ms   -> 'random delay'
    ? + 3000 ms -> 'hello'
    ? + 2000 ms -> '...'
    ? + 1000 ms -> 'good bye'

*/

const main = async () => {
  log(await slowString('random delay'));

  log(await slowString('hello', 3000));

  log(await slowString('...', 2000));

  log(await slowString('good bye', 1000));
};

main();

log('=== === === the callstack is empty === === ===');
