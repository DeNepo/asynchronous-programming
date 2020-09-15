'use strict';

import { logger } from '../../../../lib/logger.js';

export class Mole {

  timeoutId = null;
  attempts = 0;
  isVisible = false;
  isWhacked = false;
  coordinates = {};

  constructor(x = 0, y = 0) {
    this.coordinates.x = x;
    this.coordinates.y = y;
  };

  static hideDelay() {
    return Math.floor(Math.random() * 3000) + 500;
  };

  static showDelay() {
    return Math.floor(Math.random() * 1000) + 500;
  };


  handleClick(view) {
    this.attempts++;
    if (this.isVisible) {
      this.isWhacked = true;
      view.innerHTML = 'WHACK';
      clearTimeout(this.timeoutId);
    };

    logger.push({
      mole: `${this.coordinates.x}, ${this.coordinates.y}`,
      attempts: this.attempts,
      isWhacked: this.isWhacked,
    });
  };

  timeoutCallback(view) {
    const wasVisible = this.isVisible;
    this.isVisible = !this.isVisible;
    if (wasVisible) {
      view.innerHTML = '       \n       \n       \n       \n      ';
      this.timeoutId = setTimeout(this.timeoutCallback.bind(this, view), Mole.hideDelay());
    } else {
      view.innerHTML = 'mole';
      this.timeoutId = setTimeout(this.timeoutCallback.bind(this, view), Mole.showDelay());
    };
  };

  render() {
    const container = document.createElement('div');
    container.style = 'height: 100%;'
      + 'width: 100%;'
      + 'display: flex;'
      + 'align-items: center;'
      + 'justify-content: center;'
      + 'test-align: center;';
    container.onclick = this.handleClick.bind(this, container);
    this.timeoutId = setTimeout(this.timeoutCallback.bind(this, container), Mole.hideDelay());
    return container;
  };

}
