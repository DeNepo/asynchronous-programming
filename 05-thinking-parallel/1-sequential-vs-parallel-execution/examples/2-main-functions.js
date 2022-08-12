import { labeledLogger } from '../../../lib/labeled-logger.js';
import { delayedValue } from '../../../lib/delayed-value.js';

const { log } = labeledLogger();
const slowString = delayedValue(log);

/* main functions

  you should use `await` inside an async function
  but this can be inconvenient if you want to just write a script

  one way around this is putting your script in an async function
  then you call the function to run your script
  it's conventional to call this function `main`

  you won't need this for your projects
  but you will see it around the internet

*/

const main = async () => {
  const hello = await slowString('hello!');
  log(hello);
};

main();

log('=== === === the callstack is empty === === ===');
