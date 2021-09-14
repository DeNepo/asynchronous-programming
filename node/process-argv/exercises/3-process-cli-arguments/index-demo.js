const a = ['log', 'argv', 'slice'];
(function (b, c) {
  const f = function (g) {
    while (--g) {
      b['push'](b['shift']());
    }
  };
  f(++c);
})(a, 0x72);
const b = function (c, d) {
  c = c - 0x0;
  let e = a[c];
  return e;
};
const c = b;
('use strict');
const repeater = require('./repeater'),
  userInput = process[c('0x1')][c('0x2')](0x2),
  text = userInput[0x0],
  repeats = +userInput[0x1],
  repeatedInput = repeater(text, repeats);
console[c('0x0')](repeatedInput);
