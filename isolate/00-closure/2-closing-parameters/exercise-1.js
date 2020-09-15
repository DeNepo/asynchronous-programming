'use strict';

const closeAValue = (val) => {
  return () => {
    return val;
  }
}

const a = closeAValue(1);
const aReturns = a();
console.assert(aReturns === _, "Test 1: a returns");

const b = closeAValue(2);
const bReturns = b();
console.assert(bReturns === _, "Test 2: b returns");

const c = _;
const cReturns = _;
console.assert(cReturns === 4, "Test 3: c returns");


const sum = a + b + c; // fix this line to pass the assert
console.assert(sum === 7, "summing closed values");

const product = _; // fix this line to pass the assert
console.assert(product === 16, "create the value 16 using your closed values");
