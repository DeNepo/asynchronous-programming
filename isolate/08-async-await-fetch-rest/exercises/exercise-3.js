'use strict';


const log = labeledLogger('Exercise 3');
const expect = chai.expect;




const todosByStatus = async (status = 'done') => {




};




const test1 = (todos) => {
  log('todos:', todos);
  it('should have length 90', () => {
    expect(todos.length).to.equal(90);
  });
  console.log('');
};
todosByStatus('done')
  .then(data => test1(data))
  .catch(err => log(err));


const test2 = (todos) => {
  log('todos:', todos);
  it('should have length 110', () => {
    expect(todos.length).to.equal(110);
  });
  console.log('');
};
todosByStatus('not done')
  .then(data => test2(data))
  .catch(err => log(err));



log('... end of synchronous tasks ...');
