const ts = new Date();
const seperator = '\n------------------------------\n';
const fs = require('fs');
require('terminal-colors');

exports.log = (title, obj) => {
  const goodoutputTERM = seperator.cyan + title.lightCyan.underline + ' ' + obj + '\n' + seperator.cyan + ' ' + ts;
  const outputTERM = seperator.cyan + title.lightCyan.underline + seperator.cyan + ' ' + ts;
  if (process.env.DEBUG) {
    if (obj === undefined) {
      console.log(outputTERM);
    } else {
      console.log(goodoutputTERM);
    }
  }
};

exports.warn = (title, obj) => {
  const goodoutputTERM = seperator.green + title.lightGreen.underline + ' ' + obj + '\n' + seperator.green + ' ' + ts;
  const outputTERM = seperator.yellow + title.lightYellow.underline + seperator.yellow + ' ' + ts;
  if (process.env.DEBUG) {
    if (obj === undefined) {
      console.warn(outputTERM);
    } else {
      console.log(goodoutputTERM);
    }
  }
};

exports.error = (title, obj) => {
  const goodoutputTERM = seperator.green + title.lightGreen.underline + ' ' + obj + '\n' + seperator.green + ' ' + ts;
  const outputTERM = seperator.red + title.lightRed.underline + seperator.red + ' ' + ts;
  if (process.env.DEBUG) {
    if (obj === undefined) {
      console.error(outputTERM);
    } else {
      console.log(goodoutputTERM);
    }
  }
};
