exports.debug = (title, obj) => {
  const ts = new Date();
  const seperator = '\n------------------------------\n';
  require('terminal-colors');

  const outputTERM = seperator.lightCyan + title.magenta.underline + ' ' + obj + '\n' + seperator.lightCyan + ' ' + ts;

  if (process.env.DEBUG) {
    console.warn(outputTERM);
  }
};

exports.bump = (version, bumpType) => {
  let patch;
  let minor;
  let major;

  console.log(version);
  console.log(bumpType);

  // Initializes indicies as an array literal
  const indicies = [];
  // Loop through version and get the index of every .
  for (let i = 0; i < version.length; i++) {
    if (version[i] === '.') {
      // Push the index's of the .'s into indicies
      indicies.push(i);
    }
  }
  // Initializes patch and sets it to anything that comes after the second .
  patch = version.substring(indicies[1] + 1, version.length);
  // Initializes minor and sets it to anything inbetween the .'s'
  minor = version.substring(indicies[0] + 1, indicies[1]);
  // Initializes major and sets it to anything before the first .
  major = version.substring(indicies[0], indicies[0] - version.length);


    // If major is selected reset minor and patch, itterate major
  if (bumpType === 'major') {
    major++;
    minor = 0;
    patch = 0;
      // Else if minor is selected itterate minor
  } else if (bumpType === 'minor') {
    minor++;
    patch = 0;
      // Else if patch is seleceted itterate patch    } else if (bumpType === 'patch') {
    patch++;
  } else {
    console.log('no update');
  }
  version = major + '.' + minor + '.' + patch;
  console.log('New Version: ' + version);
};
