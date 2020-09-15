const incrementor = {
  state: {
    stepSize: 1,
    current: 0,
  },
  log: [],
  // logic method
  increment: function () {
    const newCurrent = this.state.current + this.state.stepSize;
    this.state.current = newCurrent;
  },
  // view methods
  renderCurrent: function () {
    const li = document.createElement('li');
    li.innerHTML = this.state.current;
    return li;
  },
  renderStep: function () {
    const li = document.createElement('li');
    li.innerHTML = `... + ${this.state.stepSize} = ${this.state.current}`;
    return li;
  },
  // handler methods
  handleIncrement: function (listId) {
    debugger;
    // read user input
    this.increment();
    // update DOM from state
    const renderedStep = this.renderStep();
    document.getElementById(listId).appendChild(renderedStep);
    // log interaction
    this.log.push({
      interaction: 'increment',
      renderedStep,
      newState: JSON.parse(JSON.stringify(this.state))
    });
  },
  handleSetStepSize: function (inputId) {
    debugger;
    // read user input
    const newStepSizeStr = document.getElementById(inputId).value;
    const newStepSize = Number(newStepSizeStr);
    // update state
    this.state.stepSize = newStepSize;
    // log interaction
    this.log.push({
      interaction: 'set step size',
      newStepSize,
      newState: JSON.parse(JSON.stringify(this.state))
    });
  },
  handleReset: function (inputId, listId) {
    debugger;
    // reset state
    this.state.current = 0;
    this.state.stepSize = 1;
    // reset DOM
    document.getElementById(inputId).value = this.state.stepSize;
    const initialItem = this.renderCurrent();
    document.getElementById(listId).innerHTML = '';
    document.getElementById(listId).appendChild(initialItem);
    // log handler
    this.log.push({ handler: 'reset' });
  },
  // initialization method
  init: function (inputId, listId) {
    debugger;
    // render initial dom from state
    document.getElementById(inputId).value = this.state.stepSize;
    const initialItem = this.renderCurrent();
    document.getElementById(listId).appendChild(initialItem);
    // log initial state
    this.log.push({
      initialItem,
      initialState: JSON.parse(JSON.stringify(this.state))
    });
  }
};
