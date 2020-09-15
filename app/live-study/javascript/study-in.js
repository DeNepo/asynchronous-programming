
export default {
  console: function (code) {
    const execute = eval;
    execute(code);
  },
  debugger: function (code) {
    const stepThrough = eval;
    const debuggered = "debugger; // injected by LiveStudy\n\n" + code;
    stepThrough(debuggered);
  },
  jsTutor: function (code) {
    const encodedJST = encodeURIComponent(code);
    const sanitizedJST = this.utils.sanitize(encodedJST);
    const jsTutorURL = "http://www.pythontutor.com/live.html#code=" + sanitizedJST + "&cumulative=false&curInstr=2&heapPrimitives=false&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";
    window.open(jsTutorURL, '_blank');
  },
  loupe: function (code) {
    const encoded = encodeURIComponent(btoa(code));
    const loupeURL = "http://latentflip.com/loupe/?code=" + encoded + "!!!"
    window.open(loupeURL, '_blank');
  },
  promisees: function (code) {
    const encoded = encodeURIComponent(code).replace(/%20/g, '+');
    const URL = "https://bevacqua.github.io/promisees/#code=" + encoded;
    window.open(URL, '_blank');
  },
  flowViz: function (code) {
    const encoded = encodeURIComponent(code);
    const sanitized = this.utils.sanitize(encoded);
    const URL = 'https://janke-learning.org/flowviz?snippet=' + sanitized;
    window.open(URL, '_blank');
  },
  parsonizer: function (code) {
    const encoded = encodeURIComponent(code);
    const sanitized = this.utils.sanitize(encoded);
    const URL = 'https://janke-learning.org/parsonizer?code=' + sanitized;
    window.open(URL, '_blank');
  },
  jsHint: function (code) {
    const encoded = encodeURIComponent(code);
    const sanitized = this.utils.sanitize(encoded);
    const URL = 'https://janke-learning.org/linter?snippet=' + sanitized;
    window.open(URL, '_blank');
  },
  spot: function (code) {
    const encoded = encodeURIComponent(code);
    const sanitized = this.utils.sanitize(encoded);
    const URL = 'https://janke-learning.org/spot?snippet=' + sanitized;
    window.open(URL, '_blank');
  },
  shuffle: function (code) {
    const encoded = encodeURIComponent(code);
    const sanitized = this.utils.sanitize(encoded);
    const URL = 'https://janke-learning.org/shuffle?snippet=' + sanitized;
    window.open(URL, '_blank');
  },
  // staticStudy: function(code) {
  //   const encoded = encodeURIComponent(code);
  //   const sanitized = this.utils.sanitize(encoded);
  //   const URL = 'https://janke-learning.org/static-study?snippet=' + sanitized;
  //   window.open(URL, '_blank');
  // },
  codeAlong: function (code) {
    const encoded = encodeURIComponent(code);
    const sanitized = this.utils.sanitize(encoded);
    const URL = 'https://janke-learning.org/code-along?snippet=' + sanitized;
    window.open(URL, '_blank');
  },
  babel: async function (code) {
    // conditionally load this function since it's large and not often used
    if (!this.utils.compressToBase64) {
      const { compressToBase64 } = await import('./utils/LZStringCompressToBase64.js');
      this.utils.compressToBase64 = compressToBase64;
    }
    // pulled from the site's source
    const encoded = this.utils.compressToBase64(code)
      .replace(/\+/g, "-") // Convert '+' to '-'
      .replace(/\//g, "_") // Convert '/' to '_'
      .replace(/=+$/, ""); // Remove ending '=';
    const URL = `https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=${encoded}&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=true&sourceType=module&lineWrap=true&presets=es2015%2Cstage-3&prettier=false&targets=&version=7.9.0&externalPlugins=`
    window.open(URL, '_blank');
  },
  esprima: function (code) {
    const encoded = encodeURIComponent(code);
    const URL = 'https://esprima.org/demo/parse.html?code=' + encoded;
    window.open(URL, '_blank');
  },
  tsTutor: function (code) {
    const encodedTST = encodeURIComponent(code);
    const sanitizedTST = this.utils.sanitize(encodedTST);
    const tsTutorURL = `http://www.pythontutor.com/visualize.html#code=${sanitizedTST}&cumulative=false&curInstr=0&heapPrimitives=false&mode=display&origin=opt-frontend.js&py=ts&rawInputLstJSON=%5B%5D&textReferences=false`;
    window.open(tsTutorURL, '_blank');
  },
  utils: {
    sanitize: (str) => str
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
      .replace(/%09/g, '%20%20'),
    // large code, to be initialized when needed. ie. babel
    compressToBase64: null,
  }
};
