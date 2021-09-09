'use strict';
const _0x37ff1d = _0x1811;
(function (_0x193be8, _0x4c803f) {
  const _0x44ffb7 = _0x1811,
    _0x4b5b4d = _0x193be8();
  while (!![]) {
    try {
      const _0x1a42e6 =
        -parseInt(_0x44ffb7(0x1ab)) / 0x1 +
        -parseInt(_0x44ffb7(0x19c)) / 0x2 +
        (-parseInt(_0x44ffb7(0x1b0)) / 0x3) *
          (parseInt(_0x44ffb7(0x1a9)) / 0x4) +
        (-parseInt(_0x44ffb7(0x198)) / 0x5) *
          (-parseInt(_0x44ffb7(0x19a)) / 0x6) +
        (parseInt(_0x44ffb7(0x1a3)) / 0x7) *
          (parseInt(_0x44ffb7(0x1aa)) / 0x8) +
        parseInt(_0x44ffb7(0x199)) / 0x9 +
        -parseInt(_0x44ffb7(0x19b)) / 0xa;
      if (_0x1a42e6 === _0x4c803f) break;
      else _0x4b5b4d['push'](_0x4b5b4d['shift']());
    } catch (_0x14f37f) {
      _0x4b5b4d['push'](_0x4b5b4d['shift']());
    }
  }
})(_0x433f, 0x19d94);
debugger;
const fs = require('fs'),
  path = require('path'),
  labeledLogger = require(_0x37ff1d(0x193)),
  EXERCISE_NAME = path[_0x37ff1d(0x1a1)](__filename),
  DOC_STRING = _0x37ff1d(0x19f),
  log = labeledLogger(Date[_0x37ff1d(0x192)]());
function _0x1811(_0x3d7eec, _0x48baee) {
  const _0x433f3a = _0x433f();
  return (
    (_0x1811 = function (_0x1811bf, _0x344217) {
      _0x1811bf = _0x1811bf - 0x191;
      let _0x4aff54 = _0x433f3a[_0x1811bf];
      return _0x4aff54;
    }),
    _0x1811(_0x3d7eec, _0x48baee)
  );
}
log(0x0, _0x37ff1d(0x195) + EXERCISE_NAME + _0x37ff1d(0x19e));
process[_0x37ff1d(0x1a0)][_0x37ff1d(0x1a7)]('-h') &&
  (log(0x0, DOC_STRING), process[_0x37ff1d(0x196)](0x0));
function _0x433f() {
  const _0x5c3e97 = [
    'argv',
    'basename',
    '\x20...',
    '1099VDEDCq',
    'command:\x20',
    'reading\x20all\x20content\x20names\x20...',
    'a\x20file\x20name\x20is\x20required,\x20exiting',
    'includes',
    'fileName:\x20',
    '1492jwkVhU',
    '8224loOGLq',
    '116676nOcHfE',
    'utf-8',
    'readdir',
    'reading\x20',
    'read',
    '1017OFUJyO',
    'unknown\x20command:\x20',
    'now',
    '../../labeled-logger',
    'list',
    '---\x20',
    'exit',
    'readFile',
    '65fkXAni',
    '1123821vnHCDr',
    '49650kqjCCe',
    '147520bPDoAe',
    '60178BzKxPI',
    'a\x20command\x20is\x20required,\x20exiting',
    '\x20---',
    '\x0aCOMMANDS:\x0a\x0a\x20\x20list\x0a\x20\x20\x20\x20logs\x20all\x20of\x20the\x20file\x20names\x20in\x20the\x20current\x20directory\x0a\x0a\x20\x20read\x20<fileName>\x0a\x20\x20\x20\x20logs\x20the\x20contents\x20of\x20<fileName>\x0a\x0aFLAGS:\x0a\x0a\x20\x20-h\x0a\x20\x20\x20\x20print\x20this\x20helpful\x20message\x0a',
  ];
  _0x433f = function () {
    return _0x5c3e97;
  };
  return _0x433f();
}
const command = process[_0x37ff1d(0x1a0)][0x2],
  fileName = process[_0x37ff1d(0x1a0)][0x3];
command === undefined &&
  (log(0x1, _0x37ff1d(0x19d)), process[_0x37ff1d(0x196)](0x0));
log(0x1, _0x37ff1d(0x1a4) + command);
if (command === _0x37ff1d(0x194)) {
  const callback = (_0x5a26f2, _0x50b4cf) => {
    const _0x57d257 = _0x37ff1d;
    _0x5a26f2 && (log(0x3, _0x5a26f2), process[_0x57d257(0x196)](0x1)),
      log(0x3, _0x50b4cf);
  };
  fs[_0x37ff1d(0x1ad)](__dirname, callback), log(0x2, _0x37ff1d(0x1a5));
} else {
  if (command === _0x37ff1d(0x1af)) {
    fileName === undefined &&
      (log(0x2, _0x37ff1d(0x1a6)), process[_0x37ff1d(0x196)](0x0));
    log(0x2, _0x37ff1d(0x1a8) + fileName);
    const filePath = path['join'](__dirname, fileName),
      callback = (_0x3fc99d, _0x21a1a3) => {
        const _0x2f7c24 = _0x37ff1d;
        _0x3fc99d && (log(0x4, _0x3fc99d), process[_0x2f7c24(0x196)](0x1)),
          log(0x4, _0x21a1a3);
      };
    fs[_0x37ff1d(0x197)](filePath, _0x37ff1d(0x1ac), callback),
      log(0x3, _0x37ff1d(0x1ae) + fileName + _0x37ff1d(0x1a2));
  } else log(0x2, _0x37ff1d(0x191) + command);
}
