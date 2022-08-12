import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* Address */

// --- declare some callbacks ---

const getAddress = (user) => {
  // write me!
};

const handleError = (err) => error(err);

// --- use the callbacks ---

log('fetching and processing user 9');
// "9: Dayna Park, Bartholomebury 76495-3109"
__;

log('fetching and processing user 8');
// "8: Ellsworth Summit, Aliyaview 45169"
__;

log('fetching and processing user 2');
// "2: Victor Plains, Wisokyburgh 90566-7771"
__;

log('fetching and processing user 0');
// 404
__;

log('= = = =  the call stack is empty  = = = =');
