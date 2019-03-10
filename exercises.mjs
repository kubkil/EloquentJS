// #1 Looping a triangle

// let branch = '';
// for (line = 0; line < 8; line++) {
//   branch += '#';
//   console.log(branch);
// }

// #2 FizzBuzz

// for (let i = 1; i < 101; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// #3 Chessboard

// let board = '';
// let size = 8;

// for (let i = 0; i < size; i++) {
//   let line = '';
//   for (let k = 0; k < size; k++) {
//     if ((i + k) % 2 === 0) {
//       line += ' ';
//     } else {
//       line += '#';
//     }
//   }
//   line += '\n';
//   board += line;
// }
// console.log(board);

// #4 Minimum

function findMin(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}

// #5 Recursion

const isEven = num => {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else if (num < 0) {
    return isEven(-num);
  } else {
    return isEven(num - 2);
  }
};

// #6 Bean counting

const countBs = string => {
  let B = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'B') {
      B++;
    }
  }
  return B;
};

const countChar = (string, char) => {
  let charNum = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      charNum++;
    }
  }
  return charNum;
};

// #7 The sum of range

const range = (start, end, step) => {
  let array = [];
  if (step < 0) {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  } else if (step >= 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i < end + 1; i++) {
      array.push(i);
    }
  }
  return array;
};

const sum = arr => {
  let total = 0;
  for (let num of arr) {
    total = total + num;
  }
  return total;
};

// #8 Reversing an array

const reverseArray = arr => {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

const reverseArrayInPlace = arr => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let elem = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = elem;
  }
  return arr;
};

// #9 A list

const arrayToList = arr => {
  let obj = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    obj = {
      value: arr[i],
      rest: obj
    };
  }
  return obj;
};

const arr = [];
const listToArray = obj => {
  for (const key in obj) {
    if (!(typeof obj[key] === 'object')) {
      arr.push(obj[key]);
    } else {
      listToArray(obj[key]);
    }
  }

  return arr;
};

module.exports = {
  findMin,
  isEven,
  countChar,
  range,
  sum,
  reverseArray,
  reverseArrayInPlace,
  arrayToList,
  listToArray
};
