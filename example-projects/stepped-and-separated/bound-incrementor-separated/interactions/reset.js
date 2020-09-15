debugger;

const resetHandler = incrementor.handleReset
  .bind(incrementor, 'step-size-input', 'steps-history');

document.getElementById('reset-button')
  .addEventListener('click', resetHandler);
