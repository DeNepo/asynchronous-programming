import { fetchUserById } from './index.js';

for (let id = 0; id <= 11; id++) {
  fetchUserById(id)
    .then((res) => {
      if (!res.ok) {
        throw `${res.status}: ${res.statusText}`;
      }
      return res.json();
    })
    .then((user) => console.log(user))
    .catch((err) => console.error(err));
}
