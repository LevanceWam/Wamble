const util = require('../src/util');
const expect = require('chai').expect;
const sinon = require('sinon');
require('mocha-sinon');

describe('Wamble Gamble', () => {
  it('Should be able to console.log', (done) => {
    const loggy = sinon.spy();
    loggy(util.log('I console logged'));
    expect(loggy.callCount).to.equal(1);
    done();
  });

  it('Should be able to console.warn', (done) => {
    const warny = sinon.spy();
    warny(util.warn('I console warned'));
    expect(warny.callCount).to.equal(1);
    done();
  });

  it('Should be able to console.error', (done) => {
    const erry = sinon.spy();
    erry(util.error('I console errored'));
    expect(erry.callCount).to.equal(1);
    done();
  });
});

describe('Version Bumper', () => {
  const number = '2.0.0';
  let realNum;

  it('Should be able to increment the major number', (done) => {
    realNum = util.versBumper(number, 'major');
    expect(realNum).to.be.equal('3.0.0');
    done();
  });

  it('Should be able to increment the minor number', (done) => {
    realNum = util.versBumper(number, 'minor');
    expect(realNum).to.be.equal('2.1.0');
    done();
  });

  it('Should be able to increment the patch number', (done) => {
    realNum = util.versBumper(number, 'patch');
    expect(realNum).to.be.equal('2.0.1');
    done();
  });
});
