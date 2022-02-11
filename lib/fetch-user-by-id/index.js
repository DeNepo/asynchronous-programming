import { config } from './config.js';

import { users } from './users.js';

import { newResponse } from './new-response.js';

export const fetchUserById = async (id = 1) => {
  // --- simulate random network delay ---
  const delay = Math.round(Math.random() * config.delays.network);
  await new Promise((resolve) => setTimeout(() => resolve(), delay));

  // --- randomly encounter a network error ---
  const networkError = Math.random() < config.errorRates.network;
  if (networkError) {
    throw new Error(
      'oops! failed network request, something went wrong with the internet.',
    );
  }

  // --- randomly encounter a server-side error ---
  const serverError = Math.random() < config.errorRates.server;
  if (serverError) {
    return newResponse({
      ok: false,
      status: 500,
      statusText: `Internal Server Error: unable to complete request for user ${id}`,
    });
  }

  // --- search for id and return the user if it exists ---
  const userWithId = users.find((user) => user.id === id);
  if (userWithId) {
    return newResponse(
      {
        ok: true,
        status: 200,
        statusText: `user ${id} was found`,
      },
      userWithId,
    );
  }

  // --- user did not exist, send 404 response ---
  return newResponse({
    ok: false,
    status: 404,
    statusText: `Not Found: there is no user with id ${id}`,
  });
};
