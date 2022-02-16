import { labeledLogger } from '../../../lib/labeled-logger.js';
import { delayedValue } from '../../../lib/delayed-value.js';

const { log } = labeledLogger();
const slowString = delayedValue(log);

/* slowString

  slowString returns a promise that resolves to your string after a delay.
  it will immediate log the length of the delay and the value
    this will help you trace the program's execution from the console output

  It takes two arguments:
  - a string
  - a delay in milliseconds

  if you don't pass in a delay, a random one will be generated
  generated delays will be:
    between 0 and 4000 milliseconds
    in steps of 500 milliseconds (0, 500, 1500, ...)

  slowString should never throw an error, so don't worry about error handling

*/

slowString('a random delay').then(log);

slowString('a 5000 ms delay', 5000).then(log);

log('=== === === the callstack is empty === === ===');
