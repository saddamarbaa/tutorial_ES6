/*
  Spread Operator ...
*/

let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

let allArray = [...array1, ...array2];

console.log(array1); /* output:[1, 2, 3, 4] */
console.log(array2); /* output: [5, 6, 7, 8] */
console.log(allArray); /* output:[1,2,3,4,5,6,7,8] */

const numbers = [20, 30, 40];

function sumNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

// console.log(sumNumbers(numbers));
console.log(numbers); /* output:[20, 30, 40]*/
console.log(...numbers); /* output:20 30 40 */
console.log(sumNumbers(...numbers));

let customArray = [1, 2, 3, 4, ...array2, ...array1];
// output: [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4]
console.log(customArray);
