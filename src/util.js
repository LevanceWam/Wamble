exports.debug = (title, obj) => {
  // const fs = require('fs');

  const ts = new Date();
  const seperator = '\n------------------------------\n';
  require('terminal-colors');

  const outputTERM = seperator.lightCyan + title.magenta.underline + ' ' + obj + '\n' + seperator.lightCyan + ' ' + ts;

  // const outputFILE = seperator + title + ' ' + obj + '\n' + seperator + ' ' + ts;

  if (process.env.DEBUG) {
    console.log(outputTERM);
  }
};
