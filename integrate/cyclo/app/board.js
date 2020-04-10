class Board {

  height = 0
  width = 0
  thing = null
  things = []
  log = []
  startTime = 0

  constructor(thing, height, width) {
    this.height = height;
    this.width = width;
    this.thing = thing
    this.populate();
    this.startTime = Date.now();
  }

  populate() {
    const Thing = this.thing;
    for (let i = 0; i < this.height; i++) {
      const nextRow = [];
      this.things.push(nextRow);
      for (let j = 0; j < this.width; j++) {
        nextRow.push(new Thing(i, j));
      };
    };
  }

  renderBoard() {
    const board = document.createElement('table');
    board.style = 'height: 100vh; width: 100vw;';

    for (let i = 0; i < this.height; i++) {
      const nextRow = document.createElement('tr');
      board.appendChild(nextRow);
      for (let j = 0; j < this.width; j++) {
        const nextSquare = document.createElement('td');
        nextSquare.style = `height: ${(1 / this.height) * 100}%;`
          + `width: ${(1 / this.width) * 100}%;`
          + 'text-align: center;'
          + 'border: solid black 1px';
        const nextRenderedThing = this.things[i][j].render();
        nextSquare.onclick = () => this.log
          .push({
            action: 'click cell',
            x: i, y: j,
            ms: Date.now() - this.startTime,
            log: this.things[i][j].log
          });
        nextSquare.appendChild(nextRenderedThing);

        nextRow.appendChild(nextSquare);
      };
    };

    return board;
  }

  handleReset(boardContainerEl) {
    this.things = [];
    this.populate();
    boardContainerEl.innerHTML = '';
    boardContainerEl.appendChild(this.renderBoard());

    this.log.push({
      action: 'reset',
      ms: Date.now() - this.startTime
    });
  }

  render() {

    const container = document.createElement('div');

    const board = this.renderBoard();
    const boardContainer = document.createElement('div');
    boardContainer.appendChild(board);

    const resetButton = document.createElement('button');
    resetButton.innerHTML = 'reset';
    resetButton.onclick = this.handleReset.bind(this, boardContainer);

    const logButton = document.createElement('button');
    logButton.innerHTML = 'log';
    logButton.onclick = () => console.log(this.log);

    container.appendChild(resetButton);
    container.appendChild(logButton);
    container.appendChild(boardContainer);

    return container;
  }

}
