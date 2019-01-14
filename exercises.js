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

// function findMin(a, b) {
//   if (a > b) {
//     return b;
//   } else {
//     return a;
//   }
// }

// #5 Recursion (with Mocha test)

// const isEven = num => {
//   if (num === 0) {
//     return true;
//   } else if (num === 1) {
//     return false;
//   } else if (num < 0) {
//     return isEven(-num);
//   } else {
//     return isEven(num - 2);
//   }
// };

// module.exports = isEven;