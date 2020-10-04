import ExerciseJS from './javascript/exercise.js';

export default class LiveStudy {

  title = 'Live Study';
  virDir = {};
  populated = {};
  active = null;
  editor = null;
  buttonsContainer = null;
  language = '';
  loopGuard = {
    active: false,
    max: 20
  }
  clearAll = {
    intervals: false,
    timeouts: false
  }

  constructor(index, editor, buttonsContainer) {
    this.virDir = index;
    this.populated = LiveStudy.populate(index, index.path, index.config);
    this.title = index.config.title;
    this.editor = editor;
    this.buttonsContainer = buttonsContainer;
    if (index.config.loopGuard) {
      this.loopGuard = index.config.loopGuard;
    }
  }


  static populate(data, path, config) {
    const Exercise = ExerciseJS;
    const copy = Object.assign({}, data);
    if (data.files) {
      copy.populated = data.files
        .map(file => new Exercise(file.path, path, config));
    };
    if (data.dirs) {
      copy.dirs = data.dirs.map(subDir => LiveStudy.populate(subDir, path + subDir.path, subDir.config ? Object.assign({}, config, subDir.config) : config));
    };
    return copy;
  }

  renderExercises(virDir = this.populated) {

    if (virDir.ignore) {
      const dirName = document.createElement('div');
      dirName.innerHTML = virDir.path + ' (node exercises)';
      return dirName;
    }

    const detailsEl = document.createElement('details');
    detailsEl.style = 'margin-top: 1%; margin-bottom: 1%;';

    const summaryEl = document.createElement('summary');
    summaryEl.innerHTML = virDir.path;
    detailsEl.appendChild(summaryEl);

    const subListEl = document.createElement('ul');
    subListEl.style = 'padding-left: 1em';
    if (virDir.populated) {
      virDir.populated.forEach(exercise => {
        // const exerciseEl = exercise.render();
        const exerciseEl = document.createElement('button');
        exerciseEl.innerHTML = exercise.path.rel;
        exerciseEl.onclick = () => {
          history.replaceState(null, "", `?path=${encodeURIComponent(exercise.path.abs)}`);
          document.getElementById('current-path').innerHTML = exercise.path.abs;
          this.editor.setModel(exercise.monacoModel);

          if (exercise.code === null) {
            exercise.load((err, code) => {
              exercise.monacoModel.setValue(code);
              this.renderStudyButtons(exercise);
              if (exercise.language === 'html') {
                document.getElementById('output').src = "data:text/html;charset=utf-8," + encodeURIComponent(code);
              }
            });
          } else {
            this.renderStudyButtons(exercise);
            if (exercise.language === 'html') {
              document.getElementById('output').src = "data:text/html;charset=utf-8," + encodeURIComponent(exercise.code);
            }
          }
          this.active = exercise;
        }

        const loadChangesEl = document.createElement('button');
        loadChangesEl.innerHTML = 'reload';
        loadChangesEl.onclick = () => {
          exercise.load((err, code) => {
            exercise.monacoModel.setValue(code);
            this.editor.setModel(exercise.monacoModel);
            this.renderStudyButtons(exercise);
            if (exercise.language === 'html') {
              document.getElementById('output').src = "data:text/html;charset=utf-8," + encodeURIComponent(code);
            }
          });
        }

        const exerciseContainer = document.createElement('div');
        exerciseContainer.style = 'margin-top: 0.5em; margin-bottom: 0.5em;';
        exerciseContainer.appendChild(exerciseEl);
        exerciseContainer.appendChild(loadChangesEl);
        subListEl.appendChild(exerciseContainer);
      });
    };
    if (virDir.dirs) {
      virDir.dirs.forEach(subDir => {
        const subDirEl = this.renderExercises(subDir);
        subListEl.appendChild(subDirEl);
      });
    };
    detailsEl.appendChild(subListEl);
    return detailsEl;
  }


  renderLoopGuardEl(loopGuard = this.loopGuard) {

    const withLoopGuard = document.createElement('input');
    withLoopGuard.setAttribute('type', 'checkbox');
    withLoopGuard.checked = loopGuard.active;
    withLoopGuard.onchange = () => this.loopGuard.active = !this.loopGuard.active;

    const loopGuardInput = document.createElement('input');
    loopGuardInput.value = loopGuard.max;
    loopGuardInput.name = 'max';
    loopGuardInput.style = 'width:3em';
    loopGuardInput.onchange = () => loopGuard.max = Number(loopGuardInput.value);

    const loopGuardForm = document.createElement('form');
    loopGuardForm.style = 'display:inline-block;';
    loopGuardForm.appendChild(withLoopGuard);
    loopGuardForm.appendChild(document.createTextNode('loop guard: '));
    loopGuardForm.appendChild(loopGuardInput);

    return loopGuardForm;
  }

  renderClearIntervals() {
    const button = document.createElement('button');
    button.innerHTML = 'clear scheduled';
    button.addEventListener('click', clearAllScheduledFactory());
    return button;
  }

  renderStudyButtons(exercise) {
    const container = document.createElement('div');

    // const clearConsoleButton = document.createElement('button');
    // clearConsoleButton.innerHTML = 'clear console';
    // clearConsoleButton.onclick = () => console.clear();
    // container.appendChild(clearConsoleButton);

    const formatButton = document.createElement('button');
    formatButton.innerHTML = 'format code';
    formatButton.onclick = () => this.editor.trigger('anyString', 'editor.action.formatDocument');
    container.appendChild(formatButton);


    const permalinkButton = document.createElement('button');
    permalinkButton.innerHTML = 'permalink';
    permalinkButton.onclick = () => {
      const text = window.location.origin + window.location.pathname + '?code=' + encodeURIComponent(this.editor.getValue())
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/%09/g, '%20%20');

      if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
      }
      navigator.clipboard.writeText(text).then(function () {
        // console.log('Async: Copying to clipboard was successful!');
      }, function (err) {
        // console.error('Async: Could not copy text: ', err);
        fallbackCopyTextToClipboard(text);
      });

