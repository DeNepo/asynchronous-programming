function incrementHandler() {
  debugger;

  // call app method to update state
  incrementor.increment();

  // update DOM from state
  const renderedStep = incrementor.renderStep();
  document.getElementById('steps-history').appendChild(renderedStep);

  // log interaction
  log.push({
    interaction: 'increment',
    renderedStep,
    newState: JSON.parse(JSON.stringify(incrementor.state))
  });
}
document.getElementById('increment-button').addEventListener('click', incrementHandler);
