import { config } from './config.js';

import { users } from './users.js';

import { network } from './errors.js';

export const fetchUserById = async (id = 1) => {
  // --- simulate random network delay ---
  const delay = Math.round(Math.random() * config.delays.network);
  await new Promise((resolve) => setTimeout(() => resolve(), delay));

  // --- randomly encounter a network error ---
  if (Math.random() < config.errorRates.network) {
    network(
      'Network Error: oops! failed network request, something went wrong with the internet.',
    );
  }

  // --- randomly encounter a server-side error ---
  if (Math.random() < config.errorRates.server) {
    network(
      `500 - Internal Server Error: unable to complete request for user ${id}`,
      true,
    );
  }

  // --- search for id and return the user if it exists ---
  const userWithId = users.find((user) => user.id === id);
  if (userWithId) {
    return userWithId;
  } else {
    network(`404 - Not Found: there is no user with id ${id}`, true);
  }
};
