const ts = new Date();
const seperator = '\n------------------------------\n';
const fs = require('fs');
require('terminal-colors');

exports.debug = (title, obj) => {
  const goodoutputTERM = seperator.lightCyan + title.magenta.underline + ' ' + obj + '\n' + seperator.lightCyan + ' ' + ts;
  const outputTERM = seperator.lightCyan + title.magenta.underline + seperator.lightCyan + ' ' + ts;
  // const outputFILE = seperator + title + ' ' + obj + '\n' + seperator + ' ' + ts;
  if (process.env.DEBUG) {
    if (obj === undefined) {
      console.log(outputTERM);
      fs.appendFile('logs/logfile.log', title, () => {
      });
    } else {
      console.log(goodoutputTERM);
      fs.appendFile('logs/logfile.log', title, obj, () => {
      });
    }
  }
};
