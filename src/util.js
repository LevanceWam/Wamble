exports.debug = (title, obj) => {
  const ts = new Date();
  const seperator = '\n------------------------------\n';
  require('terminal-colors');

  const outputTERM = seperator.lightCyan + title.magenta.underline + ' ' + obj + '\n' + seperator.lightCyan + ' ' + ts;

  if (process.env.DEBUG) {
    console.warn(outputTERM);
  }
};
