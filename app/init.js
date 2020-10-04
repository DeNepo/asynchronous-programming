import LiveStudy from './live-study/main.js';

window.onload = async () => {

  fetch(`./index.json`)
    .then(res => res.json())
    .then(index => {
      document.getElementById('title').innerHTML = index.config.title;
      document.getElementById('header').innerHTML = index.config.title;

      window.liveStudyApp = new LiveStudy(index, editor, document.getElementById('study-buttons'));
      // console.log(liveStudyApp);

      const urlString = window.location.href;
      const url = new URL(urlString);
      const encodedPath = url.searchParams.get("path");
      let exercise = {};
      const findFirstExercise = (virDir) => {
        if (virDir.populated) {
          return virDir.populated[0]
        } else if (virDir.dirs) {
          return findFirstExercise(virDir.dirs[0]);
        }
      }
      if (encodedPath) {
        try {
          const path = decodeURIComponent(encodedPath);
          const splitPath = path.split('/');
          let exerciseInstance = {};
          let dirObj = liveStudyApp.populated;
          for (let subPath of splitPath) {
            if (!subPath) { continue; }
            if (subPath.includes('.js')) {
              exerciseInstance = dirObj.populated.find(file => file.path.rel === '/' + subPath);
              break;
            } else if (dirObj.path && dirObj.path === '/' + subPath) {
              continue;
            } else if (dirObj.dirs) {
              dirObj = dirObj.dirs.find(dir => dir.path === '/' + subPath);
            }
          }
          exercise = exerciseInstance
        } catch (err) {
          exercise = findFirstExercise(liveStudyApp.populated);
        }
      } else {
        exercise = findFirstExercise(liveStudyApp.populated);
      }
      if (!exercise || !exercise.load) {
        exercise = findFirstExercise(liveStudyApp.populated);
      }
      exercise.load((err, code) => {
        history.replaceState(null, "", `?path=${encodeURIComponent(exercise.path.abs)}`);
        exercise.monacoModel.setValue(code);
        editor.setModel(exercise.monacoModel);
        if (index.config.language === 'html') {
          document.getElementById('output').src = "data:text/html;charset=utf-8," + encodeURIComponent(code);
        }
      });
      document.getElementById('current-path').innerHTML = exercise.path.abs;
      liveStudyApp.active = exercise;


      const view = liveStudyApp.render(exercise);
      document.getElementById('drop-down').appendChild(view);

      if (url.searchParams.get("code")) {

        document.getElementById('current-path').innerHTML = 'permalink';
        const code = decodeURIComponent(url.searchParams.get("code"));
        setTimeout(() => {
          editor.setValue(code)
          const encoded = encodeURIComponent(code)
            .replace(/\(/g, '%28')
            .replace(/\)/g, '%29')
            .replace(/%09/g, '%20%20');
          // liveStudyApp.permalinkInput.value = liveStudyApp.permalink + '?code=' + encoded;
          history.replaceState(null, "", `?code=${encoded}`);
          if (index.config.language === 'html') {
            document.getElementById('output').src = "data:text/html;charset=utf-8," + encodeURIComponent(code);
          }
        }, 50);
      } else {
        document.getElementById('current-path').innerHTML = exercise.path.abs;
      }
    })
    .catch(err => console.error(err));

};


