window.onload = () => {
  const theWorm = new Board(Segment, 10, 10);
  document.getElementById('root').appendChild(theWorm.render());
};
