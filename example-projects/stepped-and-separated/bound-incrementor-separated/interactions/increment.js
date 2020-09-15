debugger;

const incrementHandler = incrementor.handleIncrement
  .bind(incrementor, 'steps-history');

document.getElementById('increment-button')
  .addEventListener('click', incrementHandler);
