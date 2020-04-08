const title = 'exercise 6';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;

// use setTimeout and .charCodeAt() to sort an array of strings
//  copy items in order from the unsorted array to the sorted array
const sortArray = (unsorted, sorted) => { };


// can you figure out why the tests pass in the order they do?
// is it possible for a test never to finish?
const testSortAsync = (actual, expected, testId) => {
  if (actual.length === expected.length) {
    const test1 = actual.toString() === expected.toString();
    console.assert(test1, assertMsg(testId));
  } else {
    // console.assert(true, title + ', ' + testId + ': still sorting');
    setTimeout(testSortAsync, 0, actual, expected, testId);
  }
};

const toSort1 = ['ÿ', 'ÿ', 'ÿ', 'ÿ', 'ÿ'];
const actual1 = [];
const expected1 = ['ÿ', 'ÿ', 'ÿ', 'ÿ', 'ÿ'];
testSortAsync(actual1, expected1, 'Test 1');
sortArray(toSort1, actual1);

const toSort2 = ['!', '!', '!', '!', '!'];
const actual2 = [];
const expected2 = ['!', '!', '!', '!', '!'];
testSortAsync(actual2, expected2, 'Test 2');
sortArray(toSort2, actual2);

const toSort3 = [];
const actual3 = [];
const expected3 = [];
testSortAsync(actual3, expected3, 'Test 3');
sortArray(toSort3, actual3);

const toSort4 = ['a', 'A', 'Z', 'z'];
const actual4 = [];
const expected4 = ['A', 'Z', 'a', 'z'];
testSortAsync(actual4, expected4, 'Test 4');
sortArray(toSort4, actual4);

const toSort5 = [';', '}', '+', '{'];
const actual5 = [];
const expected5 = ['+', ';', '{', '}'];
testSortAsync(actual5, expected5, 'Test 5');
sortArray(toSort5, actual5);

