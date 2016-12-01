module.exports = function (wallaby) {
  return {
    files: [
      {pattern: "node_modules/jquery/dist/jquery.js", instrument: false},
      {pattern: "node_modules/jquery/lodash.js", instrument: false},
      {pattern: "node_modules/immutable/dist/immutable.js", instrument: false},
      {pattern: "node_modules/babel-polyfill/dist/polyfill.js", instrument: false},
      "src/**/*.js"
    ],

    tests: [
      "test/**/*.spec.js"
    ],

    compilers: {
      "**/*.js": wallaby.compilers.babel()
    },
    debug: true
  };
};
