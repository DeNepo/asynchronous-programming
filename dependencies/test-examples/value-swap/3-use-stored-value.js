// declare variables
let a, b, temp;
// assign initial values
a = "2", b = "1", temp = null;

// swap the values stored by a and b ...
temp = a;
a = b;
b = temp;

// assert expected values
console.assert(a === "1", "a should store 1. it has " + a);
console.assert(b === "2", "b should store 2. it has " + b);
