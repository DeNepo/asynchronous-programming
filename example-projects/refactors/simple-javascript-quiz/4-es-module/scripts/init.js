import { app } from './app.js';

app.init('quiz');

document.getElementById('submit')
  .addEventListener('click', () => app.showResultsHandler());
