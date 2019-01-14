const assert = require('assert');
const isEven = require('./exercises');

describe('isEven', () => {
  it('should return false to uneven number', () => {
    const actual = isEven(21);
    const expected = false;

    assert.equal(actual, expected);
  });

  it('should return true to even number', () => {
    const actual = isEven(20);
    const expected = true;

    assert.equal(actual, expected);
  });

  it('should return false to negative uneven number', () => {
    const actual = isEven(-21);
    const expected = false;

    assert.equal(actual, expected);
  });

  it('should return true to negative even number', () => {
    const actual = isEven(-20);
    const expected = true;

    assert.equal(actual, expected);
  });
});
