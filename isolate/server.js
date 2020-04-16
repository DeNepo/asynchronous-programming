const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const LOG_DIR = __dirname + '/server-logs';
const LOG_FILE = `/${(new Date()).toJSON()}.txt`;
const LOGS_LIMIT = 20;
let cycles = 0;

try {
  fs.accessSync(LOG_DIR);
  const logs = fs.readdirSync(LOG_DIR);
  if (logs.length > LOGS_LIMIT) {
    console.log('--- clearing ' + (logs.length - LOGS_LIMIT) + ' old logs ---');
    for (let i = 0; i < logs.length - LOGS_LIMIT; i++) {
      fs.unlinkSync(LOG_DIR + '/' + logs[i]);
    };
  };
} catch (err) {
  console.log('--- creating ./server-logs directory ---');
  fs.mkdirSync(LOG_DIR);
};

const log = (msg) => {
  // more readable callstack, and to practice finding own files
  const cleanedMsg = msg.replace(__dirname, ' [ ... ] ');
  console.log(cleanedMsg);
  fs.appendFileSync(LOG_DIR + LOG_FILE, cleanedMsg + '\n');
};

const mime = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
};


console.log('\n--- launching server ---\n');

const handleRequest = (req, res) => {
  const cycle = ++cycles;

  log(`${cycle}. request: ${req.method} ${req.url}`);

  let filePath = req.url === '/'
    ? './index.html'
    : '.' + req.url;

  const extension = String(path.extname(filePath)).toLowerCase();
  const contentType = mime[extension] || 'application/octet-stream';

  const serveFile = (error, content) => {

    let logMsg = '';
    if (error) {
      if (error.code === 'ENOENT') {
        const html404 = `<!DOCTYPE html><html><head><title>404</title></head><body><h1>404: ${filePath}</h1></body></html>`;
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(html404, 'utf-8');
        logMsg = 'response: 404 ' + filePath;
      } else {
        const errMsg = `Server error: ${error.code} ..`;
        res.writeHead(500);
        res.end(errMsg);
        res.end();
        logMsg = errMsg;
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
      logMsg = 'response: ' + filePath;
    };
    log(cycle + '. ' + logMsg);
  };

  fs.readFile(filePath, serveFile);

};

const listeningCB = (err) => {
  if (err) {
    log(err.stack);
  } else {
    log('Server running at http://localhost:' + PORT + '/');
  };
}

http
  .createServer(handleRequest)
  .listen(PORT, listeningCB);


process.on('exit', function onExit(code) {
  log('process.exit with code ' + code);
});
process.on('SIGINT', function onSIGINT() {
  log('Ctrl-C...');
  process.exit(2);
});
process.on('uncaughtException', function onUncaughtException(e) {
  log('- uncaughtException -\n' + e.stack);
  process.exit(99);
});


// modified from https://github.com/javascriptteacher/node/
