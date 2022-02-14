# API Calls

Fetching and using data from APIs is central to web development. The whole idea of "the web" is that many different computers are connected to share information. In JavaScript, you will use `fetch` to access information stored somewhere else on the internet.

There is a lot to learn about `fetch`, HTTP, promises, the event loop, ... but to get started all you need to understand is ...

## The Template

In this module you will be writing your own _Data Access_ functions that `fetch` data from remote APIs.

You can tell if a function is an API Call function because it:

1. Takes JS data as an argument.
2. Calls an API.
3. Returns a promise with data from the API call.

There are many ways to write an API call in JS, you will be learning one way (for now). All API Call functions in these exercises and in your projects will follow this template:

```js
/**
 * _.
 *
 * @async
 * @param {_} [_=_] - _.
 * @returns {Promise<_>} _.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const fetchANumber = async (/* parameters, best with defaults */) => {
  // --- declare your resource's URL ---
  const URL = _;

  // --- fetch the API data (this works!) ---
  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);

  // --- throw an error if the response is not ok (this works!) ---
  if (!response.ok) {
    const message = response.statusText
      ? `${response.status}: ${response.statusText}\n-> ${URL}`
      : `HTTP error! status: ${response.status}\n-> ${URL}`;
    throw new Error(message);
  }

  /* --- parse the data if the response was ok (this works!) ---*/
  const data = await response.json();

  // --- process the fetched data (if necessary) ---
  //  you do not need to use `await` below this comment
  //  you can refactor this to a separate logic function and test it
  const finalData = _;

  // --- return the final data ---
  return finalData;
};
```

[TOP](#fetching-data)

---

## Testing API Calls

> PS. Not all APIs can be tested this way! Many APIs have data that changes all the time, so you can't write unit tests.
>
> The examples & exercises in this folder are written for 2 APIs that do not change, so you can have tests.

Testing an API call function is (_almost_) exactly like the unit tests you've learned before. The main difference is that you will need to use `async`/`await` in your `it`s:

```js
import { fetchANumber } from './fetch-a-number.js';

describe('fetchANumber: fetches some data from an API', () => {
  it('fetches the number 5', async () => {
    const actual = await fetchANumber('the number 5');
    expect(actual).toEqual(5);
  });
  it('fetches the number 8', async () => {
    const actual = await fetchANumber('the number 8');
    expect(actual).toEqual(8);
  });
});
```

All of these exercises will have unit tests, but it is not always so easy to test your API calls!

The APIs used in these exercises do not change so you can expect the same response each time you send the same request. Many APIs have data that changes regularly, testing calls to that type of API is more complex and beyond the scope of this module.

These exercises are here to help you get the big idea.

[TOP](#fetching-data)

---

## The APIs

These examples and exercises will use two APIs, the exercises for each API will focus on a different aspect of fetching data:

- **Pokemon**: an API containing all sorts of great info about Pokemon. These exercises will focus on processing data from an API _after_ you have received it from the API.
  - [Docs](https://pokeapi.co/docs/v2)
- **Typicode**: a RESTful API with dummy data perfect for learning. The exercises in `/typicode` will focus on using URL parameters and queries to request specific data from the API:
  - Docs: [guide](https://jsonplaceholder.typicode.com/guide/), [README](https://jsonplaceholder.typicode.com/)

[TOP](#fetching-data)

---

## Handling Rejections

When an error occurs in your API call function you will not handle the error inside the API call function, instead you should handle it when you call the API function. Why? Because the API call should be useful anywhere! If you hard-code error handling into the API call then you can't render different messages for the user depending on who they are or which page they're visiting.

Here's a little example, you'll get a chance to practice handling API call errors when you build your home page:

```js
/* ---  handlers/update-user-profile.js --- */

import { fetchUserImage } from '../api-calls/fetch-user-image.js';

import { user } from '../components/user.js';
import { failedToLoad } from '../components/failed-to-load.js';

// EITHER: using async/await in the handler
export const updateUserProfile = async (event) => {
  const userToFetch = event.target.form.userName.value;

  try {
    const userImage = await fetchUserImage(userToFetch);
    const renderedUser = user(userImage);
    document.getElementById('user-image-container').appendChild(renderedUser);
  } catch (err) {
    console.error(err);
    const renderedError = failedToLoad(userToFetch);
    document.getElementById('user-image-container').appendChild(renderedError);
  }
};

// OR: using .then and .catch in the handler
export const updateUserProfile = (event) => {
  const userToFetch = event.target.form.userName.value;

  fetchUserImage(userToFetch)
    .then((userImage) => {
      const renderedUser = user(userImage);
      document.getElementById('user-image-container').appendChild(renderedUser);
    })
    .catch((err) => {
      console.error(err);
      const renderedError = failedToLoad(userToFetch);
      document
        .getElementById('user-image-container')
        .appendChild(renderedError);
    });
};
```
