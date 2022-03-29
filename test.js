var conventionalChangelogCore = require('conventional-changelog-core');
const { Writable } = require('stream');

const outStream = new Writable({
    write(chunk, encoding, callback) {
      console.log("input", chunk.toString());
      callback();
    }
  });

conventionalChangelogCore()
  .pipe(outStream); // or any writable stream