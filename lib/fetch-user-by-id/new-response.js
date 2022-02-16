import { config } from './config.js';

export const newResponse = (responseInfo = {}, data = {}) => {
  const responsePrototype = {
    json() {
      const delay = Math.round(Math.random() * config.delays.parse);
      return new Promise((resolve) => {
        setTimeout(() => resolve(data), delay);
      });
    },
  };

  const response = Object.create(responsePrototype);

  for (const key in responseInfo) {
    Object.defineProperty(response, key, {
      value: responseInfo[key],
      enumerable: true,
      writable: false,
    });
  }

  return response;
};
