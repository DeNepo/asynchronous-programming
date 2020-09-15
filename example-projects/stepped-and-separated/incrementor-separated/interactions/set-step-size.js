function setStepSizeHandler(event) {
  debugger;

  // read user input
  const newStepSizeStr = event.target.form.newStepSize.value;
  const newStepSize = Number(newStepSizeStr);

  // update state
  incrementor.state.stepSize = newStepSize;

  // log interaction
  log.push({
    interaction: 'set step size',
    newStepSize,
    newState: JSON.parse(JSON.stringify(incrementor.state))
  });
}
document.getElementById('set-step-size-button').addEventListener('click', setStepSizeHandler);
