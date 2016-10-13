const util = require('../src/util');
const expect = require('chai').expect;

describe('Wamble Gamble', () => {
  it('I should pass, This should read this as a string', (done) => {
    expect(util.output).to.not.equal(null);
    done();
  });
  util.bump('3.0.0', 'major');
  util.bump('2.1.0', 'minor');
  util.bump('2.0.2', 'patch');
});
