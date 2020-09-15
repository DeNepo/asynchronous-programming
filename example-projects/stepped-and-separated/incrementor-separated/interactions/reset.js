function resetHandler() {
  debugger;
  // reset state
  incrementor.state.current = 0;
  incrementor.state.stepSize = 1;
  // reset DOM
  document.getElementById('step-size-input').value = incrementor.state.stepSize;
  const initialItem = incrementor.renderCurrent();
  document.getElementById('steps-history').innerHTML = '';
  document.getElementById('steps-history').appendChild(initialItem);
  // log handler
  log.push({ handler: 'reset' });
};
document.getElementById('reset-button').addEventListener('click', resetHandler);
