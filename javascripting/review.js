const CONFIG = {
  user: 'hackyourfuturebelgium',
  repo: 'encapsulation/javascripting',
  root: process.argv[2] || './',
  ignore: ['.git', 'review.js', 'node_modules'],
  maxIterations: 1000,
  now: (new Date()).toJSON()
}
CONFIG.source = `https://github.com/${CONFIG.user}/${CONFIG.repo}/`;

const fs = require("fs");
const path = require("path");


console.log('\n--- scanning for all .js files ---\n');

const registerDirectory = function (dirPath, oldPath) {
  paths = fs.readdirSync(dirPath)

  const arrayOfFiles = [];
  const arrayOfDirs = [];
  for (let nextPath of paths) {
    if (CONFIG.ignore.indexOf(nextPath) !== -1) continue;

    const isDirectory = fs.statSync(dirPath + '/' + nextPath).isDirectory();
    if (!isDirectory && path.extname(nextPath) !== '.js') continue;

    if (isDirectory) {
      const subDirs = registerDirectory(dirPath + '/' + nextPath, dirPath);
      arrayOfDirs.push(subDirs);
    } else {
      arrayOfFiles.push(path.join(nextPath))
    }
  }

  return {
    path: dirPath
      .split(oldPath).join('')
      .split('/').join('')
      + '/',
    files: arrayOfFiles.length > 0
      ? arrayOfFiles
      : null,
    dirs: arrayOfDirs.length > 0
      ? arrayOfDirs
      : null
  }
}

const allJsFiles = registerDirectory(CONFIG.root);
if (process.argv[2]) {
  allJsFiles.path = './' + allJsFiles.path;
}
// console.log(JSON.stringify(allJsFiles, null, '  '));


console.log('\n--- evaluating .js files ---\n');


const interpret = (key, value) => key === 'status'
  ? value === -1 ? 'not evaluated'
    : value === 0 ? 'no assertions'
      : value === 1 ? 'pass'
        : value === 2 ? 'fail'
          : value === 3 ? 'warning'
            : value === 4 ? 'error'
              : value === 5 ? 'syntaxError'
                : 'unknown status'
  : value;


