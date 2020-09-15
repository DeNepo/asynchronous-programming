function init() {
  debugger;

  document.getElementById('step-size-input').value = incrementor.state.stepSize;
  const initialItem = incrementor.renderCurrent();
  document.getElementById('steps-history').appendChild(initialItem);

  log.push({
    initialItem,
    initialState: JSON.parse(JSON.stringify(incrementor))
  });
};
window.onload = init;
