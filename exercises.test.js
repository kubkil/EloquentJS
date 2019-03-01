const assert = require('assert');
const expect = require('chai').expect;
const functions = require('./exercises.mjs');

describe('findMin', () => {
  it('should return 5 to (5, 10)', () => {
    const actual = functions.findMin(5, 10);
    const expected = 5;

    assert.equal(actual, expected);
  });
});

describe('isEven', () => {
  it('should return false to uneven number', () => {
    const actual = functions.isEven(21);
    const expected = false;

    assert.equal(actual, expected);
  });

  it('should return true to even number', () => {
    const actual = functions.isEven(20);
    const expected = true;

    assert.equal(actual, expected);
  });

  it('should return false to negative uneven number', () => {
    const actual = functions.isEven(-21);
    const expected = false;

    assert.equal(actual, expected);
  });

  it('should return true to negative even number', () => {
    const actual = functions.isEven(-20);
    const expected = true;

    assert.equal(actual, expected);
  });
});

describe('countChar', () => {
  it('should return 2 to "asdgTT"', () => {
    const actual = functions.countChar('asdgTT', 'T');
    const expected = 2;

    assert.equal(actual, expected);
  });
});

describe('range', () => {
  it('should return [1, 2, 3, 4, 5] to "(1, 5)"', () => {
    const actual = functions.range(1, 5);
    const expected = [1, 2, 3, 4, 5];

    expect(actual).to.have.members(expected);
  });

  it('should return [1, 3, 5] to "(1, 5, 2)"', () => {
    const actual = functions.range(1, 5, 2);
    const expected = [1, 3, 5];

    expect(actual).to.have.members(expected);
  });

  it('should return [5, 4, 3, 2, 1] to "(5, 1, -1)"', () => {
    const actual = functions.range(5, 1, -1);
    const expected = [5, 4, 3, 2, 1];

    expect(actual).to.have.members(expected);
  });
});

describe('sum', () => {
  it('should return 55 to "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"', () => {
    const actual = functions.sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const expected = 55;

    assert.equal(actual, expected);
  });
});

describe('reverseArray', () => {
  it('should return new array [5, 4, 3, 2, 1] to "[1, 2, 3, 4, 5]"', () => {
    const actual = functions.reverseArray([1, 2, 3, 4, 5]);
    const expected = [5, 4, 3, 2, 1];

    expect(actual).to.have.members(expected);
  });
});

describe('reverseArrayInPlace', () => {
  it('should return the same but reversed array [7, 6, 5, 4, 3, 2, 1] to "[1, 2, 3, 4, 5, 6, 7]"', () => {
    const actual = functions.reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]);
    const expected = [7, 6, 5, 4, 3, 2, 1];

    expect(actual).to.have.members(expected);
  });
});
