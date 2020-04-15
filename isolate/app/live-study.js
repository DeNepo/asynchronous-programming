export default class LiveStudy {
  constructor(exercises, title) {
    this.exercises = exercises;
  }
  async loadAll(dir) {
    dir = dir || this.exercises;
    if (dir.dirs) {
      dir.dirs.forEach(subDir => this.loadAll(subDir));
    };
    if (dir.exercises) {
      for (let exercise of dir.exercises) {
        try {
          const msg = '--- ' + exercise.path.abs + ' ---';
          eval(await exercise.load(msg));
        } catch (err) {
          console.error(err);
        };
      };
    };
  }
  renderExercises(exercises) {
    const virDir = exercises || this.exercises;

    const detailsEl = document.createElement('details');
    const summaryEl = document.createElement('summary');
    // summaryEl.innerHTML = virDir.path;
    const loadAllButton = document.createElement('button');
    loadAllButton.innerHTML = virDir.path + ' (run all)';
    loadAllButton.onclick = () => {
      console.log('loading: ' + virDir.path);
      virDir.exercises.forEach(exercise =>
        exercise.fetchCode()
          .then(() => exercise.run(false))
          .catch(err => console.error(err))
      );
    };
    summaryEl.appendChild(loadAllButton);
    detailsEl.appendChild(summaryEl);

    const subListEl = document.createElement('ul');
    if (virDir.dirs) {
      virDir.dirs.forEach(subDir => {
        const subDirEl = this.renderExercises(subDir);
        const li = document.createElement('li');
        li.appendChild(subDirEl);

        subListEl.appendChild(li);
      });
    };
    if (virDir.exercises) {
      virDir.exercises.forEach(exercise => {
        const exerciseEl = exercise.render();
        const li = document.createElement('li');
        li.appendChild(exerciseEl);
        subListEl.appendChild(li);
      });
    };
    detailsEl.appendChild(subListEl);
    return detailsEl;
  }
  render() {
    const container = document.createElement('div');

    const renderedExercises = this.renderExercises();
    const unWrapped = renderedExercises.lastChild;
    container.appendChild(unWrapped);

    return container;
  }
}
