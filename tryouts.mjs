// #1. Create a function that multiplies a number by itself given number of times
// const power = (base, exponent) => {
//   let result = 1;
//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// };
// power(2, 4);

// #2 Hummus
// const hummus = factor => {
//   const ingredient = (amount, unit, name) => {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit += 's';
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   };
//   ingredient(1, 'can', 'chickpeas');
//   ingredient(0.25, 'cup', 'tahini');
//   ingredient(0.25, 'cup', 'lemon juice');
//   ingredient(1, 'clove', 'garlic');
//   ingredient(2, 'tablespoon', 'olive oil');
//   ingredient(0.5, 'teaspoon', 'cumin');
// };

// #3 Imitate minus
// function minus(a, b) {
//   if (b === undefined) return -a;
//   else return a - b;
// }

// #4 Multiplier closure
// function multiplier(factor) {
//   return number => number * factor;
//   // return function(number) {
//   //   return number * factor;
//   // };
// }

// let twice = multiplier(5);
// // let twice = number => number * 5;
// console.log(twice(2));

// #4 recursion
// function power(base, exponent) {
//   if (exponent === 0) return 1;
//   else return base * power(base, exponent - 1);
// }

// console.log(power(2, 5));

// #5 Write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number
// function findSolution(target) {
//   function find(current, history) {
//     if (current === target) {
//       return history;
//     } else if (current > target) {
//       return null;
//     } else {
//       return (
//         find(current + 5, `(${history} + 5)`) ||
//         find(current * 3, `${history} * 3)`)
//       );
//     }
//   }
//   return find(1, '1');
// }

// findSolution(24);

// #6 write a program that prints two numbers: the numbers of cows
// and chickens on a farm, with the words Cows and Chickens after them and zeros
// padded before both numbers so that they are always three digits long.

// function printFarmInventory(cows, chickens) {
//   let cowString = String(cows);
//   while (cowString.length < 3) {
//     cowString = '0' + cowString;
//   }
//   console.log(`${cowString} Cows`);
//   let chickenString = String(chickens);
//   while (chickenString.length < 3) {
//     chickenString = '0' + chickenString;
//   }
//   console.log(`${chickenString} Chickens`);
// }
// printFarmInventory(7, 11);

// function printZeroPaddedWithLabel(number, label) {
//   let numberString = String(number);
//   while (numberString.length < 3) {
//     numberString = '0' + numberString;
//   }
//   console.log(`${numberString} ${label}`);
// }
// function printFarmInventory(cows, chickens, pigs) {
//   printZeroPaddedWithLabel(cows, 'Cows');
//   printZeroPaddedWithLabel(chickens, 'Chickens');
//   printZeroPaddedWithLabel(pigs, 'Pigs');
// }
// printFarmInventory(7, 11, 3);

// function zeroPad(number, width) {
//   let string = String(number);
//   while (string.length < width) {
//     string = '0' + string;
//   }
//   return string;
// }
// function printFarmInventory(cows, chickens, pigs) {
//   console.log(`${zeroPad(cows, 3)} Cows`);
//   console.log(`${zeroPad(chickens, 3)} Chickens`);
//   console.log(`${zeroPad(pigs, 3)} Pigs`);
// }
// printFarmInventory(7, 16, 3);

// #7 Weresquirrel
// import { journal } from './journal.mjs';

// function addEntry(events, squirrel) {
//   journal.push({ events, squirrel });
// }

// function phi(table) {
//   return (
//     (table[3] * table[0] - table[2] * table[1]) /
//     Math.sqrt(
//       (table[2] + table[3]) *
//         (table[0] + table[1]) *
//         (table[1] + table[3]) *
//         (table[0] + table[2])
//     )
//   );
// }

// function tableFor(event, journal) {
//   let table = [0, 0, 0, 0];
//   for (let i = 0; i < journal.length; i++) {
//     let entry = journal[i],
//       index = 0;
//     if (entry.events.includes(event)) index += 1;
//     if (entry.squirrel) index += 2;
//     table[index] += 1;
//   }
//   return table;
// }

// function journalEvents(journal) {
//   let events = [];
//   for (let entry of journal) {
//     for (let event of entry.events) {
//       if (!events.includes(event)) {
//         events.push(event);
//       }
//     }
//   }
//   return events;
// }

// function max(...numbers) {
//   let result = -Infinity;
//   for (let number of numbers) {
//     if (number > result) result = number;
//   }
//   return result;
// }

// var list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };

// for (let event of journalEvents(journal)) {
//   let correlation = phi(tableFor(event, journal));
//   if (correlation > 0.1 || correlation < -0.1) {
//     console.log(event + ':', correlation);
//   }
// }

// #8 todolist

// let toDoList = [];
// function remember(task) {
//   toDoList.push(task);
// }
// function getTask() {
//   return toDoList.shift();
// }
// function rememberUrgently(task) {
//   toDoList.unshift(task);
// }

// #9 destructuring

// function phi([n00, n01, n10, n11]) {
//   return (
//     (n11 * n00 - n10 * n01) /
//     Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10))
//   );
// }

// const array = [1, 2, 1, 1];

// console.log(phi(array));
