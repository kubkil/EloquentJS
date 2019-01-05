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
function findSolution(target) {
  function find(current, history) {
    if (current === target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `${history} * 3)`)
      );
    }
  }
  return find(1, '1');
}

findSolution(24);
