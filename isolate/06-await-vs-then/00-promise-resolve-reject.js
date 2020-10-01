'use strict';

const log = labeledLogger('Promise.resolve(), Promise.reject()');


/*

  these are two static methods on the Promise class
  we will use them in this chapter to compare .then with await

  Promise.resolve(value)
    wraps `value` in a promise that has been resolved

  Promise.reject(value)
    wraps `value` in a promise that has been rejected


    https://javascript.info/promise-api#promise-resolve-reject

*/


// Promise.resolve('hello') is the same as a new promise that resolves to 'hello'

const PromiseResolveHello = Promise.resolve('hello');
PromiseResolveHello
  .then(value => log('PromiseResolveHello.then:', value));

log("PromiseResolveHello:", PromiseResolveHello);


const executorResolveToHello = (resolve, reject) => {
  resolve('hello');
};
const newPromiseResolveHello = new Promise(executorResolveToHello);
newPromiseResolveHello
  .then(value => log('newPromiseResolveHello.then:', value));

log("newPromiseResolveHello:", newPromiseResolveHello);




// Promise.reject('bye') is the same as a new promise that rejects to 'bye'

const PromiseRejectBye = Promise.reject('bye');
PromiseRejectBye
  .catch(value => log('PromiseRejectBye.catch:', value));

log("PromiseRejectBye:", PromiseRejectBye);


const executorRejectsBye = (resolve, reject) => {
  reject('bye');
};
const newPromiseRejectBye = new Promise(executorRejectsBye);
newPromiseRejectBye
  .catch(value => log('newPromiseRejectBye.catch:', value));

log("newPromiseRejectBye:", newPromiseRejectBye);



log('--- end of synchronous tasks ---');
