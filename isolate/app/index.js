import Exercise from './exercise.js';
import LiveStudy from './live-study.js';

fetch('./index.json')
  .then(res => res.json())
  .then(index => {
    const exercisesDir = Exercise.populate(index);
    const liveStudyApp = new LiveStudy(exercisesDir);
    const view = liveStudyApp.render();
    document.getElementById('root').appendChild(view);

    document.getElementById('title').innerHTML = index.title;
    document.getElementById('header').innerHTML = index.title;
  })
  .catch(err => console.error(err));

