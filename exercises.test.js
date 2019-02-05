const assert = require('assert');
const expect = require('chai').expect;
const functions = require('./exercises.mjs');

// describe('isEven', () => {
//   it('should return false to uneven number', () => {
//     const actual = isEven(21);
//     const expected = false;

//     assert.equal(actual, expected);
//   });

//   it('should return true to even number', () => {
//     const actual = isEven(20);
//     const expected = true;

//     assert.equal(actual, expected);
//   });

//   it('should return false to negative uneven number', () => {
//     const actual = isEven(-21);
//     const expected = false;

//     assert.equal(actual, expected);
//   });

//   it('should return true to negative even number', () => {
//     const actual = isEven(-20);
//     const expected = true;

//     assert.equal(actual, expected);
//   });
// });

// describe('countChar', () => {
//   it('should return 2 to "asdgTT"', () => {
//     const actual = countChar('asdgTT', 'T');
//     const expected = 2;

//     assert.equal(actual, expected);
//   });
// });

describe('range', () => {
  it('should return [1, 2, 3, 4, 5] to "(1, 5)"', () => {
    const actual = range(1, 5);
    const expected = [1, 2, 3, 4, 5];

    expect(actual).to.have.members(expected);
  });

  it('should return [1, 3, 5] to "(1, 5, 2)"', () => {
    const actual = range(1, 5, 2);
    const expected = [1, 3, 5];

    expect(actual).to.have.members(expected);
  });
});
