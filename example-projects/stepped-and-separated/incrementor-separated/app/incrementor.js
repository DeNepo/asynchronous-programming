const incrementor = {
  state: {
    stepSize: 1,
    current: 0,
  },
  increment: function () {
    debugger;
    const newCurrent = this.state.current + this.state.stepSize;
    this.state.current = newCurrent;
  },
  renderCurrent: function () {
    const li = document.createElement('li');
    li.innerHTML = this.state.current;
    return li;
  },
  renderStep: function () {
    const li = document.createElement('li');
    li.innerHTML = `... + ${this.state.stepSize} = ${this.state.current}`;
    return li;
  }
};
