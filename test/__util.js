const util = require('../src/util');
const expect = require('chai').expect;


describe('Ramble Wamble ', () => {
  it('I should pass, This should read this as a string', (done) => {
    expect(util.output).to.not.equal(null);
    done();
  });
});
