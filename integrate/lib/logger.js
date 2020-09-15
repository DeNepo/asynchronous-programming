import { deepClone } from './deep-clone.js';


export const logger = (() => {

  const logs = [];

  const logger = {
    get logs() {
      return deepClone(logs);
    },
    push: (logEntry) => {
      const entryCopy = deepClone(logEntry);
      logs.push(entryCopy);
    }
  };

  return Object.freeze(logger);

})();
