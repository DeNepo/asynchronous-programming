import studyIn from './study-in.js'

export default (() => {
  function Exercise(path, dirPath, userConfig = {}) {
    this.language = 'js';
    if (typeof path !== 'string') {
      throw new TypeError('path must be a string');
    };
    this.path = {
      rel: path,
      abs: dirPath ? (dirPath + path).split('//').join('/') : null,
    };
    this.code = null;
    this.monacoModel = monaco.editor.createModel('', 'javascript');
    this.monacoModel.updateOptions({ tabSize: 2 });
    this.config = Object.assign({}, Exercise.defaultConfig, userConfig);
    const defaultButtonConfig = Exercise.defaultConfig.buttons;
    const defaultButtonConfigKeys = defaultButtonConfig
      .reduce((keys, entry) => {
        keys.push(Object.keys(entry)[0]);
        return keys;
      }, []);
    const userButtonConfigKeys = userConfig.buttons
      .reduce((keys, entry) => {
        keys.push(Object.keys(entry)[0]);
        return keys;
      }, []);
    defaultButtonConfigKeys
      .forEach((key) => {
        if (!userButtonConfigKeys.includes(key)) {
          userConfig.buttons.push(defaultButtonConfig.find(entry => Object.keys(entry)[0] === key));
        }
      });
    this.config.buttons = userConfig.buttons;
  }

  Exercise.defaultConfig = {
    loopGuard: {
      active: false,
      max: 20
    }
  };

  Object.defineProperty(Exercise.defaultConfig, 'buttons', {
    get: () => Object.keys(studyIn)
      .filter(key => typeof studyIn[key] === 'function')
      .reduce((config, key) => {
        if (key === 'console' || key === 'debugger') {
          config.push({ [key]: true });
        } else {
          config.push({ [key]: false });
        }
        return config;
      }, [])
  });


  Exercise.prototype.load = function (cb) {
    const newModel = monaco.editor.createModel('', 'javascript');
    this.code = newModel;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '.' + this.path.abs);
    xhr.responseType = 'text';
    xhr.send();
    xhr.onload = () => {
      if (xhr.status != 200) {
        console.error(`${xhr.status}: ${xhr.statusText}`);
        cb && cb(xhr, null)
      } else {
        this.code = xhr.response;
        cb && cb(null, this.code);
      }
    }
    xhr.onerror = function (err) {
      console.error(err);
      cb && cb(err, null);
    }
  }

  Exercise.insertLoopGuards = (code, maxIterations) => {
    let loopNum = 0;
    return code.replace(/for *\(.*\{|while *\(.*\{|do *\{/g, loopHead => {
      const id = ++loopNum;
      return `let loopGuard${id} = 0;\n${loopHead}\nif (++loopGuard${id} > ${maxIterations}) { throw new Error('Loop exceeded ${maxIterations} iterations'); }\n`
    });
  }

  Exercise.prototype.studyWith = function (vizTool, whichCode, loopGuard = this.config.loopGuard) {
    const title = `====  ${this.path.rel}: ${vizTool}  ====`;
    const padding = Array.from(title).map(() => '-').join('');
    console.log(`%c\n\n${padding}\n${title}\n${padding}\n`, 'font-weight:bold;');
    let code = whichCode === 'monacoModel'
      ? this.monacoModel.getValue()
      : this.code;

    if (loopGuard.active) {
      const unFormatted = Exercise.insertLoopGuards(code, loopGuard.max);

      const preLoop = editor.getValue();
      editor.getModel().setValue(unFormatted)
      editor.trigger('anyString', 'editor.action.formatDocument');
      setTimeout(() => {
        code = editor.getValue();
        editor.setValue(preLoop);
        studyIn[vizTool](code);
      }, 1000);
    } else {
      studyIn[vizTool](code);
    };


  }

  Object.freeze(Exercise);

  return Exercise;
})();
