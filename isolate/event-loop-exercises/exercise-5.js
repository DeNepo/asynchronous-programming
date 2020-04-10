const title = 'exercise 5';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

let next = 1;
const arr = [];

const exercise5_cb_0 = () => {
  arr.push(next);
  next++;
};
const intervalId = setInterval(exercise5_cb_0, 100);

// fill in the blanks

const exercise5_cb_1 = () => {
  const sum = arr.reduce((sum, next) => sum + next, 0);
  const test1 = sum === 0;
  console.assert(test1, assertMsg('Test 1'));
};
setTimeout(exercise5_cb_1, _);

const exercise5_cb_2 = () => {
  const test2 = arr.length === 7;
  console.assert(test2, assertMsg('Test 2'));
};
setTimeout(exercise5_cb_2, _);

const exercise5_cb_3 = () => {
  const sum = arr.reduce((sum, next) => sum + next, 0);
  const test1 = sum === 21;
  console.assert(test1, assertMsg('Test 3'));
  clearTimeout(intervalId);
  arr.push('almost done!');
};
setTimeout(exercise5_cb_3, _);

const exercise5_cb_4 = () => {
  const sum = arr.reduce((sum, next) => sum + next, 0);
  const test1 = sum === 6;
  console.assert(test1, assertMsg('Test 4'));
};
setTimeout(exercise5_cb_4, _);

const exercise5_cb_5 = () => {
  const sum = arr.reduce((sum, next) => sum + next, 0);
  const test1 = sum === 10;
  console.assert(test1, assertMsg('Test 5'));
};
setTimeout(exercise5_cb_5, _);
