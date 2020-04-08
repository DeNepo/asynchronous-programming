const title = 'exercise 3';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

// fill in the blanks

let x = '';

const exercise3_cb_1 = () => {
  x += 'a';
};
const intervalId = setInterval(exercise3_cb_1, _);


const exercise3_cb_2 = () => {
  x += 'w';
};
setTimeout(exercise3_cb_2, _);


const exercise3_cb_3 = () => {
  const test1 = x === 'whaaaa!';
  console.assert(test1, assertMsg('x === "' + x + '"'));
};
setTimeout(exercise3_cb_3, _);


const exercise3_cb_4 = () => {
  _;
  x += '!';
};
setTimeout(exercise3_cb_4, _);


const exercise3_cb_5 = () => {
  x += 'h';
};
setTimeout(exercise3_cb_5, _);
