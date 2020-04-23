export default class Project {

  path = {
    rel: null,
    abs: null
  };
  projDir = {};

  constructor(file, dirPath, projDir) {
    this.projDir = projDir;
    if (file && typeof file.path !== 'string') {
      throw new TypeError('file.path must be a string');
    };
    this.path.rel = projDir.path + file.path;
    if (dirPath) {
      this.path.abs = dirPath + file.path;
    };
    this.isExample = file.isExample;
  }

  render() {

    const runButtonEl = document.createElement('button');
    runButtonEl.innerHTML = this.path.rel.replace('/index.html', '');
    runButtonEl.onclick = () => window.open(this.path.abs, '_blank');

    const container = document.createElement('text');
    container.appendChild(runButtonEl);

    return container;
  }
}
