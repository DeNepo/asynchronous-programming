/*
  this strange function is exists and is in a separate file
  so that the callstack implies network requests
  and (hopefully) is better prep for real fetching
*/

export const network = (message = '', success = false) => {
  if (success) {
    const server = () => {
      throw new Error(message);
    };
    server();
  } else {
    throw new Error(message);
  }
};
