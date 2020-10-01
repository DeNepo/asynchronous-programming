'use strict';

const log = labeledLogger('asynchronous delays');

/* Asynchronous delays

  now what happens if we do the same thing with setTimeout?

*/


log('+ schedule async 1000 ms');
setTimeout(log, 1000, '+ execute async  1000 ms');

log('+ schedule async 500 ms');
setTimeout(log, 500, '+ execute async  500 ms');

log('+ schedule async 0 ms');
setTimeout(log, 0, '+ execute async  0 ms');



