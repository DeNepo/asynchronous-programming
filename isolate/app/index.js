import Exercise from './exercise.js';
import Project from './project.js';
import LiveStudy from './live-study.js';

const populate = (data, path) => {
  path = path || data.path;
  if (data.isProject) {
    const indexHtml = data.files.filter(file => file.path.includes('.html'))[0];
    data.project = new Project(indexHtml, path, data);
    return data;
  };

  if (data.files && !data.project) {
    data.exercises = data.files
      .map(file => new Exercise(file, path));
  };
  if (data.dirs) {
    data.dirs.forEach(subDir => populate(subDir, path + subDir.path));
  };
  return data;
};

fetch('./index.json')
  .then(res => res.json())
  .then(index => {
    populate(index);
    console.log(index)
    const liveStudyApp = new LiveStudy(index);
    const view = liveStudyApp.render();
    document.getElementById('root').appendChild(view);

    document.getElementById('title').innerHTML = index.title;
    document.getElementById('header').innerHTML = index.title;
  })
  .catch(err => console.error(err));

