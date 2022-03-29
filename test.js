var conventionalChangelogCore = require('conventional-changelog-core');

conventionalChangelogCore()
  .pipe(process.stdout); // or any writable stream