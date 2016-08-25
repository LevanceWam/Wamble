const ts = new Date();
const seperator = '\n------------------------------\n';
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
      console.warn(goodoutputTERM);
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
      console.error(goodoutputTERM);
    }
  }
};

// Version bumper
exports.versBumper = (version, tag) => {
  // Turns the tag to lowercase letters
  const lowerTag = tag.toLowerCase();
  // Splitting up the version number
  const splitNum = version.split('.');
  // Turns the split version number into numbers
  splitNum.map(Number);
  // Checks the tag to figure out which number to increment
  if (lowerTag === 'major') {
    splitNum[0]++;
    splitNum[1] = 0;
    splitNum[2] = 0;
  } else if (lowerTag === 'minor') {
    splitNum[1]++;
    splitNum[2] = 0;
  } else if (lowerTag === 'patch') {
    splitNum[2]++;
  }
  // Returns the new version number
  return splitNum.join('.');
};
