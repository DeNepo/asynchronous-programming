window.onload = () => {
  const game = new Board(ColorSquare, 20, 30);
  document.getElementById('root').appendChild(game.render());
};
