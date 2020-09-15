'use strict';

const closesParentParamter = (parentParam) => {
  // write me!
};

const closure1 = closesParentParamter("|");
const closure2 = closesParentParamter("~");

const result1 = closure1("+(=)+");
console.assert(result1 === "+|(|=|)|+", "assert 1");

const result2 = closure2("+(=)+");
console.assert(result2 === "+~(~=~)~+", "assert 2");

const result3 = closure1("abc");
console.assert(result3 === _, "assert 3");

const result4 = closure2("xyz");
console.assert(result4 === _, "assert 4");


const closure3 = closesParentParamter(_);
const result5 = closure3(_);
console.assert(result5 === "--0--1--", "assert 5");

const closure4 = closesParentParamter(_);
const result6 = closure4(_);
console.assert(result6 === "--1--0--", "assert 6");
