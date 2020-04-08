const title = 'exercise 2';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

// fill in the blanks

let x = '';

x += _;

const exercise2_cb_1 = () => {
  x += _;
};
setTimeout(exercise2_cb_1, 100);

x += _;

const exercise2_cb_2 = () => {
  x += _;
};
setTimeout(exercise2_cb_2, 300);

const exercise2_cb_3 = () => {
  const test1 = x === 'javascript';
  console.assert(test1, assertMsg('x === "javascript"'));
};
setTimeout(exercise2_cb_3, 500);

const exercise2_cb_4 = () => {
  x += _;
};
setTimeout(exercise2_cb_4, 200);

x += _;
