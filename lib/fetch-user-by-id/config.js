/*

  delays are slower than in real life
    so you have more time to watch and understand what is happening

  errors are more common in real life
    so you have more opportunity to encounter error

*/

export const config = {
  errorRates: {
    network: 0.03,
    server: 0.03,
  },
  delays: {
    fetch: 4000,
    parse: 3000,
  },
};
