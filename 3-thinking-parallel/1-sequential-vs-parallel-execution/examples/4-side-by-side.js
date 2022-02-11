import { labeledLogger } from '../../../lib/labeled-logger.js';
import { delayedValue } from '../../../lib/delayed-value.js';

const { log } = labeledLogger();
const slowString = delayedValue(log);

/* side-by-side

  let's see a script that has parallel and sequential tasks

  the delays are random, so you don't know exactly the logs will happen
  but you can know the ordering of some logs.

  which ones can you predict before running?

*/

const main = async () => {
  slowString('.then 1').then(log);

  log(await slowString('await 1'));

  slowString('.then 2').then(log);

  log(await slowString('await 2'));
};

main();

log('=== === === the callstack is empty === === ===');
