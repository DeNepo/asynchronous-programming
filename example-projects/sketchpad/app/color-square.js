class ColorSquare {

  isChanging = true
  timeoutId = null
  msDelay = 500
  frequency = 0.2
  steps = 64
  log = []

  cycleColor() {
    // https://krazydad.com/tutorials/makecolors.php
    this.steps++;

    const red = Math.sin(this.frequency * this.steps + 0) * 127 + 128;
    const green = Math.sin(this.frequency * this.steps + 2) * 127 + 128;
    const blue = Math.sin(this.frequency * this.steps + 4) * 127 + 128;

    return `rgb(${Math.round(red)},${Math.round(green)},${Math.round(blue)})`
  }

  handleClick(view) {
    if (this.isChanging) {
      clearTimeout(this.timeoutId);
    } else {
      this.timeoutId = setTimeout(this.timeoutCallback.bind(this, view), this.msDelay);
    };
    this.isChanging = !this.isChanging;

    this.log.push({
      timeoutId: this.timeoutId,
      isChanging: this.isChanging
    });
  }

  timeoutCallback(view) {
    if (this.isChanging) {
      view.style.backgroundColor = this.cycleColor();
      this.timeoutId = setTimeout(this.timeoutCallback.bind(this, view), this.msDelay);
    };
  }

  render() {
    const container = document.createElement('div');
    container.style.height = '100%';
    container.style.width = '100%';
    container.style.backgroundColor = this.cycleColor();
    container.onclick = this.handleClick.bind(this, container);
    this.timeoutId = setTimeout(this.timeoutCallback.bind(this, container), this.msDelay);
    return container;
  }

}