      function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          // console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
        window.scrollTo(0, 0);
      };

      alert("copied permalink");

    }
    container.appendChild(permalinkButton);


    /// -------------------

    const parsonizeButton = document.createElement('button');
    parsonizeButton.style = 'display: inline;';
    parsonizeButton.appendChild(document.createTextNode('parsonize selection'));
    let onceClicked = false;
    parsonizeButton.onclick = async () => {

      if (!onceClicked) {

        onceClicked = true;

        [
          '../app/parsonizer/component.js',
          '../app/parsonizer/jquery.min.js',
          '../app/parsonizer/lis.js',
          '../app/parsonizer/prettify.js',
          '../app/lib/strip-comments.js',
        ].forEach(path => {
          var newScript = document.createElement("script");
          newScript.src = path;
          document.body.appendChild(newScript);
        });
        [
          "../app/parsonizer/parsons.css",
          "../app/parsonizer/prettify.css",
        ].forEach(path => {
          var newLink = document.createElement("link");
          newLink.rel = 'stylesheet';
          newLink.href = path;
          document.body.appendChild(newLink);
        });

        setTimeout(() => {
          [
            '../app/parsonizer/jquery-ui.min.js',
            '../app/parsonizer/jquery.ui.touch-punch.min.js',
            '../app/parsonizer/parsons-de-underscored.js',
          ].forEach(path => {
            var newScript = document.createElement("script");
            newScript.src = path;
            document.body.appendChild(newScript);
          });
        }, 800);
        setTimeout(theParsonsRest, 1000);
        return;
      }
      // render and append a new js-parsons component

      theParsonsRest();

    };
    container.appendChild(parsonizeButton);


    const theParsonsRest = () => {

      const code = getSelection();
      if (!code) {
        alert('no code selected');
        return;
      }

      const parsonsComponent = new JSParsons(strip(code));
      parsonsComponent.style = 'height:90vh; width:100vw;';

      const modalId = Math.random().toString(36).substring(7);
      const modalContainer = document.createElement('div');
      modalContainer.id = modalId;
      modalContainer.style = 'height:90vh; width:100vw;';
      modalContainer.className = 'modal-window';
      modalContainer.innerHTML = `<div>
        <a href="#modal-close" title="Close" class="modal-close">close &times;</a>
      </div>`;
      modalContainer.firstElementChild.appendChild(parsonsComponent);
      modalContainer.firstElementChild.style = 'height:90vh; width:100vw;';
      modalContainer.firstElementChild.firstElementChild.addEventListener('click', () => document.body.removeChild(modalContainer));
      document.body.appendChild(modalContainer);
      const url = location.href;
      location.href = "#" + modalId;
      history.replaceState(null, null, url);

    }

    const getSelection = () => {
      const editorSelection = editor.getSelection();
      const editorSelectionEntries = Object.entries(editorSelection);
      const columnEntries = [];
      const lineEntries = [];
      for (const entry of editorSelectionEntries) {
        if (entry[0].includes('Column')) {
          columnEntries.push(entry);
        } else {
          lineEntries.push(entry);
        }
      }
      const firstLine = lineEntries[0][1];
      const firstColum = columnEntries[0][1];
      const noSelection = columnEntries.every((entry) => entry[1] === firstColum)
        && lineEntries.every((entry) => entry[1] === firstLine);


      if (noSelection) {
        return '';
      }

      let selection = '';
      const start = editorSelection.startLineNumber;
      const end = editorSelection.endLineNumber;
      for (let i = start; i <= end; i++) {
        selection += editor.getModel().getLineContent(i) + '\n';
      }

      return selection;
    }


    /// -----------------------

    container.appendChild(document.createElement('br'));


    container.appendChild(document.createElement('br'));

    // container.appendChild(document.createTextNode('run code: '));

    for (let vizTool of exercise.config.buttons) {
      const name = Object.keys(vizTool)[0];
      const include = Object.values(vizTool)[0];
      if (include) {
        const vizToolButton = document.createElement('button');
        vizToolButton.style = 'padding-right: .5em';
        vizToolButton.innerHTML = name;
        vizToolButton.onclick = () => {
          exercise.studyWith(Object.keys(vizTool)[0], 'monacoModel', exercise.config.loopGuard || this.loopGuard)
        };
        container.appendChild(vizToolButton);
      }
    }

    this.buttonsContainer.innerHTML = '';
    this.buttonsContainer.appendChild(container);

    if (this.virDir.config.language !== 'html' && exercise.config.loopGuard) {
      container.appendChild(this.renderLoopGuardEl(exercise.config.loopGuard || this.loopGuard));
    }
    if (exercise.config.clearScheduled) {
      container.appendChild(this.renderClearIntervals());
    }
  }

  render(exercise = this.active) {
    const container = document.createElement('div');

    const renderedExercises = this.renderExercises();
    const unWrapped = renderedExercises.lastChild;
    const divContainer = document.createElement('div');
    for (let child of Array.from(unWrapped.children)) {
      divContainer.appendChild(child);
    }
    container.appendChild(divContainer);

    if (exercise) {
      this.renderStudyButtons(exercise);
    } else {
      const findFirstExercise = (virDir) => {
        if (virDir.populated) {
          return virDir.populated[0]
        } else if (virDir.dirs) {
          return findFirstExercise(virDir.dirs[0]);
        }
      }
      this.renderStudyButtons(findFirstExercise(this.populated));
    }

    return container;
  }
}
