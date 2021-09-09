'use strict';

const fs = require('fs');
const path = require('path');

const { cruise } = require('dependency-cruiser');
const { renderGraphFromSource } = require('graphviz-cli');

const cruiserOptions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '..', '.dependency-cruiser.json'),
    'utf-8',
  ),
);

const passedPath = process.argv[2];

const ROOT = path.join(__dirname, '..', passedPath || '');

const CRUISABLE_PATH_NAMES = ['src'];
const IGNORABLE_PATHS = ['.git', 'node_modules'];

if (!fs.existsSync(ROOT)) {
  throw new Error(`/${passedPath} is not a path in this directory`);
}

const findCruisablePaths = async (dirPath = '') => {
  if (IGNORABLE_PATHS.includes(dirPath.split(path.sep).pop())) {
    return [];
  }

  if (
    CRUISABLE_PATH_NAMES.some(name =>
      dirPath
        .split(path.sep)
        .pop()
        .includes(name),
    )
  ) {
    return [dirPath];
  }

  if (
    dirPath !== path.join(__dirname, '..') &&
    fs.existsSync(path.join(dirPath, 'package.json'))
  ) {
    return [dirPath];
  }

  const pathsToCruise = [];

  const contents = fs.readdirSync(dirPath);
  for (const thing of contents) {
    const absThingPath = path.join(dirPath, thing);
    if (fs.lstatSync(absThingPath).isDirectory()) {
      const cruisables = findCruisablePaths(absThingPath);
      pathsToCruise.push(cruisables);
    }
  }

  return Promise.all(pathsToCruise);
};

findCruisablePaths(ROOT)
  .then(unflatPaths => unflatPaths.flat(Infinity))
  .then(async paths => {
    const cruised = paths.map(path => ({
      path,
      graph: cruise([path], cruiserOptions).output,
    }));

    for (const project of cruised) {
      renderGraphFromSource({ input: project.graph }, { format: 'svg' })
        .then(svgGraph => {
          const graphBasePath = path.join(
            project.path,
            project.path.includes('src') ? '..' : '',
            'dependency-graph',
          );
          fs.writeFile(`${graphBasePath}.svg`, svgGraph, 'utf-8', err => {
            console.log(project.path);
            err && console.error(err);
          });
        })
        .catch(err => console.error(err));
    }

    // await import(
    //   '../node_modules/dependency-cruiser/bin/wrap-stream-in-html.js'
    // );

    // for (const path of paths) {
    //   console.log(path);
    // }
  })
  .catch(err => console.error(err));