const evaluateFile = (path) => {
  console.log('\n ' + path + '\n');

  let status = -1;
  let report = [];

  const nativeAssert = console.assert;
  let hasFailed = false;
  console.assert = function () {
    arguments = Array.from(arguments);
    nativeAssert(...arguments);
    report.push({
      assertion: arguments
    });
    if (!hasFailed) {
      status = arguments[0] ? 1 : 2;
      hasFailed = status === 2 ? true : false;
    }
  }

  const rawCode = fs.readFileSync(path, 'utf-8');
  let number_of_loops = 0;
  const loopProtectedCode = rawCode
    .replace(/for *\(.*\{|while *\(.*\{|do *\{/g, loopHead => {
      number_of_loops++;
      return `let _${number_of_loops} = 0; ${loopHead} if (++_${number_of_loops} > ${CONFIG.maxIterations}) {throw 'over ${CONFIG.maxIterations} iterations'};`
    });
  fs.writeFileSync(path, loopProtectedCode);
  try {
    require(path); // using require for cleaner callstack
    // const code = fs.readFileSync(path, 'utf-8');
    // eval(code);
  } catch (thrown) {
    console.log(thrown)
    if (typeof thrown === 'string') {
      status = 3;
      report.push({
        warning: thrown
      });
    } else {
      if (thrown.stack.includes('SyntaxError:')) {
        status = 5;
      } else {
        status = 4;
      };
      report.push({
        error: thrown.stack
          .split(__dirname).join(' [...] ')
      });
    };
  }
  console.assert = nativeAssert;
  fs.writeFileSync(path, rawCode);

  if (status === -1) status = 0;

  return { path, status, source: rawCode, report };
}


const evaluateDirectory = (toReport, path) => {
  path = path || toReport.path || './';
  console.log('\n ' + path);

  const files = toReport.files
    ? toReport.files
      .map(fileName => {
        const fileReport = evaluateFile(path + fileName);
        return fileReport;
      })
    : toReport.files;

  const dirs = toReport.dirs
    ? toReport.dirs
      .map(dir => evaluateDirectory(dir, path + dir.path))
    : toReport.dirs;

  const statusOf = entries => entries
    ? entries
      .reduce((stat, entry) => entry.status > stat
        ? entry.status
        : stat,
        -1)
    : -1;

  const dirsStatus = statusOf(dirs);
  const filesStatus = statusOf(files);

  const status = dirsStatus >= filesStatus
    ? dirsStatus
    : filesStatus;

  return {
    path,
    status,
    files,
    dirs,
  };
}


const evaluation = evaluateDirectory(allJsFiles);

// fs.writeFileSync('report.json', JSON.stringify(evaluation, null, '  '));
// console.log(JSON.stringify(evaluation, null, '  '));



console.log('\n--- generating REVIEW.md\'s ---\n');


const generateFileSectionMd = (fileReport) => {

  const divider = '---';

  const relPath = fileReport.path.split('/').pop();
  const header = `## ${relPath} - ${interpret('status', fileReport.status)}`;

  const sourceLink = `* [review source](${relPath})\n`;

  const renderedReport = fileReport.report
    .map(entry => {
      if (entry.error) {
        return entry.error.includes('SyntaxError')
          ? entry.error
          : entry.error;
      }
      if (entry.warning) {
        return 'warning: ' + entry.warning;
      }
      if (entry.assertion) {
        const assertion = entry.assertion[0]
          ? '+ PASS: '
          : '- FAIL: ';
        const message = entry.assertion
          .slice(1)
          .toString();
        return assertion + message;
      }
    })
    .reduce((all, next) => all + next + '\n', '');

  const report = renderedReport
    ? '```txt\n' + renderedReport + '```\n\n'
    : '';

  const source = fileReport.source
    ? '```js\n' + fileReport.source + '\n```\n\n'
    : '';

  const topLink = '[TOP](#' + CONFIG.repo + ')';

  return divider + '\n\n'
    + header + '\n\n'
    + sourceLink + '\n'
    + report
    + source
    + topLink + '\n';
}



const generateREVIEWs = (report) => {

  if (report.dirs) {
    report.dirs
      .forEach(report => generateREVIEWs(report));
  }

  const dirName = path => {
    const pathArr = path
      .slice(0, path.length - 1)
      .split('/');
    return pathArr[pathArr.length - 1] + '/';
  }

  const top = `# ${CONFIG.repo}/\n\n`
    + `> ${(new Date(CONFIG.now)).toLocaleString()} \n\n`
    + `## ${dirName(report.path)} - ${interpret('status', report.status)}\n\n`;

  const fileList = report.files
    ? report.files
      .map(file => {
        const relPath = file.path.split('/').pop();
        const localHref = relPath.split('.').join('');
        return `* [${relPath}](#${localHref}---${interpret('status', file.status).split(' ').join('-')}) - ${interpret('status', file.status)}`;
      })
      .reduce((list, li) => list + li + '\n', '')
    : '';

  const filesIndex = fileList
    ? `### files\n\n` + fileList + '\n'
    : '';

  const dirList = report.dirs
    ? report.dirs
      .map(dir => {
        const relPath = dirName(dir.path);
        return `* [${relPath}](./${relPath}REVIEW.md) - ${interpret('status', dir.status)}`;
      })
      .reduce((list, li) => list + li + '\n', '')
    : '';

  const subDirIndex = dirList
    ? `### sub-directories\n\n` + dirList + '\n'
    : '';


  const index = '* [../REVIEW.md](../REVIEW.md)\n\n'
    + filesIndex
    + subDirIndex;

  const fileSections = !report.files
    ? ''
    : report.files
      .map(fileReport => generateFileSectionMd(fileReport))
      .reduce((body, section) => body + section + '\n', '');

  const newREVIEW = top
    + index
    + fileSections;

  fs.writeFileSync(
    report.path + 'REVIEW.md',
    newREVIEW,
    // (err) => { if (err) { console.log(err) } }
  );

};

generateREVIEWs(evaluation);

const topLevelREVIEWSource = fs.readFileSync('./REVIEW.md', 'utf-8');
const cleanedTopLevelREVIEWSource = topLevelREVIEWSource
  .split('* [../REVIEW.md](../REVIEW.md)\n').join('');
fs.writeFile('./REVIEW.md',
  cleanedTopLevelREVIEWSource,
  (err) => { if (err) { console.log(err) } }
);

