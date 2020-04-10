class Segment {

  isChanging = true
  timeoutId = null
  delayFactor = 500
  msDelay = 0
  innerText = ''
  isDisplayed = true
  log = []

  constructor(x, y) {
    this.msDelay = this.delayFactor + (x * 5);
    this.innerText = '  \n' + y + '\n\n  ';
  }

  handleClick(view) {
    if (this.isChanging) {
      clearTimeout(this.timeoutId);
    } else {
      this.timeoutId = setTimeout(this.timeoutCallback.bind(this, view), this.msDelay);
    };
    this.isChanging = !this.isChanging;

    this.log.push({
      isChanging: this.isChanging,
      timeoutId: this.timeoutId,
      isDisplayed: this.isDisplayed
    });
  }

  timeoutCallback(view) {
    if (this.isChanging) {
      this.isDisplayed = !this.isDisplayed;
      view.innerText = this.isDisplayed ? '  \n  \n  ' : this.innerText;
      this.timeoutId = setTimeout(this.timeoutCallback.bind(this, view), this.msDelay);
    };
  }

  render() {
    const container = document.createElement('div');
    container.style = 'height: 100%;'
      + 'width: 100%;'
      + 'display: flex;'
      + 'align-items: center;'
      + 'justify-content: center;';
    container.innerText = this.innerText;
    container.onclick = this.handleClick.bind(this, container);
    this.timeoutId = setTimeout(this.timeoutCallback.bind(this, container), this.msDelay);
    return container;
  }

}
