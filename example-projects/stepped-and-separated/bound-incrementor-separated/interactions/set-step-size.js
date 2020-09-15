debugger;

const setStepSizeHandler = incrementor.handleSetStepSize
  .bind(incrementor, 'step-size-input');

document.getElementById('set-step-size-button')
  .addEventListener('click', setStepSizeHandler);
