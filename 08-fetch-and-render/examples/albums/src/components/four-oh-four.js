/**
 *
 */
export const fourOhFour = (id = 1) => {
  const pre = document.createElement('pre');
  pre.innerHTML = `there is no album with id ${id}. try a number between 1 and 100.`;
  return pre;
};
